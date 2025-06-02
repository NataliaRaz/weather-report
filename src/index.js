const increaseTemp = () => {
    const tempElement = document.querySelector('#tempValue');
    let currentTemp = Number(tempElement.innerHTML);
    currentTemp++; 
    tempElement.innerHTML = currentTemp;
    setTempColor(currentTemp);
};

const increaseButton = document.querySelector('#increaseTempControl');
increaseButton.addEventListener('click', increaseTemp);

const decreaseTemp = () => {
    const tempElement = document.querySelector('#tempValue');
    let currentTemp = Number(tempElement.innerHTML);
    currentTemp--; 
    tempElement.innerHTML = currentTemp;
    setTempColor(currentTemp);
};

const decreaseButton = document.querySelector('#decreaseTempControl');
decreaseButton.addEventListener('click', decreaseTemp);


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
    }

