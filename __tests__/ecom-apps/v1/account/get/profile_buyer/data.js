/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_profile_buyer
*/

import tc from './tc';

export const compareDBownerData = [
  {
    responseKey: 'name',
    databaseField: 'name',
  },
  {
    responseKey: 'email',
    databaseField: 'email',
  },
  {
    responseKey: 'mobilePhone',
    databaseField: 'mobile_phone',
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
    responseKey: 'taxImageUrl',
    databaseField: 'tax_image_url',
  },
  {
    responseKey: 'selfieImageUrl',
    databaseField: 'selfie_image_url',
  },
  {
    responseKey: 'selfieImageUrl',
    databaseField: 'selfie_image_url',
  },
];

export const compareDBbuyerData = [
  {
    responseKey: 'code',
    databaseField: 'code',
  },
  {
    responseKey: 'name',
    databaseField: 'name',
  },
  {
    responseKey: 'phoneNo',
    databaseField: 'phone_no',
  },
  {
    responseKey: 'imageUrl',
    databaseField: 'image_url',
  },
  {
    responseKey: 'largeArea',
    databaseField: 'large_area',
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
