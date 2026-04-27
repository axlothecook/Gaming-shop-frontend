import type { Load } from "@sveltejs/kit";
import { LINK } from '$env/static/private';

export const load: Load = async () => {

  console.log("This is load hp function");

  const response = await fetch(`${LINK}`);
  const responseBody = await response.json();

  // console.log('responseBody: ', responseBody.data[0]);

  return {
    navbarLinks: responseBody.data
  };
};