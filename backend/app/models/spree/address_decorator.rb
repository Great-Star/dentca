Spree::Address.class_eval do
  has_one :center_application, inverse_of: :address
end