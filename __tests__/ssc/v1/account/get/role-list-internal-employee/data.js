/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_role-list-internal-employee
*/

import tc from './tc';

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
];

export const LoopingErrorPlatform = [
  {
    title: tc.negative.invalidPlatform,
    value: 'error',
  },
  {
    title: tc.negative.nullPlatform,
    value: null,
  },
  {
    title: tc.negative.emptyPlatform,
    value: '',
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
