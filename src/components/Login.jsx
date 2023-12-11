import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import Title from './Title';
import Paragraph from './Paragraph';
import ConexaoApi from '../api/conexaoapi';
import { useNavigate } from 'react-router-dom';

const Login = ({ onAuthentication }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Obtenha valores dos campos de entrada
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Verifique se ambos os campos estão preenchidos
    if (!username || !password) {
      setError('Informe o nome de usuário e senha.');
      return;
    }

    try {
      setLoading(true);

      // Autenticação
      const data = await ConexaoApi.login(username, password);

      // Verifique se o token foi retornado
      if (data && data.token) {
        // Use o token para fazer uma solicitação ao endpoint pontoturistico/
        const response = await ConexaoApi.getPontosTuristicos(data.token);
        console.log('Dados do endpoint pontoturistico/:', response);

        // Limpe os erros
        setError(null);

        // Chame a função de autenticação passada como prop
        onAuthentication(true);

        // Use o hook navigate para redirecionar para a rota '/sistema'
        navigate('/sistema');

        // Adicione uma verificação mais precisa do sucesso da autenticação
        if (response && response.length > 0) {
          console.log('Autenticação bem-sucedida. Pode entrar!');
        } else {
          console.log('Autenticação falhou. Verifique suas credenciais.');
        }
      }
    } catch (error) {
      console.error('Erro:', error.message);
      setError('Erro ao autenticar usuário. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack
      component='section'
      direction="column"
      justifyContent='center'
      alignItems='center'
      sx={{
        py: 6,
        px: 2,
      }}
    >
      <Title text={'Acesse o Sistema'} textAlign={'center'} variant="h4" />
      <Paragraph
        text={'Acesse sua conta para explorar nossos roteiros.'}
        maxWidth={'md'}
        mx={0}
        textAlign={'center'}
      />

      {error && (
        <Typography variant="body2" color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          mt: 3,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Nome de Usuário"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Senha"
          name="password"
          type="password"
          autoComplete="current-password"
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          size="large"
          disabled={loading}
          sx={{
            fontSize: '1rem',
            textTransform: 'capitalize',
            mt: 3,
            mb: 2,
            borderRadius: 0,
            backgroundColor: '#0D6B27',
            "&:hover": {
              backgroundColor: '#48A55B',
            }
          }}
        >
          {loading ? 'Aguarde...' : 'Entrar'}
        </Button>
      </Box>
    </Stack>
  );
};

Login.propTypes = {
  onAuthentication: PropTypes.func.isRequired,
};

export default Login;
