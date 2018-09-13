myBooks = null;

onload = (function () {

    fetch('https://api.myjson.com/bins/8zpvs')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            printBooks(myJson.books)
            myBooks = myJson.books;
        });

})();

//display books
function printBooks(myBooks) {

    var templateTest = '';

    myBooks.forEach(book => {
        templateTest += `
        <div class="book">
            <div class="f1_card">
                <div class="front face">
                       <img src="${book.cover}">
                </div>
                <div class="element-item back face center">
                   <ul class="myUL">
                     <li><p>Title: ${book.title}</p></li>
                     <li><p>Description: ${book.description}</p></li>
                     <li><p>Language: ${book.language}</p></li>
                     <li><p class="imglist"><a href="${book.detail}" data-fancybox="images">More details...</a></p></li>
                   </ul>
                </div>
            </div>
        </div>
        `;
    });
    var books = document.getElementById('books');
    books.innerHTML = templateTest;
}

//search bar
function myFunction(myBooks) {

    var input, filter, ul, li, p, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("myUL");

    for (let j = 0; j < ul.length; j++) {

        li = ul[j].getElementsByTagName("li");
        let showBook = false;

        for (i = 0; i < li.length; i++) {
            p = li[i].getElementsByTagName("p")[0];

            if (p.innerHTML.toUpperCase().includes(filter)) {

                showBook = true;
            }

        }
        if (!showBook) {
            ul[j].parentElement.parentElement.parentElement.style.display = "none";
        } else {
            ul[j].parentElement.parentElement.parentElement.style.display = "block";
        }
    }
}

//fancy box
$('[data-fancybox="images"]').fancybox({
    afterLoad: function (instance, current) {
        var pixelRatio = window.devicePixelRatio || 1;

        if (pixelRatio > 1.5) {
            current.width = current.width / pixelRatio;
            current.height = current.height / pixelRatio;
        }
    }
});
