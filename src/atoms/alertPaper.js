import {Paper, Typography} from '@material-ui/core'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

const paperStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  padding: '3rem',
  textAlign: 'center',
}

const AlertPaper = () => {
  return (
    <Paper elevation={2} style={paperStyle}>
      <ErrorOutlineIcon color="error" />
      <Typography variant="body1" component="body1">
        데이터가 없습니다.
      </Typography>
    </Paper>
  )
}

export default AlertPaper
