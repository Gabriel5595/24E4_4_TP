import TabList from '@mui/lab/TabList';

const TabListComponent = ({children, ...props}) => {
    return <TabList {...props}>{children}</TabList>
}

export default TabListComponent;