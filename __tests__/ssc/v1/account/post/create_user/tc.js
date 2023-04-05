/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API post_create_user
*/

export default {
  describe: 'post create_user --',
  type: ['@negative', '@positive'],
  author: 'farhad@sinbad.co.id',
  cardJira: 'TBP-10056',
  positive: {
    default: 'As a Supplier Admin, I should be able to create new user',
  },
  negative: {
    nameLessThan3: 'As a Supplier Admin, I should not be able to create new user because name less than 3 chars',
    nameMoreThan50: 'As a Supplier Admin, I should not be able to create new user because name more than 50 chars',
    nameNull: 'As a Supplier Admin, I should not be able to create new user because name is null',
    nameEmptyString: 'As a Supplier Admin, I should not be able to create new user because name is empty string',
    nameNotSet: 'As a Supplier Admin, I should not be able to create new user because name is not set',
    emailInvalid: 'As a Supplier Admin, I should not be able to create new user because email is invalid',
    emailUsed: 'As a Supplier Admin, I should not be able to create new user because email has been used',
    emailNull: 'As a Supplier Admin, I should not be able to create new user because email is null',
    emailEmptyString: 'As a Supplier Admin, I should not be able to create new user because email is empty string',
    emailNotSet: 'As a Supplier Admin, I should not be able to create new user because email is not set',
    roleIdInvalid: 'As a Supplier Admin, I should not be able to create new user because roleId is invalid',
    roleIdNull: 'As a Supplier Admin, I should not be able to create new user because roleId is null',
    roleIdEmptyString: 'As a Supplier Admin, I should not be able to create new user because roleId is empty string',
    roleIdNotSet: 'As a Supplier Admin, I should not be able to create new user because roleId is not set',
    xPlatformInvalid: 'As a Supplier Admin, I should not be able to create new user because set invalid on x-platform header',
    xPlatformNotSet: 'As a Supplier Admin, I should not be able to create new user because x-platform header is not set',
    invalidCookies: 'As a Supplier Admin, I should not be able to create new user because cookies set to Invalid',
    nullCookies: 'As a Supplier Admin, I should not be able to create new user because cookies set to Null',
    emptyCookies: 'As a Supplier Admin, I should not be able to create new user because cookies set to Empty',
  },
};
