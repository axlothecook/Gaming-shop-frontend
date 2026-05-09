import type { Load } from "@sveltejs/kit";
import { fail, redirect, error } from '@sveltejs/kit';
import type { Actions } from './$types';
import { LINK, SVELTE_URL } from '$env/static/private';

export const load: Load = async ({ params }) => {
  const { slug } = params;

  const response = await fetch(`${LINK}/games/${slug}/update`);
  const responseBody = await response.json();

//   console.log('response: ', responseBody);

  if (responseBody.errCode) {
    error(responseBody.errCode, {
      message: responseBody.errBody[0].msg
    });
  };

  return {
    product: responseBody.data.game,
    genresArray: responseBody.data.genresArray,
    devsArray: responseBody.data.devsArray
  };
};

export const actions = {
  default: async ({ request, params }) => {
    console.log('in update game function');

    const { slug } = params;

    const formData = await request.formData();
    // console.log('formdata: ', formData);

    const response = await fetch(`${LINK}/games/${slug}/update`, {
      method: 'POST',
      body: formData
    });
    const responseBody = await response.json();

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

    // console.log('responseBody: ', responseBody);
    redirect(303, `${SVELTE_URL}/games/${slug}`);
  }
} satisfies Actions;