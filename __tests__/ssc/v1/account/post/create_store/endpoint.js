/**
* Author      : yosua siagian (yosua@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Endpoint on API post_create_store
*/

const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL_ACCOUNT);

export default (body, cookies) => api.post('/api/v1/seller-center/supplier-stores')
  .send(body)
  .set('Content-Type', 'application/json')
  .set('Cookie', [cookies])
  .set('x-platform', 'seller-center')
  .set('x-user-id', 206774)
  .set('x-seller-id', 1);
