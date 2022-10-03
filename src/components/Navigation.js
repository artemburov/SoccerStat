import { useState } from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Container, Typography, Tab, Tabs, Box } from '@mui/material';

function Navigation() {
    const [value, setValue] = useState('one')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <AppBar position="static" >
            <Container sx={{ ml: 5 }} >
                <Toolbar>
                    <Typography variant="h6">Футбольная статистика</Typography>
                    <Box sx={{ width: '100%'}}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="inherit"
                            TabIndicatorProps={{ sx: { bgcolor: "white"} }}
                        >
                            <Tab value="one" label="Лиги" to="/SoccerStat" component={Link} />
                            <Tab value="two" label="Команды" to="/Teams" component={Link} />
                        </Tabs>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navigation