import { TypographyOptions } from "@mui/material/styles/createTypography";
import {
  Inter,
  Plus_Jakarta_Sans as getPlusJakartaSansFont,
  Roboto_Mono as getRobotoMonoFont,
} from "next/font/google";

const inter = Inter({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const robotoMono = getRobotoMonoFont({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-roboto-mono",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const plusJakartaSans = getPlusJakartaSansFont({
  subsets: ["cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export default function createTypography(): TypographyOptions {
  return {
    fontFamily: [
      inter.style.fontFamily,
      robotoMono.style.fontFamily,
      plusJakartaSans.style.fontFamily,
    ].join(","),
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.57,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    h1: {
      fontFamily: plusJakartaSans.style.fontFamily,
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: plusJakartaSans.style.fontFamily,
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: plusJakartaSans.style.fontFamily,
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: plusJakartaSans.style.fontFamily,
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: plusJakartaSans.style.fontFamily,
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: plusJakartaSans.style.fontFamily,
      fontWeight: 700,
      fontSize: "1.125rem",
      lineHeight: 1.2,
    },
  };
}
