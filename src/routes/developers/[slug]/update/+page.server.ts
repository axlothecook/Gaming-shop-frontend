import type { Load } from "@sveltejs/kit";
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { LINK, SVELTE_URL } from '$env/static/private';

export const load: Load = async ({ params }) => {
  console.log("This is load games function");
  const { slug } = params;

//   console.log('url: ', slug);

  const response = await fetch(`${LINK}/developers/${slug}/update`);
  const responseBody = await response.json();

//   console.log('response: ', responseBody.data);

  if (responseBody.errCode) {
    error(responseBody.errCode, {
      message: responseBody.errBody[0].msg
    });
  };

  return {
    path: responseBody.data.path,
    category: responseBody.data.dev
  };
};

export const actions = {
  default: async ({ request, params }) => {
    console.log('in update game function');

    const { slug } = params;
    // console.log('id:', slug);

    const formData = await request.formData();
    // console.log('formdata: ', formData);

    const response = await fetch(`${LINK}/developers/${slug}/update`, {
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

    redirect(303, `${SVELTE_URL}/developers/${slug}`);
  }
} satisfies Actions;