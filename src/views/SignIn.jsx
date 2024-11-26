import AlertComponent from "../components/alert"
import AvatarComponent from "../components/avatar"
import ButtonComponent from "../components/button"
import BoxComponent from "../components/box"
import CardComponent from "../components/card"
import CheckboxComponent from "../components/checkbox"
import FormGroupComponent from "../components/formGroup"
import FormControlLabelComponent from "../components/formControlLabel"
import ContainerComponent from "../components/container"
import DatePickerComponent from "../components/datePicker"
import DateTimePickerComponent from "../components/dateTimePicker"
import FabComponent from "../components/fab"
import AddIcon from '@mui/icons-material/Add';
import GridComponent from "../components/grid"
import IconButtonComponent from "../components/iconButton"
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react"
import SnackbarComponent from "../components/snackBar"
import SwitchComponent from "../components/switch"

const SignIn = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick =() => {
        setIsActive(true);
    };

    const handleClose = () => {
        setIsActive(false);
    }

    return (
        <div>
            <h1>Sign In</h1>

            <ButtonComponent sx={{marginTop: 5}}>Botão</ButtonComponent>

            <AlertComponent severity='warning' sx={{marginTop: 5}}>Este é um componente Alert</AlertComponent>

            <AvatarComponent 
                alt='Master Chief' 
                src='https://imgcdn.stablediffusionweb.com/2024/5/25/092519db-ab58-4ae2-9954-526e1626d629.jpg' 
                sx={{
                    margin: 5,
                    width: 90,
                    height: 90,
                }}
            />

            <BoxComponent
                component='section'
                sx={{
                    p:2,
                    border: '1px dashed grey',
                    marginTop: 5
                }}
            >
                    Esta é uma caixa
            </BoxComponent>

            <CardComponent 
                variant='outlined'
                sx={{
                    margin: 5,
                    maxWidth: 300,
                    height: 200
                }}
            >
                Este é um cartão
            </CardComponent>
            
            <BoxComponent sx={{flexGrow: 1, marginTop: 5}}>
                <FormGroupComponent>
                    <FormControlLabelComponent control={<CheckboxComponent defaultChecked/>} label='TP 1'/>
                    <FormControlLabelComponent control={<CheckboxComponent defaultChecked/>} label='TP 2'/>
                    <FormControlLabelComponent control={<CheckboxComponent />} label='TP 3'/>
                </FormGroupComponent>
            </BoxComponent>

            <ContainerComponent maxWidth='sm' sx={{flexGrow: 1, marginTop: 5}}>
                <BoxComponent sx={{bgcolor: 'black', height: '200px', width: '200px'}}/>
            </ContainerComponent>

            <BoxComponent 
                component='section'
                sx={{
                    p:2,
                    border: '1px dashed grey',
                    marginTop: 5
                }}
            >
                <DatePickerComponent
                    format="DD/MM/YYYY"
                    onChange={(value) => {console.log(value.toString())}}
                />
            </BoxComponent>

            <BoxComponent 
                component='section'
                sx={{
                    p:2,
                    border: '1px dashed grey',
                }}
            >
                <DateTimePickerComponent 
                    ampm={false}
                    format="DD/MM/YYYY HH:mm"
                    onChange={(value) => {console.log(value.toString())}}
                />
            </BoxComponent>

            <BoxComponent sx={{flexGrow: 1, marginTop: 5}}>
                <FabComponent color='grey'>
                    <AddIcon />
                </FabComponent>
            </BoxComponent>
            

            <BoxComponent sx={{flexGrow: 1, marginTop: 5}}>
                <GridComponent container spacing={1}  sx={{border: '1px solid black', justifyContent: 'space-around'}}>
                    <GridComponent size={3} sx={{border: '1px solid black', margin: 2}}>Item 1</GridComponent>
                    <GridComponent size={3} sx={{border: '1px solid black', margin: 2}}>Item 2</GridComponent>
                    <GridComponent size={3} sx={{border: '1px solid black', margin: 2}}>Item 3</GridComponent>
                </GridComponent>
            </BoxComponent>
            
            
            <BoxComponent sx={{flexGrow: 1, marginTop: 5}}>
                <IconButtonComponent>
                    <DeleteIcon />
                </IconButtonComponent>
            </BoxComponent>
            

            <BoxComponent sx={{flexGrow: 1, marginTop: 5}}>
                <ButtonComponent onClick={handleClick}>Ativar Snackbar</ButtonComponent>
                <SnackbarComponent 
                    open={isActive}
                    onClose={handleClose}
                    message={'O snackbar está funcionando!'}
                    autoHideDuration={5000}
                />
            </BoxComponent>

            <BoxComponent sx={{flexGrow: 1, marginTop: 5}}>
                <FormGroupComponent>
                    <FormControlLabelComponent control={<SwitchComponent defaultChecked/>} label='TP 1'/>
                    <FormControlLabelComponent control={<SwitchComponent defaultChecked/>} label='TP 2'/>
                    <FormControlLabelComponent control={<SwitchComponent />} label='TP 3'/>
                </FormGroupComponent>
            </BoxComponent>
        </div>
    )
}

export default SignIn