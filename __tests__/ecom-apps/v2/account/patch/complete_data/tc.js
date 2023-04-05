/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API patch_complete_data
*/

export default {
  describe: 'patch complete_data --',
  type: ['@negative', '@positive'],
  author: 'fulki.firosyan@sinbad.co.id',
  cardJira: 'TBP-156',
  positive: {
    default: 'As a Store, I should be able to update registration data',
  },
  negative: {
    nullLocation: 'As a Store, I should not be able to update registration data with locationId set to Null',
    emptyLocation: 'As a Store, I should not be able to update registration data with locationId set to Empty String',
    intLocation: 'As a Store, I should not be able to update registration data with locationId set to Integer',
    nullBuyer: 'As a Store, I should not be able to update registration data with buyerCategoryId set to Null',
    emptyBuyer: 'As a Store, I should not be able to update registration data with buyerCategoryId set to Empty String',
    invalidBuyer: 'As a Store, I should not be able to update registration data with buyerCategoryId set to Invalid',
    nullProduct: 'As a Store, I should not be able to update registration data with productCategoryIds set to Null',
    emptyProduct: 'As a Store, I should not be able to update registration data with productCategoryIds set to Empty String',
    intProduct: 'As a Store, I should not be able to update registration data with productCategoryIds set to Integer',
    invalidPlatform: 'As a Store, I should not be able to update registration data because x-platform header set to Invalid',
    unsetPlatform: 'As a Store, I should not be able to update registration data because x-platform header is Unset',
    invalidCookies: 'As a Store, I should not be able to update registration data because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to update registration data because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to update registration data because cookies set to Empty',
    emptyStringArray: 'As a Store, I should not be able to update registration data with productCategoryIds set to Empty String inside array',
    invalidIdArray: 'As a Store, I should not be able to update registration data with productCategoryIds set to invalidId inside array',
  },
};
