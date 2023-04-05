/**
* Author      : yosua siagian (yosua@sinbad.co.id)
* Modifier    :
* Domain      : account
* Description : This File for Model Seeding Data on stores table
*/

import seedingData from '@at-api-core/seeding-data';
import getModelValues from '@at-api-core/get-model-values';
import dateJs from 'date.js';

/**
 * This function for generate store code.
 * @param {Date} updateAt Original date of updateAt.
 * @param {Number} totalRevision Number of Revision on this store.
 * @returns {Object} return string of store code.
 */
export const generateStoreCode = (updateAt, totalRevision) => {
  let updateDate;

  if (updateAt !== null) {
    const transform = (updateAt).toString();
    updateDate = new Date(transform).toISOString();
  } else {
    updateDate = '2021-06';
  }

  const digit2 = `R${totalRevision}`;
  const digit3 = (updateDate).substring(0, 2);
  const digit4 = (updateDate).substring(5, 7);
  const digit6 = (updateDate).substring(2, 4);

  const storeCode = {
    first: `SNB-${digit2}-${digit3}${digit4}`,
    last: digit6,
  };

  return storeCode;
};

/**
 * This function for seeding data select by id on stores table.
 * @param {Number} id stores id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.stores',
    condition: { id },
  };

  const result = await seedingData(query);

  return result;
};

/**
 * This function for seeding data insert with half params on stores table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idUsers id from stores table.
 * @param {Number} params.idStoreCode id for external id/code from stores table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 * @param {Number} params.idStores id from stores table.
 * @param {?String} params.storeStatus status store for active or inactive, default is active.
 * @param {?String} params.approvalStatus status store for guest, pending, verified, default is verified.
 */
export const insertHalfParams = async (params) => {
  const storeCode = `${generateStoreCode(null, 0).first}${params.idStoreCode}${generateStoreCode(null, 0).last}`;

  const query = {
    type: 'insert',
    table: 'public.stores',
    values: {
      id: params.idStores,
      store_code: storeCode,
      name: getModelValues('stores', params).name,
      address: getModelValues('stores', params).address,
      tax_no: null,
      large_area: '50',
      phone_no: null,
      image_url: null,
      tax_image_url: null,
      status: params.storeStatus || 'active',
      reason: 'good',
      parent: false,
      parent_id: null,
      number_of_employee: '1-10',
      urban_id: 76123,
      vehicle_accessibility_id: null,
      created_at: '2021-06-25T06:40:16.695Z',
      updated_at: '2021-06-25T06:40:16.695Z',
      deleted_at: null,
      creator_id: null,
      longitude: 106.783,
      latitude: -6.14648,
      note_address: getModelValues('stores', params).noteAddress,
      top_selling_brand: null,
      most_wanted_brand: null,
      approval_status: params.approvalStatus || 'verified',
      vehicle_accessibility_amount: null,
      platform_created: null,
    },
  };

  await seedingData(query);

  return storeCode;
};

/**
 * This function for seeding data insert with full params on stores table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idUsers id from stores table.
 * @param {Number} params.idStoreCode id for external id/code from stores table.
 * @param {String} params.atName Original name of AT Name without space maximum 11 char (e.g. StoreDtail).
 * @param {Number} params.idStores id from stores table.
 * @param {?String} params.storeStatus status store for active or inactive, default is active.
 * @param {?String} params.approvalStatus status store for guest, pending, verified, default is verified.
 */
export const insertForPaymentApproval = async (params) => {
  const storeCode = `${generateStoreCode(null, 0).first}${params.idStoreCode}${generateStoreCode(null, 0).last}`;

  const query = {
    type: 'insert',
    table: 'public.stores',
    values: {
      id: params.idStores,
      store_code: storeCode,
      name: getModelValues('stores', params).name,
      address: getModelValues('stores', params).address,
      tax_no: `3171${params.idStores}`,
      large_area: 50,
      phone_no: `08${params.idStores}`,
      image_url: null,
      tax_image_url: null,
      status: params.storeStatus || 'active',
      reason: 'good',
      parent: false,
      parent_id: null,
      number_of_employee: '1-10',
      urban_id: 73568,
      vehicle_accessibility_id: null,
      created_at: dateJs('today').toISOString().slice(0, 19).replace('T', ' '),
      updated_at: dateJs('today').toISOString().slice(0, 19).replace('T', ' '),
      deleted_at: null,
      creator_id: params.idUsers,
      longitude: 106.783,
      latitude: -6.14648,
      note_address: getModelValues('stores', params).noteAddress,
      top_selling_brand: 'SGM',
      most_wanted_brand: 'SGM',
      approval_status: 'verified',
      vehicle_accessibility_amount: 25,
      platform_created: 'agent_app',
    },
  };

  await seedingData(query);

  return storeCode;
};

/**
 * This function for seeding data delete by id on stores table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idStores stores id.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.stores',
    condition: {
      id: params.idStores,
    },
  };

  await seedingData(query);
};

/**
 * This function for seeding data delete by address on stores table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.address stores address.
 */
export const deleteByAddress = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.stores',
    condition: {
      address: params.address,
    },
  };

  await seedingData(query);
};
