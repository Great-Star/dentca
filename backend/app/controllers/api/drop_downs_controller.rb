module Api
    class DropDownsController < BaseController
        def index
            @drop_downs = Spree::DropDown.all

            render json: @drop_downs,
                    include: '**',
                    each_serializer: DropDownSerializer
        end

        def show
            respond_with drop_down
        end

        private

        def drop_down
            @drop_down = Spree::DropDown.find_by!(name: params[:id])
        end
    end
end