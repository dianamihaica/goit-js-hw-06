// let counterValue = 0;
//   const counterElement = document.getElementById('counter');
//   const valueElement = document.getElementById('value');
//  counterElement.addEventListener('click',(event) => {
//   const action = event.target.dataset.action;
//   if(action === 'decrement') {
//     counterValue--;
//   }
//   else if (action === 'increment'){
//     counterValue++;
//   }
//   valueElement.textContent = counterValue;
//  }
//  );
    
let counterValue = 0;
const counterElement = document.getElementById('counter');
const valueElement = document.getElementById('value');
counterElement.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if (action === 'decrement') {
        counterValue--;
    }
    else if (action === 'increment') {
        counterValue++;
    }
    valueElement.textContent = counterValue;
}
);

