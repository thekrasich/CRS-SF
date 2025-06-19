import {Box, Button, Paper, Typography} from '@mui/material'

export const Home = (): React.JSX.Element => {
  return (
    <Box>
      <Paper elevation={3} style={{margin: 8, textAlign: 'center'}}>
        <Typography variant="h4">CRSolver</Typography>

        <Button sx={{ display: 'flex', flexDirection: 'column' }}>New Simulation</Button>
        <Button sx={{ display: 'flex', flexDirection: 'column' }}>Load Simulation</Button>
        <Button sx={{ display: 'flex', flexDirection: 'column' }}>Settings</Button>
        <Button sx={{ display: 'flex', flexDirection: 'column' }}>Exit</Button>
      </Paper>
    </Box>
  )
}
