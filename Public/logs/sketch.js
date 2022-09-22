getData();
        async function getData(){
            const response = await fetch('/api');
            const data = await response.json();
            
            for(item of data){
                const root = document.createElement('p');
                const mood = document.createElement('div');
                const geo = document.createElement('div');
                const date = document.createElement('div');
                const image = document.createElement('img');
                
                geo.textContent = `${item.lat}°, ${item.long}°`;
                mood.textContent = ` Mood : ${item.mood}`
                const dataString = new Date (item.timestamp).toLocaleString();
                data.textContent = dataString;
                image.src = "/img/" + item.image_file ;
                image.alt = " Dev have good faces";

                root.append(geo,dataString,mood,image);
                document.body.append(root);
            }
            console.log(data);
        }
