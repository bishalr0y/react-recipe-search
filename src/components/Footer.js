import {AppBar, Container, Toolbar, Typography} from "@material-ui/core"

export default function Demo() {

    const style = {
        background: "#F50057",
        marginTop: "20px"
    }

    return (
        <AppBar position="static" style={style}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                Created by @bishalr0y | Powered by edamam
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}