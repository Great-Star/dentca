module Spree
    module Admin
        class ProductPriceSetsController < ResourceController
            before_action :setup_new_product_price, only: :edit

            def setup_new_product_price
                @product_price_set.product_prices.build if @product_price_set.product_prices.empty?
            end

            private 
                def product_price_set_params
                    params.require(:product_price_set).permit(:name, product_prices_attributes: [:id, :price, :product_id])
                end
        end
    end
end
