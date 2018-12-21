window.onload=function(){
    "use-strict";
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
}