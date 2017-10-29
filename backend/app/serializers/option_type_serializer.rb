class OptionTypeSerializer < BaseSerializer
  attributes :id, :name, :description, :presentation, :mandatory, :position,
             :show_option_value, :hide_option_value

  has_many :option_values, embed: :objects,
                        serializer: OptionValueSerializer

  has_many :children, embed: :objects,
                        serializer: OptionTypeSerializer
  has_many :option_case, embed: :objects,
                        serializer: OptionCaseSerializer
end