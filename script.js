

var image = document.getElementById("redLight");
var bluesPlayer = document.getElementById("bluesPlayer");
var oilersPlayer = document.getElementById("oilersPlayer");
var winningPlayer = document.getElementById("WinningPlayer");
winnerPlayer.style.display = 'none';
var number = Math.random() * 200;
var number2 = Math.random() * 200;
var raceStarted = false;

function turnGreen()
{
    image.src ="http://www.public-domain-photos.com/free-cliparts-svg/signs_and_symbols/other/traffic_light_green_dan__01.svg";
}

function beginRace()
{
    raceStarted = true;

                setTimeout(function () {
        var newNumber = (Math.random() * 200) + number;
        var newNumber2 = (Math.random() * 200) + number2;
        
        bluesPlayer.style.marginLeft = newNumber + 'px';
                
        oilersPlayer.style.marginLeft = newNumber2 + 'px';
        
        number = newNumber;
        number2 = newNumber2;
        
                var bluesDistance = bluesPlayer.style.marginLeft.slice(0, -4);
                var oilersDistance = oilersPlayers.style.marginLeft.slice(0, -4);

            var width = screen.width;

        if (bluesDistance >= width - 80)
        {
            winningPlayer.style.display = 'inline';
            window.alert("TARASENKO WINS!");
        }
        else if (oilersDistance >= width - 80)
        {           
        document.getElementById("winningID").src = "http://hockeypngs.com/wp-content/uploads/2016/06/Connor-McDavid.png";
        winningPlayer.style.display = 'inline';
        window.alert("MCDAVID WINS!");                  
        }
        else
        {
            startRace();
        }       
    }, 500);       
}

function reset()
{
    image.src = "https://upload.wikimedia.org/wikipedia/commons/2/2a/Traffic_light_red.png";
    winningPlayer.style.display = 'none';
    bluesPlayer.style.marginLeft = 3;
    oilersPlayer.style.marginLeft = 3;
    bluesDistance = 3;
    oilersDistance = 3;
    newNumber = 3;
    newNumber2 = 3;
    number = 3;
    number2 = 3;
}