import { Button, Form, Input,Result } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { AppState } from '../store';
import { login } from '../store/actions/userActions';
import { LoginForm } from '../types/user';
import showError from '../utils/showError';
import showSuccess from '../utils/showSuccess';

function Login(){
    const history=useHistory();
    const location=useLocation<{newSignUp?: boolean}>();
    const dispatch=useDispatch();
    const {data,error}=useSelector((state:AppState) =>state.user);
const onFinish=(values: LoginForm)=>{
    dispatch(login(values));

};

useEffect(() => {
    error && showError("Hatalı giriş yaptınız!");
}, [error]);

useEffect(()=>{
    data.username && showSuccess("Başarıyla giriş yaptınız!");
},[data.username]);


useEffect(() => {
    const token=localStorage.getItem("token");
    if(token){
          history.push("/");
    }
}, [data]);



   return(
<Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 9 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    //onFinishFailed={onFinishFailed}    
    >
        <h2 style={{textAlign:"center", marginBottom: 20}}>Giriş Yap</h2>
{location.state?.newSignUp &&(
    <Result
    status="success"
    title="Başarıyla Kaydoldunuz!"
    subTitle="Lütfen kayıt bilgilerinizi kullanarak tekrar giriş yapınız!"
  />
  )}


      <Form.Item
        label="Kullanıcı Adı"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Şifre"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Gönder
        </Button>
      </Form.Item>
    </Form>
    );


  }

export default Login;