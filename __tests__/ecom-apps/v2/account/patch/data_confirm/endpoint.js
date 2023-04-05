/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Endpoint on API patch_data_confirm
*/

const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL_ACCOUNT);

export default (cookies) => api.patch('/api/v2/sinbad-app/profile/confirmation')
  .set('Content-Type', 'application/json')
  .set('Cookie', [cookies])
  .set('x-platform', 'sinbad-app');
