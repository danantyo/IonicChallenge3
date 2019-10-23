import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Canon',
      expanded: true,
      products: [
        { id: 0, name: 'Canon iP2770', price: '45', imageUrl: '/assets/images/a.jpg' },
        { id: 1, name: 'Canon LBP6030', price: '92', imageUrl: '/assets/images/b.jpg' }
      ]
    },
    {
      category: 'Epson',
      products: [
        { id: 4, name: 'Epson L310', price: '120', imageUrl: '/assets/images/c.jpg' },
        { id: 5, name: 'Epson LX-310', price: '140', imageUrl: '/assets/images/d.jpg' },
		{ id: 5, name: 'Epson LQ-2190', price: '212', imageUrl: '/assets/images/e.jpg' }
      ]
    },
    {
      category: 'HP',
      products: [
        { id: 6, name: 'HP 2135', price: '40', imageUrl: '/assets/images/f.jpg' },
        { id: 7, name: 'HP P1102', price: '132', imageUrl: '/assets/images/g.jpg' },
        { id: 8, name: 'HP P2015', price: '150', imageUrl: '/assets/images/h.jpg' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
  
  deleteFromCart(product) {
  console.log(product);
  if (product === 0) {
	this.cart.shift();
  } 
  else {
	this.cart.splice(product, 1);
  }
}
  
}