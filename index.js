//pig dice game 

//랜덤 주사위 스크립트 
let score = 0; 
let player = 2; 
let totalScore;
let minusTotal = score;


//dice 클릭하면 랜덤함수 실행
document.querySelector('.dice').addEventListener('click', function (){
    randomNum(1,6); // 점수 확인.   
});

function randomNum(min, max){
    let randNum = Math.floor(Math.random()*(max-min+1)) + min;
  
    score += randNum; //점수에 랜덤 dice 더하기

    totalScore = score;
    if(confirm('나온 숫자 :'+ randNum + ' 주사위를 계속 굴리시겠습니까?')){
        //계속 주사위 굴릴 경우
       
        console.log(score + '계속굴림');
        


        //1이 나왔을 경우
        if(randNum == 1){
            
            confirm('획득한 점수는 총 :'+ minusTotal +'입니다.');
        }else{
        //1이 아닐 경우,

            //굴린 숫자가 1이 아니면서 총합 100 이상이면,
            if(score >= 100){
                alert('게임 승리! 총 100점을 획득하셨습니다!');
            }
        }
        document.querySelector('p > .score').innerHTML = `${score}`;
    }else{
        //주사위 멈추는 경우 
       if(randNum == 1){
           //1이 나오면, 총 score에서 -1 ; 
        score = score - 1; //왜 뺄셈이 안될까?ㅠㅠ 
        console.log(score +'-'+ randNum + '1이라멈춘 경우');
        document.querySelector('p > .score').innerHTML = score;
       
       }else{
       
        totalScore = score;
        document.querySelector('p > .score').innerHTML = `${totalScore}`;
        console.log(score + '멈춘 경우');
       }
       
      
    }


}
