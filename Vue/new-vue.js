onload = (function () {

    fetch('https://api.myjson.com/bins/8zpvs')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            printBooks(myJson.books)

        });

})();

// vue search bar
function printBooks(myJson) {

    new Vue({
        el: '#app',
        data: {
            books: myJson,
            searchvalue: "",
        },
        computed:{
            filteredBooks(){
                return this.books.filter(book => {
                    return book.title.toUpperCase().includes(this.searchvalue.toUpperCase());
                });
            }
          },
        })

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




