import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

export const ExitDialog = ({
  isDialogOpened,
  onClose
}: {
  isDialogOpened: boolean
  onClose: () => void
}): React.JSX.Element => {
  const handleNoClick = (): void => {
    onClose()
  }
  const handleYesClick = (): void => {}

  return (
    <Dialog open={isDialogOpened}>
      <DialogTitle>Application Exit</DialogTitle>
      <DialogContent>Do you wand to exit the application?</DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => handleYesClick()}>
          Yes
        </Button>
        <Button variant="contained" onClick={() => handleNoClick()}>
          No
        </Button>
      </DialogActions>
    </Dialog>
  )
}
