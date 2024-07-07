import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  mapContainer: {
    height: '85vh',
    width: '100%',
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    '&:hover': { zIndex: 20 },
  },
  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
  },
  pointer: {
    cursor: 'pointer',
  },
}));
