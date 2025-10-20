# Express.js RESTful API - Product Management

## Overview
This project is a RESTful API built using Express.js and MongoDB for managing products. It supports CRUD operations (Create, Read, Update, Delete), filtering, pagination, and search, and includes custom middleware for logging and error handling.

## Features
- GET /api/products – Retrieve all products with optional filtering, search, and pagination
- GET /api/products/:id – Retrieve a product by ID
- POST /api/products – Create a new product
- PUT /api/products/:id – Update a product
- DELETE /api/products/:id – Delete a product
Advanced features include search by name or description (`q` query), filter by category (`category`) and price range (`minPrice` / `maxPrice`), and pagination using `page` and `limit`.

## Project Structure
- `config/db.js` – MongoDB connection
- `models/Product.js` – Product schema
- `routes/productRoutes.js` – Routes for products
- `middleware/logger.js` – Logs requests
- `middleware/errorHandler.js` – Handles errors
- `server.js` – Entry point
- `package.json` & `package-lock.json` – Node dependencies
- `.env` – Environment variables (not committed)
- `.env.example` – Example environment variables

## Installation
1. Clone the repository:  
bash
git clone <your-github-repo-url>
cd express-js-server-side-framework-AssaniNdaka-1



2. **Install dependencies**:

npm install

3. **Create a .env file (based on .env.example) and add**

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/productsdb
NODE_ENV=development

4. **Start the server**:

npm start

**The API will run at: http://localhost:5000**

API Endpoints

1. **Get All Products**

GET /api/products

2. **Get Product by ID**

GET /api/products/:id

Example response:

{
  "_id": "650f123abc123def4567890a",
  "name": "Laptop",
  "description": "High performance laptop",
  "price": 1200,
  "category": "Electronics",
  "createdAt": "2025-10-20T12:00:00.000Z"
}
**Create a Product**
POST /api/products

//Request body:

{
  "name": "Smartphone",
  "description": "Latest model smartphone",
  "price": 800,
  "category": "Electronics"
}

//Response:

{
  "_id": "650f456abc123def4567890b",
  "name": "Smartphone",
  "description": "Latest model smartphone",
  "price": 800,
  "category": "Electronics",
  "createdAt": "2025-10-20T12:30:00.000Z"
}

**Update a Product**

PUT /api/products/:id

//Request body:

{
  "price": 750
}

//Response:

{
  "_id": "650f456abc123def4567890b",
  "name": "Smartphone",
  "description": "Latest model smartphone",
  "price": 750,
  "category": "Electronics",
  "createdAt": "2025-10-20T12:30:00.000Z"
}

**Delete a Product**

DELETE /api/products/:id

//Response:
{
  "message": "Deleted successfully"
}

**Middleware**

Logger – logs HTTP requests to the console

Error Handler – returns proper HTTP status codes and messages

**Environment Variables**
//.env.example includes:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/productsdb
NODE_ENV=development

**Testing the API**

Use Postman, Insomnia, or curl to test all endpoints.

**Author**

Assani Ndaka

**License**

This project is for academic purposes and submitted as part of a GitHub Classroom assignment.







