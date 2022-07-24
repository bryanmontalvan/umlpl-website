import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import {
  BrandGithub,
  BrandSlack,
  BrandTwitter,
  BrandYoutube,
} from 'tabler-icons-react';

import Link from 'next/link'

const HEADER_HEIGHT = 70;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#0048b6',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    maxWidth: '1100px',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  navLogo: {
    // '@media (max-width: 520px)': {
    //   width: '30%',
    // },
    [theme.fn.smallerThan('sm')]: {
      height: "100%",
      width: "100%"
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: 'white',
    fontSize: theme.fontSizes.xl,
    fontWeight: 400,

    '&:hover': {
      backgroundColor: '#b60114',
    },

    [theme.fn.smallerThan('sm')]: {
      color: 'black',
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  anchorHeader: {
    [theme.fn.smallerThan('sm')]: {
      // height: 30,
      width: 80,
    },
  },
}));

export function Nav() {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();
  const navItems = [
    {
      link: '/about',
      label: 'About Us',
    },
    {
      link: '/team',
      label: 'Our Team',
    },
    {
      link: '/photo-gallery',
      label: 'Photo Gallery',
    },
    {
      link: '/contact',
      label: 'Contact Us',
    },
  ];

  const items = navItems.map((link) => (
    <Link href={link.link} key={link.label}>
      <a
        className={classes.link}
        onClick={() => {
          toggleOpened(false);
        }}
      >
        {link.label}
      </a>
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <a href="/" className={classes.anchorHeader}>
          <img
            src={"https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/uml.sidearmsports.com/images/responsive_2020/logo_main.svg"}
            width="100px"
            alt="riverhawk-logo"
            className={classes.navLogo}
          />
        </a>
        <Group spacing={7} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
          color="#b60114"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

Nav.propTypes = {
  links: PropTypes.array,
};