let count = 0;
let board = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

function changepic(id)
{
    //once there is win, no more changes of pics allowed
    if (winCheck()) {return};

    //or if there is an x or o already placed here
    if (board[id-1] == "x" || board[id-1] == "o") {return};

    if (count % 2 == 0)
    {
        document.getElementById(id).src="x.png";
        board[id-1] = "x";
    }  
    else
    {
        document.getElementById(id).src="o.png";
        board[id-1] = "o";
    }

    if (winCheck())
    {
        if (count % 2 == 0)
        {
            document.body.innerHTML += "<h1>X is the winner!</h1>";
        }
        else
        {
            document.body.innerHTML += "<h1>O is the winner!</h1>";
        }
    }
    else if (count == 8)
    {
        document.body.innerHTML += "<h1>Its a tie!</h1>";
    }

    count++;

    
}

function winCheck()
{
    console.log(board);
    console.log("winrow = " + winRow());
    console.log("wincol = " + winCol());
    console.log("windia = " + winDia());
    return winRow() || winCol() || winDia();
}

function winRow()
{
    for (let r = 1; r < 4; r++)
    {
        if (board[r*3-3] == board[r*3-2] && board[r*3-3] == board[r*3-1])
        {
            return true;
        }
    }
    return false;
}

function winCol()
{
    for (let c = 1; c < 4; c++)
    {
        if (board[c-1] == board[c+2] && board[c-1] == board[c+5])
        {
            return true;
        }
    }
    return false;
}

function winDia()
{
    if (board[0] == board[4] && board[0] == board[8])
    {
        return true;
    }
    if (board[2] == board[4] && board[2] == board[6])
    {
        return true;
    }
    return false;
}

function sleep(ms) 
{
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < ms);
}
