import type { Load } from "@sveltejs/kit";
import type { Actions } from './$types';
import { LINK, SVELTE_URL } from '$env/static/private';
import { error, fail, redirect } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
  const { slug } = params;


  const response = await fetch(`${LINK}/genres/${slug}`);
  const responseBody = await response.json();


  if (responseBody.errCode) {
    error(responseBody.errCode, {
      message: responseBody.errBody[0].msg
    });
  };

  return {
    path: responseBody.data.path,
    category: responseBody.data.genre,
    productsArr: responseBody.data.productsArr,
    numberOfGames: responseBody.data.numberOfGames
  };
};

export const actions = {
  delete: async ({params}) => {

    const { slug } = params;

    const response = await fetch(`${LINK}/genres/${slug}/delete`);
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

    redirect(303, `${SVELTE_URL}/genres`);
  } 
} satisfies Actions;