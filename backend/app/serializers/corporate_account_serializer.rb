class CorporateAccountSerializer < ActiveModel::Serializer
  attributes :id, :company_id, :company_name, :email, :password, :checkout_password, :company, :address1, :address2, :city, :state_name, :state_id,
              :country_id, :zip_code, :contact_phone, :address, :shipping_category_id, :product_price_set_id

    belongs_to :country, class_name: "Spree::Country", serializer: CountrySerializer
    belongs_to :state, class_name: "Spree::State", serializer: StateSerializer

    has_many :users, class_name: "Spree::User"              
end
