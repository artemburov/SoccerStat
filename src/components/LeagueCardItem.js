import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@mui/material"
import { Link } from "react-router-dom"
import withoutImage from "../images/null.png"
import SearchBar from "./SearchBar/SearchBar"

function LeagueCardItem({ name, country, areaFlag }) {
    if (!areaFlag) areaFlag = withoutImage
    return (
        <Grid item md={3}>
            <Card sx={{ height: "100%" }}>
                <CardActionArea component={Link} to="/teams">
                    <CardMedia
                        component="img"
                        height="145"
                        image={areaFlag}
                        alt="League flag"
                    />
                    <CardContent>
                        <Typography
                            align="center"
                            gutterBottom
                            variant="h6"
                        >
                            {name}
                        </Typography>
                        <Typography align="center" variant="body1" color="text.secondary">
                            {country}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default LeagueCardItem