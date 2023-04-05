/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API patch_edit_role
*/

export default {
  describe: 'patch edit_role --',
  type: ['@negative', '@positive'],
  author: 'farhad@sinbad.co.id',
  cardJira: 'TBP-10033',
  positive: {
    default: 'As a Supplier Admin, I should be able to edit existing role',
  },
  negative: {
    idRoleInvalid: 'As a Supplier Admin, I should not be able to edit existing role because id role is invalid',
    idRoleNotFound: 'As a Supplier Admin, I should not be able to edit existing role because id role is not found',
    idRoleEmptyString: 'As a Supplier Admin, I should not be able to edit existing role because id role is empty string',
    idRoleNull: 'As a Supplier Admin, I should not be able to edit existing role because id role is null',
    idRoleNotSet: 'As a Supplier Admin, I should not be able to edit existing role because id role is not set',
    roleNameAlreadyExists: 'As a Supplier Admin, I should not be able to edit existing role because role name is already exists',
    roleNameLessThan3: 'As a Supplier Admin, I should not be able to edit existing role because role name is less than 3 chars',
    roleNameMoreThan50: 'As a Supplier Admin, I should not be able to edit existing role because role name is more than 50 chars',
    roleNameEmptyString: 'As a Supplier Admin, I should not be able to edit existing role because role name is empty string',
    descLessThan5: 'As a Supplier Admin, I should not be able to edit existing role because desc is less than 5 chars',
    descMoreThan1000: 'As a Supplier Admin, I should not be able to edit existing role because desc is more than 1000 chars',
    descEmptyString: 'As a Supplier Admin, I should not be able to edit existing role because desc is empty string',
    capabilitiesEmptyString: 'As a Supplier Admin, I should not be able to edit existing role because capabilities is empty string',
    xPlatformInvalid: 'As a Supplier Admin, I should not be able to edit existing role because set invalid on x-platform header',
    xPlatformNotSet: 'As a Supplier Admin, I should not be able to edit existing role because x-platform header is not set',
    invalidCookies: 'As a Supplier Admin, I should not be able to edit existing role because cookies set to Invalid',
    nullCookies: 'As a Supplier Admin, I should not be able to edit existing role because cookies set to Null',
    emptyCookies: 'As a Supplier Admin, I should not be able to edit existing role because cookies set to Empty',
  },
};
