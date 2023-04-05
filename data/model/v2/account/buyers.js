/**
* Author      : Immanuel Yohansen (immanuel.yohansen@sinbad.co.id)
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
 * This function for seeding data insert with half params on buyers table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idBuyers id from buyers table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 */
export const updateLocationId = async (id, locationId) => {
  const query = {
    type: 'update',
    table: 'public.buyers',
    modifier: { location_id: locationId },
    condition: { id },
  };
  const result = await seedingData(query, 'ms_ng_ecom_account');
  return result;
};
