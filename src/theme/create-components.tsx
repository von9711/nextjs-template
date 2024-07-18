import { Components } from "@mui/material/styles/components";

export default function createComponents(config: any): Components {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 0,
        },
      },
    },
  };
}
