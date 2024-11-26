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
import FabComponent from "../components/Fab"
import AddIcon from '@mui/icons-material/Add';

const SignIn = () => {
    return (
        <div>
            <h1>Sign In</h1>

            <ButtonComponent>Botão</ButtonComponent>

            <AlertComponent severity='warning'>Este é um componente Alert</AlertComponent>

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
                }}
            >
                    This is a box.
            </BoxComponent>

            <CardComponent 
                variant='outlined'
                sx={{
                    margin: 10,
                    maxWidth: 300,
                    height: 200
                }}
            >
                Este é um cartão
            </CardComponent>

            <FormGroupComponent>
                <FormControlLabelComponent control={<CheckboxComponent defaultChecked/>} label='TP 1'/>
                <FormControlLabelComponent control={<CheckboxComponent defaultChecked/>} label='TP 2'/>
                <FormControlLabelComponent control={<CheckboxComponent />} label='TP 3'/>
            </FormGroupComponent>

            <ContainerComponent maxWidth='sm'>
                <BoxComponent sx={{bgcolor: 'black', height: '200px', width: '200px'}}/>
            </ContainerComponent>

            <BoxComponent 
                component='section'
                sx={{
                    p:2,
                    border: '1px dashed grey',
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

            <FabComponent color='grey'>
                <AddIcon />
            </FabComponent>
        </div>
    )
}

export default SignIn