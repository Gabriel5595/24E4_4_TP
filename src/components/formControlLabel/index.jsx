import { FormControlLabel } from "@mui/material"

const FormControlLabelComponent = ({ children, ...props}) => {
    return <FormControlLabel {...props}>{children}</FormControlLabel>
}

export default FormControlLabelComponent;