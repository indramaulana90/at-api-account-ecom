/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_suppliers
*/

import tc from './tc.SKIP';

export const examplePayload = () => ({
  page: 1,
  perPage: 10,
});

export const negativeCase = [
  {
    desc: tc.negative.invalidPage,
    request: {
      page: 'satu',
    },
  },
  {
    desc: tc.negative.invalidPerPage,
    request: {
      perPage: 'dua',
    },
  },
];

export const compareDB = [
  {
    dbTypeData: 'number',
    responseKey: 'id',
    databaseField: 'seller_id',
  },
  {
    dbTypeData: 'date',
    responseKey: 'createdAt',
    databaseField: 'created_at',
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
