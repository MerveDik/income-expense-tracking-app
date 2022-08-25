import { Button, Form, Input} from 'antd';
import { useHistory } from 'react-router-dom';
import api from '../utils/api';
import showError from '../utils/showError';





function SignUp(){
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 9 },
      };
    const validateMessages = {
        required: '${label} gereklidir!',
        types: {
          email: '${label} geçerli değil!',
          number: '${label} geçerli bir numara değil!',
        },
        number: {
          range: '${label} arasında olmalıdır ${min} ve ${max}',
        },
      };


    const history=useHistory();
    const onFinish = async (values: any) => {
        try{
        await api().post("/users/register",values);
        history.push("/login",{newSignUp:true});
        } catch(error){
            console.log({error});
            showError((error as any).response.data.errorMessage);
        }
    };
   
    return(
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <h2 style={{textAlign:"center", marginBottom: 20}}>Kayıt Ol</h2>


        <Form.Item name="username" label="Kullanıcı Adı" rules={[{ required: true }]}>
        <Input />
        </Form.Item>
        <Form.Item
        label="Şifre"  name="password"
        rules={[{ required: true, message:'Lütfen şifrenizi giriniz!' ,min:6 }]}>
        <Input.Password />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ type: 'email' , required:true }]}>
        <Input />
        </Form.Item>    
        <Form.Item name="full_name" label="Tam ad">
        <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        
        
        <Button type="primary" htmlType="submit">
          Gönder
        </Button>
        </Form.Item>
        </Form>
        );



      }

      
export default SignUp;