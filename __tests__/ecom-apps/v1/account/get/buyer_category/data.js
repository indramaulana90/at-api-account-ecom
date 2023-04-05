/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_buyer_category
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
    responseKey: 'slug',
    databaseField: 'slug',
  },
  {
    responseKey: 'description',
    databaseField: 'description',
  },
];

export const compareDbDate = [
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

export const loopingErrorPlatform = [
  {
    title: tc.negative.invalidXplatform,
    value: 'error',
  },
  {
    title: tc.negative.nullXplatform,
    value: null,
  },
  {
    title: tc.negative.emptyXplatform,
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
