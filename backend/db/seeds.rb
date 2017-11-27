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
Spree::OptionCase.create({"name" => "Option Group"})

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

Spree::CenterApplication.create(
  id: "1",
  office_name: "Texas Sedation Dental & Implant Center",
  head_doctor: "Dr. Travis l. Kendall",
  address: Spree::Address.create(
    id: "3",
    firstname: "Travis",
    lastname: "Kendall",
    address1: "300 W. Cotton St.",
    address2: "Suite 1",
    city: "Longview",
    zipcode: "75601",
    phone: "903-758-5551",
    state_id: 3571,
    country_id: 232
  ),
  email: "traviskendall1@gmail.com",
  website: "http://www.texassedationdental.com/",
  num_of_doctors: 1,
  num_of_staff: 1,
  college: "Tufts University School of Dental Medicine",
  degree: "Doctor of Dental Surgery",
  state: "activated"
)
Spree::CenterApplication.create(
  id: "2",
  office_name: "Mountain Park Dentistry, LLC",
  head_doctor: "Dr. Randy Mow",
  address: Spree::Address.create(
    id: "4",
    firstname: "Randy",
    lastname: "Mow",
    address1: "15215 South 48th Street",
    address2: "Suite 175",
    city: "Phoenix",
    zipcode: "85044",
    phone: "480-759-9300",
    state_id: 3528,
    country_id: 232
  ),
  email: "mpdsmiles@gmail.com",
  website: "http://drmowdds.com/",
  num_of_doctors: 5,
  num_of_staff: 5,
  college: "Henry Goldman School of Dental Medicine",
  degree: "Doctor of Dental Medicine",
  state: "activated"
)
Spree::CenterApplication.create(
  id: "3",
  office_name: "Henry Kim DMD PC",
  head_doctor: "Dr. Hyunyil Henry Kim",
  address: Spree::Address.create(
    id: "5",
    firstname: "Henry",
    lastname: "Kim",
    address1: "25982 Pala Dr.",
    address2: "Suite 200",
    city: "Mission Viejo",
    zipcode: "92691",
    phone: "949-472-5499",
    state_id: 3529,
    country_id: 232
  ),
  email: "info@henrykimdmdpc.com",
  website: "http://www.henrykimdmdpc.com/",
  num_of_doctors: 10,
  num_of_staff: 10,
  college: "Nova Southeastern University College of Dental Medicine",
  degree: "Doctor of Dental Omnipotence",
  state: "activated"
)

Spree::ShippingType.create(name: "Free")
Spree::ShippingType.create(name: "1 Way")
Spree::ShippingType.create(name: "2 Way")