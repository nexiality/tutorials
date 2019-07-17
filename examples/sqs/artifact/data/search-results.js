'use strict';

// function fetchJsonData(sink) { $.getJSON(JSON_URL, function (json_data) { sink.searchResult = json_data; }); }

function bigImage(img) {
  let image = $(img);
  image.height("unset");
  image.width("120px");
}

function smallImage(img) {
  let image = $(img);
  image.height("36px");
  image.width("36px");
}

let app = new Vue({
  el:         '#app',
  data:       {searchResult: searchResult},
  components: {},
  // mounted:    function () { fetchJsonData(this); },
  methods:    {
    formatDateTime: function (/*Int*/epoch) {
      return !epoch || epoch === '' ? '' : moment(epoch).format('YYYY/MM/DD HH:mm:ss');
    },
    formatPrice:    function (amount) {
      if (!amount) { return ''; }
      if (amount.match(/^\$.+/)) { amount = amount.substring(1); }

      let neg = false;
      if (amount < 0) {
        neg    = true;
        amount = Math.abs(amount);
      }

      return (neg ? "-$" : '$') + parseFloat(amount, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
    },
    formatShipping: function (shipping) {
      if (!shipping) { return ''; }
      if (shipping.match(/^\$?[\d\.\-]+/)) { return this.formatPrice(shipping); }
      if (shipping.toLowerCase().indexOf('free') !== -1) { return 'FREE'; }
      return shipping;
    }
  }
});

$(document).ready(function () {
  window.setInterval(function () { fetchJsonData(app); }, 1000);
  $('#search-results').DataTable();
  document.title = 'Search Result for ' + app.searchResult.searchTerms;
});
