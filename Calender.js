var dt= new Date(); 
function RenderDate(){

dt.setDate(1);
var day= dt.getDate();
var endDate = new Date( dt.getFullYear(), dt.getMonth() +1,0 ).getDate();

//console.log(enddate);
var prevDate = new Date( dt.getFullYear(), dt.getMonth(),0 ).getDate();

var today = new Date();
var months = [
    "january",
    "Feb",
    "march",
    "April",
    "may",
    "june",
    "july",
    "Augest",
    "september",
    "Oct",
    "nov",
    "Dec"
];
document.getElementById("date_str").innerHTML = dt.toDateString();
document.getElementById("month").innerHTML=months[dt.getMonth()];

var cells = "";
for (x = day;x > 0;x--){
    cells+= "<div class ='Prev_date'>" + (prevDate - x + 1) +"</div>"
}
for (i=1;i<=endDate;i++){
    if(i==today.getDate() && dt.getMonth() == today.getMonth()){
        cells+= "<div class ='today'>" + i + "</div>"   
    }else{
        cells+= "<div>" + i + "</div>"
    }
    
}

// for (y=1;y<4;y++){
//     cells+="<div class = 'next_date'>" + y +"</div>"
// }

document.getElementsByClassName("days")[0].innerHTML = cells;

}
function moveDate(para){
    // console.log(para);
    if(para =='prev')
    {
        dt.setMonth(dt.getMonth()-1);
     
    }else if(para =='next')
    {
        dt.setMonth(dt.getMonth() +1);
    }
    RenderDate();
}