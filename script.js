// access DOM elements
const locationInput = document.getElementById('location');
const searchButton = document.getElementById('search-button');

//prepare API request
let apiRequest = new XMLHttpRequest();


//eventlistener for search button
searchButton.addEventListener('submit',($event) => {
   $event.preventDefault();     /*prevent default behaviour */
   initMap();
   /*const chosenCity = locationInput.value;
   apiRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&APPID=b34fdd3dae4a2eb0ad363b62f98ba1e');
   apiRequest.send();
   */
});


apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4){
        const response =  JSON.parse(apiRequest.response);
        reportSection.textContent = 'The weather in' + response.name +'is' +response.weather[0].main +'.';
    }
};

 //Google maps APi
// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(       
        document.getElementById('map'), {
            zoom: 4,
            center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map});
  }