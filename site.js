function getHistory(){
    return document.getElementById("val-history").innerText;
}
function printHistory(num){
    return document.getElementById('val-history').innerText=num;
}
function getAnswer(){
    return document.getElementById('val-answer').innerText;
}
function printAnswer(num){
    if (num==""){
        document.getElementById("val-answer").innerText=num;
    }else{
        document.getElementById("val-answer").innerText=getNumber(num);
    }
}
// seperate numbers by commas for readability
function getNumber(num){
  if(num=="-"){
    return "";
}  
	var n = Number(num);
	var value = n.toLocaleString();
	return value;
}

printAnswer("");


// manipulate the output
function reverseNumber(num){
    return Number(num.replace(/,/g,''));
}

// display operator 
var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        // clear operator
        if (this.id=="clear"){
            printAnswer("");
            printHistory("");
        }
        if (this.id=="backspace"){
            var answer=reverseNumber(getAnswer()).toString();
            if(answer){
                answer=answer.substring(answer.length,1);
                printAnswer(answer);
            }
        }
        else{
            var output=getAnswer();
            var history=getHistory();
            if(output==""&& history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output= output==""?
                output:reverseNumber(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printAnswer(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printAnswer("");
                }
            }
        }
    });
}

// operations
var number = document.getElementsByClassName("interger");
for(var i =0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var answer=reverseNumber(getAnswer());
        if(answer !=NaN){
            answer=answer+this.id;
            printAnswer(answer);
            // console.log(answer);
        }
    });
}
