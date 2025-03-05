# Notes API - Serverless CRUD Application

This project is a **Serverless CRUD API** using AWS API Gateway, Lambda, and DynamoDB. It is built with the **Serverless Framework** and deployed automatically using a **CI/CD pipeline** with GitHub Actions.

## Features
- **CRUD API**: Create, Read, Update, Delete notes  
- **AWS Infrastructure as Code (IaC)** using Serverless Framework  
- **DynamoDB** as the NoSQL database  
- **Multi-stage deployments** (dev, prod)  
- **CI/CD pipeline** with GitHub Actions for automated deployment  
- **RESTful API following best practices**  

---

## **API Endpoints**
| Method | Endpoint | Description |
|--------|-------------------------------|-------------|
| **POST** | `[/notes](https://1ytlkiucu2.execute-api.us-east-1.amazonaws.com/dev/notes)` | Create a new note |
| **GET** | `[/notes/{id](https://1ytlkiucu2.execute-api.us-east-1.amazonaws.com/dev/notes/{id})}` | Retrieve a note by ID |
| **PUT** | `[/notes/{id}](https://1ytlkiucu2.execute-api.us-east-1.amazonaws.com/dev/notes/{id})` | Update an existing note |
| **DELETE** | `https://1ytlkiucu2.execute-api.us-east-1.amazonaws.com/dev/notes/{id}` | Delete a note by ID |

### **Base URL**
https://1ytlkiucu2.execute-api.us-east-1.amazonaws.com/dev

---
### **CI/CD Pipeline**

A GitHub Actions workflow is set up to automate deployment. On every push to main, the pipeline:

1. Installs dependencies
2. Runs linting and tests
3. Deploys using Serverless Framework

## CI/CD Pipeline Screenshots

### 1. GitHub Actions Workflow  
![image](https://github.com/user-attachments/assets/8e4bd942-4036-4be7-83ac-651d02766b96)


### 2. GitHub Secrets  
![image](https://github.com/user-attachments/assets/ab34a3e2-f8e7-4931-a9dd-eb419c60d9bb)

   

