console.log('script sourced');

function getArtists() {
    // Axios GET request
    axios.get('/artist').then((response) => {
        // Code that will run on successful response
        // from the server.
        console.log(response);
        // quotesFromServer will be an Array of quotes
        let quotesFromServer = response.data;
        let contentDiv = document.querySelector('#artistTableBody');
        contentDiv.innerHTML = '';
        for(let artist of quotesFromServer) {
            contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
        }
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    }); // ALWAYS add .catch
}
// TODO Add ajax request for /songs and display on DOM
getArtists();

function getSongs() {
    // Axios GET request
    axios.get('/song').then((response) => {
        // Code that will run on successful response
        // from the server.
        console.log(response);
        // quotesFromServer will be an Array of quotes
        let songsFromServer = response.data;
        let contentDiv = document.querySelector('#songTableBody');
        contentDiv.innerHTML = '';
        for(let song of songsFromServer) {
            contentDiv.innerHTML += `
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `;
        }
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    }); // ALWAYS add .catch
}
getSongs();

function submitSong(event){
    //stop page from refreshing
    event.preventDefault();
    console.log("In submitSong function")
    let title = document.querySelector('#titleInput').value
    let artist = document.querySelector('#artistInput').value
    console.log('Inputs ', title, artist)
    let songForServer = {
        title,
        artist,
    };
    // type     url         data to send        
    axios.post('/song',songForServer).then((response) => {
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    })

}

function submitForm(event){
    //stop page from refreshing
    event.preventDefault();
    console.log("In submitForm function")
    let name = document.querySelector('#nameInput').value
    let born = document.querySelector('#bornInput').value
    let died = document.querySelector('#diedInput').value
    console.log('Inputs ', name, born, died)
    let artistForServer = {
        name,
        born,
        died,
    };
    // type     url         data to send        
    axios.post('/artist',artistForServer).then((response) => {
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    })

}