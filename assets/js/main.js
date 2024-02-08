//Fuel cost = (Distance / Efficiency per gallon) × Cost per gallon 

const distanceEL = document.getElementById('distance');
const efficiencyEL = document.getElementById('fuel-efficiency');
const costEL = document.getElementById('fuel-cost');

const calculateBtn = document.getElementById('calc-btn');
const resultPage = document.getElementById('resultModal');
const modalContent = document.getElementById('modalBody');

calculateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const distance = distanceEL.value;
    const efficiency = efficiencyEL.value;
    const cost = costEL.value;
    if (distance === "" || efficiency === '' || cost === '') {
       resultPage.classList.add('modal');
        modalContent.innerHTML='Please Enter all the values to Calculate the Cost...!'
    }
    else {
        const result = (distance / efficiency) * cost;
        resultPage.classList.add('modal');
        modalContent.innerHTML = "The fuel cost will be around :" +result +'<br>Thank You!!!'
        
    }
})