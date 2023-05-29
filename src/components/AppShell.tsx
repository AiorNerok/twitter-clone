'use client'

import { MantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";

export default function AppShell({ children }: PropsWithChildren) {
  return (
    <MantineProvider
      withNormalizeCSS
      theme={{
        colors: {
          light: ["#D9D9D9", "#6E767D"],
          dark: ["#000", "#202327"],
          blue: ["#1D9BF0", "#1D9BF080"],
        },
      }}
    >
      {children}
    </MantineProvider>
  );
}