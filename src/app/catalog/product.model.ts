export interface IProduct {
    id: number; // Unique identifier for the product
    description: string; // Detailed description of the product
    name: string; // Name of the product
    imageName: string; // Name of the image file
    category: string; // Category the product belongs to (e.g., Heads, Arms, Bases)
    price: number; // Price of the product
    discount: number; // Discount on the product as a decimal (e.g., 0.2 for 20%)
  }
  