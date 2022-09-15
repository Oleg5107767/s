import { Link } from "react-router-dom";
import { Page404Style } from './Page404Style';
import { Container, Grid, Typography } from "@material-ui/core";

const Page404 = () => {

    const classes = Page404Style();
    return (
        <Container maxWidth={false} className={classes.wrap}>
            <meta
                name="description"
                content="This page is not found"
            />
            {/*<title>This page is not found</title>*/}
            <Grid
                container
                direction='column'
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                <Grid item>
                    <Typography
                        className={classes.err}
                        component="h1"
                        variant="h6"
                    >
                        Page doesn't exist
                    </Typography>
                </Grid>
                <Grid item>
                    <Link to="/" className={classes.link}>Back to main page</Link>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Page404;