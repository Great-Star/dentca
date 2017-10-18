$(document).ready(function () {
  'use strict';

  function formatOptionType(option_type) {
    console.log(option_type);
    return Select2.util.escapeMarkup(option_type.presentation + ' (' + option_type.name + ')');
  }

  if ($('#option_type_child_ids').length > 0) {
    $('#option_type_child_ids').select2({
      placeholder: Spree.translations.option_type_placeholder,
      multiple: true,
      initSelection: function (element, callback) {
        var url = Spree.url(Spree.routes.option_type_search, {
          ids: element.val(),
          token: Spree.api_key
        });
        console.log("collback", element);
        return $.getJSON(url, null, function (data) {
          return callback(data);
        });
      },
      ajax: {
        url: Spree.routes.option_type_search,
        quietMillis: 200,
        datatype: 'json',
        data: function (term) {
          return {
            q: {
              name_cont: term
            },
            token: Spree.api_key
          };
        },
        results: function (data) {
          return {
            results: data
          };
        }
      },
      formatResult: formatOptionType,
      formatSelection: formatOptionType
    });
  }
});
