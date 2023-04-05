/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on users table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on users table.
 * @param {Number} id users id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.users',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};

/**
 * This function for seeding data update email by id on users table.
 * @param {Number} id users id.
 * @param {String} mail users email.
 */
export const setEmailById = async (id, mail) => {
  const query = {
    type: 'update',
    table: 'public.users',
    modifier: { email: mail },
    condition: { id },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};

/**
 * This function for seeding data unverified email by id on users table.
 * @param {Number} id users id.
 */
export const unverifiedEmail = async (id) => {
  const query = {
    type: 'update',
    table: 'public.users',
    modifier: { is_email_verified: false },
    condition: { id },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};

/**
 * This function for seeding data reset account by id on users table.
 * @param {Number} id users id.
 */
export const resetAccountChimera = async (id) => {
  const query = {
    type: 'update',
    table: 'public.users',
    modifier: {
      name: 'Chimera-SR',
      email: 'testAtapi01@mailinator.com',
      id_no: '1234567890123456',
      tax_no: '123456789012345',
      image_url: 'https://sinbad.co.id/image.jpg',
      tax_image_url: 'https://sinbad.co.id/image.jpg',
      id_image_url: 'https://sinbad.co.id/image.jpg',
      selfie_image_url: 'https://sinbad.co.id/image.jpg',
      is_email_verified: true,
      image_id: null,
    },
    condition: { id },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};

/**
 * This function for seeding data select by id on users table.
 * @param {Number} id users id.
 */
export const deleteById = async (id) => {
  const query = {
    type: 'remove',
    table: 'public.users',
    condition: { id },
    limit: 5,
  };

  await seedingData(query, 'ms_ng_ecom_account');
};

/**
 * This function for seeding data select by id on users table.
 * @param {Number} mobilePhone users mobilePhone.
 * @return {ArrayOfObject} result from db.
 */
 export const selectByNumber = async (mobilePhone) => {
  const query = {
    type: 'select',
    table: 'public.users',
    condition: { mobile_phone: mobilePhone },
    limit: 5,
  };

  const result = await seedingData(query, 'service_account');

  return result;
};
