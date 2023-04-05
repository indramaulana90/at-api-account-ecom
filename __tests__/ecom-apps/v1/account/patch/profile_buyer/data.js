/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Data on API patch_profile_buyer
*/

import tc from './tc';

export const positiveCaseUser = [
  {
    title: tc.positive.profilePic,
    value: {
      imageUrl: 'https://sinbad.co.id/profileImageUpdated.jpg',
    },
  },
  {
    title: tc.positive.userName,
    value: {
      name: 'Updated User Name from ATAPI Update Profile-Buyer',
    },
  },
  {
    title: tc.positive.idNo,
    value: {
      idNo: '2244882222777711',
    },
  },
  {
    title: tc.positive.selfieImageUrl,
    value: {
      selfieImageUrl: 'https://sinbad.co.id/selfieImageUpdated.jpg',
    },
  },
  {
    title: tc.positive.taxImageUrl,
    value: {
      taxImageUrl: 'https://sinbad.co.id/taxImageUpdated.jpg',
    },
  },
  {
    title: tc.positive.taxNo,
    value: {
      taxNo: '445522886622018',
    },
  },
  {
    title: tc.positive.email,
    value: {
      email: 'emailUpdatedATAPIProfileBuyer@mail.com',
    },
  },
];

export const positiveCaseBuyer = [
  {
    title: tc.positive.storeName,
    value: {
      name: 'Updated Store Name from ATAPI Update Profile-Buyer',
    },
  },
  {
    title: tc.positive.storePhoneNo,
    value: {
      phoneNo: '99112020',
    },
  },
  {
    title: tc.positive.storePhoto,
    value: {
      imageUrl: 'https://sinbad.co.id/storePhotoUpdated.jpg',
    },
  },
  {
    title: tc.positive.address,
    value: {
      address: 'Updated Address from ATAPI 12.3-4,5',
    },
  },
  {
    title: tc.positive.noteAddress,
    value: {
      noteAddress: 'Updated Note Address from ATAPI 12.3-4,5',
    },
  },
  {
    title: tc.positive.vehicleAccessibilityId,
    value: {
      vehicleAccessibilityId: 3,
    },
  },
  {
    title: tc.positive.vehicleAccessibilityAmount,
    value: {
      vehicleAccessibilityAmount: 1,
    },
  },
  {
    title: tc.positive.latitude,
    value: {
      latitude: -6.23682,
    },
  },
  {
    title: tc.positive.longitude,
    value: {
      longitude: 106.773595,
    },
  },
  {
    title: tc.positive.locationId,
    value: {
      locationId: '239000000000000000000000',
    },
  },
];

export const updateUser = {
  imageUrl: 'https://sinbad.co.id/profileImageUpdated.jpg',
  idImage: 'https://sinbad.co.id/idImageUpdated.jpg',
  name: 'Updated User Name from ATAPI Update Profile-Buyer',
  idNo: 2244882222777711,
  selfieImageUrl: 'https://sinbad.co.id/selfieImageUpdated.jpg',
  taxImageUrl: 'https://sinbad.co.id/taxImageUpdated.jpg',
  taxNo: '445522886622018',
  email: 'emailUpdatedATAPIProfileBuyer@mail.com',
};

export const updateBuyer = {
  name: 'Updated Store Name from ATAPI Update Profile-Buyer',
  phoneNo: '99112020',
  imageUrl: 'https://sinbad.co.id/storePhotoUpdated.jpg',
  address: 'Updated Address from ATAPI 12.3-4,5',
  noteAddress: 'Updated Note Address from ATAPI 12.3-4,5',
  vehicleAccessibilityId: 3,
  vehicleAccessibilityAmount: 1,
  latitude: '-6.23682',
  longitude: '106.773595',
  locationId: '239000000000000000000000',
};

export const changeStatus = {
  isUploadTaxLater: true, // none, in-review, reject, accept
};

export const compareDBUser = [
  {
    responseKey: 'name',
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
    title: tc.negative.profilePicInvalid,
    value: {
      imageUrl: 3221,
    },
  },
  {
    title: tc.negative.userNameInvalid,
    value: {
      name: true,
    },
  },
  {
    title: tc.negative.idNo15,
    value: {
      idNo: '822299112283746',
    },
  },
  {
    title: tc.negative.idNoInvalid,
    value: {
      idNo: 2244882222777711,
    },
  },
  {
    title: tc.negative.selfieImageUrlInvalid,
    value: {
      selfieImageUrl: 3,
    },
  },
  {
    title: tc.negative.taxImageUrlInvalid,
    value: {
      taxImageUrl: 2,
    },
  },
  {
    title: tc.negative.taxNo14,
    value: {
      taxNo: '99888877776666',
    },
  },
  {
    title: tc.negative.taxNoInvalid,
    value: {
      taxNo: 4455228866018,
    },
  },
  {
    title: tc.negative.emailInvalidFormat,
    value: {
      email: 'testError123',
    },
  },
  {
    title: tc.negative.emailInvalidType,
    value: {
      email: 1,
    },
  },
];

export const negativeCaseUBuyer = [
  {
    title: tc.negative.storeNameInvalid,
    value: {
      name: 3221,
    },
  },
  {
    title: tc.negative.storePhoneNoInvalid,
    value: {
      phoneNo: 9,
    },
  },
  {
    title: tc.negative.storePhotoInvalid,
    value: {
      imageUrl: 2,
    },
  },
  {
    title: tc.negative.addressInvalid,
    value: {
      address: true,
    },
  },
  {
    title: tc.negative.noteAddressInvalid,
    value: {
      noteAddress: 1,
    },
  },
  {
    title: tc.negative.vehAccIdInvalid,
    value: {
      vehicleAccessibilityId: 'two',
    },
  },
  {
    title: tc.negative.vehAccAmountInvalid,
    value: {
      vehicleAccessibilityAmount: 'ten',
    },
  },
  {
    title: tc.negative.latitudeInvalid,
    value: {
      latitude: 'error',
    },
  },
  {
    title: tc.negative.longitudeInvalid,
    value: {
      longitude: 'error',
    },
  },
  {
    title: tc.negative.locationIdInvalid,
    value: {
      locationId: 11,
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
