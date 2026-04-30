import { LINK, SVELTE_URL } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
  default: async ({ request }) => {
    console.log('in create dev function');

    const formData = await request.formData();
    console.log('formdata: ', formData);

    const response = await fetch(`${LINK}/developers/new`, {
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

    redirect(303, `${SVELTE_URL}/developers/${responseBody.data.gameID}`);
  }
} satisfies Actions;