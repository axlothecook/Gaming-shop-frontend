import type { Load } from "@sveltejs/kit";
import { LINK } from '$env/static/private';
import { error } from '@sveltejs/kit';
import type { ErrorObject } from '../../app';

export const load: Load = async ({ url }) => {

  const response = await fetch(`${LINK}/search${url.search}`);
  const responseBody = await response.json();


  if (responseBody.errCode) {
    if (responseBody.errCode === 500) {
      error(500, {
        message: responseBody.errBody[0].msg
      });
    } else {
      const error: ErrorObject = {
        type: responseBody.errType,
        body: responseBody.errBody,
        code: responseBody.errCode,
      }
      return { error };
    };
  };
  
  return {
    productsArr: responseBody.data.productsArr 
  };
};