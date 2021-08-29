import { Container, Grid, Paper, AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core'
import CardList from '../src/CardList'
import Profile from '../src/profile'

export default function Home() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid
            item
            md={3}
          >
            <Profile/>
          </Grid>
          <Grid
            item
            md={6}
          >
            <CardList/>
          </Grid>
          <Grid
            item
            md={3}
          >
            <Paper elevation={3}>
              <h1>Hello world</h1>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
