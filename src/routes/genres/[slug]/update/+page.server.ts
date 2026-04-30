import type { Load } from "@sveltejs/kit";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { LINK, SVELTE_URL } from '$env/static/private';

export const load: Load = async ({ params }) => {
  console.log("This is load games function");
  const { slug } = params;

//   console.log('url: ', slug);

  const response = await fetch(`${LINK}/genres/${slug}/update`);
  const responseBody = await response.json();

//   console.log('response: ', responseBody.data);

  return {
    path: responseBody.data.path,
    category: responseBody.data.genre
  };
};

export const actions = {
  default: async ({ request, params }) => {
    console.log('in update game function');

    const { slug } = params;
    // console.log('id:', slug);

    const formData = await request.formData();
    // console.log('formdata: ', formData);

    const response = await fetch(`${LINK}/genres/${slug}/update`, {
      method: 'POST',
      body: formData
    });
    const responseBody = await response.json();
    console.log('responseBody: ', responseBody);

    if (responseBody.errType) {
    //   console.error(responseBody.errMsg);
    //   console.log(responseBody.errBody);

      if (responseBody.errType === 'Multer') {
        const file = formData.get('file');
        return fail(responseBody.errCode, { file, incorrect: true });
      } else if (responseBody.errType === 'Validation') {
        const arr = responseBody.errBody;
        return fail(responseBody.errCode, { arr, incorrect: true });
      } else if (responseBody.errType === 'ID') {
        return fail(responseBody.errCode, { slug, incorrect: true });
      } else console.log('unindentified error while updating the game');
    };

    redirect(303, `${SVELTE_URL}/genres/${slug}`);
  }
} satisfies Actions;