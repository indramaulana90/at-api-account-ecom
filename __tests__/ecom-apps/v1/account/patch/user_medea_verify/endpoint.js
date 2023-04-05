/**
* Author      : Shaqia Rahmadania Dharmawan (shaqia.rahma@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Endpoint on API patch_user_medea_verify
*/

const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL_ACCOUNT);

export default (cookies, body, id) => api.patch('/api/v1/sinbad-app/user-medea/verify')
  .send(body)
  .set('Content-Type', 'application/json')
  .set('Cookie', [cookies])
  .set('x-platform', 'sinbad-app')
  .set('x-user-id', [id]);
