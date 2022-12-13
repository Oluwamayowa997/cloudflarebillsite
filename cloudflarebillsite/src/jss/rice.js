function displayrice(){
    var obtrice=document.getElementById('rice').value;
    var intrice=parseInt(obtrice,10);
    var rice_cost=intrice*100;
    document.getElementById('ric').innerHTML="That will cost you "+rice_cost+" naira.";
}