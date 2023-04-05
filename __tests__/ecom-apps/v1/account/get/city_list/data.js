/**
* Author      : Fauzan Novaldi Suteja (fauzan.novaldi@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_city_list
*/

import tc from './tc';

export const payloadRequired = () => ({
  provinceId: 11,
});

export const payloadOptional = (key, lim, ski) => ({
  provinceId: 11,
  keyword: key,
  limit: lim,
  skip: ski,
});

export const payloadInvalid = (key) => ({
  provinceId: key,
});

export const loopingKeyword = [
  {
    title: tc.positive.emptyKeyword,
    value: {
      keyword: '',
    },
  },
  {
    title: tc.positive.nullKeyword,
    value: {
      keyword: null,
    },
  },
];

export const loopingBadRequest = [
  {
    title: tc.negative.emptyProvinceId,
    value: {
      provinceId: '',
    },
  },
  {
    title: tc.negative.nullProvinceId,
    value: {
      provinceId: null,
    },
  },
];

export const compareDB = [
  {
    responseKey: 'city',
    databaseField: 'city',
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
