/**
* Author      : Fauzan Novaldi Suteja (fauzan.novaldi@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_vehicle_accessibilities
*/

import tc from './tc';

export const params = (key) => ({
  keyword: key,
});

export const loopingParameterInvalid = [
  {
    title: tc.negative.keywordNotFound,
    value: {
      keyword: 'bus',
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
