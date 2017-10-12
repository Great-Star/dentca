class AddAdjProductSlugToOrderInfo < ActiveRecord::Migration
  def change
    add_column :spree_order_infos, :adj_slug, :string
  end
end
