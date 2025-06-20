import { ColorTheme, Language } from '../enums'

export class ApplicationSettings {
  private static _instance: ApplicationSettings;

  private _currentLanguage: Language;
  private _currentColorTheme: ColorTheme;

  private constructor() {
    //TODO. In future we should add options to save settings into a file.
    this._currentColorTheme = ColorTheme.Dark;
    this._currentLanguage = Language.UA;
  }

  public static getInstance(): ApplicationSettings {
    if (!this._instance) {
      this._instance = new ApplicationSettings();
    }
    return this._instance;
  }

  public get getCurrentLanguage(): Language {
    return this._currentLanguage
  }

  public set setCurrentLanguage(value: Language | string) {
    if (typeof value === 'string') {
      this._currentLanguage = Language[value.toLowerCase()]
    } else {
      this._currentLanguage = value
    }
  }

  public get getCurrentColorTheme(): ColorTheme {
    return this._currentColorTheme
  }

  public set getCurrentColorTheme(value: ColorTheme) {
    if (typeof value === 'string') {
      this._currentColorTheme = ColorTheme[value]
    } else {
      this._currentColorTheme = value
    }
  }
}
