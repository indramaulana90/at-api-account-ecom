/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_complete_data
*/

import tc from './tc';

export const compareDbUsers = [
  {
    responseKey: 'fullName',
    databaseField: 'name',
  },
  {
    responseKey: 'idImageUrl',
    databaseField: 'id_image_url',
  },
  {
    responseKey: 'taxImageUrl',
    databaseField: 'tax_image_url',
  },
  {
    responseKey: 'selfieImageUrl',
    databaseField: 'selfie_image_url',
  },
  {
    responseKey: 'idNo',
    databaseField: 'id_no',
  },
  {
    responseKey: 'taxNo',
    databaseField: 'tax_no',
  },
  {
    responseKey: 'email',
    databaseField: 'email',
  },
];

export const compareDbBuyers = [
  {
    responseKey: 'buyerCode',
    databaseField: 'code',
  },
  {
    responseKey: 'buyerName',
    databaseField: 'name',
  },
  {
    responseKey: 'buyerPhoneNo',
    databaseField: 'phone_no',
  },
  {
    responseKey: 'imageUrl',
    databaseField: 'image_url',
  },
  {
    responseKey: 'address',
    databaseField: 'address',
  },
  {
    responseKey: 'noteAddress',
    databaseField: 'note_address',
  },
  {
    dbTypeData: 'number',
    responseKey: 'vehicleAccessibilityAmount',
    databaseField: 'vehicle_accessibility_amount',
  },
  {
    dbTypeData: 'number',
    responseKey: 'latitude',
    databaseField: 'latitude',
  },
  {
    dbTypeData: 'number',
    responseKey: 'longitude',
    databaseField: 'longitude',
  },
];

export const compareDbBuyers2 = [
  {
    dbTypeData: 'number',
    responseKey: 'id',
    databaseField: 'vehicle_accessibility_id',
  },
];

export const compareDbUserBuyer = [
  {
    responseKey: 'accountType',
    databaseField: 'account_type',
  },
  {
    responseKey: 'isDataCompleted',
    databaseField: 'is_data_completed',
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
