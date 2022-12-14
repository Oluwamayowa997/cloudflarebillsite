function displaymeat(){
    var obtmeat=document.getElementById('meat').value;
    var intmeat=parseInt(obtmeat,10);
    var meat_cost=intmeat*100;
    document.getElementById('mea').innerHTML="That will cost you "+meat_cost+" naira.";
}