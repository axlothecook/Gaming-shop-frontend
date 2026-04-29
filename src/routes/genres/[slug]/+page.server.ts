import type { Load } from "@sveltejs/kit";
import type { Actions } from './$types';
import { LINK } from '$env/static/private';

export const load: Load = async ({ params }) => {
  console.log("This is load genre function");
  const { slug } = params;

  console.log('url: ', slug);

  const response = await fetch(`${LINK}/genres/${slug}`);
  const responseBody = await response.json();

  console.log('response: ', responseBody.data.genre.name);

  return {
    path: responseBody.data.path,
    category: responseBody.data.genre,
    productsArr: responseBody.data.productsArr
  };
};

export const actions = {
  delete: async ({ request }) => {
    const formData = await request.formData();
    console.log('formData: ', formData);

    // const response = await fetch(`${LINK}/genres`);
    // const responseBody = await response.json();

    // console.log('responseBody: ', responseBody.data);

    // return {
    //   gamesData: responseBody.data,
    //   errors: responseBody.data.errors
    // };
  }
} satisfies Actions;