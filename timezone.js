function TimpBucuresti() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
  
     let timp = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("ceas1").innerText = timp; 
    let t = setTimeout(function(){ TimpBucuresti() }, 1000);
  }
TimpBucuresti();

function TimpZurich() {
    let date = new Date(); 
    let hh = date.getHours() -1;
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
  
     let timp = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("ceas2").innerText = timp; 
    let t = setTimeout(function(){ TimpZurich() }, 1000);
  }

TimpZurich();

function TimpNewYork() {
    let date = new Date(); 
    let hh = date.getHours() -6;
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
  
     let timp = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("ceas3").innerText = timp; 
    let t = setTimeout(function(){ TimpNewYork() }, 1000);

  }

TimpNewYork();

function TimpSingapore() {
    let date = new Date(); 
    let hh = date.getHours() +6;
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
  
     let timp = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("ceas4").innerText = timp; 
    let t = setTimeout(function(){ TimpSingapore() }, 1000);
  }

TimpSingapore();