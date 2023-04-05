/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API get_complete_data
*/

export default {
  describe: 'get complete_data --',
  type: ['@negative', '@positive'],
  author: 'evinna.ginola@sinbad.co.id',
  cardJira: 'TBP-734',
  positive: {
    default: 'As a Store, I should be able to see completeness of data',
  },
  negative: {
    defaultNegative: 'As a Store, I should not be able to see completeness of data',
    defaultNegative2: 'As a Store, I should not be able to see completeness of data',
    xPlatformInvalid: 'As a Store, I should not be able to see completeness of data because set invalid on x-platform header',
    xPlatformNotSet: 'As a Store, I should not be able to see completeness of data because x-platform header is not set',
    invalidCookies: 'As a Store, I should not be able to see completeness of data because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to see completeness of data because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to see completeness of data because cookies set to Empty',
  },
};
