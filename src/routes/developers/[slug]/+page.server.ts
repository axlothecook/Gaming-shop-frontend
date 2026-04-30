import type { Load } from "@sveltejs/kit";
import type { Actions } from './$types';
import { LINK, SVELTE_URL } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
  console.log("This is load dev function");
  const { slug } = params;

  console.log('url: ', slug);

  const response = await fetch(`${LINK}/developers/${slug}`);
  const responseBody = await response.json();

//   console.log('response: ', responseBody.data);

  return {
    path: responseBody.data.path,
    category: responseBody.data.dev,
    productsArr: responseBody.data.productsArr
  };
};

export const actions = {
  delete: async ({params}) => {

    const { slug } = params;
    console.log('dlt dev request: ', params);

    const response = await fetch(`${LINK}/developers/${slug}/delete`);
    const responseBody = await response.json();

    console.log('responseBody: ', responseBody);

    redirect(303, `${SVELTE_URL}/developers`);
  } 
} satisfies Actions;