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
 map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 18.14518822106114, lng: -65.76783663033663,}, zoom: 16});
}
