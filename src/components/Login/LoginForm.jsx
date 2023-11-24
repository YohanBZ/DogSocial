import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/input/Input';
import Button from '../Forms/button/Button';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {
  const username = useForm('');
  const password = useForm('');

  function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'applicantion/json',
        },
        body: JSON.stringify({}),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usúario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
