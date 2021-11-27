const API_KEY = '3e17a5b147fc323e72fbcb021142b568';

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // 위도와 경도를 선언

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // open weather 사이트에서 가져온 url

    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            const city = document.querySelector('.weather span:first-child');
            const weather = document.querySelector('.weather span:last-child');

            city.innerText = data.name;
            weather.innerText = `, ${data.weather[0].main}, ${data.main.temp} ℃`;
    });
    // fetch는 서버의 응답을 받아오는데까지 시간이 걸린다.
    // 그래서 then을 같이 사용 (이 이상의 이야기는 이야기가 길어진다.. 일단 패쓰)
};

function onGeoError() {
    alert('Cant find your location');
};


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);


