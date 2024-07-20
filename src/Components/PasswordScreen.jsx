import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export default function PasswordScreen({ onPasswordSubmit }) {
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (password === '123456') {
      onPasswordSubmit();
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <img src="https://blockstack.tech/wp-content/themes/blockstack/assets/images/web3/diamante-net/diamante-net-banner.png" alt="Logo" className="mb-4 w-[200px]" /> {/* Replace with your logo */}
      <h1 className="text-xl mb-4">Welcome Back!</h1>
      <Input.Password
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        className="mb-4"
      />
      <Button type="primary" onClick={handleSubmit}>
        Login
      </Button>
    </div>
  );
}
