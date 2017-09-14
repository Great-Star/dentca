Spree::Admin::OptionTypesController.class_eval do
    before_action :load_data, only: [:new, :edit]
    before_action :save_child_ids, only: :update

    attr_writer :child_one_id, :child_two_id

    def location_after_save
        
        if @option_type.comment
            @option_type.option_values.delete_all
        end

        if @option_type.created_at == @option_type.updated_at
            edit_admin_option_type_url(@option_type)
        else
            admin_option_types_url
        end
    end

    def load_data
        @option_cases=Spree::OptionCase.order(:name)
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
            @option_type.child_option_type_ids=[@option_type.child_one_id, @option_type.child_two_id]
        end
end