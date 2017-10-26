class OptionTypeSerializer < BaseSerializer
  attributes :id, :name, :presentation, :position

  has_many :option_values, embed: :objects,
                        serializer: OptionValueSerializer
end