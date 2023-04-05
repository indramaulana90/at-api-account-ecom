/**
* Author      : Fauzan Novaldi Suteja (fauzan.novaldi@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on urbans table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by district on urbans table.
 * @param {String} district urbans district.
 * @return {ArrayOfObject} result from db.
 */

export const selectByDistrict = async (district) => {
  const query = {
    type: 'select',
    table: 'public.urbans',
    condition: { district },
  };

  const result = await seedingData(query, 'ms_ng_ecom_account');

  return result;
};

/**
 * This function for seeding data select by id on urbans table.
 * @param {Number} id urbans id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.urbans',
    condition: { id },
  };
  const result = await seedingData(query, 'ms_ng_ecom_account');
  return result;
};

/**
 * This function for seeding data select by city on urbans table.
 * @param {String} city urbans city.
 * @return {ArrayOfObject} result from db.
 */

export const selectByCity = async (city) => {
  const query = {
    type: 'select',
    table: 'public.urbans',
    condition: { city },
  };
  const result = await seedingData(query, 'ms_ng_ecom_account');
  return result;
};
