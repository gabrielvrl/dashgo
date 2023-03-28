import type { AppProps } from 'next/app';
import { theme } from '@/styles/theme';

import { ChakraProvider } from '@chakra-ui/react';
import { SidebarDrawerProvider } from '@/contexts/SidebarDrawerContext';

import { makeServer } from '@/services/mirage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

if(process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} >
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
