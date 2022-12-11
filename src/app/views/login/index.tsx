import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ViewProps } from "../../@types/Todo";

import Image from '../Apps/img/shabubg.jpg';

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

const LoginView = (props: ViewProps)=>{
    const [id, setId] = useState('');
    const [pass, setPass] = useState('');
 
    return (
        <Container maxWidth={false} sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", 
        }} style={styles.paperContainer}>
        
    <Grid container spacing={2}>
        <Grid item xs={6}>
            <Box sx={{ boxShadow: 2, textAlign: "center" }}
                bgcolor={"white"}
                padding={2}
                width={{ md: 450, xs: "100%" }}>
                    <Typography
                    variant="h3"
                    sx={{ mt: 2, mb: 4 }}>
                        ยินดีต้อนรับเข้าสู่ระบบ ShabuDemo
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={6}> 
            
        </Grid>
    </Grid>
    </Container>
    );
};
export default LoginView;