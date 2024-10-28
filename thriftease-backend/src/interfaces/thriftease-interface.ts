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

export interface SubCategoryAttribute {
  id: number;
  name: string;
  categoryId: number;
}

export interface ProductAttribute {
  id: number;
  name: string;
  categoryId: number;
  subCategoryId: number;
  ownerId: number;
  price: number;
  description: string;
  negotiable: boolean;
  condition: Condition;
  location: string;
  status: Status;
  deliveryOptions: string[];
  //imageUrls: string[];
  //views: number;
  //rating: number;
  //tags: string[];
  //reviews: Reviews[];
}

export enum Condition {
  New = "New",
  LikeNew = "Like New",
  Good = "Good",
  Fair = "Fair",
  Poor = "Poor",
}

export enum Status {
  Available = "Available",
  Sold = "Sold",
  Reserved = "Reserved",
}
