# Spree::Api::V1::ProductsController.class_eval do
        
#     def index
#         if params[:ids]
#             @products = product_scope.where(id: params[:ids].split(",").flatten)
#         else
#             @products = product_scope.ransack(params[:q]).result(distinct: true).select("#{Spree::Product.table_name}.id AS count_column, #{Spree::Product.table_name}.*")
#         end

#         @products = @products.page(params[:page]).per(params[:per_page])
#         expires_in 15.minutes, public:  true
#         headers['Surrogate-Control'] = "max-age=#{15.minutes}"

#         respond_with(@products)
#     end
#     def show
#         @product = find_product(params[:id])

#         @product.price = 400
#         # calculate_product_price

#         expires_in 15.minutes, public: true
#         headers['Surrogate-Control'] = "max-age=#{15.minutes}"
#         headers['Surrogate-Key'] = "product_id=1"
#         respond_with(@product)
#     end

#     def calculate_product_price
#         Rails.logger.warn  "---------------------#{current_user.corporate_account_id}------------------"
#     end
# end