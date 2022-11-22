// 사다리 게임 출력하기

const { exit } = require('process');
const process = require('process');

const argv = process.argv;

const ladderHeight = argv[2];
const numberOfParticipants = argv[3];

if( numberOfParticipants < 2 || numberOfParticipants > 8 ){
    console.log("참여 인원 조건에 의해 프로그램 종료합니다.")
    exit();
}

function eitherSlashOrblank(){
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
                cells.push(eitherSlashOrblank());
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

printLadder(ladderHeight, numberOfParticipants);


