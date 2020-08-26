function checkCashRegister(price, cash, cid) {
    let cidArr = [
      {name : "ONE HUNDRED", value : 100, total : cid[8][1]},
      {name : "TWENTY", value : 20, total : cid[7][1]},
      {name : "TEN", value : 10, total : cid[6][1]},
      {name : "FIVE", value : 5, total : cid[5][1],},
      {name : "ONE", value : 1, total : cid[4][1]},
      {name : "QUARTER", value : 0.25, total : cid[3][1],},
      {name : "DIME", value : 0.1, total : cid[2][1]},
      {name : "NICKEL", value : 0.05, total : cid[1][1]},
      {name : "PENNY", value : 0.01, total : cid[0][1]}
    ];
    // console.log(cidArr);
    let cidLength = cid.length;

    let  objOut = {
        status : null,
        changeArr : []
      };

    let totalCID = cid.map(elem =>  elem[1]).reduce((sum, elem) => sum + elem).toFixed(2);
    totalCID = Number.parseFloat(totalCID);
    let change = cash - price;
    let noChangeExact = true;
    
    if (change === totalCID) {
      objOut.status = "CLOSED";
      objOut.changeArr = cid;
      console.log(objOut);
      return objOut;
    }

    for (let i = 0; i < cidLength; i++) {
      let cont = 0;
      while (change >= cidArr[i].value && cidArr[i].total !== 0 && noChangeExact) {
        cont++;
        change -= cidArr[i].value;
        change = parseFloat(change).toFixed(2);
        cidArr[i].total -= cidArr[i].value;
        if ( change == 0.00) {
          noChangeExact = false;
        }
      }
      if (cont !== 0) {
        objOut.changeArr.push([cidArr[i].name, cidArr[i].value * cont])
      }
    }

    if (totalCID < change || noChangeExact) {
      objOut.status = "INSUFFICIENT_FUNDS";
      objOut.changeArr = [];
    } else {
      objOut.status = "OPEN";
    }
    console.log(objOut);
    return objOut;
  }
  
  // checkCashRegister(10, 400.41, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

  // El siguiente llamado debería devolver {status: "OPEN", change: [["QUARTER", 0.5]]}.
  // checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

  // El siguiente llamado debería devolver {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
  // checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

  // El siguiente llamado debería devolver {status: "INSUFFICIENT_FUNDS", change: []}.
  // checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

  // El siguiente llamado debería devolver {status: "INSUFFICIENT_FUNDS", change: []}.
  // checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

  // El siguiente llamado debería devolver {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);