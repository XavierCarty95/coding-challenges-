// var bill = []

// bill.forEach(function(bill){
//     bill = element * bill
    
    
// })





 function billCount (bill) {
     let total = 0;
 bill.forEach(function(item){
     total += item
 })
 
 return (total * 1.07 * 1.02).toFixed(2)
    
}


console.log(billCount([13, 16, 17]));