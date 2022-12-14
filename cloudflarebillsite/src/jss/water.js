function displaywater(){
    var obtwater=document.getElementById('waterb').value;
    var intwater=parseInt(obtwater,10);
    var water_cost=intwater;
    document.getElementById('water').innerHTML="That will cost you "+water_cost+" naira.";

}