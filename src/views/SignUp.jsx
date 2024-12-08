import { useNavigate } from "react-router-dom";
import ContainerComponent from "../components/container";
import TypographyComponent from "../components/typography";
import TextFieldComponent from "../components/textField";
import ButtonComponent from "../components/button";
import BoxComponent from "../components/box";

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <ContainerComponent
            maxWidth="xs"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "50px",
                padding: "20px",
            }}
        >
            <TypographyComponent variant="h4" style={{ marginBottom: "20px" }}>
                Registro
            </TypographyComponent>

            <BoxComponent
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    width: "100%",
                }}
            >
                <TextFieldComponent label="Nome" variant="outlined" fullWidth />
                <TextFieldComponent label="Email" variant="outlined" fullWidth />
                <TextFieldComponent
                    label="Senha"
                    type="password"
                    variant="outlined"
                    fullWidth
                />
                <TextFieldComponent
                    label="Confirme a senha"
                    type="password"
                    variant="outlined"
                    fullWidth
                />
            </BoxComponent>

            <ButtonComponent
                variant="contained"
                color="primary"
                style={{ marginTop: "30px", width: "100%" }}
            >
                Registrar
            </ButtonComponent>

            <TypographyComponent
                variant="body2"
                style={{ marginTop: "15px", color: "#007BFF", cursor: "pointer" }}
                onClick={() => navigate("/signin")}
            >
                Já tem uma conta? Faça login
            </TypographyComponent>
        </ContainerComponent>
    );
};

export default SignUp;
