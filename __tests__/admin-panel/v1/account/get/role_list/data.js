/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_role_list
*/

import tc from './tc';

export const params = () => ({
  page: 1,
  perPage: 5,
  keyword: 'test',
  sortKey: 'createdAt',
  sortType: 'desc',
});

export const paramsPage = () => ({
  page: 2,
});

export const paramsPerPage = () => ({
  perPage: 3,
});

export const paramsKeyword = () => ({
  keyword: 'test',
});

export const paramsSortKey = () => ({
  sortKey: 'createdAt',
});

export const paramsSortType = () => ({
  sortType: 'desc',
});

export const compareDB = [
  {
    dbTypeData: 'number',
    responseKey: 'id',
    databaseField: 'id',
  },
  {
    responseKey: 'name',
    databaseField: 'name',
  },
  {
    responseKey: 'description',
    databaseField: 'description',
  },
  {
    dbTypeData: 'date',
    responseKey: 'createdAt',
    databaseField: 'created_at',
  },
  {
    dbTypeData: 'date',
    responseKey: 'updatedAt',
    databaseField: 'updated_at',
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
