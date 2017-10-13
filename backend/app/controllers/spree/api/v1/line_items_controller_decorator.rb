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

        creat_order_info(variant, params[:line_item][:variants] || {}, params[:line_item][:price], params[:line_item][:original_line_item]);
        if @line_item.errors.empty?
            respond_with(@line_item, status: 201, default_template: :show)
        else
            invalid_resource!(@line_item)
        end
    end

    def creat_order_info(master, variants, price, origin)
        context = ""
        variants.each do |id|
            context += "#{Spree::Variant.find(id).options_text}"
        end
        
        adj_slug =""
        Spree::Product.all.each do |product|
            if product.sku == Spree::Product.find(master.product_id).adj_sku
                adj_slug = product.slug
            end
        end

        order_info = Spree::OrderInfo.create(context: context, price: price, line_item_id: @line_item.id, adj_slug: adj_slug, original_line_item: origin)
        Rails.logger.warn "-------------------------OrderInfo #{origin}--------------------------------"

        @line_item.price = price
    end
end