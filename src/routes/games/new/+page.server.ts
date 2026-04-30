import type { Load } from "@sveltejs/kit";
import { LINK, SVELTE_URL } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load: Load = async () => {
  console.log("This is load new game function");

  const response = await fetch(`${LINK}/games/new`);
  const responseBody = await response.json();

//   console.log('responseBody: ', responseBody);

  return {
    title: responseBody.data.title,
    genresArr: responseBody.data.genreArr,
    devsArr: responseBody.data.devArr,
  };
};

export const actions = {
  default: async ({ request }) => {
    console.log('in create game function');

    const formData = await request.formData();
    console.log('formdata: ', formData);

    const response = await fetch(`${LINK}/games/new`, {
      method: 'POST',
      body: formData
    });
    const responseBody = await response.json();

    console.log('responseBody: ', responseBody);

    // when copying error handlings make sure slug is present if neccessary, if no slug, then remove it

    if (responseBody.errType) {
      console.error(responseBody.errMsg);
      console.log(responseBody.errBody);

    //   if (responseBody.errType === 'Multer') {
    //     const file = formData.get('file');
    //     return fail(responseBody.errCode, { file, incorrect: true });
    //   } else if (responseBody.errType === 'Validation') {
    //     const arr = responseBody.errBody;
    //     return fail(responseBody.errCode, { arr, incorrect: true });
    //   } else if (responseBody.errType === 'ID') {
    //     return fail(responseBody.errCode, { slug, incorrect: true });
    //   } else console.log('unindentified error while updating the game');
    };

    redirect(303, `${SVELTE_URL}/games/${responseBody.data.gameID}`);
  }
} satisfies Actions;