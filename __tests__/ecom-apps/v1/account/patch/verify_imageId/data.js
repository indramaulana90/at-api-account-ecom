/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API patch_verify_imageid
*/

import tc from './tc';

export const updateImage = (imageId, type) => ({
  imageId,
  type,
});

export const compareDB = [
  {
    responseKey: 'imageId',
    databaseField: 'image_id',
  },
];

// delete this if not used
export const exampleLoopingError = [
  {
    title: tc.negative.defaultNegative2,
    value: {
      key: 'valueError',
    },
  },
];

export const loopingErrorCookies = [
  {
    title: tc.negative.invalidCookies,
    value: 'error',
  },
  {
    title: tc.negative.nullCookies,
    value: null,
  },
  {
    title: tc.negative.emptyCookies,
    value: '',
  },
];
