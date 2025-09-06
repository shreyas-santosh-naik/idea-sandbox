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
   git clone <repository-url>
   cd idea-sandbox-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

Start the Vite development server:

```bash
npm run dev
```

By default, the app will be available at:
`http://localhost:5173` (Vite default, may vary if configured)

### Running the Mock API

Run the JSON server for mock data:

```bash
npm run mock
```

The mock API will run at:
`http://localhost:5000`


## Contributing

Contributions are welcome!

* Open issues for bugs or feature requests
* Submit pull requests with improvements

## License

This project is licensed under the MIT License.