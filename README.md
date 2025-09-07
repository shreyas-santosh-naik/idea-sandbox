# Idea Sandbox App

## Overview

The **Idea Sandbox App** is a React-based application that allows users to:

* Submit new ideas
* View a history of previously submitted ideas
* See a confirmation screen after successful submission, with options to return to the dashboard or submit another idea

It uses a **mock JSON server** for handling idea data during development.


## Project Structure

```
idea-sandbox-app
├── mock-api
│   ├── db.json
│   └── routes.json 
├── public
│   └── index.html
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── IdeaHistory.jsx
│   │   ├── SubmitIdea.jsx
│   │   └── Success.jsx
│   └── main.jsx
├── package.json
├── README.md
└── vite.config.js
```


## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) and npm installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shreyas-santosh-naik/idea-sandbox.git
   cd idea-sandbox-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

You can start both the Vite development server and the mock API together with:

```bash
npm start
```

- The React app will be available at:  
  `http://localhost:3000` 
- The mock API will run at:  
  `http://localhost:5000`

#### Alternatively

You can run them separately:

- Start the Vite development server:

  ```bash
  npm run dev
  ```

- Start the mock API server:

  ```bash
  npm run mock
  ```

## Contributing

Contributions are welcome!

* Open issues for bugs or feature requests
* Submit pull requests with improvements

## License

This project is licensed under the MIT License.
