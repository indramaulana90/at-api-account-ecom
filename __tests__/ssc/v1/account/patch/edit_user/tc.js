/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API patch_edit_user
*/

export default {
  describe: 'patch edit_user --',
  type: ['@negative', '@positive'],
  author: 'farhad@sinbad.co.id',
  cardJira: 'TBP-10040',
  positive: {
    default: 'As a Supplier Admin, I should be able to edit role of the user',
  },
  negative: {
    roleIdInvalid: 'As a Supplier Admin, I should not be able to edit role of the user because roleId is invalid',
    roleIdEmptyString: 'As a Supplier Admin, I should not be able to edit role of the user because roleId is empty string',
    roleIdNull: 'As a Supplier Admin, I should not be able to edit role of the user because roleId is null',
    roleIdNotSet: 'As a Supplier Admin, I should not be able to edit role of the user because roleId is not set',
    idUserInvalid: 'As a Supplier Admin, I should not be able to edit role of the user because idUser is invalid',
    idUserNotFound: 'As a Supplier Admin, I should not be able to edit role of the user because idUser is not found',
    idUserEmptyString: 'As a Supplier Admin, I should not be able to edit role of the user because idUser is empty string',
    idUserNull: 'As a Supplier Admin, I should not be able to edit role of the user because idUser is null',
    xPlatformInvalid: 'As a Supplier Admin, I should not be able to edit role of the user because set invalid on x-platform header',
    xPlatformNotSet: 'As a Supplier Admin, I should not be able to edit role of the user because x-platform header is not set',
    invalidCookies: 'As a Supplier Admin, I should not be able to edit role of the user because cookies set to Invalid',
    nullCookies: 'As a Supplier Admin, I should not be able to edit role of the user because cookies set to Null',
    emptyCookies: 'As a Supplier Admin, I should not be able to edit role of the user because cookies set to Empty',
  },
};
