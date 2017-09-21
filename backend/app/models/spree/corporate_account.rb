class Spree::CorporateAccount < Spree::Base
    before_save :address_email_save
    
    validates :company_id, presence: true
    validates :company_name, presence: true
    validates :email, presence: true
    validates :country, presence: true
    validates :state, presence: true
    validates :zip_code, presence: true
    validates :contact_phone, presence: true
    validates :address1, presence: true
    validates :city, presence: true

    validates :password, length: {minimum: 6}
    validates :checkout_password, length: {minimum: 6}

    validates_confirmation_of :password
    validates_confirmation_of :checkout_password

    belongs_to :country, class_name: "Spree::Country"
    belongs_to :state, class_name: "Spree::State"

    belongs_to :spree_shipping_categories, :foreign_key => "shipping_category_id"
    belongs_to :spree_product_price_sets, :foreign_key => "product_price_set_id"

    def address_email_save
        self.email = email.downcase
        self.address = [self.address1, self.address2, self.city, self.state, self.country] * ','
    end

end
