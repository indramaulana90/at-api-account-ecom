/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API get_buyer_location
*/

export default {
  describe: 'get buyer_location --',
  type: ['@negative', '@positive'],
  author: 'evinna.ginola@sinbad.co.id',
  cardJira: 'TBP-733',
  positive: {
    default: 'As a Store, I should be able to get the detail of store location',
  },
  negative: {
    invalidCookies: 'As a Store, I should not be able to get the detail of store location because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to get the detail of store location because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to get the detail of store location because cookies set to Empty',
  },
};
