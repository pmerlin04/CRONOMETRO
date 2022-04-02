var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 10; //quantoa milesimos valem 1 segundos 
var cron; //cronometro

function iniciar(){
    cron = setInterval(timer, tempo);
}    

function parar(){
    clearInterval(cron);
}

function timer(){
    ss++;

    if(ss == 60){
        ss = 0;
        mm++;

        if(mm == 60){
            mm =0;
            hh++;
        }
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm<10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerHTML=format;
}
