import TabPanel from '@mui/lab/TabPanel';

const TabPanelComponent = ({children, ...props}) => {
    return <TabPanel {...props}>{children}</TabPanel>
}

export default TabPanelComponent;