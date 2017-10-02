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

        creat_order_info(variant, params[:line_item][:variants], params[:line_item][:price]);

        if @line_item.errors.empty?
            respond_with(@line_item, status: 201, default_template: :show)
        else
            invalid_resource!(@line_item)
        end
    end

    def creat_order_info(master, variants, price)
        order_info = @line_item.order_infos.build
        
        context = ""
       
        if variants
            variants.each do |id|
                context += "#{Spree::Variant.find(id).options_text} "
            end
        end

        order_info.context = context
        order_info.price = price
        
        @line_item.price = price
        
        @line_item.order_infos.clear
        @line_item.order_infos << order_info
        @line_item.save
    end
end