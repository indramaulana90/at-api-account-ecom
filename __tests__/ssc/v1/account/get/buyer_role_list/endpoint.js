/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Endpoint on API get_buyer_role_list
*/

const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL_ACCOUNT);

export default (cookies, platform) => api.get('/api/v1/seller-center/roles/buyers')
  .set('Content-Type', 'application/json')
  .set('Cookie', [cookies])
  .set('x-platform', platform);
