window.onload=function(){
    "use-strict";

    // DATE SECTION
    const theForm=document.getElementById("the-form");
    const theDate=document.getElementById("date");
    const getDate=theForm.querySelector("input[type=date]");
    
    let today=new Date();
    let prevText=theDate.innerText;
    theDate.innerText=prevText+" "+today;
    
    function showDate(){
        let d=new Date(getDate.value).toDateString();
        theDate.innerText=prevText+" "+ d;
    }
    
    getDate.addEventListener("change",showDate);

    // COLOR SECTION
    const getColor=theForm.querySelector("input[type=color]");
    const theColorValue=document.getElementById("the-value");
    theColorValue.style.backgroundColor=getColor.value;
    function setColor(){
        theColorValue.style.color=getColor.value;
    }

    theForm.addEventListener("change",setColor);


}