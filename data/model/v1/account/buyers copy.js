/**
* Author      : Evinna Ginola Utama (evinna.ginola@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on buyers table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on buyers table.
 * @param {Number} id buyers id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.buyers',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};

/**
 * This function for seeding data reset account by id on users table.
 * @param {Number} id users id.
 */
export const resetAccountChimera = async (id) => {
  const query = {
    type: 'update',
    table: 'public.buyers',
    modifier: {
      location_id: '411780000000000000000000',
      vehicle_accessibility_id: 1,
      name: 'Chimera-SR',
      address: 'Jl. Kemang Sel. II, Kompleks Kiray No.34',
      note_address: 'notes address for ATAPI',
      tax_no: '123456789012345',
      longitude: 106.8130237,
      latitude: 6.2629731,
      phone_no: '0212251625',
      image_url: 'https://sinbad.co.id/image.jpg',
      tax_image_url: 'https://sinbad.co.id/image.jpg',
      vehicle_accessibility_amount: 2,
    },
    condition: { id },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};

/**
 * This function for seeding data delete by id on buyers table.
 * @param {Number} id id from buyers table.
 */
export const deleteById = async (id) => {
  const query = {
    type: 'remove',
    table: 'public.buyers',
    condition: { id },
  };

  await seedingData(query, 'ms_ng_ecom_account');
};
