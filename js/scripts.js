window.onload = () => {

    const maps = document.querySelectorAll('img.mapi');
    const aside = document.getElementById('asideMenu');
    const mapi = document.getElementById('mapi');
    pixels = document.body.clientWidth;
    console.log(pixels);

    maps.forEach(x => {
        x.addEventListener("click", setMap);

    })

    function setMap() {
        console.log('aqui');
        var mymap = L.map('mapid').setView([51.505, -0.09], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoicmFzdGFraGFuIiwiYSI6ImNra3ZtY2ttNzRrbGsydmxhdzgwbWh6OXEifQ.3bmNBEAwtcB2hp51OWGOuA'
        }).addTo(mymap);
    }
}