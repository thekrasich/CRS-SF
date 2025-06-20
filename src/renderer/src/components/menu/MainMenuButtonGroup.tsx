import { Button, Paper } from '@mui/material'
import { ExitDialog } from '@renderer/components/menu/ExitDialog'
import { useState } from "react";

export const MainMenuButtonGroup = (): React.JSX.Element => {
  const [isExitDialogOpen, setIsExitDialogOpen] = useState(false)

  const handleNewSimulationClick = (): void => {
    alert('In development')
  }

  const handleLoadSimulationClick = (): void => {
    alert('In development')
  }

  const handleDocumentationClick = (): void => {
    alert('In development')
  }

  const handleSettingsClick = (): void => {
    alert('In development')
  }

  const handleExitClick = (): void => {
    setIsExitDialogOpen(!isExitDialogOpen)
  }

  return (
    <Paper
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
      elevation={3}
    >
      <Button variant="contained" sx={{ m: 1, flex: 1 }} onClick={() => handleNewSimulationClick()}>
        New Simulation
      </Button>
      <Button
        variant="contained"
        sx={{ m: 1, flex: 1 }}
        onClick={() => handleLoadSimulationClick()}
      >
        Load Simulation
      </Button>
      <Button variant="contained" sx={{ m: 1, flex: 1 }} onClick={() => handleDocumentationClick()}>
        Documentation
      </Button>
      <Button variant="contained" sx={{ m: 1, flex: 1 }} onClick={() => handleSettingsClick()}>
        Settings
      </Button>
      <Button variant="contained" sx={{ m: 1, flex: 1 }} onClick={() => handleExitClick()}>
        Exit
      </Button>
      <ExitDialog isDialogOpened={isExitDialogOpen} onClose={handleExitClick} />
    </Paper>
  )
}
