function check(){
    const pan=document.getElementById("num").value;

    if(pan==="")
        alert("Enter your PAN number");
    else if(pan.length!==10)
        document.getElementById("result").innerHTML="InValid PAN Number";
    else if(pan==="/^[A-Z]{5}[0-9]{4}[A-Z]{1}")
        document.getElementById("result").innerHTML="InValid PAN Number";
    else{
        document.getElementById("result").innerHTML="Valid PAN Number";
        pan.value="";
    }
}