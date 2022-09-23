import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Grid,
    Typography,
    Container
} from "@mui/material"
import { Link } from "react-router-dom"
import withoutImage from "../images/null.png"

function TeamCardItem({ name, teamFlag }) {
    if (!teamFlag) teamFlag = withoutImage
    return (
        <Grid item xs={12} md={2} sm={6}>
            <Card sx={{ maxHeight:210, maxWidth: 300}}>
                <CardActionArea component={Link} to="/leagues">
                    <CardContent>
                        <Typography
                            sx={{ fontWeight: "bold" }}
                            align="center"
                            variant="h6"
                        >
                            {name}
                        </Typography>
                    </CardContent>
                    <Container
                        component="img"
                        src={teamFlag}
                        alt="Team flag"
                        sx={{height:145, width:190, pb: "1rem"}}
                    />
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default TeamCardItem