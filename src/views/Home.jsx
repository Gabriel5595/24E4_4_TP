import BoxComponent from "../components/box"
import GridComponent from "../components/grid"
import IconButtonComponent from "../components/iconButton"
import TextComponent from "../components/typography";
import AvatarComponent from "../components/avatar";

import babyImage from '../assets/img/baby.png';
import SettingsIcon from '@mui/icons-material/Settings';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        // GRID Principal: 
        <GridComponent container={true} sx={{ border: '1px solid black' }}>
            {/*GRID Secundária: engloba a primeira e segunda linha de grids*/}
            <GridComponent 
                size={{ xs: 12 }}
                sx={{ height: '25vh', border: '1px solid green' }}
            >
                {/*GRID Linha 1: engloba a primeira linha de grids*/}
                <GridComponent container={true}
                    sx={{
                        alignItems: 'flex-end',
                        marginTop: '1em',
                        border: '1px solid red'
                    }}
                >

                    {/*GRID Box 1: Altura e Redirecionamento para Dashboard*/}
                    <GridComponent size={{ xs: 4 }}>
                        <BoxComponent
                            sx={{
                                ...styles.centerBox,
                                border: '1px solid yellow'
                            }}
                        >
                            <IconButtonComponent
                                sx={{
                                    ...styles.iconButton,
                                    border: `2px solid black`
                                }}
                                onClick={() => navigate("/dashboard")}
                            >
                                <SignalCellularAltIcon 
                                    sx={{
                                        ...styles.icon,
                                        color: 'black',
                                    }} 
                                />
                            </IconButtonComponent>
                            <BoxComponent
                                sx={{
                                    ...styles.centerBox,
                                    ...styles.boxText
                                }}
                            >
                                <TextComponent component="p" sx={{...styles.text2}}>40 cm</TextComponent>
                                <TextComponent component="p" sx={{...styles.text2}}>Altura</TextComponent>
                            </BoxComponent>
                        </BoxComponent>
                    </GridComponent>

                    {/*GRID Box 2: Ícone do bebê, nome e data de nascimento*/}
                    <GridComponent size={{ xs: 4 }}>
                        <BoxComponent
                            sx={{
                                ...styles.centerBox,
                                border: '1px solid yellow'
                            }}
                        >
                            <AvatarComponent 
                                sx={{ width: 90, height: 90 }}
                                src={babyImage}
                            />
                            <BoxComponent
                                sx={{
                                    ...styles.centerBox,
                                    ...styles.boxText
                                }}
                            >
                                <TextComponent component="p" sx={{...styles.text2}}>Jason</TextComponent>
                                <TextComponent component="p" sx={{...styles.text2}}>09/03/2024</TextComponent>
                            </BoxComponent>
                        </BoxComponent>
                    </GridComponent>

                    {/*GRID Box 3: Peso e Redirecionamento para Settings*/}
                    <GridComponent size={{ xs: 4 }}>
                        <BoxComponent
                            sx={{
                                ...styles.centerBox,
                                border: '1px solid yellow'
                            }}
                        >
                            <IconButtonComponent
                                sx={{
                                    ...styles.iconButton,
                                    border: `2px solid black`
                                }}
                                onClick={() => navigate("/settings")}
                            >
                                <SettingsIcon 
                                    sx={{
                                        ...styles.icon,
                                        color: 'black',
                                    }} 
                                />
                            </IconButtonComponent>
                            <BoxComponent
                                sx={{
                                    ...styles.centerBox,
                                    ...styles.boxText
                                }}
                            >
                                <TextComponent component="p" sx={{...styles.text2}}>0.5 kg</TextComponent>
                                <TextComponent component="p" sx={{...styles.text2}}>Peso</TextComponent>
                            </BoxComponent>
                        </BoxComponent>
                    </GridComponent>

                </GridComponent>
            </GridComponent>

        </GridComponent>
    )
}

const styles = {
    centerBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButton: {
        height: '2.5em',
        width: '2.5em',
    },
    icon: {
        fontSize: '1.5em'
    },
    boxText: {
        marginTop: '.5em'
    },
    text1: {
        wordBreak: 'break-all',
        fontSize: '1.2em',
        fontWeight: '500',
        fontFamily: '"Lato", sans-serif',
    },
    text2: {
        wordBreak: 'break-all',
        fontSize: '.8em',
        fontWeight: '600',
        fontFamily: '"Lato", sans-serif',
    }, 
    text3: {
        wordBreak: 'break-all',
        fontSize: '.8em',
        fontWeight: '400',
    }
}

export default Home