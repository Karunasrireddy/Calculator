document.addEventListener("DOMContentLoaded", function () {
  var display = document.getElementById("cal-display");
  var buttons = document.getElementsByClassName("btn");
  let currentValue = "";
  let value1 = display.value;

  for (let button of buttons) {
    button.addEventListener("click", function () {
      const value = button.innerText;
      if (value == "C") {
        currentValue = "";
        display.value = 0;
      } else if (value == "1/x") {
        oneByX(display.value);
      } else if (value == "x2") {
        xSquare(display.value);
      } else if (value == "2√x") {
        squareRootX(display.value);
      } else if (value == "⌫") {
        backspace();
      } else if (value == "=") {
        equal(display.value);
      } else {
        /* else if (value == "÷") {
        button.addEventListener("click", function () {
          currentValue = currentValue + value1 + value + display.value;
        });
        if (value == "=") {
          divide(currentValue);
        }
      }  */
        currentValue = currentValue + value;
        display.value = currentValue;
      }

      // elseif(value=='÷'){
      //     else if(value){
      //     button.addEventListener('click',function(){
      //         currentValue=currentValue+value1+value+display.value;
      //     })
      //       divide(currentValue);

      // }

      //Functions
      function oneByX(val) {
        currentValue = 1 / val;
        display.value = currentValue.toString();
      }
      function xSquare(val) {
        let result = val * val;
        display.value = result.toString();
      }
      function squareRootX(val) {
        let result = Math.sqrt(val);
        display.value = result.toString();
      }
      function backspace() {
        if (display.value.length > 1) {
          display.value = display.value.substring(0, display.value.length - 1);
        } else {
          currentValue = "";
          display.value = 0;
        }
      }
      /* function divide(expression) {
        let res = expression.split("÷");
        let result = parseInt(res[0]) / parseInt(res[1]);
        display.value = result.toString();
      } */
      function equal(val) {
        if (val.indexOf("+") > -1) {
          var ind = val.indexOf("+");
          var str1 = "";
          var str2 = "";
          str1 = Number(val.substring(0, ind));
          str2 = Number(val.substring(ind + 1, val.length));
          currentValue = str1 + str2;
          display.value = currentValue;
        } else if (val.indexOf("-") > -1) {
          var ind = val.indexOf("-");
          var str1 = "";
          var str2 = "";
          str1 = Number(val.substring(0, ind));
          str2 = Number(val.substring(ind + 1, val.length));
          currentValue = str1 - str2;
          display.value = currentValue;
        } else if (val.indexOf("×") > -1) {
          var ind = val.indexOf("×");
          var str1 = "";
          var str2 = "";
          str1 = Number(val.substring(0, ind));
          str2 = Number(val.substring(ind + 1, val.length));
          currentValue = str1 * str2;
          display.value = currentValue;
        } else if (val.indexOf("÷") > -1) {
          var ind = val.indexOf("÷");
          var str1 = "";
          var str2 = "";
          str1 = Number(val.substring(0, ind));
          str2 = Number(val.substring(ind + 1, val.length));
          currentValue = str1 / str2;
          display.value = currentValue;
        } else {
          display.value = currentValue;
        }
      }
    });
  }
});
