import * as React from 'react';
import { Link } from 'react-router-dom';
import { 
    Typography,
    Tabs,
    Tab,
    Box
} from '@material-ui/core';

function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
}

const Header = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
            <Box sx={{ padding: '30px 0' }}>
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    indicatorColor="primary" 
                    aria-label="nav tabs example"
                >
                    <LinkTab label="Page One" href="/drafts" />
                    <LinkTab label="Page Two" href="/trash" />
                    <LinkTab label="Page Three" href="/spam" />
                </Tabs>
            </Box>
        </>
    )
}

export default Header;