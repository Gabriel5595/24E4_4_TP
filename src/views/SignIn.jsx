import AlertComponent from "../components/alert"
import AvatarComponent from "../components/avatar"
import ButtonComponent from "../components/button"
import BoxComponent from "../components/box"
import CardComponent from "../components/card"

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
                }}>
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
        </div>
    )
}

export default SignIn