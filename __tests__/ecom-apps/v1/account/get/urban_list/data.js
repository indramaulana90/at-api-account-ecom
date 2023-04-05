/**
* Author      : Fauzan Novaldi Suteja (fauzan.novaldi@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_urban_list
*/

import tc from './tc';

export const payloadRequired = () => ({
  district: 'BUBON',
});

export const payloadOptional = (key, lim, ski) => ({
  district: 'WOYLA',
  keyword: key,
  limit: lim,
  skip: ski,
});

export const compareDB = [
  {
    dbTypeData: 'number',
    responseKey: 'id',
    databaseField: 'id',
  },
  {
    responseKey: 'urban',
    databaseField: 'urban',
  },
  {
    responseKey: 'zipCode',
    databaseField: 'zip_code',
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
    title: tc.negative.emptyDistrict,
    value: {
      district: '',
    },
  },
  {
    title: tc.negative.nullDistrict,
    value: {
      district: null,
    },
  },
];

export const loopingEmptyArray = [
  {
    title: tc.negative.invalidDistrict,
    value: {
      district: 'NEW YORK',
    },
  },
  {
    title: tc.negative.integerDistrict,
    value: {
      district: 12,
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
