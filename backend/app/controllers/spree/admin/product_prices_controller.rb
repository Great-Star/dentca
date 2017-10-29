module Spree
    module Admin
        class ProductPricesController < ResourceController
            def destroy
                product_price = Spree::ProductPrice.find(params[:id])
                product_price.destroy
                render plain: nil
            end
        end
    end
end
