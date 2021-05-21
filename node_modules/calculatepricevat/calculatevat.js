const  calculate_VAT=(price,country_vat_percentage)=>
{
let total,vat,calvat;
calvat=country_vat_percentage/100;
vat=price*calvat;
total=price+vat
return {vat,total}
}

module.exports={calculate_VAT};
