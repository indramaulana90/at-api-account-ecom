/**
* Author      : Fauzan Novaldi Suteja (fauzan.novaldi@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_employee_internal_list
*/

import tc from './tc';

export const FullPayload = (key, lim, ski, sor, sorBy) => ({
  keyword: key,
  limit: lim,
  skip: ski,
  sort: sor,
  sortby: sorBy,
});

export const loopingKeyword = [
  {
    title: tc.negative.getInternalEmployeeInvalidKeyword,
    value: {
      keyword: 3,
    },
  },
  {
    title: tc.negative.getInternalEmployeeWrongKeyword,
    value: {
      keyword: 'ERROR',
    },
  },
];

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
    responseKey: 'email',
    databaseField: 'email',
  },
  {
    responseKey: 'isInternal',
    databaseField: 'is_internal',
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

export const compareDBRoles = [
  {
    dbTypeData: 'string',
    responseKey: 'roles',
    databaseField: 'roles',
  },
];
export const compareDBUserSeller = [
  {
    responseKey: 'status',
    databaseField: 'status',
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
