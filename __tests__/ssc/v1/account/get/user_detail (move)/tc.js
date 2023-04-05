/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API get_user_detail
*/

export default {
  describe: 'get user_detail --',
  type: ['@negative', '@positive'],
  author: 'farhad@sinbad.co.id',
  cardJira: 'TBP-10065',
  positive: {
    default: 'As a Supplier Admin, I should be able to get user detail',
  },
  negative: {
    idUserInvalid: 'As a Supplier Admin, I should not be able to get user detail because idUser is invalid',
    idUserNotFound: 'As a Supplier Admin, I should not be able to get user detail because idUser is not found',
    idUserNull: 'As a Supplier Admin, I should not be able to get user detail because idUser is null',
    xPlatformInvalid: 'As a Supplier Admin, I should not be able to get user detail because set invalid on x-platform header',
    xPlatformNotSet: 'As a Supplier Admin, I should not be able to get user detail because x-platform header is not set',
    invalidCookies: 'As a Supplier Admin, I should not be able to get user detail because cookies set to Invalid',
    nullCookies: 'As a Supplier Admin, I should not be able to get user detail because cookies set to Null',
    emptyCookies: 'As a Supplier Admin, I should not be able to get user detail because cookies set to Empty',
  },
};
