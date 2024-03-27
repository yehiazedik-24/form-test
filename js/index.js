var yearSelector = document.getElementById('year')
// yearSelector.innerHTML = ' <option value="1980">1980</option>'

var options ='';


for(var i =1980 ; i <=2024; i++){
   options += `<option value="${i}">${i}</option>`;
}



yearSelector.innerHTML = options ; 
// month
var yearSelector = document.getElementById('month')


var options ='';


for(var i =1 ; i <=12; i++){
   options += `<option value="${i}">${i}</option>`;
}



yearSelector.innerHTML = options ;

// days
var yearSelector = document.getElementById('day')


var options ='';


for(var i =1 ; i <=31; i++){
   options += `<option value="${i}">${i}</option>`;
}



yearSelector.innerHTML = options ;