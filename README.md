# react_flask_demo


##Commands:
### Create the Vite app (Client)
- npm create vite@latest client
- cd client
- npm i
- npm i axious
- npm run dev


### Create the Backend API container (backend)
-  docker build -t react_flask_api . 
-  docker run -p 5000:5000 react_flask_api