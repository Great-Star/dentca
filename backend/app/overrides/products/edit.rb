Deface::Override.new(:virtual_path => "spree/admin/products/edit",
    :name => "add_javascript_function_field",
    :insert_before => "erb[silent]:contains(':page_actions')",
    :text => "<% content_for :head do %>
        <%= javascript_tag do %>
            $(document).ready(function(){
            console.log('asdasdasd');
            var isConsolidatedShip = function() {
                if ($('#consolidate_check').is(':checked'))
                    $('#product_shipping_type_field').hide();
                else
                    $('#product_shipping_type_field').show();
            }
            $('#consolidate_check').change( function() {
                isConsolidatedShip();
            })
            isConsolidatedShip();
            });
        <% end %>
    <% end %>")