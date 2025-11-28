// Näytetään latausanimaatio (spinner näkyviin)
function showLoader() {
    $("#loader").removeClass("d-none");
}

// Piilotetaan latausanimaatio (spinner pois näkyvistä)
function hideLoader() {
    $("#loader").addClass("d-none");
}

// Kun painetaan "Näytä kissa" -nappia
$("#catBtn").on("click", function () {
    showLoader(); // näytä spinner

    // Hae satunnainen kissakuva API:sta
    axios.get("https://api.thecatapi.com/v1/images/search")
        .then(function (response) {
            const imageUrl = response.data[0].url;

            // Näytä kuva kortissa
            $("#animalImage").attr("src", imageUrl).removeClass("d-none");

            // Päivitä otsikko
            $("#animalTitle").text("🐱 Kissa");

            // Pidä napit oikeissa väreissä
            $("#catBtn").css({
                "background-color": "#cf7583ff",
                "border-color": "#cf7583ff",
                "color": "white"
            });
            $("#dogBtn").css({
                "background-color": "#85c6dcff",
                "border-color": "#85c6dcff",
                "color": "white"
            });
        })
        .catch(function (error) {
            console.error(error);
            $("#animalTitle").text("Virhe ladattaessa kissakuvaa.");
        })
        .finally(function () {
            hideLoader(); // piilota spinner
        });
});

// Kun painetaan "Näytä koira" -nappia
$("#dogBtn").on("click", function () {
    showLoader(); // näytä spinner

    // Hae satunnainen koirakuva API:sta
    axios.get("https://dog.ceo/api/breeds/image/random")
        .then(function (response) {
            const imageUrl = response.data.message;

            // Näytä kuva kortissa
            $("#animalImage").attr("src", imageUrl).removeClass("d-none");

            // Päivitä otsikko
            $("#animalTitle").text("🐶 Koira");

            // Pidä napit oikeissa väreissä
            $("#dogBtn").css({
                "background-color": "#85c6dcff",
                "border-color": "#85c6dcff",
                "color": "white"
            });
            $("#catBtn").css({
                "background-color": "#cf7583ff",
                "border-color": "#cf7583ff",
                "color": "white"
            });
        })
        .catch(function (error) {
            console.error(error);
            $("#animalTitle").text("Virhe ladattaessa koirakuvaa.");
        })
        .finally(function () {
            hideLoader(); // piilota spinner
        });
});
