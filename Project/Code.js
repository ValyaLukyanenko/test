sendButton.onclick =  function() {
    var mas = document.getElementById("array").value;
    var arr = mas.split(',');
    var min = parseInt(arr[0],10);
    var min2 = 0;

    if (arr.length === 1 && arr[0] === "") {
        alert('введите данные');
        return;
    }
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] <= min) {
            min2 = min;
            min = parseInt(arr[i],10);
        }
    }
document.getElementById("sum").value = min+min2;
};