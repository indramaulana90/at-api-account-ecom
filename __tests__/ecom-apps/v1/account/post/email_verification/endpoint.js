/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Endpoint on API post_email_verification
*/

const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL_ACCOUNT);
const api2 = supertest(process.env.BASE_URL_COMMON);

export const verifyEmail = (cookies, body) => api.post('/api/v1/sinbad-app/request-change/email')
  .send(body)
  .set('Content-Type', 'application/json')
  .set('Cookie', [cookies])
  .set('x-platform', 'sinbad-app');

export const verifyOTP = (cookies, body) => api2.post('/api/v1/sinbad-app/verification/email')
  .send(body)
  .set('Content-Type', 'application/json')
  .set('Cookie', [cookies])
  .set('x-platform', 'sinbad-app');
