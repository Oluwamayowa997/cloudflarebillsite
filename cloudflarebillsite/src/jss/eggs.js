function displayeggs(){
    var obteggs=document.getElementById('eggs').value;
    var integgs=parseInt(obteggs,10);
    var eggs_cost=integgs*100;
    document.getElementById('egg').innerHTML="That will cost you "+eggs_cost+" naira.";
}
