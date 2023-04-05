/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API patch_complete_data_buyer
*/

import tc from './tc';

export const update = () => ({
  user: {
    name: 'Updated Name from ATAPI',
    imageId: 'https://sinbad.co.id/idImageTestUpdate.jpg',
    taxImageUrl: 'https://sinbad.co.id/taxImageTestUpdate.jpg',
    selfieImageUrl: 'https://sinbad.co.id/selfieImageTestUpdate.jpg',
    idNo: '9999171722221111',
    taxNo: '882999991122222',
    email: 'atapiCompleteBuyer@mail.com',
  },
  buyer: {
    name: 'Store Name Updated',
    phoneNo: '02291818666',
    imageUrl: 'https://sinbad.co.id/imageTestUpdate.jpg',
    address: 'Jl. Test Update Address 4, Testing ATAPI',
    noteAddress: 'dekat jenkins',
    vehicleAccessibilityId: 2,
    vehicleAccessibilityAmount: 1,
    longitude: '102.093',
    latitude: '-32.32',
    locationId: '621ddac7a34d59c237b4a4d6',
  },
});

export const compareDBUser = [
  {
    responseKey: 'name',
    databaseField: 'name',
  },
  {
    responseKey: 'imageId',
    databaseField: 'image_id',
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

export const compareDBBuyer = [
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
    responseKey: 'address',
    databaseField: 'address',
  },
  {
    responseKey: 'noteAddress',
    databaseField: 'note_address',
  },
  {
    responseKey: 'vehicleAccessibilityId',
    databaseField: 'vehicle_accessibility_id',
  },
  {
    responseKey: 'vehicleAccessibilityAmount',
    databaseField: 'vehicle_accessibility_amount',
  },
  {
    responseKey: 'latitude',
    databaseField: 'latitude',
  },
  {
    responseKey: 'longitude',
    databaseField: 'longitude',
  },
  {
    responseKey: 'locationId',
    databaseField: 'location_id',
  },
];

export const negativeCaseUser = [
  {
    title: tc.negative.invalidName,
    value: {
      name: 22,
    },
  },
  {
    title: tc.negative.invalidIdImage,
    value: {
      idImageUrl: 1,
    },
  },
  {
    title: tc.negative.invalidTaxImage,
    value: {
      taxImageUrl: 3,
    },
  },
  {
    title: tc.negative.invalidSelfieImage,
    value: {
      selfieImageUrl: 4,
    },
  },
  {
    title: tc.negative.invalidIdNo,
    value: {
      idNo: 3819362626383838,
    },
  },
  {
    title: tc.negative.idNo15Char,
    value: {
      idNo: '111155559999333',
    },
  },
  {
    title: tc.negative.idNo17Char,
    value: {
      idNo: '11114444999955555',
    },
  },
  {
    title: tc.negative.invalidTaxNo,
    value: {
      taxNo: 111155559999333,
    },
  },
  {
    title: tc.negative.taxNo14Char,
    value: {
      taxNo: '22225555111166',
    },
  },
  {
    title: tc.negative.taxNo16Char,
    value: {
      taxNo: '2222555511116666',
    },
  },
  {
    title: tc.negative.invalidEmail,
    value: {
      email: 'ATAPI test',
    },
  },
];

export const negativeCaseBuyer = [
  {
    title: tc.negative.invalidStoreName,
    value: {
      name: 22,
    },
  },
  {
    title: tc.negative.invalidStorePhone,
    value: {
      phoneNo: 1,
    },
  },
  {
    title: tc.negative.invalidStoreImage,
    value: {
      imageUrl: 4,
    },
  },
  {
    title: tc.negative.invalidStoreAddress,
    value: {
      address: [1],
    },
  },
  {
    title: tc.negative.invalidStoreNoteAdd,
    value: {
      noteAddress: {},
    },
  },
  {
    title: tc.negative.invalidVehicleAccId,
    value: {
      vehicleAccessibilityId: '1',
    },
  },
  {
    title: tc.negative.invalidVehicleAccAmo,
    value: {
      vehicleAccessibilityAmount: true,
    },
  },
  {
    title: tc.negative.vehAccAmo5,
    value: {
      vehicleAccessibilityAmount: 5,
    },
  },
  {
    title: tc.negative.invalidLatitude,
    value: {
      latitude: 'test',
    },
  },
  {
    title: tc.negative.invalidLongitude,
    value: {
      longitude: 'test',
    },
  },
  {
    title: tc.negative.invalidLocationId,
    value: {
      locationId: 3,
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
