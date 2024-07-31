# Rocketium Assignment

This repository contains the code for a Rocketium assignment. The project is built with JavaScript in Node.js using the Express framework and includes a set of scripts and source code files.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- Node.js (version 14.x or later)
- npm (version 6.x or later)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/charanbhatia/Rocketium-Assignment.git
cd Rocketium-Assignment
```

### 2. Install Dependencies

```bash
npm install
```

During this step, necessary data will also be downloaded automatically.

### 3. Run the Project

To start the project, use the following command:

```bash
npm start
```

The application should now be running locally.

The server will start on port 3002 (or the port specified in the `PORT` environment variable).


### Get Data

- **URL**: `/api/data`
- **Method**: GET
- **Query Parameters**:
  - `name`: Filter data by name (case-insensitive, partial match)
  - `version`: Filter data by exact version match
  - `language`: Filter data by language (case-insensitive, exact match)
  - `sort`: Sort data by field. Format: `field:order` (e.g., `id:asc`, `name:desc`, `version:asc`)


## Rest API Documentation 
```
URL: https://www.postman.com/alantuning/workspace/postman/collection/32038946-55c5af4b-8c82-41f6-95c4-4ffd171623e1?action=share&creator=32038946
