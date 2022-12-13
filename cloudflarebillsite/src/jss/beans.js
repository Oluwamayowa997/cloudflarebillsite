function displaybeans(){
    var obtbeans=document.getElementById('beans').value;
    var intbeans=parseInt(obtbeans,10);
    var beans_cost=intbeans*100;
    document.getElementById('bean').innerHTML="That will cost you "+beans_cost+" naira.";
}
