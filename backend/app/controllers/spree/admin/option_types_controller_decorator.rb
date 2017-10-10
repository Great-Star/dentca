Spree::Admin::OptionTypesController.class_eval do
    before_action :load_data
    before_action :load_types, only: :edit
    before_action :save_child_ids, only: :update
    after_action :update_product_variant, only: :update

    attr_writer :child_one_id, :child_two_id

    def update_product_variant

        if @option_type.spree_option_case_id != 1
            return
        end

        Spree::ProductVariantType.all.each do |pvt|
            if pvt.name == @option_type.name
                if pvt.product_variant_values.length != @option_type.option_values.length
                    pvt.product_variant_values.clear
                    @option_type.option_values.each do |ov|
                        pvv = pvt.product_variant_values.build
                        pvv.name = ov.name
                        pvv.presentation = ov.presentation

                        pvt.product_variant_values << pvv
                    end

                end
            end
        end
    end

    def load_data
        @option_cases=Spree::OptionCase.order(:name)
    end

    def load_types
        @type_values=[]

        Spree::OptionType.all.each do |ot|
            if ot.id != @option_type.id && ot.spree_option_case_id != 1
                @type_values << ot
            end
        end
    end

    def value_index_includes
        [
            value_images: [viewable: { option_values: :option_type }]
        ]
    end

    private
        def save_child_ids
            # @option_type.child_option_type_ids=[@option_type.child_one_id, @option_type.child_two_id]
        end

    protected
        def location_after_save
            
            if @option_type.spree_option_case_id != 1
                @option_type.option_values.delete_all
            end

            if @option_type.created_at == @option_type.updated_at
                edit_admin_option_type_url(@option_type)
            else
                admin_option_types_url
            end
        end

end