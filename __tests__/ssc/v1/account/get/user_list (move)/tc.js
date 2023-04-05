/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API get_user_list
*/

export default {
  describe: 'get user_list --',
  type: ['@negative', '@positive'],
  author: 'farhad@sinbad.co.id',
  cardJira: 'TBP-10050',
  positive: {
    completeParams: 'As a Supplier Admin, I should be able to get user list',
    noParams: 'As a Supplier Admin, I should be able to get user list with no params',
    specificKeyword: 'As a Supplier Admin, I should be able to get user list with specific keyword',
    specificKeywordNotFound: 'As a Supplier Admin, I should be able to get user list with specific keyword and the result is not found',
    customPage: 'As a Supplier Admin, I should be able to get user list with custom page',
    customPerPage: 'As a Supplier Admin, I should be able to get user list with custom perPage',
    sortCreatedAtDesc: 'As a Supplier Admin, I should be able to get user list with sort createdAt descending',
    sortCreatedAtAsc: 'As a Supplier Admin, I should be able to get user list with sort createdAt ascending',
    sortUpdatedAtDesc: 'As a Supplier Admin, I should be able to get user list with sort updatedAt descending',
    sortUpdatedAtAsc: 'As a Supplier Admin, I should be able to get user list with sort updatedAt ascending',
  },
  negative: {
    keywordLessThan3: 'As a Supplier Admin, I should not be able to get user list because keyword less than 3 chars',
    sortTypeInvalid: 'As a Supplier Admin, I should not be able to get user list because sortType is invalid',
    sortKeyInvalid: 'As a Supplier Admin, I should not be able to get user list because sortKey is invalid',
    xPlatformInvalid: 'As a Supplier Admin, I should not be able to get user list because set invalid on x-platform header',
    xPlatformNotSet: 'As a Supplier Admin, I should not be able to get user list because x-platform header is not set',
    invalidCookies: 'As a Supplier Admin, I should not be able to get user list because cookies set to Invalid',
    nullCookies: 'As a Supplier Admin, I should not be able to get user list because cookies set to Null',
    emptyCookies: 'As a Supplier Admin, I should not be able to get user list because cookies set to Empty',
  },
};
