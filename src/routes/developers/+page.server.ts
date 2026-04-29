import type { Load } from "@sveltejs/kit";
import { LINK } from '$env/static/private';

export const load: Load = async () => {
  console.log("This is load dev function");

//   const response = await fetch(`${LINK}/developers/${slug}`);
  const response = await fetch(`${LINK}/developers`);
  const responseBody = await response.json();

//   console.log('response developers: ', responseBody.data.title);

  //make if error () then return fail

  return {
    title: responseBody.data.title,
    path: responseBody.data.path,
    array: responseBody.data.arr
  };
};