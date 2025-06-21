import { Autocomplete, Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "@renderer/i18n";
import { useState } from "react";
import { ApplicationSettings } from '../../../shared/settings/ApplicationSettings';

export const Settings = (): React.JSX.Element => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(ApplicationSettings.getInstance().getCurrentLanguage);

  const test = []

  const languages = (i18n.options.supportedLngs as string[] || [])
    .filter(l => l !== 'cimode' && true);

  const langOptions = languages.map(code => ({
    code,
    label: t(`languages:${code}`, code)
  }));

  const handleLanguageChange = (_: any, option: { code: string; label: string } | null): void => {
    if (!option) return;
    setSelectedLanguage(option.code);
    void i18n.changeLanguage(option.code);
  }

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
          {t('settings:title', 'Application Settings')}
        </Typography>
        <Typography>Language: </Typography>
        <Autocomplete
          disablePortal
          options={langOptions}
          value={langOptions.find(o => o.code === selectedLanguage) ?? null}
          onChange={handleLanguageChange}
          renderInput={(params) => <TextField {...params} label="Current Language" />}
        />
        <Typography sx={{ mt: 2 }}>Color Theme: </Typography>
        <Autocomplete
          disablePortal
          options={test}
          renderInput={(params) => <TextField {...params} label="Current Theme" />}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 1 }}>
          <Button>{t('settings:cancel', 'Cancel')}</Button>
          <Button variant="contained">Save</Button>
        </Box>
      </Paper>
    </Box>
  );
}
