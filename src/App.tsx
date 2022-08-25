
import { Route, Router } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Layout, Menu } from 'antd';
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Categories from "./components/Categories";
import Records from "./components/Record";
import AppHeader from "./components/AppHeader";
import Logout from "./components/Logout";


const {Header, Content, Footer}=Layout;

function App() {
  return( 
    <Layout>
   <AppHeader/>
    <Content className="site-layout" style={{ padding: ' 50px', marginTop: 64 }}>
      
      
       <Route path="/register" component={SignUp}/>

       <Route path="/login" component={Login}/>

       
       <PrivateRoute path="/categories" component={Categories} />

       
       <PrivateRoute path="/records" component={Records} />

       
       <Route path="/logout" component={Logout}/>

    </Content>

    <Footer style={{ textAlign: 'center' }}>Gelir-Gider Takip Uygulaması @MerveDik 2022</Footer>

    
  </Layout>
   
    
 
  );  
}
export default App;
