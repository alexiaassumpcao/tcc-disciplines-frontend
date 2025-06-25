import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './App.css';
import CustomRoutes from './Routes';
import { AuthProvider } from './contexts/auth';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import theme from './theme'
import { CookiesProvider } from 'react-cookie';

function App() {
  const queryClient = new QueryClient()
  return (
    <CookiesProvider>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
          <AuthProvider >
            <Box sx={{ fontFamily: 'Lora' }}>
              <CustomRoutes />
            </Box> 
          </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
    </CookiesProvider>
  );
}

export default App;
