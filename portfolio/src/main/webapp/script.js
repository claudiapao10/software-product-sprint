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

async function showAPIKey() {
    const apiResponse = await fetch('/read-api');
    console.log(apiResponse);
    return apiResponse;

}

let map;

function createMap() {

    //Favorite locations geological positions for markers
    const favorites = [{ position: new google.maps.LatLng(18.09322224508058, -65.8022236158021) },
    { position: new google.maps.LatLng(18.145016345906864, -65.76745690553001) },
    { position: new google.maps.LatLng(18.246863895964466, -65.78603360530974) },
    { position: new google.maps.LatLng(18.380382709644405, -65.71606974475587) },
    { position: new google.maps.LatLng(18.247836468782456, -65.61249008484697) },
    { position: new google.maps.LatLng(18.37014634439548, -65.63686600037511) },

    ];

    //Creating map
    map = new google.maps.Map(
        document.getElementById('map'),
        { center: { lat: 18.14518822106114, lng: -65.76783663033663, }, zoom: 10 });

    //Creating markers
    for (let i = 0; i < favorites.length; i++) {
        const marker = new google.maps.Marker({
            position: favorites[i].position,
            animation: google.maps.Animation.DROP,
            map: map,
             icon: {
                url: "http://labs.google.com/ridefinder/images/mm_20_black.png"
            }
        });
        marker.addListener("click", toggleBounce);
    }

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

}

