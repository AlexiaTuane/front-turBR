import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import React from 'react';

const FooterTitle = ({ text }) => {
  return (
    <Typography
      variant='h6'
      component='h6'
      sx={{
        fontWeight: '700',
        textTransform: 'capitalize',
        pb: 1,
      }}
    >
      { text }
    </Typography>
  );
};

// Adiciona a validação de props
FooterTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FooterTitle;
