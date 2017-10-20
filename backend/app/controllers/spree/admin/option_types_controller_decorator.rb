Spree::Admin::OptionTypesController.class_eval do
    before_action :load_data
    before_action :load_types, only: :edit
    before_action :save_child_ids, only: :update
    after_action :update_product_variant, only: :update

    attr_writer :child_one_id, :child_two_id

    def update_product_variant

        if @option_type.option_case.name != "Selection"
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
        @option_cases=Spree::OptionCase.all
    end

    def load_types
        @type_values=[]

        @type_values = Spree::OptionType.all.reject{|type| 
            type.option_case.name != "Selection"
        }

        if !@option_type.first_child_id
            @option_type.first_child_id = @type_values[0].id
        end
        
        @second_childs = Spree::OptionType.all.reject{|type|
            type.option_case.name == "Selection" ||
            type.option_case.name == "Option Select" ||
            type.option_case.name == "Option Group"
        }

    end

    def value_index_includes
        [
            value_images: [viewable: { option_values: :option_type }]
        ]
    end

    private
        def save_child_ids
            if params[:option_type][:child_ids].present?
                params[:option_type][:child_ids] = params[:option_type][:child_ids].split(',')
            end
        end
    protected
        def location_after_save
            
            if @option_type.option_case.name != "Selection"
                @option_type.option_values.delete_all
            end

            if @option_type.created_at == @option_type.updated_at
                edit_admin_option_type_url(@option_type)
            else
                admin_option_types_url
            end
        end

end