import type { Load } from "@sveltejs/kit";
import { LINK } from '$env/static/private';
import { error } from "@sveltejs/kit";

export const load: Load = async () => {
  console.log("This is load genre function");

  const response = await fetch(`${LINK}/genres`);
  const responseBody = await response.json();

  console.log('response genre: ', responseBody.data.path);

  if (responseBody.errCode) {
    error(500, {
      message: responseBody.errBody[0].msg
    });
  };

  return {
    title: responseBody.data.title,
    path: responseBody.data.path,
    array: responseBody.data.arr
  };
};