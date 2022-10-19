let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        if(buttonText=='X'){
           buttonText = '*';
           screenValue += buttonText;
           screen.value = screenValue;
        }
        else if (buttonText =='AC'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText =='='){
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'MRC'){

        }
        else if(buttonText == 'CE'){
            
        }
        else if(buttonText == 'GT'){
            
        }
        else if(buttonText == 'MU'){
            
        }
        else if(buttonText == 'ANS'){
            
        }
        else if(buttonText == 'ON'){
            
        }
        else if(buttonText == '√'){
            
        }
        
        else if(buttonText == '%'){
            screenValue += '/100';
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
        
    })
}
