import { Button, ButtonGroup, Container, Grid } from "@mui/material";
import img from '../../assets/img/dronefield_bg.jpg'
import logo from '../../assets/img/dronefield_logo.jpg'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export function HomePage() {
    return (
        <div style={{
            height: "100vh",
            backgroundColor: "green",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
        }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" elevation={0} component="nav" style={{ backgroundColor: "rgba(255,255,255,0.5)" }} >
                    <Toolbar>
                        <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                            <Box
                                //my={4}
                                display="flex"
                                alignItems="center"
                                gap={4}
                                p={2}
                                //sx={{ border: '2px solid grey' }}
                            >
                                <Button>
                                    <img href="/" src={logo} alt="Logo" width="60px" height="60px"></img>
                                </Button>
                            </Box>
                            <Button href="/a" variant="text" xs={4}>소개</Button>
                            <Button href="/a" variant="text" xs={4}>연결 업체</Button>
                            <Button href="/a" variant="text" xs={4}>고객센터</Button>
                            <ButtonGroup>
                                <Button href="/login" variant="contained">로그인</Button>
                                <Button href="/resigter" variant="outlined">회원가입</Button>
                            </ButtonGroup>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>

            <Container fluid style={{
                width: "100px",
                height: "1000px",
                backgroundColor: "green",
            }}>
                <h1>Hi, There!</h1>
            </Container>
            <Container fluid style={{
                width: "100px",
                height: "1000px",
                backgroundColor: "green",
            }}>
                <h1>Hi, There!</h1>
            </Container>
        </div>
    )
}