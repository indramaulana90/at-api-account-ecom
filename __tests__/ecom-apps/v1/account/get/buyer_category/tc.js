/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API get_buyer_category
*/

export default {
  describe: 'get buyer_category --',
  type: ['@negative', '@positive'],
  author: 'fulki.firosyan@sinbad.co.id',
  cardJira: 'TBP-127',
  positive: {
    default: 'As a Store, I should be able to get store category page',
  },
  negative: {
    invalidXplatform: 'As a Store, I should not be able to get store category page because x-platform set to Invalid',
    nullXplatform: 'As a Store, I should not be able to get store category page because x-platform set to Null',
    emptyXplatform: 'As a Store, I should not be able to get store category page because x-platform set to Empty',
    invalidCookies: 'As a Store, I should not be able to get store category page because cookies set to Invalid',
    nullCookies: 'As a Store, I should not be able to get store category page because cookies set to Null',
    emptyCookies: 'As a Store, I should not be able to get store category page because cookies set to Empty',
  },
};
