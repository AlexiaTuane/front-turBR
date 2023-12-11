import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ForumIcon from '@mui/icons-material/Forum';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PontosTuristicos from './pontosturisticos';

const ModalHome = () => {
  const [value, setValue] = useState('PontosTuristicos');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', marginTop: '50px' }}>
        <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Pontos Turísticos"
            value="PontosTuristicos"
            to="/pontos-turisticos"
            component={Link}
            icon={<FmdGoodIcon />}
          />
          <BottomNavigationAction
            label="Comentários"
            value="Comentarios"
            icon={<ForumIcon />}
          />
          <BottomNavigationAction
            label="Atrações"
            value="Atracoes"
            icon={<AutoAwesomeIcon />}
          />
          <BottomNavigationAction
            label="Avaliações"
            value="Avaliacoes"
            icon={<SearchIcon />}
          />
          <BottomNavigationAction
            label="Usuários"
            value="Usuarios"
            icon={<PeopleIcon />}
          />
          <BottomNavigationAction
            label="Configurações"
            value="Configuracoes"
            icon={<SettingsIcon />}
          />
        </BottomNavigation>

        <Routes>
          <Route path="/pontos-turisticos" element={<PontosTuristicos />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
};

export default ModalHome;
