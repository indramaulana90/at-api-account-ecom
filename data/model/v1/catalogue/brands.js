/**
* Author      : Farhad (farhad@sinbad.co.id)
* Modifier    :
* Domain      : catalogue
* Description : This File for Model Seeding Data on brands table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on brands table.
 * @param {Number} id brands id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (id) => {
  const query = {
    type: 'select',
    table: 'public.brands',
    condition: { id },
    limit: 5,
  };

  const result = await seedingData(query);

  return result;
};

/**
 * This function for seeding data delete by id on brands table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idBrands id from brands table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.brands',
    condition: {
      id: params.idBrands,
    },
  };

  await seedingData(query);
};
