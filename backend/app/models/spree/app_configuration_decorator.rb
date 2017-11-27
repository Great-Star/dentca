Spree::AppConfiguration.class_eval do
  preference :center_applications_per_page, :integer, default: 15
end