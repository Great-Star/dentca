Rails.application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  # This line mounts Spree's routes at the root of your application.
  # This means, any requests to URLs such as /products, will go to Spree::ProductsController.
  # If you would like to change where this engine is mounted, simply change the :at option to something different.
  #
  # We ask that you don't use the :as option here, as Spree relies on it being the default of "spree"
  # mount Spree::Core::Engine, at: '/spree'
  
  root :to => 'spree/admin/root#index'

  # Main application routes
  scope '/api', module: 'api', defaults: {format: :json} do
    resources :taxonomies, only: :index
    get 'taxons/*permalink', to: 'taxons#show'
    resources :products, only: %i(index show)
    resource :cart do
      post :add_variant
      post :guest_login
      put :update_variant
      put :change_variant
      put :remove_adjustment
      delete :remove_variant
    end
    resource :account
    resources :passwords
    resources :credit_cards, only: :destroy
    resources :addresses, only: :destroy
    resources :countries, only: :index
    resources :orders, only: %i(index show)
    resource :corporate_accounts
    resources :option_cases
    resources :drop_downs do
      member do
        get :jstree
      end
      resources :drop_down_items do
        member do
          get :jstree
        end
      end
    end
    resources :maintainable_pages
  end

  mount Spree::Core::Engine, at: '/spree'

  Spree::Core::Engine.add_routes do
    namespace :admin do
      resources :order_info_options
      resources :coupons
      resources :products do
        resources :product_variant_types do
          collection do
            post :update_positions
          end
        end
        resources :product_variant_values 
      end
      resources :corporate_accounts
      resources :product_price_sets
      resources :product_prices
      resources :drop_downs do
        collection do
          post :update_positions
          post :update_items_positions
        end
      end
      resources :drop_down_items
      resources :maintainable_pages
    end
  end

end
