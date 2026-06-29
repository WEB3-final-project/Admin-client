import { defaultTheme } from 'react-admin';

export const theme = {
    ...defaultTheme,
    palette: {
        primary: {
            main: '#6366f1',
            light: '#818cf8',
            dark: '#4f46e5',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#000000',
            contrastText: '#ffffff',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: '#6b7280',
            disabled: '#cfcfcf',
        },
        divider: '#cfcfcf',
    },
    typography: {
        fontFamily: 'Poppins, system-ui, sans-serif',
        fontWeightBold: 700,
        fontWeightMedium: 600,
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        ...defaultTheme.components,
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontFamily: 'Poppins, system-ui, sans-serif',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
                containedPrimary: {
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#333333',
                    },
                },
                outlinedPrimary: {
                    borderColor: '#cfcfcf',
                    color: '#000000',
                    '&:hover': {
                        borderColor: '#6366f1',
                        color: '#6366f1',
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '16px',
                    boxShadow: 'none',
                    border: 'none',
                    backgroundColor: '#ffffff',
                },
                elevation1: {
                    boxShadow: 'none',
                    border: '1px solid #cfcfcf',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    border: 'none',
                    backgroundColor: 'transparent',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        fontFamily: 'Poppins, system-ui, sans-serif',
                        '& fieldset': {
                            borderColor: '#cfcfcf',
                        },
                        '&:hover fieldset': {
                            borderColor: '#6366f1',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#6366f1',
                        },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#6366f1',
                    },
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#f7f7f8',
                    '& .MuiTableCell-head': {
                        fontWeight: 700,
                        color: '#000000',
                        fontFamily: 'Poppins, system-ui, sans-serif',
                    },
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#f7f7f8',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    fontFamily: 'Poppins, system-ui, sans-serif',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    boxShadow: 'none',
                    borderBottom: '1px solid #cfcfcf',
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    borderRight: '1px solid #cfcfcf',
                    borderRadius: '0',
                },
            },
        },
    },
};