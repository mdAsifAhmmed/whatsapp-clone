import React, { createContext } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
export const TramplateContext = createContext(null);
const TramplateProvider = ({ children }) => {
  const theme = createMuiTheme({
    overrides: {
      MuiDrawer: {
        paperAnchorLeft: {
          left: "80px !important",
          right: "auto !important",
          height: "90vh !important",
          top: "30px !important",
          borderRadius: "4px !important",
          width: "399px !important",
          boxShadow:'none'
        },
      },
      MuiBackdrop:{
        root:{
          backgroundColor:'unset !important'
        }
      }
    },
  });
  return (
    <TramplateContext.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TramplateContext.Provider>
  );
};

export default TramplateProvider;
