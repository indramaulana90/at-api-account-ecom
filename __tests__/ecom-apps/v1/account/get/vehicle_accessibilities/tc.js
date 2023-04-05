/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    : Fauzan Novaldi Suteja (fauzan.novaldi@sinbad.co.id)
* Domain      : account
* Description : This File for Provide Testcase on API get_vehicle_accessibilities
*/

export default {
  describe: 'get vehicle_accessibilities --',
  type: ['@negative', '@positive'],
  author: 'evinna.ginola@sinbad.co.id',
  cardJira: 'SR-1072',
  positive: {
    getListVehAccess: 'As a Store, I should be able to get all list of vehicle accessibilities',
    paramKeyword: 'As a Store, I should be able to get all list of vehicle accessibilities with param keyword',
  },
  negative: {
    keywordNotFound: 'As a Store, I should not be able to get list of vehicle accessibilities if the keyword does not match with any data',
    xPlatformNull: 'As a Store, I should not be able to get all list of bank with x-platform null',
    xPlatformEmpty: 'As a Store, I should not be able to get all list of bank with x-platform empty',
    xPlatformInvalid: 'As a Store, I should not be able to get list of vehicle accessibilities because set invalid on x-platform header',
    xPlatformNotSet: 'As a Store, I should not be able to get list of vehicle accessibilities because x-platform header is not set',
    invalidCookies: 'As a Store, I should not be able to get list of vehicle accessibilities because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to get list of vehicle accessibilities because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to get list of vehicle accessibilities because cookies set to Empty',
  },
};
