import { connect } from 'react-redux';
import { submitLoginForm, clearLoginError } from '~/store/actions';
import { Form, Input, Button, Checkbox, Alert, Typography } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = ({ dispatch, loginFailed }) => {
  const validateMessages = {
    required: 'Please enter your ${name}',
    types: {
      email: 'It is not a valid ${name}'
    }
  };
  const submitForm = (values) => {
    dispatch(submitLoginForm(values));
  };
  const closeAlert = () => {
    setTimeout(() => dispatch(clearLoginError()), 400);
  }
  return (
    <>
      <Form
        name="login"
        className="pane login-form"
        initialValues={{ remember: true }}
        validateMessages={validateMessages}
        onFinish={submitForm}
      >
        {loginFailed && <Alert
          className="login-form_alert"
          message="Login failed"
          description="Try another email or password"
          type="error"
          closable
          onClose={closeAlert}
        />}
        <Typography.Title level={2}>Welcome to Octopi!</Typography.Title>
        <Form.Item name="email" rules={[{ required: true, type: 'email' }]}>
          <Input prefix={<MailOutlined />} placeholder="E-mail" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input prefix={<LockOutlined />} type="password" placeholder="Password"/>
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form_forgot" href="#0">
            Forgot password?
          </a>
        </Form.Item>
        <Form.Item className="login-form_button">
          <Button type="primary" htmlType="submit" className="login-form_button">
            Sign In
          </Button>
          <div className="login-form_register">
            Or <a href="#0">Register now!</a>
          </div>
        </Form.Item>
        <div className="login-form_logo">
          <img src="/favicon.png" alt="Octopi" />
        </div>
      </Form>
    </>
  );
};

export default connect(state => ({
  loginFailed: state.loginFailed
}))(LoginForm);