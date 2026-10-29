Here we are gone a create a blog post project with some open source tools like
1. appwrite: for backend functionality and storage
2. reddux: for state management
3. tinymce: for rich text editing tools
4. html react parser: for parsing the HTML content from the rich text editor(with decorative tools like bold, color, list etc..) into React components
5. react-router-dom: for routing and navigation between different pages of the blog post project
6. react-hook-form: for handling form submissions and validations

```bash
npm i appwrite @reduxjs/toolkit react-redux @tinymce/tinymce-react html-react-parser react-router-dom react-hook-form
```

1. Appwrite: Appwrite is an open-source backend server that provides developers with a set of tools and services to build web and mobile applications. It offers features like authentication, database management, file storage, and more.
1. create a free account
2. create a project
3. setup database




1. Usage of the Env variablein vite app
1. create a .env file in the root of the project(where package.json is present)
2. add the key-value pairs in the file (make sure to prefix the key with VITE_ for vite app to recognize it)
3. to access the env variable in the code use import.meta.env.<key_name>
4. u can have env specific files like .env.development (npm run dev), .env.production(npm run build), .env.testing(npm run dev -- --mode testing) etc.. and vite will automatically pick the correct file based on the mode you are running the app in.
5. .env is loaded by default but if same key is present in .env.development then the value from .env.development will be used when running the app in development mode.
```jsx
.env
VITE_APPWRITE_PROJECT_URI=""
VITE_APPWRITE_PROJECT_ID=""
VITE_APPWRITE_DATABASE_ID=""
VITE_APPWRITE_BUCKET_ID=""


.jsx
console.log(import.meta.env.VITE_APPWRITE_PROJECT_URI)
console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID)
console.log(import.meta.env.VITE_APPWRITE_DATABASE_ID)
console.log(import.meta.env.VITE_APPWRITE_BUCKET_ID)
```

for production grade istead of reading individually read it in the conf and makes sure the datatypes too 
```javascript
conf.js
export const conf ={
    projectUri : String(import.meta.env.VITE_APPWRITE_PROJECT_URI),
    projectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    bucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
```
