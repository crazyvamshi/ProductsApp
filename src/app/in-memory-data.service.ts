import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1, name: 'Iphone XS Max', price: "$1099.00", image: 'https://cdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg',
      description:"iPhone XS Max features a Super Retina display with custom-built OLED. Securely unlock your iPhone, log in to apps, and pay with just a glance with Advanced Face ID. The A12 Bionic chip transforms the way you experience photos, gaming, augmented reality, and more. The 12MP dual-camera system takes your portraits to the next level. Water resistant.(1) And iOS 12 has new tools that make iPhone more personal than ever." },
      { id: 2, name: 'Iphone XS', price: "$999.00", image: 'https://cdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg',
      description: "iPhone XS features a Super Retina display with custom-built OLED. Securely unlock your iPhone, log in to apps, and pay with just a glance with Advanced Face ID. The A12 Bionic chip transforms the way you experience photos, gaming, augmented reality, and more. The 12MP dual-camera system takes your portraits to the next level. Water resistant.(1) And iOS 12 has new tools that make iPhone more personal than ever." },
      { id: 3, name: 'Iphone XR', price: "$749.00", image: 'https://cdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg',
      description: "iPhone XR features a 6.1-inch(1) Liquid Retina display—the most advanced LCD in the industry. Advanced Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough camera system. In 6 stunning new finishes."},
      { id: 4, name: 'Iphone X', price: "$899.00", image: 'https://cdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg',
      description: "iPhone X. You've never seen anything like it. It's never seen anything like you." },
      { id: 5, name: 'Iphone 8 Plus', price: "$699.00", image: 'https://cdn2.gsmarena.com/vv/bigpic/apple-iphone-8-plus-new.jpg',
      description: "All-glass design. 12 MP dual cameras. A11 Bionic chip. Wireless charging.(1)" },
      { id: 6, name: 'Iphone 8', price: "$599.00", image: 'https://cdn2.gsmarena.com/vv/bigpic/apple-iphone-8-new.jpg',
      description: "All-glass design. Advanced cameras. A11 Bionic chip. Wireless charging.(1)" },
      { id: 7, name: 'Iphone 7 Plus', price: "$569.00", image: 'https://cdn2.gsmarena.com/vv/bigpic/apple-iphone-7-plus-r2.jpg',
      description: "All-new dual 12 MP cameras. The brightest, most colorful iPhone display ever. The fastest performance and best battery life in an iPhone. And stereo speakers. Every bit as powerful as it looks—this is iPhone 7 Plus." },
      { id: 8, name: 'Iphone 7', price: "$449.00", image: 'https://cdn2.gsmarena.com/vv/bigpic/apple-iphone-7r4.jpg',
      description: "12 MP camera. Retina HD display. High performance and great battery life. Water and dust resistant.¹ And stereo speakers."},
      
    ];
    return {products};
  }

  // Overrides the genId method to ensure that a product always has an id.
  // If the products array is empty,
  // the method below returns the initial number (11).
  // if the products array is not empty, the method below returns the highest
  // product id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}