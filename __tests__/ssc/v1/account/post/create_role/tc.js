/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API post_create_role
*/

export default {
  describe: 'post create_role --',
  type: ['@negative', '@positive'],
  author: 'farhad@sinbad.co.id',
  cardJira: 'TBP-10019',
  positive: {
    oneCapability: 'As a Supplier Admin, I should be able to create new role with single capability',
    multipleCapabilities: 'As a Supplier Admin, I should be able to create new role with multiple capabilities',
  },
  negative: {
    roleNameAlreadyExists: 'As a Supplier Admin, I should not be able to create new role because role name is already exists',
    roleNameLessThan3: 'As a Supplier Admin, I should not be able to create new role because role name is less than 3 chars',
    roleNameMoreThan50: 'As a Supplier Admin, I should not be able to create new role because role name is more than 50 chars',
    roleNameNull: 'As a Supplier Admin, I should not be able to create new role because role name is null',
    roleNameEmptyString: 'As a Supplier Admin, I should not be able to create new role because role name is empty string',
    roleNameNotSet: 'As a Supplier Admin, I should not be able to create new role because role name is not set',
    descLessThan5: 'As a Supplier Admin, I should not be able to create new role because desc is less than 5 chars',
    descMoreThan1000: 'As a Supplier Admin, I should not be able to create new role because desc is more than 1000 chars',
    descNull: 'As a Supplier Admin, I should not be able to create new role because desc is null',
    descEmptyString: 'As a Supplier Admin, I should not be able to create new role because desc is empty string',
    descNotSet: 'As a Supplier Admin, I should not be able to create new role because desc is not set',
    capabilitiesNull: 'As a Supplier Admin, I should not be able to create new role because capabilities is null',
    capabilitiesEmptyString: 'As a Supplier Admin, I should not be able to create new role because capabilities is empty string',
    capabilitiesNotSet: 'As a Supplier Admin, I should not be able to create new role because capabilities is not set',
    xPlatformInvalid: 'As a Supplier Admin, I should not be able to create new role because set invalid on x-platform header',
    xPlatformNotSet: 'As a Supplier Admin, I should not be able to create new role because x-platform header is not set',
    invalidCookies: 'As a Supplier Admin, I should not be able to create new role because cookies set to Invalid',
    nullCookies: 'As a Supplier Admin, I should not be able to create new role because cookies set to Null',
    emptyCookies: 'As a Supplier Admin, I should not be able to create new role because cookies set to Empty',
  },
};
