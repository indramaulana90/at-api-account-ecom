/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Endpoint on API get_profile_buyer
*/

const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL_ACCOUNT);

export default (cookies) => api.get('/api/v1/sinbad-app/profile-buyer')
  .set('Content-Type', 'application/json')
  .set('Cookie', [cookies])
  .set('x-platform', 'sinbad-app');
