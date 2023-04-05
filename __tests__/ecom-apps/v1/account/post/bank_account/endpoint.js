/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Provide Endpoint on API post_bank_account
*/

const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL_ACCOUNT);
const api2 = supertest(process.env.BASE_URL_COMMON);

export const verifyBank = (cookies, body) => api.post('/api/v1/sinbad-app/request-change/bank-account')
  .send(body)
  .set('Content-Type', 'application/json')
  .set('Cookie', [cookies])
  .set('x-platform', 'sinbad-app');

export const verifyOTP = (cookies, otp) => api2.post('/api/v1/sinbad-app/verification/bank-account')
  .send({ code: otp })
  .set('Content-Type', 'application/json')
  .set('Cookie', [cookies])
  .set('x-platform', 'sinbad-app');
