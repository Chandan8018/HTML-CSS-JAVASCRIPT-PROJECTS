// Gobal Veriable.
        // let computerChoose = '';
        let myName =prompt('Enter your Name:')
        document.querySelector('#h1').innerText = `${myName}, Welcome to the game!!`;

        function generatorComputerChoose(){
            let randomNumber = Math.random() *3;
            if(randomNumber<1){
                return 'Bat';
            } else if(randomNumber<2){
                return 'Ball';
            } else {
                return 'Stump';
            }
         //    return computerChoose;
        }

        let data = localStorage.getItem('score');
        let score;
        reset(data);
        function reset(data){
           score = data ? JSON.parse(data) : {
            win : 0,
            lost : 0,
            tie : 0,
           };

           score.show = function(){
            return `Score : win ${score.win}, lost ${score.lost}, tie ${score.tie} `;
           };
           finalResult();
        }
        

         function resultMsg(userMsg, computerMsg){
             //Nested if-else statement;
             if(userMsg === 'Bat'){
                 if(computerMsg === 'Bat'){
                    score.tie++;
                     return 'This match is Tie.';

                 } else if(computerMsg === 'Ball'){
                    score.win++;
                     return 'You win the Match.';
                 }else{
                    score.lost++
                     return 'Computer is win the Match.'
                 }
             }else if(userMsg === 'Ball'){
                 if(computerChoose === 'Bat'){
                    score.lost++
                     return 'Computer is win the Match.';
                 } else if(computerChoose === 'Ball'){
                    score.tie++;
                     return 'This match is Tie.';
                 }else{
                    score.win++;
                     return 'You win the Match.'
                 }
             }else{
                 if(computerChoose === 'Bat'){
                    score.win++;
                     return 'You win the Match.';
                 } else if(computerChoose === 'Ball'){
                    score.lost++
                     return 'Computer is win the Match.';
                 }else{
                    score.tie++;
                     return 'This match is Tie.'
                 }
             }
         } 
//final result
         function finalResult(userMove, computerMove, result){
            localStorage.setItem('score',JSON.stringify(score))
            // alert(`You are choose : ${userMove} \n Computer is choose : ${computerMove} \n So, ${result} \n
            // ${score.show()}`);
            document.querySelector('#userMove').innerText = 
              userMove !== undefined ? `You're choose : ${userMove}` : ' ';
            document.querySelector('#computerMove').innerText = 
              computerMove !== undefined ? `Computer choose is : ${computerMove}` : ' ';
            document.querySelector('#finalResult').innerText = result || ' ';
            document.querySelector('#score').innerText = score.show();
         }
