/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API get_role_list
*/

export default {
  describe: 'get role_list --',
  type: ['@negative', '@positive'],
  author: 'farhad@sinbad.co.id',
  cardJira: 'TBP-10013',
  positive: {
    completeParams: 'As a Supplier Admin, I should be able to get role list',
    noParams: 'As a Supplier Admin, I should be able to get role list with no params',
    specificKeyword: 'As a Supplier Admin, I should be able to get role list with specific keyword',
    specificKeywordNotFound: 'As a Supplier Admin, I should be able to get role list with specific keyword and the result is not found',
    customPage: 'As a Supplier Admin, I should be able to get role list with custom page',
    customPerPage: 'As a Supplier Admin, I should be able to get role list with custom perPage',
    sortCreatedAtDesc: 'As a Supplier Admin, I should be able to get role list with sort createdAt descending',
    sortCreatedAtAsc: 'As a Supplier Admin, I should be able to get role list with sort createdAt ascending',
    sortUpdatedAtDesc: 'As a Supplier Admin, I should be able to get role list with sort updatedAt descending',
    sortUpdatedAtAsc: 'As a Supplier Admin, I should be able to get role list with sort updatedAt ascending',
  },
  negative: {
    keywordLessThan3: 'As a Supplier Admin, I should not be able to get role list because keyword less than 3 chars',
    sortTypeInvalid: 'As a Supplier Admin, I should not be able to get role list because sortType is invalid',
    sortKeyInvalid: 'As a Supplier Admin, I should not be able to get role list because sortKey is invalid',
    xPlatformInvalid: 'As a Supplier Admin, I should not be able to get role list because set invalid on x-platform header',
    xPlatformNotSet: 'As a Supplier Admin, I should not be able to get role list because x-platform header is not set',
    invalidCookies: 'As a Supplier Admin, I should not be able to get role list because cookies set to Invalid',
    nullCookies: 'As a Supplier Admin, I should not be able to get role list because cookies set to Null',
    emptyCookies: 'As a Supplier Admin, I should not be able to get role list because cookies set to Empty',
  },
};
