// 랜덤번호 지정
// 유저 번호 입력, go버튼 누름
// if user == randnum, 정답
// if user < randnum, Down
// if user > randnum, Up
// reset 버튼, 게임 리셋
// 5번 기회 소진 시 게임 종료(추측 불가, 버튼 비활성화)
// user < 1 \\ user > 100, 알려주기, 기회 소진 x
// 입력한 숫자 또 입력 시 기회 소진 x

let computerNum = 0
let playButton = document.getElementById('play-button')
let userInput = document.getElementById('user-input')
let resultArea = document.getElementById('result-area')
let resetButton = document.getElementById('reset-button')
let chances = 5
let gameOver = false
let chanceArea = document.getElementById('chance-area')
let history = []

playButton.addEventListener('click', play) // 함수도 변수처럼 사용 가능
resetButton.addEventListener('click', reset)
userInput.addEventListener('focus', function() {
    userInput.value = ''
})


function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log('정답', computerNum);
}

function play(){
    let userValue = userInput.value


    if(userValue < 1 || userValue > 100){
        resultArea.textContent = '1과 100 사이 숫자를 입력해주세요'
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = '이미 입력한 숫자입니다. 다른 숫자를 입력해주세요';
        return;
    }
    chances --;
    chanceArea.textContent = `남은 기회:${chances}번`
    console.log('chance', chances)
    
    if(userValue < computerNum){
        resultArea.textContent = 'Up!'
    } else if(userValue > computerNum){
        resultArea.textContent = 'Down!'
    } else{
        resultArea.textContent = '맞췄습니다!!!'
        gameOver = true
    }

    history.push(userValue)
    console.log(history)


    if(chances < 1){
        gameOver = true
    }

    if(gameOver == true){
        playButton.disabled = true
    }
}

function reset(){
    // user input창 깨끗이 정리
    userInput.value = ''
    // 새로운 번호 생성
    pickRandomNum()

    resultArea.textContent = '결과 값이 여기 나옵니다.'
}

play()
pickRandomNum()