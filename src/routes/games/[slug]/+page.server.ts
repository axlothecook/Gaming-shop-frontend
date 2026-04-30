import type { Load } from "@sveltejs/kit";
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { LINK, SVELTE_URL } from '$env/static/private';

export const load: Load = async ({ params }) => {
  console.log("This is load game function");
  const { slug } = params;

  // console.log('url: ', slug);

  const response = await fetch(`${LINK}/games/${slug}`);
  const responseBody = await response.json();

  // console.log('response: ', responseBody);

  return {
    product: responseBody.data.product,
    errors: responseBody.data.errors
  };
};

export const actions = {
  delete: async ({params}) => {

    const { slug } = params;
    console.log('dlt game request: ', params);

    const response = await fetch(`${LINK}/games/${slug}/delete`);
    const responseBody = await response.json();

    console.log('responseBody: ', responseBody);

    redirect(303, `${SVELTE_URL}/games`);
  } 
} satisfies Actions;