class AddCommentOptionToProducts < ActiveRecord::Migration
  def change
    add_column :spree_products, :comment_option, :boolean, default: false
  end
end
