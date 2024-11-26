import TabContext from '@mui/lab/TabContext';

const TabContextComponent = ({children, ...props}) => {
    return <TabContext {...props}>{children}</TabContext>
}

export default TabContextComponent;