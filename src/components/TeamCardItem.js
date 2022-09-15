import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Grid,
    Typography
} from "@mui/material"
import { Container } from "@mui/system"
import { Link } from "react-router-dom"
import withoutImage from "../images/null.png"

function TeamCardItem({ name, teamFlag }) {
    if (!teamFlag) teamFlag = withoutImage
    return (
        <Grid item md={2}>
            <Card sx={{ height: "100%"}}>
                <CardActionArea component={Link} to="/teams">
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
                        sx={{ height: 150, width: 180, pb: "1rem" }}
                        alt="Team flag"
                    />
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default TeamCardItem