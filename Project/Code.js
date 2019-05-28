"use strict";
 function calcMinSum() {
    var mas = document.getElementById("array").value;
    var elementValue =  minimumSum(mas);

    if(isNaN(elementValue)){
        alert("Введите числа через запятую");
        return;
    }

    document.getElementById("sum").value = elementValue;
}

function minimumSum(string) {
    var arr = string.split(',');
    var min = parseInt(arr[0], 10);
    var min2 = arr.length === 1 ? 0 : Number.MAX_SAFE_INTEGER;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] <= min) {
            min2 = min;
            min = parseInt(arr[i],10);
        } else if (arr[i] < min2) {
            min2 = parseInt(arr[i], 10)
        }
    }
    return min + min2;
}
