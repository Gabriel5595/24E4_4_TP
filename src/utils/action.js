const handleInputChange = (field, value, data, setData) => {
    setData({ ...data, [field]: value })
}

const selectItem = (value, key, data, setData) => {
    setData({ ...data, [key]: value })
}

const generateSubtitle = (item) => {
    const date = new Date(item.created_at);

    if (isNaN(date.getTime())) {
        console.error("Data inválida:", item.created_at);
        return;
    }
    const dia = String(date.getUTCDate()).padStart(2, "0");
    const mes = String(date.getUTCMonth() + 1).padStart(2, "0");
    const ano = date.getUTCFullYear();
    const horas = String(date.getUTCHours()).padStart(2, "0");
    const minutos = String(date.getUTCMinutes()).padStart(2, "0");

    const dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}`;

    return dataFormatada
};


const getTitle = (action_type) => {
    switch (action_type) {
        case "1":
            return "sleep";

        case "2":
            return "eat";

        case "3":
            return "diaper";

        default:
            return "eat";
    }
}

const validateDiaper = (data) => {
    return []
}

const validateSleep = (data) => {
    return []
}

const validateEat = (data) => {
    return []
}

const validateFields = (data, actionType) => {
    switch (actionType) {
        case "1":
            return validateSleep(data);

        case "2":
            return validateEat(data);

        case "3":
            return validateDiaper(data);

        default:
            return validateEat(data);
    }
}

export {
    handleInputChange,
    generateSubtitle,
    getTitle,
    selectItem,
    validateFields
}