Deface::Override.new(:virtual_path => "spree/admin/products/edit",
    :name => "add_javascript_function_field",
    :insert_before => "erb[silent]:contains(':page_actions')",
    :text => "<% content_for :head do %>
        <%= javascript_tag do %>
            $(document).ready(function(){
                var isConsolidatedShip = function() {
                    if ($('#consolidate_check').is(':checked')){
                        console.log('selected', $('#product_shipping_type_field .select2').val());
                        $('#product_shipping_type_field .select2').val(2).trigger('change');
                    }
                }
                $('#product_shipping_type_field .select2').on('select2-selecting', function(e) { 
                    if (e.val != 2) 
                        $('#consolidate_check').prop('checked', false)
                });

                $('#consolidate_check').change( function() {
                    isConsolidatedShip();
                })
                isConsolidatedShip();
            });
        <% end %>
    <% end %>")