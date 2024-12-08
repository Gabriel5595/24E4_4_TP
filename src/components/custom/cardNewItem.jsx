import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import CardComponent from '../card';
import FabComponent from '../Fab';
import GridComponent from '../grid';
import TextComponent from '../typography';
import { useAppContext } from '../../Context';

const CardNewItem = ({ Icon, color, title, actionType }) => {
    const navigate = useNavigate();
    const { translate } = useAppContext();

    const actionSub = (actionType) => {
        switch (actionType) {
            case 1:
                return translate('add-sleep');
            case 2:
                return translate('add-feeding');
            case 3:
                return translate('add-diaper');
            default:
                return translate('add-something');
        }
    };

    return <CardComponent sx={{
        overflow: 'visible',
        borderRadius: '10%'
    }}>
        <GridComponent sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Icon
                sx={{
                    marginTop: '.2em',
                    fontSize: '3em',
                    color: color
                }} />
            <TextComponent
                sx={{
                    fontSize: '.85em',
                    marginTop: '0.5em',
                    fontWeight: '700',
                    textAlign: 'center',
                    wordWrap: "break-word",
                    width: "90%"
                }}
            >{translate(title)}</TextComponent>
        </GridComponent>
        <GridComponent sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <TextComponent
                sx={{
                    marginTop: '0.5em',
                    fontSize: '0.8em',
                    fontWeight: '400',
                    color: "#8f8f8f"
                }}
            >{actionSub(actionType)}</TextComponent>
        </GridComponent>
        <GridComponent sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <FabComponent
                size="small"
                sx={{
                    color: color,
                    backgroundColor: "#fff",
                    position: 'relative',
                    bottom: '-20px'
                }}
                onClick={() => navigate(`/new/${actionType}`)}
            ><AddIcon /></FabComponent>
        </GridComponent>
    </CardComponent>
}

export default CardNewItem;