/**
* Author      : Aria Suseno (aria.suseno@sinbad.co.id)
* Modifier    :
* Domain      : discount
* Description : This File for Model Seeding Data on promo_seller_flexi_combo_conditions table
*/

import seedingData from '@at-api-core/seeding-data';

/**
 * This function for seeding data select by id on promo_seller_flexi_combo_conditions table.
 * @param {Number} promo_seller_flexi_combo_id promo_seller_flexi_combo_conditions promo_seller_flexi_combo_id.
 * @return {ArrayOfObject} result from db.
 */
export const selectById = async (promo_seller_flexi_combo_id) => {
  const query = {
    type: 'select',
    table: 'public.promo_seller_flexi_combo_conditions',
    condition: { promo_seller_flexi_combo_id },

  };

  const result = await seedingData(query, 'service_discount');

  return result;
};

/**
 * This function for seeding data delete by id on promo_seller_flexi_combo_conditions table.
 * @param {Object} params object on will be inserted with:
 * @param {Number} params.idPromoSellerFlexiComboConditions id from promo_seller_flexi_combo_conditions table.
 */
export const deleteById = async (params) => {
  const query = {
    type: 'remove',
    table: 'public.promo_seller_flexi_combo_conditions',
    condition: {
      id: params.idPromoSellerFlexiComboConditions,
    },
  };

  await seedingData(query, 'service_discount');
};
