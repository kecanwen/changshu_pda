function getCodeHelper()
{
let codeFilter=(code)=>{
	
  
   // let strs=code.replace(/\：/g,':').replace(/\，/g,',').replace(/\ /g,',');
   
   // let reg = /物料编码:[a-zA-Z0-9-_]+/;

   // let ret = reg.exec(strs)

   
   // let obj={code:(ret[0].split(':')[1]).trim()};
   let obj={code:code};
	return obj;
}

let receiptFilter=(receiptOrderList,code)=>{
	let receiptOrders=[];
	receiptOrderList.forEach(function(item,index){
	  item.receiptOrderItem=item.receiptOrderItem.filter(e=>{return e.material.xCode==code.code});
	   if(item.receiptOrderItem.length>0)
	   {
		   receiptOrders.push(item);
	   }
	});
	// receiptOrderList.forEach(function(item,index){
	//   item.receiptOrderItem=item.receiptOrderItem.filter(e=>{return e.materialProperty.m_Str1==code.code});
	//    if(item.receiptOrderItem.length>0)
	//    {
	// 	   receiptOrders.push(item);
	//    }
	// });
	
	 return receiptOrders;
}
return {codeFilter:codeFilter,receiptFilter:receiptFilter}
}
