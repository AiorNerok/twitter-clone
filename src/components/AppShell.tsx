'use client';

import { Container, MantineProvider, Navbar, Stack } from '@mantine/core';
import { PropsWithChildren } from 'react';

type mockNavbarItemProps = {
  icon: any;
  label: string;
  href: string;
};

const mockNavbar: mockNavbarItemProps[] = [];

export default function AppShell({ children }: PropsWithChildren) {
  return (
    <MantineProvider
      withNormalizeCSS
      theme={{
        colors: {
          light: ['#D9D9D9', '#6E767D'],
          dark: ['#000', '#202327'],
          blue: ['#1D9BF0', '#1D9BF080'],
        },
        globalStyles: theme => ({
          body: {
            height: '100vh',
            background: theme.colors.dark[0],
            color: theme.colors.light[0],
          },
        }),
      }}
    >
      <Container maw={1265} mah={'100vh'} h={'100%'} display={'flex'}>
        <Stack justify="space-between">
          {/* <Navbar></Navbar> */}
        </Stack>
        <Stack style={{ flex: 1 }} justify="space-between">
          {children}
        </Stack>
        <Stack justify="space-between">ee</Stack>
      </Container>
    </MantineProvider>
  );
}
