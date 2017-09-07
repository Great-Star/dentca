# module Spree
#     OrderContents.class_eval do

#         def add(variant, quantity = 1, options = {}, variants = [])
#             timestamp = Time.current
#             Rails.logger.warn "--------------------here#{variants}--------------------"
#             line_item = add_to_line_item(variant, quantity, options, variants)
#             options[:line_item_created] = true if timestamp <= line_item.created_at
#             after_add_or_remove(line_item, options)
#         end

#         def add_to_line_item(variant, quantity, options = {}, variants = {})

        
#             line_item = grab_line_item_by_variant(variant, false, options, variants)
#             if line_item
#                 line_item.quantity += quantity.to_i
#                 line_item.currency = currency unless currency.nil?
#                 # line_item.variants = variants
#             else
#                 options_params = options.is_a?(ActionController::Parameters) ? options : ActionController::Parameters.new(options.to_h)
#                 opts = options_params.
#                     permit(PermittedAttributes.line_item_attributes).to_h.
#                     merge( { currency: order.currency } )
#                 line_item = order.line_items.new(quantity: quantity,
#                                                 variant: variant,
#                                                 options: opts,
#                                                 variants: variants)
#                 # line_item.variants = variants
#             end

#             variants.each do |x|
#                 line_item.variants << x
#             end

#             line_item.target_shipment = options[:shipment] if options.has_key? :shipment
#             line_item.save!
#             line_item
#         end

#         def grab_line_item_by_variant(variant, raise_error = false, options = {}, variants = {})
#             line_item = order.find_line_item_by_variant(variant, options, variants)

#             if !line_item.present? && raise_error
#                 raise ActiveRecord::RecordNotFound, "Line item not found for variant #{variant.sku}"
#             end

#             line_item
#         end

#     end
# end