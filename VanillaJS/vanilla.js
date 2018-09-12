onload = (function () {

    fetch('https://api.myjson.com/bins/8zpvs')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            //        console.log(myJson.books);

            printBooks(myJson.books)

        });

})();

//print books
function printBooks(myBooks) {

    console.log(myBooks);

    var templateTest = '';

    myBooks.forEach(book => {
        templateTest += `
        <div class="book">
            <div class="f1_card">
                <div class="front face">
                    <img src="${book.cover}">
                </div>
                <div class="element-item back face center">
                    <p>Title: ${book.title}</p>
                    <p>Detail: ${book.detail}</p>
                    <p>Description: ${book.description}</p>
                    <p>Language: ${book.language}</p>
                </div>
            </div>
        </div>
        `;
    });
    var books = document.getElementById('books');
    books.innerHTML = templateTest;
}

// quick search regex
var qsRegex;
var buttonFilter;

// init Isotope
var $book = $('.book').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
    return searchResult && buttonResult;
  }
});

$('#filters').on( 'click', 'button', function() {
  buttonFilter = $( this ).attr('data-filter');
  $book.isotope();
});

// use value of search field to filter
var $quicksearch = $('#quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $book.isotope();
}) );


  // change is-checked class on buttons
$('.button').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
  });
});
  

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}


