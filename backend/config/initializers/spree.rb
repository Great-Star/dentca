# Configure Spree Preferences
#
# Note: Initializing preferences available within the Admin will overwrite any changes that were made through the user interface when you restart.
#       If you would like users to be able to update a setting with the Admin it should NOT be set here.
#
# Note: If a preference is set here it will be stored within the cache & database upon initialization.
#       Just removing an entry from this initializer will not make the preference value go away.
#       Instead you must either set a new value or remove entry, clear cache, and remove database entry.
#
# In order to initialize a setting do:
# config.setting_name = 'new value'
Spree.config do |config|
  # Example:
  # Uncomment to stop tracking inventory levels in the application
  # config.track_inventory_levels = false
    # config.override_actionmailer_config = false
    # config.mails_from = "no-reply@yourdomain.com" 
  # config.action_view.raise_on_missing_translations = true
end

Spree.user_class = "Spree::User"
Spree::Store.current.name = "den"

Spree::PrintInvoice::Config.set(logo_path: '/path/to/public/images/company-logo.png')
Spree::PrintInvoice::Config.set( page_layout: :portrait, page_size: 'A4')
Spree::PrintInvoice::Config.set(store_pdf: true) # Default: false
Spree::PrintInvoice::Config.set(storage_path: 'pdfs/orders') # Default: tmp/order_prints
# Spree::PrintInvoice::Config.set(print_buttons: 'invoice')

Spree::Api::Config[:requires_authentication] = false
