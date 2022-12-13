function displaytotal(){
    var obtmeat=document.getElementById('meat').value;
    var intmeat=parseInt(obtmeat,10);
    var meat_cost=intmeat*100;

    var obtdrink=document.getElementById('drinks').value;
    var intdrink=parseInt(obtdrink,10);
    var drink_cost=intdrink;

    var obtbeans=document.getElementById('beans').value;
    var intbeans=parseInt(obtbeans,10);
    var beans_cost=intbeans*100;

    var obteggs=document.getElementById('eggs').value;
    var integgs=parseInt(obteggs,10);
    var eggs_cost=integgs*100;

    
    var obtrice=document.getElementById('rice').value;
    var intrice=parseInt(obtrice,10);
    var rice_cost=intrice*100;

    var obtsausage=document.getElementById('sausage').value;
    var intsau=parseInt(obtsausage,10);
    var sausage_cost=intsau*100;

    var obtspag=document.getElementById('spagh').value;
    var intspag=parseInt(obtspag,10);
    var spag_cost=intspag*100;

    var obtwater=document.getElementById('waterb').value;
    var intwater=parseInt(obtwater,10);
    var water_cost=intwater*100;

    var Total=meat_cost+sausage_cost+eggs_cost+rice_cost+beans_cost+spag_cost+water_cost+drink_cost;
    document.getElementById('total').innerHTML="Your Total Bill:"+Total+" Naira only";
}