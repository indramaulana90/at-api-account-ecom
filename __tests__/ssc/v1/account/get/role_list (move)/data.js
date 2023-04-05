/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_role_list
*/

import tc from './tc';

export const params = () => ({
  keyword: 'far',
  page: 1,
  perPage: 10,
  sortKey: 'createdAt',
  sortType: 'desc',
});

export const params2 = () => ({
  page: 1,
  perPage: 10,
  sortKey: 'createdAt',
  sortType: 'desc',
});

export const compareDB = [
  {
    dbTypeData: 'number',
    responseKey: 'id',
    databaseField: 'id',
  },
  {
    dbTypeData: 'date',
    responseKey: 'createdAt',
    databaseField: 'created_at',
  },
  {
    responseKey: 'name',
    databaseField: 'name',
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
