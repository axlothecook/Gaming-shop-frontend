import { LINK } from '$env/static/private';
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
  default: async ({ request }) => {

    const formData = await request.formData();

    const response = await fetch(`${LINK}/developers/new`, {
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

    redirect(303, `/developers/${responseBody.data.gameID}`);
  }
} satisfies Actions;