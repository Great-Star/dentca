class LiteLineItemSerializer < BaseSerializer
  attributes :id, :number, :single_display_amount, :display_amount, :total, :adjustment_slug, :product_name, :product_slug, :image_url, :test

  def product_name
    object.variant.name
  end

  def test
    object.number
  end

  def product_slug
    object.variant.slug
  end

  def image_url
    if object.variant.images.first
      object.variant.images.first.attachment.url('small')
    end
  end
end