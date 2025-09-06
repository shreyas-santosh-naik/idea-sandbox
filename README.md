# Idea Sandbox App

## Overview
The Idea Sandbox App is a React application that allows users to submit their ideas and view the history of submitted ideas. It features a success page that confirms the submission of ideas and provides options to navigate back to the dashboard or submit another idea.

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
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd idea-sandbox-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the application, run:
```
npm run dev
```
This will start the development server, and you can access the app at `http://localhost:3000`.

### Setting Up Mock API with JSON Server

1. **Install JSON Server**:
   Open your terminal and navigate to the project directory. Run the following command to install JSON Server as a development dependency:
   ```
   npm install json-server --save-dev
   ```

2. **Create Mock API Files**:
   In the project root, create a new directory named `mock-api`. Inside this directory, create two files: `db.json` and `routes.json`.

3. **Set Up db.json**:
   Open `mock-api/db.json` and add the following mock data structure:
   ```json
   {
     "ideas": []
   }
   ```

4. **Set Up routes.json (Optional)**:
   If you want to customize routes, you can define them in `mock-api/routes.json`. For basic usage, this step can be skipped.

5. **Update package.json**:
   Add a script to your `package.json` to run the JSON server. Under the "scripts" section, add:
   ```json
   "mock": "json-server --watch mock-api/db.json --port 5000"
   ```

6. **Modify handleSubmitAnotherIdea Method**:
   In `src/pages/Success.jsx`, update the `handleSubmitAnotherIdea` method to send a POST request to the mock API:
   ```jsx
   const handleSubmitAnotherIdea = async () => {
     const newIdea = { /* your idea data here */ };
     await fetch('http://localhost:5000/ideas', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(newIdea),
     });
     navigate('/submit');
   };
   ```

7. **Run the JSON Server**:
   In your terminal, run the following command to start the JSON server:
   ```
   npm run mock
   ```

8. **Test the API**:
   With the JSON server running, you can now test the `handleSubmitAnotherIdea` method by submitting a new idea through the application. Check the `db.json` file to see if the new idea is added.

9. **Access the Mock API**:
   You can access the mock API at `http://localhost:5000/ideas` to see the list of submitted ideas.

## Contributing
Feel free to submit issues or pull requests for any improvements or features you would like to see in the Idea Sandbox App.

## License
This project is licensed under the MIT License.