import {Link} from 'react-router-dom'
import {Typography, Tabs, Tab, Box} from '@material-ui/core'

const Header = () => {
  return (
    <Box
      sx={{
        padding: '20px 0 10px',
        textAlign: 'center',
      }}
    >
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        color="primary"
        style={{
          fontWeight: 'bold',
        }}
      >
        <Link to="/" className="link">
          Movie
        </Link>
      </Typography>
    </Box>
  )
}

export default Header
