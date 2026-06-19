const apiKey = "64866303"
document.getElementById("searchBtn").addEventListener("click", searchMovie)
async function searchMovie() {
    const movieName = document.getElementById("movieName").value
    if(movieName === ""){
        alert("Enter movie name")
        return
    }
    try{
        const response = await fetch(
            `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
        )
        const data = await response.json()
        if(data.Response === "False"){
            document.getElementById("movieResult").innerHTML =
            "<p>Movie not found</p>"
            return
        }
        document.getElementById("movieResult").innerHTML = `
            <img src="${data.Poster}" alt="${data.Title}"><br>
            <h2>${data.Title}</h2><br>
            <p><strong>Released:</strong> ${data.Released}</p>
            <p><strong>Rating:</strong> ${data.imdbRating}</p>
            <p><strong>Genre:</strong> ${data.Genre}</p>
            <p><strong>Plot:</strong> ${data.Plot}</p>
        `
    }
    catch(error){
        document.getElementById("movieResult").innerHTML =
        "<p>Error fetching movie data</p>"
    }
}