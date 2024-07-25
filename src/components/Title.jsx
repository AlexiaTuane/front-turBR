import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import React from 'react';

const Title = ({ text, textAlign }) => {
  return (
    <Typography 
      variant='h4'
      component='h3'
      sx={{ 
        fontWeight: '700',
        textAlign: textAlign,
      }}
    >
      {text}
    </Typography>
  );
};

// Adiciona a validação de props
Title.propTypes = {
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.oneOf(['left', 'right', 'center']).isRequired,
};

export default Title;
