/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API patch_edit_user
*/

import tc from './tc';

export const body = () => ({
  roleId: 2,
});

export const idUser = 1666;

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

// delete this if not used
export const exampleLoopingError = [
  {
    title: tc.negative.defaultNegative2,
    value: {
      key: 'valueError',
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
