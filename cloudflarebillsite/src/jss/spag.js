function displayspag(){
    var obtspag=document.getElementById('spagh').value;
    var intspag=parseInt(obtspag,10);
    var spag_cost=intspag*100;
    document.getElementById('spag').innerHTML="That will cost you "+spag_cost+" naira.";
}