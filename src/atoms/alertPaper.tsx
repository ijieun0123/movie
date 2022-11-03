import {Paper, Typography} from '@material-ui/core'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { styled } from '@mui/material/styles';

const CustomPaper = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  padding: '3rem',
  textAlign: 'center',
}) as typeof Paper

const AlertPaper = () => {
  return (
    <CustomPaper elevation={2}>
      <ErrorOutlineIcon color="error" />
      <Typography variant="body1">
        데이터가 없습니다.
      </Typography>
    </CustomPaper>
  )
}

export default AlertPaper
