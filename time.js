function TimerNow(){
    var Setime = document.getElementById("Setime");
    var SetDate = document.getElementById("SetDate");
    var date = new Date();
    Setime.innerHTML = date.getHours() + ":" +  date.getMinutes() + ":" + date.getSeconds();  
    SetDate.innerHTML = date.getDate() + "/" +  parseInt(date.getMonth()+1) + "/" + date.getFullYear();  
}
setInterval(TimerNow,100);
function ChangColor(){
    var GetColor = document.getElementById("SetColor").value;
    localStorage.setItem("Color",GetColor);
    var SetColor = localStorage.getItem("Color") 
    document.getElementById("body").style.backgroundColor = SetColor;
    document.getElementById("Setime").style.backgroundImage = "linear-gradient(to bottom, black,".concat(SetColor)+")";
}    
var Color = document.getElementById("SetColor"); 
Color.addEventListener("change",()=>{
    ChangColor();
});
function StandColor(){
    document.getElementById("SetColor").value = localStorage.getItem("Color");
    document.getElementById("body").style.backgroundColor = localStorage.getItem("Color");
    document.getElementById("Setime").style.backgroundImage = "linear-gradient(to bottom, black,".concat(localStorage.getItem("Color"))+")";
};
onload = StandColor();