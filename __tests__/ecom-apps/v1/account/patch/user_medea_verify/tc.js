/**
* Author      : Shaqia Rahmadania Dharmawan (shaqia.rahma@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API patch_user_medea_verify
*/

export default {
  describe: 'patch user_medea_verify --',
  type: ['@negative', '@positive'],
  author: 'shaqia.rahma@sinbad.co.id',
  cardJira: 'TCH-275',
  positive: {
    default: 'As a Store, I should be able to verification user medea',
  },
  negative: {
    ownerNameInteger: 'As a Store, I should not be able to verification user medea because set integer on owner name',
    ownerNameNull: 'As a Store, I should not be able to verification user medea because set null on owner name',
    ownerNameNotSet: 'As a Store, I should not be able to verification user medea because owner name not set',
    buyerNameInteger: 'As a Store, I should not be able to verification user medea because set integer on buyer name',
    buyerNameNull: 'As a Store, I should not be able to verification user medea because set null on buyer name',
    buyerNameNotSet: 'As a Store, I should not be able to verification user medea because buyer name not set',
    addressInteger: 'As a Store, I should not be able to verification user medea because set integer on address',
    addressNull: 'As a Store, I should not be able to verification user medea because set null on address',
    addressNotSet: 'As a Store, I should not be able to verification user medea because address not set',
    idNoInteger: 'As a Store, I should not be able to verification user medea because set integer on id no',
    idNoNull: 'As a Store, I should not be able to verification user medea because set null on id no',
    idNoNotSet: 'As a Store, I should not be able to verification user medea because id no not set',
    ownerPhoneNumberNull: 'As a Store, I should not be able to verification user medea because set null on owner phone number',
    ownerPhoneNumberNotSet: 'As a Store, I should not be able to verification user medea because owner phone number not set',
    idInvalid: 'As a Store, I should not be able to verification user medea because set invalid on id store',
    idNull: 'As a Store, I should not be able to verification user medea because set null on id store',
    idNotSet: 'As a Store, I should not be able to verification user medea because id store not set',
    xPlatformInvalid: 'As a Store, I should not be able to verification user medea because set invalid on x-platform header',
    xPlatformNotSet: 'As a Store, I should not be able to verification user medea because x-platform header is not set',
    invalidCookies: 'As a Store, I should not be able to verification user medea because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to verification user medea because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to verification user medea because cookies set to Empty',
  },
};
