import type { Load } from "@sveltejs/kit";
import { LINK, SVELTE_URL } from '$env/static/private';
import { fail, redirect, error } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load: Load = async () => {
  console.log("This is load new game function");

  const response = await fetch(`${LINK}/games/new`);
  const responseBody = await response.json();

//   console.log('responseBody: ', responseBody);

  if (responseBody.errCode) {
    error(500, {
      message: responseBody.errBody[0].msg
    });
  };

  return {
    title: responseBody.data.title,
    genresArr: responseBody.data.genreArr,
    devsArr: responseBody.data.devArr
  };
};

export const actions = {
  default: async ({ request }) => {
    console.log('in create game function');

    const formData = await request.formData();
    // console.log('formdata: ', formData);

    const response = await fetch(`${LINK}/games/new`, {
      method: 'POST',
      body: formData
    });
    const responseBody = await response.json();

    // console.log('responseBody: ', responseBody);

    if (responseBody.errCode) {
      if (responseBody.errCode === 500) {
        error(500, {
          message: responseBody.errBody[0].msg
        });
      } else {
        return fail(responseBody.errCode, {
          error: {
            type: responseBody.errType,
            body: responseBody.errBody,
            code: responseBody.errCode,
          }
        });
      };
    };

    redirect(303, `${SVELTE_URL}/games/${responseBody.data.gameID}`);
  }
} satisfies Actions;