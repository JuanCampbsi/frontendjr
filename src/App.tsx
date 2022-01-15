import React from "react";
import Home from "../src/screens/Home";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import theme from "./Global/styles/themes/theme";

const queryClient = new QueryClient()

const App = () => { 

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
