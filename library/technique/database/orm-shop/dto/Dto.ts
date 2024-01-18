export class Transformer {
  static transformToDTO<T, U>(source: T, destinationClass: { new (): U }): U {
    const destination = new destinationClass();
    Object.assign(destination, source);
    return destination;
  }
}

export class UsersDTO {
  username: string;
  email: string;
  address: string;
  // ... other user-related properties
}

export class ProductsDTO {
  productName: string;
  description: string;
  price: number;
  stockQuantity: number;
  // ... other product-related properties
}

export class OrdersDTO {
  orderDate: Date;
  orderStatus: string;
  // ... other order-related properties
}

export class OrderDetailsDTO {
  quantity: number;
  unitPrice: number;
  // ... other order detail-related properties
}

export class PaymentsDTO {
  paymentMethod: string;
  totalAmount: number;
  // ... other payment-related properties
}

export class ReviewsDTO {
  rating: number;
  comment: string;
  // ... other review-related properties
}

export class FeedbackDTO {
  feedbackContent: string;
  // ... other feedback-related properties
}
