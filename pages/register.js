import { Box, Button, Paper, Typography, InputAdornment, Container, IconButton, FormControl, FormControlLabel, FormLabel } from "@material-ui/core";
import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import dynamic from 'next/dynamic';

const TextField = dynamic(() => import('@material-ui/core/TextField'), { ssr: false });
const RadioGroup = dynamic(() => import('@material-ui/core/RadioGroup'), { ssr: false });
const Radio = dynamic(() => import('@material-ui/core/Radio'), { ssr: false });

export default function Register() {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [userNameError, setUserNameError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [isObscure, setIsObscure] = React.useState(false);
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleChangeUserName = (event) => {
        setUserName(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleSaveData = (event) => {

    };

    return (
        <Box style={{
            display: "flex",
            justifyContent: "Center",
            alignItems: "Center",
            height: "100vh"
        }} >
            <Paper elevation={10} style={{
                display: "flex",
                justifyContent: "Center",
                flexDirection: "column",
                width: "90vh",
                height: "75vh",
                padding: 32
            }}  >
                <Typography variant="h4" color="primary"><b>REGISTER</b></Typography>
                <TextField id="outlined-basic" label="Enter Firstname"
                    variant="outlined" fullWidth style={{
                        marginTop: "20px",
                    }} onChange={handleChangeUserName} />
                <TextField id="outlined-basic" label="Enter Lastname" fullWidth variant="outlined" style={{
                    marginTop: "20px",
                }} onChange={handleChangeUserName} />
                <Typography style={{
                    color: "red"
                }}>{userNameError}</Typography>
                <TextField id="outlined-basic" fullWidth label="Enter Email" variant="outlined" style={{
                    marginTop: "20px",
                }} onChange={handleChangeUserName} type="email" />
                <div style={{
                    display: 'flex',
                    justifyContent: "start",
                    marginTop: 12,
                    alignItems: 'center',
                }}>
                    <Typography style={{
                        paddingLeft: 16,
                        paddingRight: 16
                    }}>Gender</Typography>
                    <FormControl>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} row >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <TextField id="outlined-basic" fullWidth label="Password" variant="outlined" type={isObscure ? 'text' : 'password'} style={{
                    marginTop: "20px",
                }} onChange={handleChangePassword}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position='end'>
                                <IconButton edge='end' onClick={() => {
                                    setIsObscure(!isObscure)
                                }}>
                                    {
                                        isObscure ? <VisibilityIcon /> : <VisibilityOffIcon />
                                    }
                                </IconButton>
                            </InputAdornment>
                    }}
                />

                <Typography style={{
                    color: "red"
                }}>{passwordError}</Typography>

                <Button variant="contained" color="primary" style={{
                    marginTop: "40px"
                }} onClick={handleSaveData}>
                    Register
                </Button>
            </Paper>
        </Box>
    );
}