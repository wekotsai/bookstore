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
                <img src="${book.cover}" class="">
                <p>${book.title}</p>
                <p>${book.detail}</p>
                <p>${book.description}</p>
                <p>${book.language}</p>
            </div>
        `;
    });
    var books = document.getElementById('books');
    books.innerHTML = templateTest;
}

// quick search regex
var qsRegex;

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.container',
  layoutMode: 'fitRows',
  filter: function() {
    return qsRegex ? $(this).text().match( qsRegex ) : true;
  }
});

// use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}, 200 ) );

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

