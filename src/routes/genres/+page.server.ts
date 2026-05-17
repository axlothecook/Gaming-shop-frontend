import type { Load } from "@sveltejs/kit";
import { LINK } from '$env/static/private';
import { error } from "@sveltejs/kit";

export const load: Load = async () => {

  const response = await fetch(`${LINK}/genres`);
  const responseBody = await response.json();


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