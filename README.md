# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ElloFrontend

# Getting started

1. Clone this repository with the command below:

## clone repository
```bash
git clone https://github.com/Albertoo0625/ElloFrontend.git
```


### Install Dependencies
```bash
npm install
```

### Run The Server
```bash
npm run dev
```


2. Making Api Calls To Backend

Change endpoint:
comment out the axios endpoint of the hosted server

### comment line under src/api/axios.jsx
```bash
const BASE_URL='https://ellobackend.onrender.com/graphql';
```
### and uncomment the local server running the backend

### url
```bash
const BASE_URL='http://localhost:4000/graphql';
```

### Finally you can view the Frontend with a search feature complete with a scrollable suggestions feature with every key stroke and booksList,Details page,ReadingList with add and remove functionalities
