onload = (function () {

    fetch('https://api.myjson.com/bins/8zpvs')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            printBooks(myJson.books)

        });

})();


function printBooks(myJson) {

    new Vue({
        el: '#app',
        data: {
            books: myJson,
            gallery: [],
        },
        //        myJson.forEach(bookName => {
        //         if(!this.gallery.includes(bookName)){
        //         this.gallery.push(bookName);
        //     }
    })
}
