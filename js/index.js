var yearSelector = document.getElementById('year')
// yearSelector.innerHTML = ' <option value="1980">1980</option>'

var options ='';


for(var i =1980 ; i <=2024; i++){
   options += `<option value="${i}">${i}</option>`;
}



yearSelector.innerHTML = options ; 
// month
var monthSelector = document.getElementById('month')


var options ='';


for(var i =1 ; i <=12; i++){
   options += `<option value="${i}">${i}</option>`;
}



monthSelector.innerHTML = options ;

// days
var daySelector = document.getElementById('day')


var options ='';


for(var i =1 ; i <=31; i++){
   options += `<option value="${i}">${i}</option>`;
}



daySelector.innerHTML = options ;