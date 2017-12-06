//assign varibles to light, each player and winner
var image = document.getElementById("redLight");
var bluesPlayer = document.getElementById("bluesPlayer");
var oilersPlayer = document.getElementById("oilersPlayer");
var winningSkater = document.getElementById("WinningSkater");
winningSkater.style.display = 'none';


//assign random number
    var number = Math.random() * 200;
    var number1 = Math.random() * 200;
    var raceStarted = false;

function turnGreen()
{
    image.src ="http://www.public-domain-photos.com/free-cliparts-svg/signs_and_symbols/other/traffic_light_green_dan__01.svg";
}

//Starts race and fires skaters at random intervals
function startRace()
{
    raceStarted = true;

    setTimeout(function () {
        var newNumber = ((Math.random() * 200)+5) + number;
        var newNumber1 = ((Math.random() * 200)+5) + number1;
        
        bluesPlayer.style.marginLeft = newNumber + 'px';
                
        oilersPlayer.style.marginLeft = newNumber1 + 'px';
        
        number = newNumber;
        number1 = newNumber1;
        
        
        
                var bluesDistance = bluesPlayer.style.marginLeft.slice(0, -4);
                var oilersDistance = oilersPlayer.style.marginLeft.slice(0, -4);

      
        
           //Displays winner of race
               var width = screen.width;
        
        if (bluesDistance >= width - 50)
        {
            winningSkater.style.display = 'list-item';
            
        }
        
     
        else if (oilersDistance >= width - 50)
        {           
            document.getElementById("winningPlayer").src  = "http://hockeypngs.com/wp-content/uploads/2016/06/Connor-McDavid.png";
            
            winningSkater.style.display = 'list-item';                
        }
        
        
        else
        {
            startRace();
        }       
    }, 750)       
}


//Puts players back to start line for new race
function reset()
{
    image.src = "https://upload.wikimedia.org/wikipedia/commons/2/2a/Traffic_light_red.png";
    winningSkater.style.display = 'none';
    bluesPlayer.style.marginLeft = 0;
    oilersPlayer.style.marginLeft = 0;
    bluesDistance = 0;
    oilersDistance = 0;
    newNumber = 0;
    newNumber1 = 0;
    number = 0;
    number1 = 0;
}
