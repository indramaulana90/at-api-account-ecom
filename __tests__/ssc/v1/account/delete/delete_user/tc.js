/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API delete_delete_user
*/

export default {
  describe: 'delete delete_user --',
  type: ['@negative', '@positive'],
  author: 'farhad@sinbad.co.id',
  cardJira: 'TBP-10083',
  positive: {
    default: 'As a Supplier Admin, I should be able to delete user',
  },
  negative: {
    idUserInvalid: 'As a Supplier Admin, I should not be able to delete user because idUser is invalid',
    idUserNotFound: 'As a Supplier Admin, I should not be able to delete user because idUser is not found',
    idUserEmptyString: 'As a Supplier Admin, I should not be able to delete user because idUser is empty string',
    idUserNull: 'As a Supplier Admin, I should not be able to delete user because idUser is null',
    xPlatformInvalid: 'As a Supplier Admin, I should not be able to delete user because set invalid on x-platform header',
    xPlatformNotSet: 'As a Supplier Admin, I should not be able to delete user because x-platform header is not set',
    invalidCookies: 'As a Supplier Admin, I should not be able to delete user because cookies set to Invalid',
    nullCookies: 'As a Supplier Admin, I should not be able to delete user because cookies set to Null',
    emptyCookies: 'As a Supplier Admin, I should not be able to delete user because cookies set to Empty',
  },
};
