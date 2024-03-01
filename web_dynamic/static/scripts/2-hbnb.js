#!/usr/bin/node
$(document).ready(function () {
    var amenities = {};
    $('input[type="checkbox"]').change(function () {
      if (this.checked) {
        amenities[$(this).data('id')] = $(this).data('name');
      } else {
        delete amenities[$(this).data('id')];
      }
      if (Object.keys(amenities).length > 0) {
        $('.amenities h4').text(Object.values(amenities).join(', '));
      } else {
        $('.amenities h4').html('&nbsp;');
      }
      $.get('http://0.0.0.0:5001/api/v1/status/', function(data, status) {
        if (status === 'success' && data.status === 'OK') {
          $('#api_status').addClass('available');
        } else {
          $('#api_status').removeClass('available');
        }
      })
    }
    );
  });
  