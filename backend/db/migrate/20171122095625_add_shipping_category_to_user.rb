class AddShippingCategoryToUser < ActiveRecord::Migration
  def change
    add_reference :spree_users, :shipping_category, class_name: "Spree::ShippingCategory", index: true
  end
end
