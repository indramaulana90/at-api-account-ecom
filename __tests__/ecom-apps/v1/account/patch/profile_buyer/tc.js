/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API patch_profile_buyer
*/

export default {
  describe: 'patch profile_buyer --',
  type: ['@negative', '@positive'],
  author: 'evinna.ginola@sinbad.co.id',
  cardJira: 'TQAT-27',
  positive: {
    changeStatus: 'As a Store, I should be able to update my vipStatus',
    profilePic: 'As a Store, I should be able to update my profile pic',
    userName: 'As a Store, I should be able to update my user name',
    idNo: 'As a Store, I should be able to update my KTP',
    selfieImageUrl: 'As a Store, I should be able to update my selfie with KTP',
    taxImageUrl: 'As a Store, I should be able to update my tax photo',
    taxNo: 'As a Store, I should be able to update my tax no',
    email: 'As a Store, I should be able to update my email',

    storeName: 'As a Store, I should be able to update my store name',
    storePhoneNo: 'As a Store, I should be able to update my store phone no',
    storePhoto: 'As a Store, I should be able to update my store photo',
    address: 'As a Store, I should be able to update my address',
    noteAddress: 'As a Store, I should be able to update my note address',
    vehicleAccessibilityId: 'As a Store, I should be able to update my vehicleAccessibilityId',
    vehicleAccessibilityAmount: 'As a Store, I should be able to update my vehicleAccessibilityAmount',
    latitude: 'As a Store, I should be able to update my latitude',
    longitude: 'As a Store, I should be able to update my longitude',
    locationId: 'As a Store, I should be able to update my locationId',
  },
  negative: {
    profilePicInvalid: 'As a Store, I should not be able to update my profile pic if the type is not a string',
    userNameInvalid: 'As a Store, I should not be able to update my user name if the type is not a string',
    idNo15: 'As a Store, I should not be able to update my KTP if the value not 16 char',
    idNoInvalid: 'As a Store, I should not be able to update my idNo if the type is not a number string',
    selfieImageUrlInvalid: 'As a Store, I should not be able to update my selfie with KTP',
    taxImageUrlInvalid: 'As a Store, I should not be able to update my tax photo if the type is not a string',
    taxNo14: 'As a Store, I should not be able to update my tax no if the value not 15 char',
    taxNoInvalid: 'As a Store, I should not be able to update my tax no if the type is not a string',
    emailInvalidType: 'As a Store, I should not be able to update my email if the type is not a string',
    emailInvalidFormat: 'As a Store, I should not be able to update my email with invalid email format',

    storeNameInvalid: 'As a Store, I should not be able to update my store name if the type is not a string',
    storePhoneNoInvalid: 'As a Store, I should not be able to update my store phone no if the type is not a number string',
    storePhotoInvalid: 'As a Store, I should not be able to update my store photo if the type is not a string',
    addressInvalid: 'As a Store, I should not be able to update my address if the type is not a string',
    noteAddressInvalid: 'As a Store, I should not be able to update my note address if the type is not a string',
    vehAccIdInvalid: 'As a Store, I should not be able to update my vehicleAccessibilityId if the type is not an integer',
    vehAccAmountInvalid: 'As a Store, I should not be able to update my vehicleAccessibilityAmount if the type is not an integer',
    latitudeInvalid: 'As a Store, I should not be able to update my latitude if the type is not an integer',
    longitudeInvalid: 'As a Store, I should not be able to update my longitude if the type is not an integer',
    locationIdInvalid: 'As a Store, I should not be able to update my locationId if the type is not a string',

    xPlatformInvalid: 'As a Store, I should not be able to update my store profile because set invalid on x-platform header',
    xPlatformNotSet: 'As a Store, I should not be able to update my store profile because x-platform header is not set',
    invalidCookies: 'As a Store, I should not be able to update my profile because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to update my profile because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to update my profile because cookies set to Empty',
  },
};
