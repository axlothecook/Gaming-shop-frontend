import { LINK, SVELTE_URL } from '$env/static/private';
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
  default: async ({ request }) => {
    console.log('in create genre function');

    const formData = await request.formData();
    // console.log('formdata: ', formData);

    const response = await fetch(`${LINK}/genres/new`, {
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

    redirect(303, `${SVELTE_URL}/genres/${responseBody.data.gameID}`);
  }
} satisfies Actions;