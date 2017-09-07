Spree::Api::V1::LineItemsController.class_eval do
    class_attribute :line_item_options

    # def create
    #     variant = Spree::Variant.find(params[:line_item][:variant_id])

    #     Rails.logger.warn "Param variants#{params[:line_item][:variants]}"
    #     @line_item = order.contents.add(
    #         variant,
    #         params[:line_item][:quantity] || 1,
    #         line_item_params[:options] || {},
    #         params[:line_item][:variants]
    #     )

    #     # params[:line_item][:variants].each do |x|
    #     #     @line_item.variants << x
    #     # end

    #     if @line_item.errors.empty?
    #         respond_with(@line_item, status: 201, default_template: :show)
    #     else
    #         invalid_resource!(@line_item)
    #     end
    # end

end