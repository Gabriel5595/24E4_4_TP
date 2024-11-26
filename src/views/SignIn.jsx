import { Height } from "@mui/icons-material"
import AlertComponent from "../components/alert"
import AvatarComponent from "../components/avatar"
import ButtonComponent from "../components/button"

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
                    width: 90,
                    height: 90,
                }}

                
            />
        </div>
    )
}

export default SignIn