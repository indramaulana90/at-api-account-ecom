/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API patch_verify_imageid
*/

export default {
  describe: 'patch verify_imageid --',
  type: ['@negative', '@positive'],
  author: 'evinna.ginola@sinbad.co.id',
  cardJira: 'TCH-106',
  positive: {
    default: 'As a Store, I should be able to update imageId',
  },
  negative: {
    defaultNegative: 'As a Store, I should not be able to update imageId if the type is not a string',
    xPlatformInvalid: 'As a Store, I should not be able to update imageId because set invalid on x-platform header',
    xPlatformNotSet: 'As a Store, I should not be able to update imageId because x-platform header is not set',
    invalidCookies: 'As a Store, I should not be able to update imageId because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to update imageId because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to update imageId because cookies set to Empty',
  },
};
