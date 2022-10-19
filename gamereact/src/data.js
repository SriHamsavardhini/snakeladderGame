let cellArr = []
let snakeStart=[]
let snakeEnd=[]
let ladderStart=[]
let ladderEnd=[]
for (let i = 100; i >= 1; i -= 10) {
    if (i % 20 === 0) {
        for (let j = i; j > (i - 10); j--) {
            
            if(j%3===0 && (j%6===0)){
                cellArr.push({id:`${j}`,snake:'🐍',player:['playerOne','playerTwo'],snakeTo:`${j-5}`})
                snakeStart.push(j)
                snakeEnd.push(j-5)
            }
            else if((j%2===1) && (j%5===0)){
                cellArr.push({id:`${j}`,ladder:'🚀',player:['playerOne','playerTwo'],ladderTo:`${j+7}`})
                ladderStart.push(j)
                ladderEnd.push(j+7)
            }
            else{
                cellArr.push({id:`${j}`,snake:'no',ladder:'no',player:['playerOne','playerTwo']})
            }
        }
    }
    else {
        for (let j = (i - 9); j <= i; j++) {
            if((j%2===1) && (j%5===0)){
                cellArr.push({id:`${j}`,ladder:'🚀',player:['playerOne','playerTwo'],ladderTo:`${j+7}`})
                ladderStart.push(j)
                ladderEnd.push(j+7)
            }
            else if(j%3===0 && (j%6===0)){
                cellArr.push({id:`${j}`,snake:'🐍',player:['playerOne','playerTwo'],snakeTo:`${j-5}`})
                snakeStart.push(j)
                snakeEnd.push(j-5)
            }
            else{
                cellArr.push({id:`${j}`,snake:'no',ladder:'no',player:['playerOne','playerTwo']})
            }
        }
    }
    console.log(cellArr)
    console.log(snakeStart,snakeEnd)
    console.log(ladderStart,ladderEnd)
}
export default cellArr