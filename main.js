function handleError() {

setTimeout(restartProgram,750);
}


function appendToDisplay(value) {
  
    var vall= document.getElementById('result').value += value;
    if (result.value.length >= 10) {
      result.style.fontSize = "1rem";
  }
  if (result.value.length>=23){
    document.getElementById('result').value = 'error!';
    handleError();
  } 
  if (result.value.length<10){
    result.style.fontSize="2rem";
  } 
 
  }
  

function calculate() {
  try{ 
   
    var val = document.getElementById('result').value;
   
val=val.replace('\u00B2','**2');
val=val.replace('×','*');
    val=val.replace('√(','Math.sqrt(')
    val=val.replace('%','*(1/100)');
    val=val.replace('ln(','Math.log(');
    var result = eval(val);
    document.getElementById('result').value = result;

  }
  
  catch{
    var e = "error!"
    document.getElementById('result').value =e;
    handleError();
  }}



function restartProgram() {
    location.reload();

  }

  function del(){

  var val = document.getElementById('result').value;
    if (val.length > 0) {
        document.getElementById('result').value = val.slice(0, -1);
    }

  }

