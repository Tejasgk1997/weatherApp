import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Home from "./pages/home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  return <QueryClientProvider client={queryClient}> <Home /> </QueryClientProvider>
}

export default App