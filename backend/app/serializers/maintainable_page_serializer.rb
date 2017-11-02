class MaintainablePageSerializer < ActiveModel::Serializer
  attributes :id, :name, :link, :content
end
