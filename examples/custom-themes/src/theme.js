/**
 * Just customize what you need, deep merge themes by default.
 *
 * If you are using TypeScript, please use the following type definition.
 * If you are using JavaScript, refer to https://github.com/geist-org/geistclone/blob/master/components/themes/presets/index.ts
 */

// import {
//   GeistUIThemes,
//   GeistUIThemesPalette,
//   GeistUIThemesExpressiveness,
//   GeistUIThemesLayout,
//   GeistUIThemesFont,
// } from '@geistclone/core'
import { Themes } from '@geistclone/core'

export const greenTheme = Themes.createFromLight({
  type: 'green',
  palette: {
    success: 'green',
    warning: 'green',
    error: 'green',
  },
})

export const redTheme = Themes.createFromLight({
  type: 'red',
  palette: {
    success: 'red',
    warning: 'red',
    error: 'red',
  },
})
