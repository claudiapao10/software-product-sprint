// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

async function showRandomSeries() {
    const responseFromServer = await fetch('/show-series');
    const jsonList = await responseFromServer.json();
    console.log(jsonList);
    const randomElement = jsonList[Math.floor(Math.random() * jsonList.length)];

    const textContatinerElement = document.getElementById('text-container');
    textContatinerElement.innerText = randomElement;

}

let map;

async function createMap() {

    //Geological positions for markers
    const favorites = [{
        position: new google.maps.LatLng(18.09322224508058, -65.8022236158021),
        name: "Pterocarpus Forest, Humacao, PR",
        img: "https://mapio.net/images-p/121411801.jpg"
    },
    {
        position: new google.maps.LatLng(18.145016345906864, -65.76745690553001),
        name: "El Morrillo, Humacao, PR",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sE2KC3q5LEHDP9WwfbdqPd8Z2GoMH-0raw&usqp=CAU"
    },
    {
        position: new google.maps.LatLng(18.246863895964466, -65.78603360530974),
        name: "El Hippie, Naguabo, PR",
        img: "http://2.bp.blogspot.com/-6c5XX9Faef0/Vc0hvQV71WI/AAAAAAAAAps/kpi4U2dQ2Nw/s1600/DSC_7346.jpg"
    },
    {
        position: new google.maps.LatLng(18.380382709644405, -65.71606974475587),
        name: "Costa Azul, Luquillo, PR",
        img: "https://boricuaonline.com/wp-content/uploads/2019/08/luquillo-playa-azul.jpg"
    },
    {
        position: new google.maps.LatLng(18.247836468782456, -65.61249008484697),
        name: "Roosevelt Roads, Ceiba, PR",
        img: "https://i.pinimg.com/originals/6a/a9/47/6aa947761830e5e522300f3c75414536.jpg"
    },
    {
        position: new google.maps.LatLng(18.37014634439548, -65.63686600037511),
        name: "Seven Seas, Fajardo, PR",
        img: "https://www.puertoricodaytrips.com/wp-images-1000x560/seven-seas-1.jpg"
    },];

    //Creating map
    map = new google.maps.Map(
        document.getElementById('map'),
        { center: { lat: 18.14518822106114, lng: -65.76783663033663, }, zoom: 10 });

    //Creating markers with info windows for map.
    for (let i = 0; i < favorites.length; i++) {

        const contentString =
            '<div id="content">' +
            '<h5 id="firstHeading" class="firstHeading">' + favorites[i].name + '</h5>' +
            "<img width =300px src=" + favorites[i].img + ">" +
            "</div>" +
            "</div>";

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        const marker = new google.maps.Marker({
            position: favorites[i].position,
            animation: google.maps.Animation.DROP,
            map: map,
            icon: {
                url: "http://labs.google.com/ridefinder/images/mm_20_black.png"
            }
        });
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }
}
