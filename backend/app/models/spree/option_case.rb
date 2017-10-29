class Spree::OptionCase < ActiveRecord::Base
    has_many :option_types, class_name: "Spree::OptionType"
end
