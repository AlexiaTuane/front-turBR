import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import React from 'react';

const Paragraph = ({ text, maxWidth, mx, textAlign }) => {
  return (
    <Typography
      sx={{
        maxWidth: maxWidth,
        mx: mx,
        textAlign: textAlign,
        py: 3,
        color: '#7b7b7b',
      }}
    >
      {text}
    </Typography>
  );
};

// Adiciona a validação de props
Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textAlign: PropTypes.oneOf(['left', 'right', 'center']),
};

export default Paragraph;
