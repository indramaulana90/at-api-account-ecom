/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Testcase on API get_sales_rep_role_list
*/

export default {
  describe: 'get sales_rep_role_list --',
  type: ['@negative', '@positive'],
  positive: {
    default: 'As a User, I should be able to successfully get sales rep role list',
  },
  negative: {
    invalidPlatform: 'As a User, I should not be able to get sales rep role list because platform set to Invalid',
    nullPlatform: 'As a User, I should not be able to get sales rep role list because platform set to Null',
    emptyPlatform: 'As a User, I should not be able to get sales rep role list because platform set to Empty',
    invalidCookies: 'As a User, I should not be able to get sales rep role list because cookies set to Invalid',
    nullCookies: 'As a User, I should not be able to get sales rep role list because cookies set to Null',
    emptyCookies: 'As a User, I should not be able to get sales rep role list because cookies set to Empty',
  },
};
