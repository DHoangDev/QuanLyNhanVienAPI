var array = ['ha noi', 'ho chi minh', 'turan', 'nha trang', 'hue', 'phan thiet'];

function renderWeather(city) {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',vn&APPID=03dcb7ad7cd50e44b53719bdc18399bd')
        .then((response) => {
            var val = response.data;
            document.getElementById('temp').innerHTML = parseInt(val.main.temp - 273.15);
            document.getElementById('description').innerHTML = val.weather[0].main + ', ' + val.weather[0].description;
            document.getElementById('city').innerHTML = val.name + ', ' + val.sys.country;
        })
}

window.addEventListener('load', () => {
    renderWeather('ha noi');
})

document.getElementById('selectCity').onchange = () => {
    let i = document.getElementById('selectCity').value;
    renderWeather(array[i - 1]);
}