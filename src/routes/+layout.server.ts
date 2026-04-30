import type { Load } from "@sveltejs/kit";
import { LINK } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load: Load = async () => {

  const response = await fetch(`${LINK}`);
  const responseBody = await response.json();

  // console.log('layout: ', responseBody);

  if (responseBody.errCode) {
    error(500, {
      message: responseBody.errBody[0].msg
    });
  };

  return {
    navbarLinks: responseBody.data
  };
};