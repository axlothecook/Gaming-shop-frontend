import type { Load } from "@sveltejs/kit";
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { LINK } from '$env/static/private';

export const load: Load = async ({ params }) => {
  const { slug } = params;


  const response = await fetch(`${LINK}/genres/${slug}/update`);
  const responseBody = await response.json();


  if (responseBody.errCode) {
    error(responseBody.errCode, {
      message: responseBody.errBody[0].msg
    });
  };

  return {
    path: responseBody.data.path,
    category: responseBody.data.genre
  };
};

export const actions = {
  default: async ({ request, params }) => {

    const { slug } = params;

    const formData = await request.formData();
    const response = await fetch(`${LINK}/genres/${slug}/update`, {
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

    redirect(303, `/genres/${slug}`);
  }
} satisfies Actions;