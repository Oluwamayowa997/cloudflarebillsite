function displaydrink(){
    var obtdrink=document.getElementById('drinks').value;
    var intdrink=parseInt(obtdrink,10);
    var drink_cost=intdrink;
    document.getElementById('drink').innerHTML="That will cost you "+drink_cost+" naira.";
}