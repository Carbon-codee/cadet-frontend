import React, { useState } from 'react';
import styled from 'styled-components';

// Stil tanımlamaları
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px); // Navbar yüksekliği kadar çıkarıyoruz
  background-color: #f4f7f6;
`;

const LoginForm = styled.form`
  padding: 2.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h2`
  text-align: center;
  color: #002B5B;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #005A9C;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004170;
  }
`;

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Formun sayfayı yenilemesini engeller
        // TODO: Backend'e giriş isteği burada gönderilecek.
        console.log('Giriş denendi:', { email, password });
    };

    return (
        <PageContainer>
            <LoginForm onSubmit={handleSubmit}>
                <Title>Giriş Yap</Title>
                <Input
                    type="email"
                    placeholder="Okul E-postanız (@...edu.tr)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Şifreniz"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Giriş Yap</Button>
            </LoginForm>
        </PageContainer>
    );
};

export default LoginPage;