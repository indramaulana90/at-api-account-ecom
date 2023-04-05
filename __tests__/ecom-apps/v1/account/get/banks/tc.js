/**
* Author      : Fauzan Novaldi Suteja (fauzan.novaldi@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API get_banks
*/

export default {
  describe: 'get banks --',
  type: ['@negative', '@positive'],
  author: 'fulki.firosyan@sinbad.co.id', // for no error on auto assigne ATAPI - Xray
  cardJira: 'TQAT-30',
  positive: {
    getAll: 'As a Store, I should be able to get all list of bank',
    getWithParamBca: 'As a Store, I should be able to get all list of bank with parameter BCA',
    getWithParamBni: 'As a Store, I should be able to get all list of bank with parameter BNI',
    getWithParamBri: 'As a Store, I should be able to get all list of bank with parameter BRI',
    getWithParamMandiri: 'As a Store, I should be able to get all list of bank with parameter Mandiri',
    getWithXUserId: 'As a Store, I should be able to get all list of bank with x-user-id',
    getWithoutXUserId: 'As a Store, I should be able to get all list of bank without x-user-id',
    paramNull: 'As a Store, I should be able to get all list of bank with parameter null',
    paramEmpty: 'As a Store, I should be able to get all list of bank with parameter empty',
  },
  negative: {
    paramInteger: 'As a Store, I should not be able to get all list of bank with parameter integer',
    paramNotFound: 'As a Store, I should not be able to get all list of bank with parameter invalid data',
    paramNotSet: 'As a Store, I should not be able to get all list of bank with parameter not set',
    xPlatformNull: 'As a Store, I should not be able to get all list of bank with x-platform null',
    xPlatformEmpty: 'As a Store, I should not be able to get all list of bank with x-platform empty',
    xPlatformInvalid: 'As a Store, I should not be able to get all list because x-platform invalid',
    xPlatformNotSet: 'As a Store, I should not be able to get all list because x-platform header is not set',
    invalidCookies: 'As a Store, I should not be able to get all list because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to get all list because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to get all list because cookies set to Empty',
  },
};
