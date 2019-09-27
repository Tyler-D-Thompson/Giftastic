$(document).ready(function () {
    // initial array of animals
    var animals = ["sharks", "Elephant", "Eagle", "Giraffe"];
    // function for displaying animal data
    function renderButtons() {
        var animal = $(this).attr("data-animal");
        // constructing the url to search gify
        var queryURL = + "https://api.giphy.com/v1/gifs/search?q="
        animal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
        // performing ajax call
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                //   storing an array of results
                var results = Response.data;
                for (let i = 0; i < results.length; i++) {

                    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                        //creating a div for the gif
                        var gifDiv = $("<div>");
                        // storing the result items rating
                        var rating = results[i].rating;
                        // creating a paragraph tag with the results items rating
                        var p = $("<p>").text("Rating: " + rating);
                        // creating an image tag
                        var animalImage = $("<img>");
                        // giving image tag a src attr
                        animalImage.attr("src", results[i].images.fixed_height.url);
                        // append img to p
                        gifDiv.append(p);
                        gifDiv.append(animalImage);

                        $("#gifs-appear-here").prepend(gifDiv);
                    };
                });
    }

    function renderButtons() {
        var animal = $(this).attr("data-animal");
        // constructing the url to search gify


        // event listner for all button elements
        $("button").on("click", function () {
            // this refers to the button that was clicked

            // deleting the animal buttons prior to adding new animal buttons 
            $("button-view").empty();

            for (let i = 0; i < animals.length; i++) {
                // then dynamically generate buttons for each movie in the array
                var a = $("<button>");
                // adding class
                a.addClass("animal");
                // adding a data-attribute with the value of the movie at index i
                a.attr("data-name", animals[i]);
                // providing the buttons text with a value of the animal at index i
                a.text(movies[i]);
                // adding button to the html
                $("#button-view").append(a);
            }

        }
    // this function handles events where one button is clicked
    $("#add-animal").on("click", function (event) {
            // prevent form from trying to submit itself
            event.preventDefault();

            // this line will grab text from the input box
            var animal = $("#animal-input").val().trim();
            // the movie from the text box is then added to the array
            animals.push(animal);

            renderButtons();

        })
    renderButtons();





        // event listner for all button elements
        $("button").on("click", function () {
            // this refers to the button that was clicked

            // performing ajax call
            $.ajax({
                url: queryURL,
                method: "GET"
            })

        }