import { Button } from "@mui/material";

const ButtonComponent = ({ children, ...props }) => {
    return <Button {...props}>{children}</Button>;
};

export default ButtonComponent;
