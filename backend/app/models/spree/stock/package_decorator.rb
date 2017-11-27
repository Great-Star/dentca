Spree::Stock::Package.class_eval do
    def shipping_categories
        Spree::ShippingCategory.joins(products: :variants_including_master).where(id: user_shipping_category).distinct
    end

    def user_shipping_category
        Spree::User.find_by(id: order.user_id).shipping_category_id
    end
    
    # select consolidated shipping content from default package
    def on_consolidation    
        contents.find_all { |content| content.variant.is_consolidated }
    end
    
    # select separated shipping content from default package
    def on_separation       
        contents.find_all { |content| !content.variant.is_consolidated}
    end
end