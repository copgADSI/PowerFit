import { Avatar, Button, Checkbox, createTheme, CssBaseline, FormControlLabel, Grid, TextField, ThemeProvider, Typography } from '@mui/material'
import { Box, Container } from '@mui/system';
import useInializeUser from '../../../hooks/User/useInializeUser';
import Copyright from '../Copyright/Copyright';
import { Link } from 'react-router-dom';

import './Styles.css'
import { useContext } from 'react';
import { ExcercisesContext } from '../../../context/ExcercisesProvider';


const theme = createTheme();

const SignInPage = () => {

    const { handleSubmit } = useInializeUser();
    const { userLogged } = useContext(ExcercisesContext);
    return (
        <ThemeProvider theme={theme} >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Iniciar Sesión
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            error={userLogged.errors}
                            helperText={userLogged.message}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Recordar contraseña"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            id="btnPrimary"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Iniciar Sesión
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link to="/signUp" variant="body2" id='link'>
                                    Olvidó la contraseña?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signUp" variant="body2" id='link'>
                                    {"No tienes una cuenta? "}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}

export default SignInPage