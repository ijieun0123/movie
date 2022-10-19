import { Link } from 'react-router-dom';
import { 
    Typography,
    Tabs,
    Tab,
    Box,
} from '@material-ui/core';
import Navigation from '../molecules/navigation';

const Header = () => {
    return (
        <>
            {/* 로고 */}
            <Box sx={{ 
                padding:'20px 0 10px',
                textAlign: "center"
            }}>
                <Typography 
                    gutterBottom 
                    variant="h2" 
                    component="div" 
                    color="primary" 
                    style={{ 
                        fontWeight: 'bold'
                    }}
                >
                    <Link to="/" className="link">Movie</Link>
                </Typography>
            </Box>
            
            {/* 네비게이션 */}
            <Navigation />
        </>
    )
}

export default Header;