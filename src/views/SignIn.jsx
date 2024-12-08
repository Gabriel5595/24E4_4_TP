import { useNavigate } from "react-router-dom";
import ContainerComponent from "../components/container";
import TypographyComponent from "../components/typography";
import TextFieldComponent from "../components/textField";
import ButtonComponent from "../components/button";
import BoxComponent from "../components/box";
import { useAppContext } from "../Context";
import { signIn } from "../services/authentication";
import { useState } from "react";
import { handleChange } from "../utils/core";

const SignIn = () => {
    const navigate = useNavigate();
    const { showSnackMessage, supabase } = useAppContext();
    const [data, setData] = useState({
        email: {
            value: "",
            error: null,
            helperText: null,
        },
        password: {
            value: "",
            error: null,
            helperText: null,
        },
    });

    const verifyLogin = async () => {
        let { data: response, error } = await signIn(data.email.value, data.password.value, supabase);

        if (error && error.message === "Invalid login credentials") {
            showSnackMessage("Dados de usuário inválidos");
        } else {
            localStorage.setItem("session", JSON.stringify(response.session));
            localStorage.setItem("user", JSON.stringify(response.user));
            navigate("/");
        }
    };

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
                Login
            </TypographyComponent>

            <BoxComponent
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    width: "100%",
                }}
            >
                <TextFieldComponent
                    label="Email"
                    variant="outlined"
                    fullWidth
                    onChange={(event) => handleChange(data, setData, event.target.value, "email")}
                    value={data.email.value}
                />
                <TextFieldComponent
                    label="Senha"
                    type="password"
                    variant="outlined"
                    fullWidth
                    onChange={(event) => handleChange(data, setData, event.target.value, "password")}
                    value={data.password.value}
                />
            </BoxComponent>

            <ButtonComponent
                variant="contained"
                color="primary"
                style={{ marginTop: "30px", width: "100%" }}
                onClick={verifyLogin}
            >
                Login
            </ButtonComponent>

            <TypographyComponent
                variant="body2"
                style={{ marginTop: "15px", color: "#007BFF", cursor: "pointer" }}
                onClick={() => navigate("/signup")}
            >
                Não tem uma conta? Registre-se
            </TypographyComponent>
        </ContainerComponent>
    );
};

export default SignIn;
