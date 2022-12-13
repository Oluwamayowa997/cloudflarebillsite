function eligibility(){
    var highEarn=document.getElementById('income').value;
    var loan=document.getElementById('loan').value.toLowerCase();
    //var text;

    if (highEarn>10000 && loan == "yes"){
        document.getElementById('cash').innerHTML="Loan Approved with Joy";            
}

else if(highEarn=10000 && loan=="yes"){
    document.getElementById('cash').innerHTML="Ask for more Loan";
}
else
{
    document.getElementById('cash').innerHTML="To low to give Loan";
    
}
//document.getElementById('cash').innerHTML=text;
}
