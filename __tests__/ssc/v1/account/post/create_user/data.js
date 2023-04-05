/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API post_create_user
*/

import tc from './tc';

export const body = () => (
  {
    name: 'farhad test',
    email: 'farhadtestuser1@sinbad.co.id',
    roleId: 2,
  }
);

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
