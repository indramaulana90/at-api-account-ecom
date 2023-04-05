/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API get_role_detail
*/

export default {
  describe: 'get role_detail --',
  type: ['@negative', '@positive'],
  author: 'farhad@sinbad.co.id',
  cardJira: 'TBP-',
  positive: {
    default: 'As a Supplier Admin, I should be able to get role detail',
  },
  negative: {
    roleIdInvalid: 'As a Supplier Admin, I should not be able to get role detail because roleId is invalid',
    roleIdNotFound: 'As a Supplier Admin, I should not be able to get role detail because roleId is not found',
    roleIdNull: 'As a Supplier Admin, I should not be able to get role detail because roleId is null',
    roleIdEmptyString: 'As a Supplier Admin, I should not be able to get role detail because roleId is empty string',
    roleIdNotSet: 'As a Supplier Admin, I should not be able to get role detail because roleId is not set',
    xPlatformInvalid: 'As a Supplier Admin, I should not be able to get role detail because set invalid on x-platform header',
    xPlatformNotSet: 'As a Supplier Admin, I should not be able to get role detail because x-platform header is not set',
    invalidCookies: 'As a Supplier Admin, I should not be able to get role detail because cookies set to Invalid',
    nullCookies: 'As a Supplier Admin, I should not be able to get role detail because cookies set to Null',
    emptyCookies: 'As a Supplier Admin, I should not be able to get role detail because cookies set to Empty',
  },
};
