Spree::Api::ApiHelpers.class_eval do
  
  #Add description and option case to option type
  class_variable_set(:@@option_type_attributes, class_variable_get(:@@option_type_attributes).push(:description))
  class_variable_set(:@@option_type_attributes, class_variable_get(:@@option_type_attributes).push(:spree_option_case_id))
  class_variable_set(:@@option_type_attributes, class_variable_get(:@@option_type_attributes).push(:mandatory))
  class_variable_set(:@@option_type_attributes, class_variable_get(:@@option_type_attributes).push(:image))
  class_variable_set(:@@option_type_attributes, class_variable_get(:@@option_type_attributes).push(:child_option_types))
  class_variable_set(:@@option_type_attributes, class_variable_get(:@@option_type_attributes).push(:child_one_id))
  class_variable_set(:@@option_type_attributes, class_variable_get(:@@option_type_attributes).push(:child_two_id))
  
  class_variable_set(:@@product_attributes, class_variable_get(:@@product_attributes).push(:adj_sku))
  class_variable_set(:@@product_attributes, class_variable_get(:@@product_attributes).push(:spree_product_variant_types))
  class_variable_set(:@@product_attributes, class_variable_get(:@@product_attributes).push(:product_prices))
  class_variable_set(:@@product_attributes, class_variable_get(:@@product_attributes).push(:product_price_sets))

  class_variable_set(:@@variant_attributes, class_variable_get(:@@variant_attributes).push(:order_info_id))
  class_variable_set(:@@variant_attributes, class_variable_get(:@@variant_attributes).push(:is_clone))

  class_variable_set(:@@line_item_attributes, class_variable_get(:@@line_item_attributes).push(:order_info))
  class_variable_set(:@@line_item_attributes, class_variable_get(:@@line_item_attributes).push(:adjust_order_number))
  class_variable_set(:@@option_value_attributes, class_variable_get(:@@option_value_attributes).push(:image))
  
  class_variable_set(:@@user_attributes, class_variable_get(:@@user_attributes).push(:doctor))
  class_variable_set(:@@user_attributes, class_variable_get(:@@user_attributes).push(:license))
  class_variable_set(:@@user_attributes, class_variable_get(:@@user_attributes).push(:product_price_set_id))
  class_variable_set(:@@user_attributes, class_variable_get(:@@user_attributes).push(:corporate_account_id))

  class_variable_set(:@@order_attributes, class_variable_get(:@@order_attributes).push(:original_line_item))

end