/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API patch_data_confirm
*/

import tc from './tc';

export const dataConfirmed = (userId, buyerId) => ({
  userId,
  buyerId,
  isDataCompleted: true,
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
    dbTypeData: 'date',
    responseKey: 'updatedAt',
    databaseField: 'updated_at',
  },
];

export const compareDB2 = [
  {
    responseKey: 'isDataCompleted',
    databaseField: 'is_data_completed',
  },
  {
    responseKey: 'userId',
    databaseField: 'user_id',
  },
  {
    responseKey: 'buyerId',
    databaseField: 'buyer_id',
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
