function displaysausage(){
    var obtsausage=document.getElementById('sausage').value;
    var intsau=parseInt(obtsausage,10);
    var sausage_cost=intsau*100;
    document.getElementById('sau').innerHTML="That will cost you "+sausage_cost+" naira.";
}