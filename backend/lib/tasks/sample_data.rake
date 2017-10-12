namespace :db do
  desc 'Drop, create, migrate, seed and populate sample data'
  task prepare: [:drop, :create, :migrate, :seed, :sample_data] do
    puts 'Ready to go!'
  end

  desc 'Populates the database with sample data'
  task sample_data: :environment do
    # Spree::Product.create!(
    #   name: "Test Product1",
    #   description: "This is a Denture Product",
    #   available_on: "2017-10-01 00:00:00",
    #   shipping_category_id: 1,
    #   price: 120,
    #   sku: "TP-1")
  end
end