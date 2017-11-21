class DropDownSerializer < ActiveModel::Serializer
  attributes :id, :name, :presentation, :position, :has_item, :slug

  def has_item
    object.has_item?
  end

  has_many :drop_down_items, embed: :objects,
                    serializer: DropDownItemSerializer
end
