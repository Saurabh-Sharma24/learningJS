const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  // submit wil  default trigger sumbit form without linking button element to form
  e.preventDefault(); // restrict event 'submit' to send form input to server(via get/post)

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value); // . value allows us to get value from input form
  const result = document.querySelector('#results');

  if(height =="" || height <= 0 || isNaN(height)){
    console.log(height)
    result.innerHTML = 'Invalid height'
  }else if(weight == '' || weight <=0 || isNaN(weight)){
    result.innerHTML = 'Invalid weight'
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    if(bmi<18.60){
      result.innerHTML = `<span>${bmi} (Underweight)</span>`
    }else if(bmi>24.90){
      result.innerHTML = `<span>${bmi} (Overweight)</span>`
    }else{
      result.innerHTML = `<span>${bmi} (Noramal Range)</span>`
    }
  }

});
