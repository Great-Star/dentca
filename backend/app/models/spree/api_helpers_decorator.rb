Spree::Api::ApiHelpers.class_eval do
  class_variable_set(:@@product_attributes, class_variable_get(:@@product_attributes).push(:comment_option))
end