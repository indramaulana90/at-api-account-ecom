/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : catalogue
* Description : This File for Model Seeding Data on warehouse_catalogues table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on warehouse_catalogues table.
 * @param {Number} id warehouse_catalogues id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.warehouse_catalogues',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query);

  return result;
};

/**
 * This function for seeding data delete by id on warehouse_catalogues table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idWarehouseCatalogues id from warehouse_catalogues table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.warehouse_catalogues',
    condition: {
      id: params.idWarehouseCatalogues,
    },
  };

  await seedingData(query);
};
