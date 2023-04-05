/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Endpoint on API patch_edit_user
*/

const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL_ACCOUNT);

export default (cookies, body, id) => api.patch(`/api/v1/seller-center/user-management/${id}`)
  .send(body)
  .set('Content-Type', 'application/json')
  .set('Cookie', [cookies])
  .set('x-platform', 'seller-center');
