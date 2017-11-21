Spree::Api::V1::LineItemsController.class_eval do
    class_attribute :line_item_options

    def create
        variant = Spree::Variant.find(params[:line_item][:variant_id])

        Rails.logger.warn "Param variants#{params[:line_item][:variants]}"
        @line_item = order.contents.add(
            variant,
            params[:line_item][:quantity] || 1,
            line_item_params[:options] || {}
        )

        creat_order_info(variant,  params[:line_item][:price], params[:line_item][:original_line_item]);
        if @line_item.errors.empty?
            respond_with(@line_item, status: 201, default_template: :show)
        else
            invalid_resource!(@line_item)
        end
    end

    # code to do update

    def creat_order_info(master, price, origin)
        context = ""
        
        adj_slug =""
        Spree::Product.all.each do |product|
            if product.sku == Spree::Product.find(master.product_id).adj_sku && product.sku != ""
                adj_slug = product.slug
            end
        end
        @line_item.options_context = context
        @line_item.adjustment_slug = adj_slug
        @line_item.adjust_order_number = origin
        @line_item.ordered_price = price
        @line_item.price = price
        @line_item.save!
    end
end