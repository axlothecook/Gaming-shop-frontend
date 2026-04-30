import type { Load } from "@sveltejs/kit";
import { LINK } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load: Load = async () => {

  console.log("This is load hp function");

  const response = await fetch(`${LINK}`);
  const responseBody = await response.json();

  console.log('responseBody: ', responseBody);

  // if (responseBody.errCode) {
  //   if (responseBody.errCode === 500) {
  //     error(500, {
  //       message: responseBody.errBody.msg,
  //       code: responseBody.errCode
  //     })
  //   } else {
  //     return {
  //       errorType: responseBody.errType,
  //       errorBody: responseBody.errBody,
  //       errorCode: responseBody.errCode,
  //     }
  //     // const errors = errorResponse(responseBody.errType, responseBody.errCode, responseBody.errBody);
  //   }
  // } 

  // return {
  //   navbarLinks: responseBody.data
  // };
};

// const errorResponse = (type: string, code: number, msgArray: object[]) => {
//   switch(type) {
//     case 'Duplicate Item':

//   }
//   if (type === 'Multer') {
//     const file = formData.get('file');
//     return fail(code, { file, incorrect: true });
//   } else if (type === 'Validation') {
//     const arr = responseBody.errBody;
//     return fail(code, { arr, incorrect: true });
//   } else if (type === 'ID') {
//     return fail(code, { slug, incorrect: true });
//   } else console.log('unindentified error while updating the game');
// }