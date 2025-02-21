
// function shop(item) {
//     return item == "chocolate" ? "$20" :
//            item == "ice_cream" ? "$30" :
//            item == "biscuits"  ? "$10" :
//            item == "drinks"     ?  "$30": "no item Added" ;
                
// }
// let item = "drinks";
// console.log(shop(item));

// let item = ["cake" & "drinks"];
// console.log(shop(item));

// let item = ["drinks" + "biscuits"];
// console.log(shop(item));



function shop(...items){      //spread-operator
    let total=0;


    for (let item of items) {
        total += item == "chocolate" ? 20 :         
                 item == "ice_cream" ? 30 :           
                 item == "biscuits"  ? 10 :            
                 item == "Drinks"    ? 30 : 0;          

}
    return total>0  ?  `total cost of the items:$${total}` : "item not added";
}
console.log("\n");
console.log(shop("chocolate" , "drinks"));
console.log(shop("ice_cream" , "drinks" , "chocolate" , "cake" , "Drinks"));




console.log("\n");
console.log("\n");
console.log("\n");




function stationery(...products){      
    let price=0;
    let unavailableProduct = [];

    for(let product of products){
        if(product == "pen"){
            price += 20;
        }else if(product == "book"){
            price += 60;
        }else if(product == "pencil"){
            price += 10;
        }else if(product == "file"){
            price += 90;
        }else if(product == "keyboard"){
            price += 300;
        }else{
            unavailableProduct.push(product);
        }

    }
    let result = price > 0 ? `Total price of all Products: $${price}` : "No valid items added";


    // if(unavailableItems > 0){
    //     result += `product not available: ${unavailableItems}`;
    // }
    if(unavailableProduct.length > 0){
        result += ` product not available: ${unavailableProduct.join(" ")}`;
    }

    return result;
}

console.log(stationery("pen", "book", "pencil")); 
console.log(stationery("cake" , "pen" , "pencil"));
