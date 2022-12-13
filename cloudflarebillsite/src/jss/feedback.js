function displayfeed(){

    // let radioBtns=document.querySelectorAll("input[name='rate']");
    // let findSelected=()=>{
        var selected=document.querySelector("input[name='rate']").value;
        
            if("good"){
                document.getElementById("remark").innerHTML="Thank you for your using Billy"
             }
    
             else if("fair"){
                document.getElementById("remark").innerHTML="We will do better to bring better products in the future"
             }
    
             else{
                document.getElementById("remark").innerHTML="We are sorry for the weak experience, we will improve"
            }
    //  }
    // radioBtns.forEach(radioBtn=>{
    //      radioBtn.addEventListener("change",findSelected);
    // });
}