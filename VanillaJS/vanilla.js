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
            <div class="container">
                <img src="${book.cover}" class="col-sm-4 mt-3">
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
//let template = ""
