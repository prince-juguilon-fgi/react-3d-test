"use client";

import {
  type HydrateProps,
  QueryClient,
  QueryClientProvider,
  Hydrate as RQHydrate,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export const Hydrate = (props: HydrateProps) => {
  return <RQHydrate {...props} />;
};
