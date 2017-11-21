class DropDownItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :presentation, :drop_down_id, :position, :slug
end
