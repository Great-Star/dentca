class DropDownSerializer < ActiveModel::Serializer
  attributes :id, :name, :presentation
  
  has_many :maintainable_pages, embed: :objects,
                    serializer: MaintainablePageSerializer

  has_many :drop_down_items, embed: :objects,
                    serializer: DropDownItemSerializer
end
