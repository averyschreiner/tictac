let count = 0;
let board = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

function changepic(id){
    console.log(board)
    if(winCheck()) {return};
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
                alert("X is the winner");
            }
            else
            {
                alert("O is the winner");
            }
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
    if (board[0] == board[1] && board[0] == board[2])
    {
        return true;
    }
    if (board[3] == board[4] && board[3] == board[5])
    {
        return true;
    }
    if (board[6] == board[7] && board[6] == board[8])
    {
        return true;
    }
    return false;
}

function winCol()
{
    if (board[0] == board[3] && board[0] == board[6])
    {
        return true;
    }
    if (board[1] == board[4] && board[1] == board[7])
    {
        return true;
    }
    if (board[2] == board[5] && board[2] == board[8])
    {
        return true;
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
