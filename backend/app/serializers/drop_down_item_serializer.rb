class DropDownItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :presentation, :drop_down_id, :position, :slug

  has_many :maintainable_pages, embed: :objects,
                    serializer: MaintainablePageSerializer
end
