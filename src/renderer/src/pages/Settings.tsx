import { Box, Typography } from '@mui/material'

export const Settings = (): React.JSX.Element => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%'
      }}
    >
      <Typography variant="h4" gutterBottom color="text.primary">
        Application Settings
      </Typography>
    </Box>
  )
}
