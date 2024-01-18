# Shopee-Like Online Store Database

## Overview

This repository contains the Entity-Relationship Diagram (ERD) design for an online store system similar to Shopee. The ERD illustrates the relationships between different entities within the system.

## ERD Structure

The ERD is designed with the following main entities and their attributes:

1. **Users:**
   - UserID (Primary Key)
   - Username
   - Email
   - Password
   - Address
   - ...

2. **Products:**
   - ProductID (Primary Key)
   - Product Name
   - Description
   - Price
   - Stock Quantity
   - ...

3. **Orders:**
   - OrderID (Primary Key)
   - UserID (Foreign Key referencing Users)
   - Order Date
   - Order Status (processing, delivered, canceled, ...)
   - ...

4. **OrderDetails:**
   - OrderDetailID (Primary Key)
   - OrderID (Foreign Key referencing Orders)
   - ProductID (Foreign Key referencing Products)
   - Quantity
   - Unit Price
   - ...

5. **Payments:**
   - PaymentID (Primary Key)
   - OrderID (Foreign Key referencing Orders)
   - Payment Method (credit card, bank transfer, ...)
   - Total Amount
   - ...

6. **Reviews:**
   - ReviewID (Primary Key)
   - UserID (Foreign Key referencing Users)
   - ProductID (Foreign Key referencing Products)
   - Rating
   - Comment
   - ...

7. **Feedback:**
   - FeedbackID (Primary Key)
   - UserID (Foreign Key referencing Users)
   - Feedback Content
   - ...

## Relationships

The relationships between entities are defined using primary keys and foreign keys. For example:
- The relationship between `Users` and `Orders` is one-to-many.
- The relationship between `Products` and `OrderDetails` is many-to-many.

## Usage

Feel free to use or modify this ERD design for your own online store project. Adjustments may be needed based on specific project requirements.

## License

This project is licensed under the [MIT License](LICENSE).

+---------+     +-----------+     +-------------+
|  Users  |-----|  Orders   |     | OrderDetails|
+---------+     +-----------+     +-------------+
     |              |   |                |
     |              |   |                |
     |              |   |                |
     |              |   |                |
     v              |   v                v
+----------+     +------------+     +----------+
| Products |-----| Payments   |-----|  Reviews |
+----------+     +------------+     +----------+
     |                                  |
     |                                  |
     v                                  v
+----------+                          +---------+
| Feedback |                          |  Users  |
+----------+                          +---------+

