class OptionTypeSerializer < BaseSerializer
<<<<<<< HEAD
  attributes :id, :name, :description, :presentation, :mandatory, :position,
             :show_option_value, :hide_option_value

  has_many :option_values, embed: :objects,
                        serializer: OptionValueSerializer

  has_many :children, embed: :objects,
                        serializer: OptionTypeSerializer
  has_many :option_case, embed: :objects,
                        serializer: OptionCaseSerializer
=======
  attributes :id, :name, :presentation, :position

  has_many :option_values, embed: :objects,
                        serializer: OptionValueSerializer
>>>>>>> 737778b7901ce1a596a5eb6c4e78d90987f0ab50
end