import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import { BrowserRouter } from "react-router-dom";


// ReactDOM.render(
//     <BrowserRouter basename="/react-portfolio">
//         <App />
//     </BrowserRouter>,
//     document.getElementById("root")
// );

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);