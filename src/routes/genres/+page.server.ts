import type { Load } from "@sveltejs/kit";
import { LINK } from '$env/static/private';

export const load: Load = async () => {
  console.log("This is load genre function");

//   const response = await fetch(`${LINK}/genres/${slug}`);
  const response = await fetch(`${LINK}/genres`);
  const responseBody = await response.json();

  console.log('response genre: ', responseBody.data.path);

  //make if error () then return fail

  return {
    title: responseBody.datatitle,
    path: responseBody.data.path,
    array: responseBody.data.arr
  };
};