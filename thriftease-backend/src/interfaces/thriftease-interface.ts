export interface UserAttribute {
  id: number;
  name: string;
  email: string;
  password: string;
  passwordHash: string;
}

export interface CategoryAttribute {
  id: number;
  name: string;
}

export interface ProductAttribute {
  id: number;
  name: string;
  categoryId: number;
  ownerId: number;
  price: number;
  //description: string;
  //negotiable: boolean;
  //condition: 'New' | 'Like New' | 'Good' | 'Fair' | 'Poor';
  //location: string;
  //rating: number;
  //discount: string;
  //imageUrls: string[];
  //status: "Available" | "Sold" | "Reserved";
  //views: number;
  //tags: string[];
  //deliveryOptions: string[];
  //favoriteCount: number;
  //reviews: Reviews[];
}

export interface Reviews {
  userId: string;
  comment: string;
  rating: number;
  date: Date;
}
