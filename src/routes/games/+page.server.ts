import type { Load } from "@sveltejs/kit";
import { LINK } from '$env/static/private';

export const load: Load = async ({ url }) => {
  console.log("This is load games function");
  const response = (url.search.length > 0) 
    ? await fetch(`${LINK}/games${url.search}`) 
    : await fetch(`${LINK}/games`);
  const responseBody = await response.json();

  return {
    gamesData: responseBody.data,
    errors: responseBody.data.errors
  };
};