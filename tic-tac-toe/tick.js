/**
 * Created by udaymalangave on 26/08/15.
 */

function tick() {
    // toast massage
    $().toastmessage('showNoticeToast', 'Have A Fun');

    var i = 1, j, k = 0;
    var player1 = true;

    // creating buttons
    do {

        for (j = 0; j <= 2; j++) {
            var btn = document.createElement("button");
            btn.id = "buttonId" + k++;
            console.log(btn.id);
            btn.className = "btnCss btn";
            document.getElementById("setPosition").appendChild(btn);
            btn.onclick = function () {
                click(this.id);
            }
        }


        // element transfer to next line
        var nextLine = document.createElement("br");
        document.getElementById("setPosition").appendChild(nextLine);
        i++;
    } while (i <= 3);


    // button onclick function
    function click(buttonID) {
        if (player1 === true) {
            document.getElementById(buttonID).innerHTML = "X";
            checking();
            player1 = false;
        }
        else {
            document.getElementById(buttonID).innerHTML = "O";
            checking();
            //result();
            player1 = true;
        }
    }


    // inserting data in array
    function checking() {
        var l;
        var array = [];
        for (l = 0; l <= 8; l++) {
            var elementId = "buttonId" + l;
            array[l] = document.getElementById(elementId).innerHTML;
            console.log(array);
        }
        checkingResult(array);
    }


    // checking status of array for status of game
    function checkingResult(array) {
        console.log(array);
        rowCheck(array);
        coloumCheck(array);
        daignolCheck(array);
    }


    function rowCheck(array) {
        if (((array[0] === array[1]) && (array[1] === array[2]) && (array[1] === "X")) || ((array[3] === array[4]) && (array[4] === array[5]) && (array[5] === "X")) || ((array[6] === array[7]) && (array[7] === array[8]) && (array[8] === "X"))) {
            playerXwon();
        }
        else if (((array[0] === array[1]) && (array[1] === array[2]) && (array[1] === "O")) || ((array[3] === array[4]) && (array[4] === array[5]) && (array[5] === "O")) || ((array[6] === array[7]) && (array[7] === array[8]) && (array[8] === "O"))) {
            playerOwon();
        }

    }

    function coloumCheck(array) {
        if (((array[0] === array[3]) && (array[3] === array[6]) && (array[6] === "X")) || ((array[1] === array[4]) && (array[4] === array[7]) && (array[7] === "X")) || ((array[2] === array[5]) && (array[5] === array[8]) && (array[8] === "X"))) {
            playerXwon();
        }
        else if (((array[0] === array[3]) && (array[3] === array[6]) && (array[6] === "O")) || ((array[1] === array[4]) && (array[4] === array[7]) && (array[7] === "O")) || ((array[2] === array[5]) && (array[5] === array[8]) && (array[8] === "O"))) {
            playerOwon();
        }

    }

    function daignolCheck(array) {
        if (((array[0] === array[4]) && (array[4] === array[8]) && (array[8] === "X")) || ((array[2] === array[4]) && (array[4] === array[6]) && (array[6] === "X"))) {
            playerXwon();
        }
        else if (((array[0] === array[4]) && (array[4] === array[8]) && (array[8] === "O")) || ((array[2] === array[4]) && (array[4] === array[6]) && (array[6] === "O"))) {
            playerOwon();
        }

    }

    function playerXwon() {
        $().toastmessage('showNoticeToast', 'Player One (X) Won!!');
        gameEnd();
    }

    function playerOwon() {
        $().toastmessage('showNoticeToast', 'Player Two (O) Won!!');
        gameEnd();
    }

    function gameEnd() {
        $().toastmessage('showNoticeToast', 'Refresh Page For playing again');
    }

}