import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import "antd/dist/antd.css";
import App from "./App";
import rootReducer from "./store";


import { BrowserRouter as Router } from 'react-router-dom';
const store=createStore(rootReducer,applyMiddleware(thunk));                        // uygulamanın store kısmını oluşturduk.
ReactDOM.render(
<Provider store = {store}>
    <Router>
    <App/>
    </Router>
</Provider>, 
document.getElementById('root'));










// store bağlama işlemini yaptık