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
        methods: {
            filter() {
                let searchValue = document.getElementById("myInput");
                let allBooks = Array.from(document.getElementsByClassName("book"));
                
                allBooks.forEach(item => {
                    var match = item.innerHTML.toUpperCase().includes(searchValue.value.toUpperCase());

                    if (match) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }

                })
            }
        }

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
