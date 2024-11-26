import { FormGroup } from "@mui/material"

const FormGroupComponent = ({ children, ...props}) => {
    return <FormGroup {...props}>{children}</FormGroup>
}

export default FormGroupComponent;