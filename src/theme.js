import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        primary: {
            light: '#E8C8BD',
            main: '#E8906F',
            dark: '#E87B6F',
            contrastText: '#EA2F64',
        },
        secondary: {
            light: '#E8DBBD',
            main: '#E8C56F',
            dark: '#E8B66F',
            contrastText: '#EB7D2F',
        }
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            light: '#AEB0EB',
            main: '#6064EB',
            dark: '#6091EB',
            contrastText: '#AA3EED',
        },
        secondary: {
            light: '#C482EB',
            main: '#A733EB',
            dark: '#6C34EB',
            contrastText: '#000',
        },
    },
});

export {
    lightTheme,
    darkTheme
}