import type { Load } from "@sveltejs/kit";
import type { Actions } from './$types';
import { fail, error, redirect } from '@sveltejs/kit';
import { LINK, SVELTE_URL } from '$env/static/private';

export const load: Load = async ({ params }) => {
  console.log("This is load game function");
  const { slug } = params;

  // console.log('url: ', slug);

  const response = await fetch(`${LINK}/games/${slug}`);
  const responseBody = await response.json();

  // console.log('response id: ', responseBody);

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
    // console.log('dlt game request: ', params);

    const response = await fetch(`${LINK}/games/${slug}/delete`);
    const responseBody = await response.json();

    // console.log('responseBody DELETE: ', responseBody);

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

    redirect(303, `${SVELTE_URL}/games`);
  } 
} satisfies Actions;