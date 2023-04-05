/**
* Author      : Fulki Firosyan (fulki.firosyan@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Endpoint on API get_provinces_list
*/

const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL_ACCOUNT);

export default (cookies, queryParam) => api.get('/api/v1/sinbad-app/provinces')
  .query(queryParam)
  .set('Content-Type', 'application/json')
  .set('x-platform', 'sinbad-app')
  .set('Cookie', [cookies]);
