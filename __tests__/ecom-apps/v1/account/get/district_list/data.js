/**
* Author      : Fauzan Novaldi Suteja (fauzan.novaldi@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_district_list
*/

import tc from './tc';

export const paramDefault = () => ({});

export const payloadRequired = () => ({
  city: 'ACEH BARAT',
});

export const payloadOptional = (key, lim, ski) => ({
  city: 'ACEH BARAT',
  keyword: key,
  limit: lim,
  skip: ski,
});

export const compareDB = [
  {
    responseKey: 'district',
    databaseField: 'district',
  },
];

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
    title: tc.negative.emptyCity,
    value: {
      city: '',
    },
  },
  {
    title: tc.negative.nullCity,
    value: {
      city: null,
    },
  },
];

export const loopingEmptyArray = [
  {
    title: tc.negative.invalidCity,
    value: {
      city: 'NEW YORK',
    },
  },
  {
    title: tc.negative.integerCity,
    value: {
      city: 1,
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
