Spree::Api::ApiHelpers.class_eval do
  class_variable_set(:@@product_attributes, class_variable_get(:@@product_attributes).push(:file_up_load))
  # class_variable_set(:@@option_type_attributes, class_variable_get(:@@option_type_attributes).push(:comment))
  class_variable_set(:@@option_type_attributes, class_variable_get(:@@option_type_attributes).push(:spree_option_case_id))
end