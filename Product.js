let calculate_vat=require("calculatepricevat/calculatevat").calculate_VAT;
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
module.exports={Product}