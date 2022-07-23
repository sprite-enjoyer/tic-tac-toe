
const didWin = (arr, itsXsTurn) => {
    const temp = itsXsTurn ? 1 : -1;
  
    for(let i = 0; i < 3; i++){
      if (
        arr[i][0] === temp &&
        arr[i][1] === temp &&
        arr[i][2] === temp 
      ) return (true);
      if (
        arr[0][i] === temp &&
        arr[1][i] === temp &&
        arr[2][i] === temp 
      ) return (true);
    }
  
    if(
      (
      arr[0][0] === temp &&
      arr[1][1] === temp &&
      arr[2][2] === temp
      ) 
      || 
      (
        arr[0][2] === temp &&
        arr[1][1] === temp && 
        arr[2][0] === temp
      )
    ) return (true);

    return (false);
  };

  export default didWin;