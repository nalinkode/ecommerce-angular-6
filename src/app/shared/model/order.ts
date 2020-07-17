export interface Order {
  orderLineId : number;
  quantity : number;
  order : IOrder;
  product : IProduct;
}

interface IOrder {
 orderId: number;
 orderDate: String;
 total : number;
 isOrderCompleted: string;
 customer : Customer;
}

interface Customer {
   customerId: number;
   name : string;
   email : string; 
   phone : number;
}

interface IProduct {
    productId  : number;
    productName :string;
    price : number;     
    offerPrice : number;
}