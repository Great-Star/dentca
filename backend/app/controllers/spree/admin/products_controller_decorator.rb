
Spree::Admin::ProductsController.class_eval do
    # before_action :update_variant, only: :update
    # after_action :create_variant_1, only: :update

    def update
        if params[:product][:taxon_ids].present?
            params[:product][:taxon_ids] = params[:product][:taxon_ids].split(',')
        end
        if params[:product][:option_type_ids].present?
            params[:product][:option_type_ids] = params[:product][:option_type_ids].split(',')
        end

        invoke_callbacks(:update, :before)

        if @object.update_attributes(permitted_resource_params)
            invoke_callbacks(:update, :after)

            # update_variant
            # create_clone_variant

            flash[:success] = flash_message_for(@object, :successfully_updated)

            respond_with(@object) do |format|
                format.html { redirect_to location_after_save }
                format.js   { render layout: false }
            end
        else
            # Stops people submitting blank slugs, causing errors when they try to
            # update the product again
            @product.slug = @product.slug_was if @product.slug.blank?
            invoke_callbacks(:update, :fails)
            respond_with(@object)
        end
    end
    
    def stock
        @variants = [@product.master]
        @stock_locations = Spree::StockLocation.accessible_by(current_ability, :read)
        if @stock_locations.empty?
            flash[:error] = Spree.t(:stock_management_requires_a_stock_location)
            redirect_to admin_stock_locations_path
        end
    end
end
