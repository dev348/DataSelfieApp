
function setup(){

    let lat ,long ;
    const button = document.getElementById('submit')
    button.addEventListener('click',async event => {
        const mood = document.getElementById("mood").value;
        video.loadPixels();
        const image64 = video.canvas.toDataURL();
        const data = {lat , long , mood , image64};
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

   
    
        if('geolocation' in navigator){
            console.log("geolocation  available");
            navigator.geolocation.getCurrentPosition(async position  => {
                (position.coords.latitude, position.coords.longitude);
                 lat = position.coords.latitude;
                 long = position.coords.longitude;
                 document.getElementById('lat').textContent = lat;
                 document.getElementById('long').textContent =long;
                
              });
              
        }else{
            console.log('geolocation is no available');
        }

        const video =  createCapture(VIDEO);
        video.size(360,250);


        }
    

