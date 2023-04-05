/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API get_buyer_location
*/

import tc from './tc';

export const compareDBBuyer = [
  {
    dbTypeData: 'number',
    responseKey: 'buyerId',
    databaseField: 'id',
  },
  {
    responseKey: 'buyerName',
    databaseField: 'name',
  },
  {
    responseKey: 'longitude',
    databaseField: 'longitude',
  },
  {
    responseKey: 'latitude',
    databaseField: 'latitude',
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
    responseKey: 'locationId',
    databaseField: 'location_id',
  },
];

export const compareDBlocation = [
  {
    responseKey: 'province',
    databaseField: 'province',
  },
  {
    responseKey: 'city',
    databaseField: 'city',
  },
  {
    responseKey: 'district',
    databaseField: 'district',
  },
  {
    responseKey: 'urban',
    databaseField: 'urban',
  },
  {
    responseKey: 'zipCode',
    databaseField: 'postalcode',
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
