/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API post_email_verification
*/

export default {
  describe: 'post email_verification --',
  type: ['@negative', '@positive'],
  author: 'evinna.ginola@sinbad.co.id',
  cardJira: 'SR-1943',
  positive: {
    addEmail: 'As a Store, I should be able to add and verify my email',
    changeEmail: 'As a Store, I should be able to change and verify my email',
    verifyEmail: 'As a Store, I should be able to verify my existing email',
  },
  negative: {
    existingEmail: 'As a Store, I should not be able to add email if the email address has been used',
    invalidEmail: 'As a Store, I should not be able to add my email with invalid format',
    nullEmail: 'As a Store, I should not be able to add my email with null value',
    invalidOTP: 'As a Store, I should not be able to add my email with invalid OTP',
    nullOTP: 'As a Store, I should not be able to add my email if the OTP is null',
    xPlatformInvalid: 'As a Store, I should not be able to add my email because set invalid on x-platform header',
    xPlatformNotSet: 'As a Store, I should not be able to add my email because x-platform header is not set',
    invalidCookies: 'As a Store, I should not be able to add my email because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to add my email because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to add my email because cookies set to Empty',
  },
};
