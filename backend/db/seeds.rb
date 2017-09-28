# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# require 'csv'

Spree::Core::Engine.load_seed if defined?(Spree::Core)
Spree::Auth::Engine.load_seed if defined?(Spree::Auth)

Spree::OptionCase.create({"name" => "Selection"})
Spree::OptionCase.create({"name" => "Text"})
Spree::OptionCase.create({"name" => "FileUpLoad"})
Spree::OptionCase.create({"name" => "Checkbox"})
Spree::OptionCase.create({"name" => "TextArea"})
Spree::OptionCase.create({"name" => "Description"})
Spree::OptionCase.create({"name" => "Image"})
Spree::OptionCase.create({"name" => "Option Select"})
Spree::OptionCase.create({"name" => "Button"})

Spree::Role.create(name: "corporate user")
Spree::Role.create(name: "doctor")
Spree::Role.create(name: "dentca 4 doctor")
Spree::Role.create(name: "vip doctor")
Spree::Role.create(name: "operator")
Spree::Role.create(name: "school")

Spree::BillingType.create(name: "Credit Card")
Spree::BillingType.create(name: "Post Bill")
Spree::BillingType.create(name: "Individual")

Spree::ProductPriceSet.create(name: "Default")