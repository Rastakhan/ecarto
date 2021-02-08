window.onload = () => {

    const maps = document.querySelectorAll('div.collapse-map-img > img');
    const aside = document.getElementById('asideMenu');
    const mapi = document.getElementById('mapid');
    const header = document.getElementById('headernav');
    const title = document.getElementById('mapTitle');
    const ecarto = document.getElementById('ecarto');


    var pixels = document.body.clientWidth;
    var heigth = document.body.clientHeight;

    maps.forEach(x => {
        x.addEventListener("click", setMap);

    })

    title.addEventListener("click", hide_menu);
    ecarto.addEventListener("click", hide_menu);

    function setMap() {
        mapi.style.height = heigth - header.offsetHeight + 'px';

        hide_menu();

        var mymap = L.map('mapid').setView([51.505, -0.09], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoicmFzdGFraGFuIiwiYSI6ImNra3ZtY2ttNzRrbGsydmxhdzgwbWh6OXEifQ.3bmNBEAwtcB2hp51OWGOuA' // Esto deberia estar en .ENV (IMPORTANTE!!!)
        }).addTo(mymap);
    }

    function hide_menu() {
        if (pixels < 992) {
            aside.classList.toggle('aside-menu-hide');
            aside.classList.toggle('hide');

            mapi.classList.toggle('mapwidth');
            mapi.classList.toggle('col-12');

        }
    }
}