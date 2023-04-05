/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Endpoint on API get_role-list-internal-employee
*/

const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL_ACCOUNT);

export default (cookies, platform) => api.get('/api/v1/seller-center/roles/internal')
  .set('Content-Type', 'application/json')
  .set('Cookie', [cookies])
  .set('x-platform', platform);
