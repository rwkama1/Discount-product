# Discount product

## Description

Determine how much a person will finally pay for an item X, considering that it has a 20% discount, and must pay 10% VAT, it must show the discounted price and the final price.

## Solution

```Javascript

class Product
{
    constructor(pprice)
    {
        this.price=pprice;
    }
    total_with_discount=(discount)=>
    {
    let calcvat=calculate_vat(this.price,10);
     let pricediscount=0;
     let calcdiscount=0;
     let total_vat=0;
     calcdiscount=discount/100;
     discount=this.price*calcdiscount;
     pricediscount=this.price-discount; 
     total_vat =pricediscount+calcvat.vat; 
     return {pricediscount,total_vat}
    }
   
}
```
## Usage

```Javascript

  let Product=require("./Product").Product;

let product=new Product(4.54);
let calc=product.total_with_discount(20);
 console.log("The price of the product with a 20% discount is: USD "+calc.pricediscount);
console.log("                                              ");
console.log("The final price with 10% VAT is: USD "+calc.total_vat);


```