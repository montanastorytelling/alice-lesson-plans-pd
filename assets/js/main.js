$(function () {

  function initSearchBox() {
    var pages = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      // datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,

      prefetch: baseurl + '/search.json'
    });

    $('#search-box').typeahead({
      minLength: 0,
      highlight: true
    }, {
        name: 'pages',
        display: 'title',
        source: pages
      });

    $('#search-box').bind('typeahead:select', function (ev, suggestion) {
      window.location.href = suggestion.url;
    });
  }

  function styleContentToMD() {
    $('#markdown-content-container table').addClass('table'); // TBODY
    $('#markdown-content-container .table').find('tr').find('td:first-child').addClass('text-nowrap'); // Disable Wrap on first table item
    $('#markdown-content-container img').addClass('img-responsive');
  }

  initSearchBox();
  styleContentToMD();
});
