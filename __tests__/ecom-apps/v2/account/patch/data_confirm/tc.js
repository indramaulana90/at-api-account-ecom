/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API patch_data_confirm
*/

export default {
  describe: 'patch data_confirm --',
  type: ['@negative', '@positive'],
  author: 'evinna.ginola@sinbad.co.id',
  cardJira: 'TBP-742',
  positive: {
    default: 'As a Store, I should be able to confirm my data for upgrade to VIP account',
  },
  negative: {
    defaultNegative: 'As a Store, I should not be able to confirm my data for upgrade to VIP account when the data is not complete',
    xPlatformInvalid: 'As a Store, I should not be able to confirm my data for upgrade to VIP account because set invalid on x-platform header',
    xPlatformNotSet: 'As a Store, I should not be able to confirm my data for upgrade to VIP account because x-platform header is not set',
    invalidCookies: 'As a Store, I should not be able to confirm my data for upgrade to VIP account because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to confirm my data for upgrade to VIP account because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to confirm my data for upgrade to VIP account because cookies set to Empty',
  },
};
