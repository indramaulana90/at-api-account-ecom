/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API get_profile_buyer
*/

export default {
  describe: 'get profile_buyer --',
  type: ['@negative', '@positive'],
  author: 'evinna.ginola@sinbad.co.id',
  cardJira: 'TQAT-73',
  positive: {
    default: 'As a Store, I should be able to get my profile data',
  },
  negative: {
    invalidCookies: 'As a Store, I should not be able to get my profile data because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to get my profile data because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to get my profile data because cookies set to Empty',
  },
};
