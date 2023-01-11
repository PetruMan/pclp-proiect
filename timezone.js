
        function startTime() {
          var now = new Date();
          var utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
          var h = utc.getHours();
          var m = utc.getMinutes();
          var s = utc.getSeconds();
          m = checkTime(m);
          s = checkTime(s);
          var buc = h + 2;
            if (buc>24){
              buc -=24;
            }
          var zur = h + 1;
              if (zur>24){
              zur -=24;
            }
          var ny = h - 5;
              if (ny>24){
              ny -=24;
            }
          var sin = h + 8;
              if (sin>24){
              sin -=24;
            }
         
            
          document.getElementById('buch').innerHTML =
              buc + ":" + m + ":" + s;
          document.getElementById('buch').style.color = "#751775";
          document.getElementById('zurc').innerHTML =
              zur + ":" + m + ":" + s;
          document.getElementById('zurc').style.color = "#ad2d2d";
          document.getElementById('nyc').innerHTML =
              ny +  ":" + m + ":" + s;
          document.getElementById('nyc').style.color = "#ce5606";
          document.getElementById('sing').innerHTML =
              sin + ":" + m + ":" + s;
          document.getElementById('sing').style.color = "#49702e";
        
          var t = setTimeout(startTime, 500);
        }
        function checkTime(i) {
            if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
            return i;
        }
        
        