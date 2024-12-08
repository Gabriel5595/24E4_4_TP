import { createContext, useContext, useState } from "react";

//Cria um contexto
const AppContext = createContext();

//Aqui são adicionadas os estados, funções e retornos visuais (se necessários) globais.
const AppProvider = ({ children }) => {
    
    //States
    const [state, setState] = useState("Valor inicial");

    //Funções
    const updateState = (newValue) => {
        setState(newValue);
    };

    //Lista de funçÕes de transformação de estado
    const sharedState = {
        updateState,
    }

    //Retornos
    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
};

//Aqui é onde o context exporta todo o seu conteúdo.
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === null) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};

export default AppProvider;
