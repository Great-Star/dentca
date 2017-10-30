class ImageSerializer < ActiveModel::Serializer
  attributes :id, :mini_url, :small_url, :large_url
  # , :position, :attachment_content_type, :attachment_file_name,
  #            :type, :attachment_updated_at, :attachment_width,
  #            :attachment_height, :alt, :viewable_type, :viewable_id,
  
  def mini_url
    object.attachment.url('mini')
  end

  def small_url
    object.attachment.url('small')
  end

  def large_url
    object.attachment.url('large')
  end

  private

  def image_styles
    Spree::Image.attachment_definitions[:attachment][:styles]
  end
end