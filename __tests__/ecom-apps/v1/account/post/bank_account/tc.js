/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API post_bank_account
*/

export default {
  describe: 'post bank_account --',
  type: ['@negative', '@positive'],
  author: 'evinna.ginola@sinbad.co.id',
  cardJira: 'SR-1236',
  positive: {
    addBank: 'As a Store, I should be able to add my bank account',
    editBank: 'As a Store, I should be able to edit my bank account',
    withBranch: 'As a Store, I should be able to add the branch on my bank account',
    accountName50char: 'As a Store, I should be able to add my bank account if the value of accountName is 50 char',
  },
  negative: {
    invalidBankId: 'As a Store, I should not be able to add my bank account if the bankId is not a number',
    withoutBankId: 'As a Store, I should not be able to add my bank account without bankId',
    nullBankId: 'As a Store, I should not be able to add my bank account if the bankId is null',
    bankIdNotExist: 'As a Store, I should not be able to add my bank account if the bankId is not exist',
    accountName51char: 'As a Store, I should not be able to add my bank account if the value of accountName more than 50 char',
    invalidAccountName: 'As a Store, I should not be able to add my bank account if the accountName is a number',
    withoutAccountName: 'As a Store, I should not be able to add my bank account without accountName',
    nullAccountName: 'As a Store, I should not be able to add my bank account if the accountName is null',
    invalidAccountNo: 'As a Store, I should not be able to add my bank account if the accountNo is a number',
    withoutAccountNo: 'As a Store, I should not be able to add my bank account without accountNo',
    nullAccountNo: 'As a Store, I should not be able to add my bank account if the accountNo is null',
    branch51char: 'As a Store, I should not be able to add my bank account if the value of branch more than 50 char',
    invalidBranch: 'As a Store, I should not be able to add my bank account if the branch is a number',
    wrongOTP: 'As a Store, I should not be able to add my bank account with wrongOTP',
    xPlatformInvalid: 'As a Store, I should not be able to add my bank account because set invalid on x-platform header',
    xPlatformNotSet: 'As a Store, I should not be able to add my bank account because x-platform header is not set',
    invalidCookies: 'As a Store, I should not be able to add my bank account because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to add my bank account because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to add my bank account because cookies set to Empty',
  },
};
