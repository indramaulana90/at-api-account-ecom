/**
* Author      : Fauzan Novaldi Suteja (fauzan.novaldi@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_banks
*/

import tc from './tc';

export const payloadEmpty = () => ({});

export const compareDB = [
  {
    dbTypeData: 'number',
    responseKey: 'id',
    databaseField: 'id',
  },
  {
    responseKey: 'name',
    databaseField: 'display_name',
  },
];

export const loopingParameter = [
  {
    title: tc.positive.getWithParamBca,
    value: {
      keyword: 'BCA',
    },
  },
  {
    title: tc.positive.getWithParamBni,
    value: {
      keyword: 'BNI',
    },
  },
  {
    title: tc.positive.getWithParamBri,
    value: {
      keyword: 'BRI',
    },
  },
  {
    title: tc.positive.getWithParamMandiri,
    value: {
      keyword: 'Mandiri',
    },
  },
];

export const loopingParameterInvalid = [
  {
    title: tc.negative.paramInteger,
    value: {
      keyword: 1,
    },
  },
  {
    title: tc.negative.paramNotFound,
    value: {
      keyword: 'BJB',
    },
  },
];

export const loopingParameterEmptyNull = [
  {
    title: tc.positive.paramNull,
    value: {
      keyword: null,
    },
  },
  {
    title: tc.positive.paramEmpty,
    value: {
      keyword: '',
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
