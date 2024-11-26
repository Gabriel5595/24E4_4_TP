import AlertComponent from "../components/alert"
import ButtonComponent from "../components/button"

const SignIn = () => {
    return (
        <div>
            <h1>Sign In</h1>

            <ButtonComponent>Botão</ButtonComponent>
            <AlertComponent severity='warning'>Este é um componente Alert</AlertComponent>
        </div>
    )
}

export default SignIn