/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API patch_edit_role
*/

import tc from './tc';

export const body = () => ({
  id: 160,
  name: 'Test Update Role',
  description: 'Test Update Role',
  capabilities: {
    14: [
      'view',
      'export',
    ],
  },
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
