import type { Load } from "@sveltejs/kit";
import type { Actions } from './$types';
import { fail, error, redirect } from '@sveltejs/kit';
import { LINK } from '$env/static/private';

export const load: Load = async ({ params }) => {
  const { slug } = params;


  const response = await fetch(`${LINK}/games/${slug}`);
  const responseBody = await response.json();


  if (responseBody.errCode) {
    error(responseBody.errCode, {
      message: responseBody.errBody[0].msg
    });
  };

  return {
    product: responseBody.data.product
  };
};

export const actions = {
  delete: async ({params}) => {

    const { slug } = params;

    const response = await fetch(`${LINK}/games/${slug}/delete`);
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

    redirect(303, '/games');
  } 
} satisfies Actions;