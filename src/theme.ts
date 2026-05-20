import { createTheme } from '@mui/material/styles'

export const COLORS_45CM = {
  primary: '#7C6AF2', secondary: '#6D788D', success: '#72E128',
  error: '#FF4D49', warning: '#FDB528', info: '#26C6F9',
  bgDark: '#25293C', paperDark: '#2F3349',
  textPrimary: '#E7E3FC', textSecondary: '#9A95B1',
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: COLORS_45CM.primary },
    secondary: { main: COLORS_45CM.secondary },
    success: { main: COLORS_45CM.success },
    error: { main: COLORS_45CM.error },
    warning: { main: COLORS_45CM.warning },
    info: { main: COLORS_45CM.info },
    background: { default: COLORS_45CM.bgDark, paper: COLORS_45CM.paperDark },
    text: { primary: COLORS_45CM.textPrimary, secondary: COLORS_45CM.textSecondary },
  },
  typography: { fontFamily: '"Pretendard", "Inter", -apple-system, sans-serif' },
  shape: { borderRadius: 8 },
  components: {
    MuiCard: { styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiButton: { styleOverrides: { root: { textTransform: 'none', fontWeight: 600 } } },
    MuiChip: { styleOverrides: { root: { fontWeight: 600 } } },
  },
})
