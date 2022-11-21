// 2. 사다리 인원 입력
// process.argv를 이용하여 사다리 게임에 참여할 인원을 입력받는다.
// 예: node index.js 3 로 실행하면 3을 읽도록 함.
// 만약 사다리 인원이 2명 미만이거나 8명을 초과할 경우 프로그램을 종료한다.

// const process = require('process');

// const args = process.argv;

// if( args[2] > 2 && args[2] < 8 ){
//     console.log(`3번 째 요소 인수 값: + ${args[2]}`);
// }


// 3. 사다리 출력하기
// 사다리 높이는 4개라고 가정한다.
// 참여 인원과 높이를 매개변수로 받아서 사다리를 출력하는 printLadder() 함수를 구현한다.
// 가로 개수는 참여 인원 - 1, 세로 개수는 사다리 높이와 동일한 Int 타입 2차원 배열을 만들고
// Math.random으로 랜덤하게 사다리 발판이 있으면 -를 출력하고, 없으면 공백을 출력한다.
// 발판 사이에는 |로 표시한다.
// 실행해서 콘솔에 출력되는지 확인한다.

const process = require('process');

const args = process.argv;

const ladderHeight = args[2];
const numberOfParticipants = args[3];

function slashOrblank(){
    const randomNumber = Math.random() * 10;
    const roundNumber = Math.round(randomNumber);

    if( roundNumber % 2 === 0){
        return '-';
    } else {
        return ' ';
    }
}

function printLadderIn2DArray(heigth, length){
    const array = [];

    for(let i = 0; i < heigth; i++){
        const cells = [];
        for(let j = 0; j < length ;j++){
            if( j === 0 ){
                cells.push('|');
            } else if( j % 2 === 1){
                cells.push(slashOrblank());
            } else {
                cells.push('|');
            }
        }
        array.push(cells);
    }
    return array;
}

function printLadder(height, participants){
    const columnLength = participants * 2 - 1;

    const laderIn2DArray = printLadderIn2DArray(height, columnLength);

    for( i = 0; i < laderIn2DArray.length; i++){
       console.log(laderIn2DArray[i].join(""));
    }
}

const answer = printLadder(ladderHeight, numberOfParticipants);
console.log(answer);

