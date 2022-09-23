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

function LeagueCardItem({ leagueId, name, country, areaFlag }) {
    const leagueLink = `/leagues/${leagueId}/matches`
    if (!areaFlag) areaFlag = withoutImage

    return (
        <Grid align="center" item xs={12} md={3}>
            <Card sx={{ maxWidth: 320 }}>
                <CardActionArea component={Link} to={leagueLink}>
                    <CardContent>
                    <CardMedia
                        component="img"
                        height="135"
                        image={areaFlag}
                        alt="League flag"
                    />
                        <Typography
                            align="center"
                            variant="h6"
                        >
                            {name}
                        </Typography>
                        <Typography align="center" variant="body2" color="text.secondary">
                            {country}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default LeagueCardItem