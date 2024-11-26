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
import TabContextComponent from "../components/tabContext"
import TabListComponent from "../components/tabList"
import TabComponent from "../components/tab"
import TabPanelComponent from "../components/tabPanel"
import TextFieldComponent from "../components/textField"
import TextComponent from "../components/typography"

const SignIn = () => {

    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('1');

    const handleClick =() => {
        setIsActive(true);
    };

    const handleClose = () => {
        setIsActive(false);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <h1>Sign In</h1>

            <TextComponent variant='h5'>Button test</TextComponent>
            <ButtonComponent sx={{marginBottom: 5}}>Botão</ButtonComponent>

            <TextComponent variant='h5'>Avatar test</TextComponent>
            <AlertComponent severity='warning' sx={{marginBottom: 5}}>Este é um componente Alert</AlertComponent>

            <TextComponent variant='h5'>Avatar test</TextComponent>
            <AvatarComponent 
                alt='Master Chief' 
                src='https://imgcdn.stablediffusionweb.com/2024/5/25/092519db-ab58-4ae2-9954-526e1626d629.jpg' 
                sx={{
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
                <TextComponent variant='h5'>Box test</TextComponent>
                    Esta é uma caixa
            </BoxComponent>

            <CardComponent 
                variant='outlined'
                sx={{
                    margin: 5,
                    maxWidth: 300,
                    height: 200
                }}
            >   <TextComponent variant='h5'>Card test</TextComponent>
                Este é um cartão
            </CardComponent>
            
            <BoxComponent sx={{flexGrow: 1, marginTop: 5}}>
                <TextComponent variant='h5'>Checkbox test</TextComponent>
                <FormGroupComponent>
                    <FormControlLabelComponent control={<CheckboxComponent defaultChecked/>} label='TP 1'/>
                    <FormControlLabelComponent control={<CheckboxComponent defaultChecked/>} label='TP 2'/>
                    <FormControlLabelComponent control={<CheckboxComponent />} label='TP 3'/>
                </FormGroupComponent>
            </BoxComponent>

            <ContainerComponent maxWidth='sm' sx={{flexGrow: 1, marginTop: 5}}>
                <TextComponent variant='h5'>Box test</TextComponent>
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
                <TextComponent variant='h5'>DatePicker test</TextComponent>
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
                <TextComponent variant='h5'>DateTimePicker test</TextComponent>
                <DateTimePickerComponent 
                    ampm={false}
                    format="DD/MM/YYYY HH:mm"
                    onChange={(value) => {console.log(value.toString())}}
                />
            </BoxComponent>

            <BoxComponent sx={{flexGrow: 1, marginTop: 5}}>
                <TextComponent variant='h5'>Fab test</TextComponent>
                <FabComponent color='grey'>
                    <AddIcon />
                </FabComponent>
            </BoxComponent>
            

            <BoxComponent sx={{flexGrow: 1, marginTop: 5}}>
                <TextComponent variant='h5'>Grid test</TextComponent>
                <GridComponent container spacing={1}  sx={{border: '1px solid black', justifyContent: 'space-around'}}>
                    <GridComponent size={3} sx={{border: '1px solid black', margin: 2}}>Item 1</GridComponent>
                    <GridComponent size={3} sx={{border: '1px solid black', margin: 2}}>Item 2</GridComponent>
                    <GridComponent size={3} sx={{border: '1px solid black', margin: 2}}>Item 3</GridComponent>
                </GridComponent>
            </BoxComponent>
            
            
            <BoxComponent sx={{flexGrow: 1, marginTop: 5}}>
                <TextComponent variant='h5'>IconButton test</TextComponent>
                <IconButtonComponent>
                    <DeleteIcon />
                </IconButtonComponent>
            </BoxComponent>
            

            <BoxComponent sx={{flexGrow: 1, marginTop: 5}}>
                <TextComponent variant='h5'>Snackbar test</TextComponent>
                <ButtonComponent onClick={handleClick}>Ativar Snackbar</ButtonComponent>
                <SnackbarComponent 
                    open={isActive}
                    onClose={handleClose}
                    message={'O snackbar está funcionando!'}
                    autoHideDuration={5000}
                />
            </BoxComponent>

            <BoxComponent sx={{flexGrow: 1, marginTop: 5}}>
                <TextComponent variant='h5'>Switch test</TextComponent>
                <FormGroupComponent>
                    <FormControlLabelComponent control={<SwitchComponent defaultChecked/>} label='TP 1'/>
                    <FormControlLabelComponent control={<SwitchComponent defaultChecked/>} label='TP 2'/>
                    <FormControlLabelComponent control={<SwitchComponent />} label='TP 3'/>
                </FormGroupComponent>
            </BoxComponent>

            <BoxComponent sx={{ width: '100%', typography: 'body1', marginTop: 5 }}>
                <TextComponent variant='h5'>Tab test</TextComponent>
                <TabContextComponent value={value}>
                    <BoxComponent sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabListComponent onChange={handleChange}>
                            <TabComponent label='Item 1' value='1' />
                            <TabComponent label='Item 2' value='2' />
                            <TabComponent label='Item 3' value='3' />
                        </TabListComponent>
                    </BoxComponent>
                    <TabPanelComponent value='1'>Item 1</TabPanelComponent>
                    <TabPanelComponent value='2'>Item 2</TabPanelComponent>
                    <TabPanelComponent value='3'>Item 3</TabPanelComponent>
                </TabContextComponent>
            </BoxComponent>

            
            <BoxComponent sx={{flexGrow: 1, marginTop: 5}}>
                <TextComponent variant='h5'>TextField test</TextComponent>
                <TextFieldComponent
                    id="outlined-basic"
                    label="TextField funcionando"
                    variant="outlined"
                    sx={{margin: 5}}/>
            </BoxComponent>
        </div>
    )
}

export default SignIn