
const getData = function (){
if('geolocation' in navigator){
    console.log("geolocation is available");
    navigator.geolocation.getCurrentPosition(async position  => {
        (position.coords.latitude, position.coords.longitude);
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        document.getElementById('lat').textContent = lat;
        document.getElementById('long').textContent =long;

        // api req
        const data = {lat,long};
        const options = {
            method: 'POST',
            headers:{
            'Content-Type': 'application/json',
        },
            body: JSON.stringify(data),
        };
        const response = await fetch('/api',options)
        const pos = await response.json();
        console.log(pos);
      });
      
}else{
    console.log('geolocation is no available');
}
}