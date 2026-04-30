import type { Load } from "@sveltejs/kit";
import { LINK } from '$env/static/private';

export const load: Load = async ({ url }) => {
  console.log("This is load game function");

  const response = await fetch(`${LINK}/search${url.search}`);
  const responseBody = await response.json();

  console.log('response: ', responseBody.data);

  // set up backfall

  return {
    productsArr: responseBody.data.productsArr
  };
};