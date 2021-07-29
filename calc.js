
function funcResult() {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':

            result = num1 / num2; {
                if (num2 == 0) {

                    result = 'error';
                    alert("Error: На ноль делить нельзя!");
                }
            }
            break;
        default:
            result = 'выберите операцию';

    }

    document.getElementById("result").value = result;
}



function myFunctionClear() {
    document.getElementById("result").value = '';
    document.getElementsByName('number')[0].value = '';
    document.getElementsByName('number')[1].value = '';

}