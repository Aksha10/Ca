/**
 * @author Akshata 
 * @description code for calculator following BODMAS rule
 */

var expression="";

/** 
 * @function numbers(val):string
 * @description taking input from the textbox and appending that input using "|"
 * @param {array} val
 */
function numbers(val){
	document.getElementById('tx1').value += val;	
	if(val=='+'||val=='-'||val=='*'||val=='/'){
		expression = expression + "|" + val + "|";
	}
	else{
		expression +=val;
	}	
}

/** 
 * @function myFunction1()
 * @description used for clearing textbox and expression
 */
function myFunction1() {
	document.getElementById("tx1").value="";
	expression="";	
}

/** 
 * @function equal()
 * @description spliting expression using "|" and stored it into a different variable and then call calculation() function 
 */
function equal(){	
	inputNo = expression.split("|");
	console.log(inputNo);
	calculation(inputNo);
	
}

/** @function calculation(inputNo):array
 *  @description calculating expression and prints the result
 *  @param {array} inputNo 
 */
function calculation(inputNo)
{
	debugger;
    console.log(inputNo);	
	let index=0;
	let answer=0;

	// loops for division
	inputNo.forEach(function (input){
		if (input == "/")
		{
			number1=index-1;
			number2=index+1;
			answer = parseFloat(inputNo[number1]) / parseFloat(inputNo[number2]);	
			spliceNo(inputNo,answer,index);	
		}
		index +=1;
	});
	index=0;
	
	// loops for Multiplication		
	inputNo.forEach(function (input){
		if (input == "*")
		{
			debugger;
			number1=index-1;
			number2=index+1;
			answer = parseFloat(inputNo[number1]) * parseFloat(inputNo[number2]);
			spliceNo(inputNo,answer,index);
		}
		index +=1;
	});
	index=0;

	// loops for addition
	inputNo.forEach(function (input){
		if (input == "+")
		{
			number1=index-1;
			number2=index+1;
			answer = parseFloat(inputNo[number1]) + parseFloat(inputNo[number2]);	
			spliceNo(inputNo,answer,index);
		}
		index +=1;
	});
	index=0;

	// loops for subtraction
	inputNo.forEach(function (input){
		if (input == "-")
		{
			number1=index-1;
			number2=index+1;
			answer = parseFloat(inputNo[number1]) - parseFloat(inputNo[number2]);	
			spliceNo(inputNo,answer,index);
		}
		index +=1;
	});
	index=0;
	document.getElementById('tx1').value = answer;
}

/**
 * @function spilceNo(inputNo,answer,index): array and two variables
 * @description splice input number and storing answer into input number 1
 * @param {array} inputNo,answer,index
 */
function spliceNo(inputNo,answer,index){
	inputNo.splice(index, 2);	
	inputNo[number1]=answer.toString();
	console.log(inputNo);
}





