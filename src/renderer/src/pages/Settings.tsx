import { Autocomplete, Box, Button, Paper, TextField, Typography } from "@mui/material";

export const Settings = (): React.JSX.Element => {
  const test = []

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 12,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
        }}
      >
        <Typography variant="h4" gutterBottom color="text.primary">
          Application Settings
        </Typography>
        <Typography>Language: </Typography>
        <Autocomplete
          disablePortal
          options={test}
          renderInput={(params) => <TextField {...params} label="test" />}
        />
        <Typography sx={{ mt: 2 }}>Color Theme: </Typography>
        <Autocomplete
          disablePortal
          options={test}
          renderInput={(params) => <TextField {...params} label="test" />}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 1 }}>
          <Button>Cancel</Button>
          <Button variant="contained">Save</Button>
        </Box>
      </Paper>
    </Box>
  );
}
