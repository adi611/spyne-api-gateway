# API Gateway

## Overview
Acts as a single entry point to route requests to the appropriate microservices: User Service, Discussion Service, and Comment Service.

## Prerequisites
- Node.js

## Setup

1. Install dependencies:
   ```sh
   npm install
2. Configure environment variables in `.env` file:
   ```sh
   PORT=9093
   USER_SERVICE_ENDPOINT=http://localhost:5000
   DISCUSSION_SERVICE_ENDPOINT=http://localhost:5001
   COMMENT_SERVICE_ENDPOINT=http://localhost:5002
3. Start the service:
   ```sh
   npm start
## Routes
- `/users/*` - Routes to User Service
- `/discussions/*` - Routes to Discussion Service
- `/comments/*` - Routes to Comment Service
