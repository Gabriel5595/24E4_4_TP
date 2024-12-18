import { useEffect, useState } from "react";
import AppBarComponent from "../components/custom/appBar";
import ButtonComponent from "../components/button";
import DatePickerComponent from "../components/datePicker";
import GridComponent from "../components/grid";
import TextFieldComponent from "../components/textField";
import TextComponent from "../components/typography";
import { useAppContext } from "../Context";
import { adjustDateTimeForTimezone, getUser } from "../utils/core";
import { handleInputChange } from "../utils/action";
import { get, save } from "../services/supabasedb";
import { signOut } from "../services/authentication";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const { translate, changeLanguage, supabase } = useAppContext();
    const navigate = useNavigate();
    const user = getUser();
    const [data, setData] = useState({});

    const loadData = async () => {
        const result = await get("profileDB", [{field: "user_id", value: user.id }]);
        setData(result);
    }

    useEffect(() => {
        loadData();
    }, [])

    const verifyLanguage = (language) => {
        const storeLanguage = localStorage.getItem('language');
        if(storeLanguage === language) {
            return 'contained';
        }
        return 'outlined';
    }

    return  <>
                <AppBarComponent title={translate('settings')} />
                <GridComponent container spacing={2} sx={{...styles.boxAdjustment, ...styles.centerBox}}>
                    <GridComponent
                        sx={styles.marginTop}
                        item={true} size={{xs: 12}}>
                        <TextFieldComponent
                            value={data.name ? data.name : null}
                            placeholder={translate("name")}
                            fullWidth={true}
                            onChange={(event) => handleInputChange("name", event.target.value, data, setData)}
                        />
                    </GridComponent>
                    <GridComponent
                        sx={styles.marginTop}
                        item={true} size={{xs: 12}}>
                        <TextFieldComponent
                            placeholder={translate("height")}
                            fullWidth={true}
                            onChange={(event) => handleInputChange("height", event.target.value, data, setData)}
                            value={data.height}
                        />
                    </GridComponent>
                    <GridComponent
                        sx={styles.marginTop}
                        item={true} size={{xs: 12}}>
                        <TextFieldComponent
                            placeholder={translate("weight")}
                            fullWidth={true}
                            onChange={(event) => handleInputChange("weight", event.target.value, data, setData)}
                            value={data.weight}
                        />
                    </GridComponent>
                    <GridComponent
                        sx={styles.marginTop}
                        item={true} size={{xs: 12}}>
                        <DatePickerComponent
                            value={data?.birth ? adjustDateTimeForTimezone(data?.birth) : null}
                            placeholder={translate("birth")}
                            name="birth"
                            fullWidth={true}
                            ampm={false}
                            format="DD/MM/YYYY"
                            onChange={(value) => {handleInputChange('birth', new Date(value.toString()), data, setData)}}
                        />
                    </GridComponent>
                    <GridComponent
                        item={true} size={{xs: 12}}>
                        <ButtonComponent onClick={async () => {
                            data.user_id = user.id;
                            await save('profileDB', data);
                        }} fullWidth={true}>{translate('save')}</ButtonComponent>
                    </GridComponent>
                    <GridComponent
                        sx={styles.marginTop}
                        item={true} size={{xs: 12}}>
                            <TextComponent variant="h5">{translate("app_language")}:</TextComponent>
                    </GridComponent>
                    <GridComponent item={true} size={{ xs: 12 }}>
                        <ButtonComponent onClick={() => changeLanguage('en')}
                            variant={verifyLanguage('en')}
                            fullWidth={true}
                            sx={{...styles.ButtonComponent}}>{translate('english')}</ButtonComponent>
                    </GridComponent>
                    <GridComponent item={true} size={{ xs: 12 }}>
                        <ButtonComponent onClick={() => changeLanguage('es')}
                            variant={verifyLanguage('es')}
                            fullWidth={true}
                            sx={{...styles.ButtonComponent}}>{translate('spanish')}</ButtonComponent>
                    </GridComponent>
                    <GridComponent item={true} size={{ xs: 12 }}>
                        <ButtonComponent onClick={() => changeLanguage('pt')} 
                            variant={verifyLanguage('pt')}
                            fullWidth={true}
                            sx={{...styles.ButtonComponent}}>{translate('portugues')}</ButtonComponent>
                    </GridComponent>
                    <GridComponent item={true} size={{ xs: 12 }}>
                        <ButtonComponent onClick={() => signOut(supabase, navigate)} 
                            fullWidth={true}
                            color="error"
                            sx={{...styles.ButtonComponent}}>{translate('logout')}</ButtonComponent>
                    </GridComponent>
                </GridComponent>
            </>
};

const styles = {
    centerBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    boxAdjustment: {
        display: 'flex',
        flex: 1,
        padding: 2
    },
    marginTop: {
        marginTop: 4
    }
}

export default Settings;