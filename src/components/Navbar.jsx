import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
    CssBaseline, // Adicionado para redefinir estilos padrão do navegador
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';

// personalizacao
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

//rotas
const itemList = [
    {
        text: "Inicio",
        to: "/"
    },
    {
        text: "Destinos",
        to: "/about"
    },
    {
        text: "Dicas",
        to: "/contact"
    },
    {
        text: "Entrar",
        to: "/contact"
    }
];

const Navbar = () => {
    return (
        <AppBar
            component="nav"
            position="sticky"
            sx={{
                backgroundColor: '#F5F3F5',
            }}
            elevation={0}
        >
            <CssBaseline /> {/* Adicionado para redefinir estilos padrão do navegador */}
            <StyledToolbar>
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                        fontFamily: 'Poppins, sans-serif', // Aplicando a fonte Poppins
                        fontWeight: 800, // Peso da fonte (pode ser ajustado)
                        fontSize:'30px',
                        color: '#0D6B27',
                    }}
                >
                    Turismo-BR
                </Typography>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem />
                </Box>
                <ListMenu>
                    {itemList.map((item) => {
                        const { text } = item;
                        return (
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                    sx={{
                                        color: 'green',
                                        "&:hover": {
                                            backgroundColor: 'transparent',
                                            color: '#0A862D',
                                        }
                                    }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
