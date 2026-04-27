import type { Load } from "@sveltejs/kit";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { LINK, SVELTE_URL } from '$env/static/private';

export const load: Load = async ({ params }) => {
  console.log("This is load games function");
  const { slug } = params;

//   console.log('url: ', slug);

  const response = await fetch(`${LINK}/games/${slug}/update`);
  const responseBody = await response.json();

//   console.log('response: ', responseBody);

  return {
    product: responseBody.data.game,
    genresArray: responseBody.data.genresArray,
    devsArray: responseBody.data.devsArray,
    errors: responseBody.data.errors
  };
};

export const actions = {
  default: async ({ request, params }) => {
    console.log('in update game function');

    const formData = await request.formData();
    console.log('formdata: ', formData);

    const data = {
      name: formData.get('name'),
      price: formData.get('price'),
      rating: formData.get('rating'),
      // file: formData.get('file'),
      description: formData.get('description'),
      genre: formData.get('genre'),
      dev: formData.get('dev')
    };


    // console.log('data: ', data);

    let fileVar = formData.get('file');
    console.log('file: ', fileVar);

    const response = await fetch(`${LINK}/games/${params.slug}/update`, {
      method: 'POST',
      // multipart/form-data
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      // credentials: 'include',
      body: fileVar
    });
    const responseBody = await response.json();

    // if (responseBody.errType) {
    //   console.error(responseBody.errMsg);
    //   console.log(responseBody.errBody);

    //   if (responseBody.errType === 'Multer') {
    //     const file = formData.get('file');
    //     return fail(responseBody.errCode, { file, incorrect: true });
    //   } else if (responseBody.errType === 'Validation') {
    //     const arr = responseBody.errBody;
    //     return fail(responseBody.errCode, { arr, incorrect: true });
    //   } else if (responseBody.errType === 'ID') {
    //     const id = params.slug;
    //     return fail(responseBody.errCode, { id, incorrect: true });
    //   } else console.log('unindentified error while updating the game');
    // };

    console.log('responseBody: ', responseBody);
    redirect(303, `${SVELTE_URL}/games/${params.slug}/update`);
  }
} satisfies Actions;