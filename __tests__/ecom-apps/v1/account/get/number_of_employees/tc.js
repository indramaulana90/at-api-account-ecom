/**
* Author      : Fauzan Novaldi Suteja (fauzan.novaldi@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API get_number_of_employees
*/

export default {
  describe: 'get number_of_employees --',
  type: ['@negative', '@positive'],
  author: 'fulki.firosyan@sinbad.co.id', // for no error on auto assigne ATAPI - Xray
  cardJira: 'TQAT-30',
  positive: {
    getAll: 'As a Store, I should be able to get all list of number of employee',
  },
  negative: {
    xPlatformNull: 'As a Store, I should not be able to get all list of number of employee with x-platform null',
    xPlatformEmpty: 'As a Store, I should not be able to get all list of number of employee with x-platform empty',
    xPlatformInvalid: 'As a Store, I should not be able to get all list of number of employee because set invalid on x-platform header',
    xPlatformNotSet: 'As a Store, I should not be able to get all list of number of employee because x-platform header is not set',
    invalidCookies: 'As a Store, I should not be able to get all list of number of employee because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to get all list of number of employee because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to get all list of number of employee because cookies set to Empty',
  },
};
