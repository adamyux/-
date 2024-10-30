// script.js
function calculateLifePath() {
    const birthdate = document.getElementById('birthdate').value;
  
    if (!birthdate) {
      document.getElementById('result').innerText = "请先输入出生日期";
      return;
    }
  
    const [year, month, day] = birthdate.split('-').map(Number);
  
    // Helper function to reduce a number to a single digit or master number
    function reduceToSingleOrMaster(num) {
      while (![11, 22, 33].includes(num) && num > 9) {
        num = num.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
      }
      return num;
    }
  
    // Calculate life path number
    const total = reduceToSingleOrMaster(year) + reduceToSingleOrMaster(month) + reduceToSingleOrMaster(day);
    const lifePathNumber = reduceToSingleOrMaster(total); 
  
    // Display result
    document.getElementById('result').innerText = `你的生命路径数字是：${lifePathNumber}`;
  }
  