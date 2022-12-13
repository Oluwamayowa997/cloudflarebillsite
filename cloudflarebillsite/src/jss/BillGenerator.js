

function sausage(){
    var sausage_cost=0;
    var obtsausage=document.getElementById('sausage').value;
    var intsau=parseInt(obtsausage,10);
    var sausage_cost=intsau*100+sausage_cost;
    document.getElementById('sau').innerHTML="That will cost you "+sausage_cost+" naira.";
}

function eggs(){
    var eggs_cost=0;
    var obteggs=document.getElementById('eggs').value;
    var integgs=parseInt(obteggs,10);
    var eggs_cost=integgs*100;
    document.getElementById('egg').innerHTML="That will cost you "+eggs_cost+" naira.";
}

function rice(){
    var rice_cost=0;
    var obtrice=document.getElementById('rice').value;
    var intrice=parseInt(obtrice,10);
    var rice_cost=intrice*100;
    document.getElementById('ric').innerHTML="That will cost you "+rice_cost+" naira.";

}
    //   var beans_cost=0; var spag_cost=0; var water_cost=0; var drink_cost;



//     var obtbeans=document.getElementById('beans').value;
//     var intbeans=parseInt(obtbeans,10);
//     var beans_cost=intbeans*100;
//     document.getElementById('bean').innerHTML="That will cost you "+beans_cost+" naira.";

//     var obtspag=document.getElementById('spagh').value;
//     var intspag=parseInt(obtspag,10);
//     var spag_cost=intspag*100;
//     document.getElementById('spag').innerHTML="That will cost you "+spag_cost+" naira.";

//     var obtwater=document.getElementById('waterb').value;
//     var intwater=parseInt(obtwater,10);
//     var water_cost=intwater;
//     document.getElementById('water').innerHTML="That will cost you "+water_cost+" naira.";

//     var obtdrink=document.getElementById('drinks').value;
//     var intdrink=parseInt(obtdrink,10);
//     var drink_cost=intdrink;
//     document.getElementById('drink').innerHTML="That will cost you "+drink_cost+" naira.";

    
//     var Total=meat_cost+sausage_cost+eggs_cost+rice_cost+beans_cost+spag_cost+water_cost+drink_cost;
//     document.getElementById('total').innerHTML="Your Total Bill:"+Total+" Naira only";

//     let radioBtns=document.querySelectorAll("input[name='rate']");
//     let findSelected=()=>{
//         var selected=document.querySelector("input[name='rate']").value;
        
//             if("good"){
//                 document.getElementById("remark").innerHTML="Thank you for your using Billy"
//              }
    
//              else if("fair"){
//                 document.getElementById("remark").innerHTML="We will do better to bring better products in the future"
//              }
    
//              else{
//                 document.getElementById("remark").innerHTML="We are sorry for the weak experience, we will improve"
//             }
//      }
//     radioBtns.forEach(radioBtn=>{
//          radioBtn.addEventListener("change",findSelected);
//     });
// }