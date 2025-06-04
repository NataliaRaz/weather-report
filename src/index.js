const API_KEY = 'http://localhost:5000';

const increaseTemp = () => {
    const tempElement = document.querySelector('#tempValue');
    let currentTemp = Number(tempElement.innerHTML);
    currentTemp++; 
    tempElement.innerHTML = currentTemp;
    setTempColor(currentTemp);
    setLandscape(currentTemp);
};

const increaseButton = document.querySelector('#increaseTempControl');
increaseButton.addEventListener('click', increaseTemp);

const decreaseTemp = () => {
    const tempElement = document.querySelector('#tempValue');
    let currentTemp = Number(tempElement.innerHTML);
    currentTemp--; 
    tempElement.innerHTML = currentTemp;
    setTempColor(currentTemp);
    setLandscape(currentTemp)
};

const decreaseButton = document.querySelector('#decreaseTempControl');
decreaseButton.addEventListener('click', decreaseTemp);

const setLandscape = (currentTemp) => {
    landscapeElement = document.querySelector('#landscape');
    
    if (currentTemp >= 80) {
        landscapeElement.innerHTML = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (currentTemp >= 70) {
        landscapeElement.innerHTML = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (currentTemp >= 60) {
        landscapeElement.innerHTML = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else {
        landscapeElement.innerHTML = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    }
}

const setTempColor = (currentTemp) => {
    const tempElement = document.querySelector('#tempValue');
    tempElement.classList.remove('red', 'orange', 'yellow', 'green', 'teal');

    if (currentTemp >= 80) {
        tempElement.classList.add('red');
    } else if (currentTemp >= 70) {
        tempElement.classList.add('orange');
    } else if (currentTemp >= 60) {
        tempElement.classList.add('yellow');
    } else if (currentTemp >= 50) {
        tempElement.classList.add('green');
    } else {
        tempElement.classList.add('teal');
    }
};

const cityInput = (event) => {
    const cityHeader = document.querySelector('#headerCityName');

    cityHeader.innerHTML = event.target.value;
};

const cityField = document.querySelector('#cityNameInput');

cityField.addEventListener('change', cityInput);

const setTempFromCity = async () => {
    const cityElement = document.querySelector('#headerCityName');
    const cityName = cityElement.innerHTML;

    const cityLocationInfo = await axios.get(`${API_KEY}/location?q=${cityName}`);

    const tempElement = document.querySelector('#tempValue');
    const cityLat = cityLocationInfo.data[0].lat;
    const cityLon = cityLocationInfo.data[0].lon;

    const cityTempInfo = await axios.get(`${API_KEY}/weather?lat=${cityLat}&lon=${cityLon}`)
    
    const cityTempKelvin = cityTempInfo.data.main.temp;
    const cityTempFaren = Math.round((cityTempKelvin * 1.8) - 459.67);

    tempElement.innerHTML = cityTempFaren;

    setTempColor(cityTempFaren);
    setLandscape(cityTempFaren);
};

const getTempButton = document.querySelector('#currentTempButton');
getTempButton.addEventListener('click', setTempFromCity)

const setSky = (event) => {
    const skyElement = document.querySelector('#sky');
    const skyOptions = ["☁️ ☁️ ☁️ ☀️ ☁️ ☁️", "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️", "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧", "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"]
    skyElement.innerHTML = skyOptions[event.target.value]
}

const skyElement = document.querySelector('#skySelect');
skyElement.addEventListener("change", setSky)