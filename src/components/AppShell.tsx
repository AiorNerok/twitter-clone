'use client';

import { Container, MantineProvider, Navbar, Stack } from '@mantine/core';
import { PropsWithChildren } from 'react';
import {
  IconHome,
  IconFavorie,
  IconSharp,
  IconList,
  IconMail,
  IconMedia,
  IconMore,
  IconNotify,
  IconProfile,
  IconTimeLine,
} from './ui/icons';
import Link from 'next/link';

import { createStyles } from '@mantine/core';

const useStyle = createStyles({
  Navigation: {
    border: 0,
    background: 'transparent',
    width: 275,
    padding: '0 12px',
  },
  NavigationItem: {display:"flex", alignItems:"center", height:50, padding:"8px 0"},
});

type mockNavbarItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

const mockNavbar: mockNavbarItemProps[] = [
  {
    href: '/',
    icon: <IconHome />,
    label: 'Home',
  },
  {
    href: '/',
    icon: <IconSharp />,
    label: 'Explore',
  },
  {
    href: '/',
    icon: <IconNotify />,
    label: 'Notifications',
  },
  {
    href: '/',
    icon: <IconMail />,
    label: 'Messages',
  },
];

export default function AppShell({ children }: PropsWithChildren) {
  const { classes } = useStyle();
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
          <Navbar className={classes.Navigation}>
            {mockNavbar.map(el => (
              <Link className={classes.NavigationItem} href={el.href} key={el.label}>
                {el.icon}
                {el.label}
              </Link>
            ))}
          </Navbar>
        </Stack>
        <Stack style={{ flex: 1 }} justify="space-between">
          {children}
        </Stack>
        <Stack justify="space-between">ee</Stack>
      </Container>
    </MantineProvider>
  );
}
