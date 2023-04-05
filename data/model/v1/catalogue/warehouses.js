/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : catalogue
* Description : This File for Model Seeding Data on warehouses table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on warehouses table.
 * @param {Number} id warehouses id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.warehouses',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query);

  return result;
};

/**
 * This function for seeding data delete by id on warehouses table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idWarehouses id from warehouses table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.warehouses',
    condition: {
      id: params.idWarehouses,
    },
  };

  await seedingData(query);
};
