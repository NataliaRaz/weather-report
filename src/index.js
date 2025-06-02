const increaseTemp = () => {
    const tempElement = document.querySelector('#tempValue');
    let currentTemp = Number(tempElement.innerHTML);
    currentTemp++; 
    tempElement.innerHTML = currentTemp;
};

const increaseButton = document.querySelector('#increaseTempControl');
increaseButton.addEventListener('click', increaseTemp);

const decreaseTemp = () => {
    const tempElement = document.querySelector('#tempValue');
    let currentTemp = Number(tempElement.innerHTML);
    currentTemp--; 
    tempElement.innerHTML = currentTemp;
};

const decreaseButton = document.querySelector('#decreaseTempControl');
decreaseButton.addEventListener('click', decreaseTemp);


// const setTempColor = (currentTemp) => {
//     const tempElement = document.querySelector('#tempValue');
//     let currentTemp = Number(tempElement.innerHTML);

//     if (currentTemp >= 80) {
//         tempElement.innerHTML.add('red');
//     } else if (currentTemp >= 70) {
//         tempElement.innerHTML.add('orange');

//     }
//     }

