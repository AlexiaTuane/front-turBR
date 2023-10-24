import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/pexels-alex-staudinger-1732414.jpg';
import imgDetail2 from '../assets/pexels-pixabay-271816.jpg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Viaje, Crie Memórias e Descubra Destinos dos Sonhos!'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>

                    Explore o mundo, crie memórias inesquecíveis e descubra o seu próximo destino dos sonhos.
                    Viajar é a melhor maneira de enriquecer a alma e expandir horizontes.<br/>
                    Viva a aventura, viaje sem limites!🌍✈️🌴
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Memórias Preciosas em Destinos Encantadores'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Embarque em uma jornada inesquecível com a sua família, onde cada momento se torna uma memória preciosa.
                    Descubra destinos encantadores juntos e fortaleça os laços familiares em cada aventura.
                    Viajar em família é a receita perfeita para a felicidade!
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;