/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API patch_complete_data_buyer
*/

export default {
  describe: 'patch complete_data_buyer --',
  type: ['@negative', '@positive'],
  author: 'evinna.ginola@sinbad.co.id',
  cardJira: 'TBP-741',
  positive: {
    default: 'As a Store, I should be able to update my data information',
  },
  negative: {
    invalidName: 'As a Store, I should not be able to update my name if the type is not a string',
    invalidIdImage: 'As a Store, I should not be able to update my id image if the type is not a string',
    invalidTaxImage: 'As a Store, I should not be able to update my tax image if the type is not a string',
    invalidSelfieImage: 'As a Store, I should not be able to update my selfie image if the type is not a string',
    invalidIdNo: 'As a Store, I should not be able to update my idNo if the type is not a number string',
    idNo15Char: 'As a Store, I should not be able to update my idNo if less than 16 char',
    idNo17Char: 'As a Store, I should not be able to update my idNo if more than 16 char',
    invalidTaxNo: 'As a Store, I should not be able to update my taxNo if the type is not a number string',
    taxNo14Char: 'As a Store, I should not be able to update my taxNo if less than 15 char',
    taxNo16Char: 'As a Store, I should not be able to update my taxNo if more than 15 char',
    invalidEmail: 'As a Store, I should not be able to update my email if it does not match the email format',
    invalidStoreName: 'As a Store, I should not be able to update my store name if the type is not a string',
    invalidStorePhone: 'As a Store, I should not be able to update my store phone number if the type is not a number string',
    invalidStoreImage: 'As a Store, I should not be able to update my store photo if the type is not a string',
    invalidStoreAddress: 'As a Store, I should not be able to update my store address if the type is not a string',
    invalidStoreNoteAdd: 'As a Store, I should not be able to update my noteAddress if the type is not a string',
    invalidVehicleAccId: 'As a Store, I should not be able to update my vehicleAccessibilityId if the type is not a number',
    vehAccIdNotExist: 'As a Store, I should not be able to update my vehicleAccessibilityId if the number does not exist',
    invalidVehicleAccAmo: 'As a Store, I should not be able to update my vehicleAccessibilityAmount if the type is not a number',
    vehAccAmo5: 'As a Store, I should not be able to update my vehicleAccessibilityAmount if the value more than 4',
    invalidLatitude: 'As a Store, I should not be able to update my latitude if the type is a string',
    invalidLongitude: 'As a Store, I should not be able to update my longitude if the type is a string',
    invalidLocationId: 'As a Store, I should not be able to update my locationId with invalid format',
    xPlatformInvalid: 'As a Store, I should not be able to update my data information because set invalid on x-platform header',
    xPlatformNotSet: 'As a Store, I should not be able to update my data information because x-platform header is not set',
    invalidCookies: 'As a Store, I should not be able to update my data information because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to update my data information because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to update my data information because cookies set to Empty',
  },
};
