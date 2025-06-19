import {Box, Button, CssBaseline, Paper, useTheme} from "@mui/material";

export const TopBar = (): React.JSX.Element => {
  const theme = useTheme();

  // WebkitAppRegion is only valid for Electron
  return (
    <Paper
      elevation={4}
      square
      sx={{p: 0}}
    >
      <Box
        component='header'

        sx={{
          WebkitAppRegion: 'drag',
          width: '100%',
          height: '2rem',
          bgcolor: 'red'
        }}
      >
        <CssBaseline/>
        <Button>x</Button>
        <Button>o</Button>
        <Button>-</Button>
      </Box>
    </Paper>
  )
}
