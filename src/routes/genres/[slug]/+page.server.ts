import type { Load } from "@sveltejs/kit";
import type { Actions } from './$types';
import { LINK, SVELTE_URL } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';

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
  delete: async ({params}) => {

    const { slug } = params;
    console.log('dlt genre request: ', params);

    const response = await fetch(`${LINK}/genres/${slug}/delete`);
    const responseBody = await response.json();

    console.log('responseBody: ', responseBody);

    redirect(303, `${SVELTE_URL}/genres`);
  } 
} satisfies Actions;