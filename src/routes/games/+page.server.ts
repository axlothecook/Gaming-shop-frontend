import type { Load } from "@sveltejs/kit";
import { LINK } from '$env/static/private';
import { error } from "@sveltejs/kit";

export const load: Load = async ({ url }) => {
  console.log("This is load games function");
  const response = (url.search.length > 0) 
    ? await fetch(`${LINK}/games${url.search}`) 
    : await fetch(`${LINK}/games`);
  const responseBody = await response.json();

  console.log('parent page: ', responseBody);

  if (responseBody.errCode) {
    error(500, {
      message: responseBody.errBody[0].msg
    });
  };

  return {
    gamesData: responseBody.data,
    errors: responseBody.data.errors
  };
};