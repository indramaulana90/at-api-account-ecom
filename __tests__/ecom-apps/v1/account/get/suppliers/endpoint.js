/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Endpoint on API get_suppliers
*/

const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL_ACCOUNT);

export default (cookies, queryParam) => api.get('/api/v1/sinbad-app/suppliers')
  .query(queryParam)
  .set('Content-Type', 'application/json')
  .set('Cookie', [cookies])
  .set('x-platform', 'sinbad-app');
