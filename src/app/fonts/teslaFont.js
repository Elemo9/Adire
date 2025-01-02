import localFont from "next/font/local";

const teslaFont = localFont({
  src: [
    {
      path: '../../../public/fonts/TESLA.woff',
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-tesla",
});

export default teslaFont;
