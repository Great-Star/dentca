class AddProductPriceSetToSpreeUsers < ActiveRecord::Migration
  def change
    add_reference :spree_users, :product_price_set, class_name: "Spree::ProductPriceSet", index: true 
  end
end
