import React from 'react';
import { createStyles, Container, Group, ActionIcon, Image } from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: '4px solid white',
    backgroundColor: '#0048b6'
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    color: 'white',
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },

  icon: {
    color: 'white',
    '&:hover': {
      backgroundColor: '#b60114'
    }
  }
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image height={40} src="team-logo.png" alt="umlpl-logo"/>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="xl" className={classes.icon}>
            <BrandTwitter size={25} />
          </ActionIcon>
          <ActionIcon size="xl" className={classes.icon}>
            <BrandYoutube size={25} />
          </ActionIcon>
          <ActionIcon size="xl" className={classes.icon}>
            <BrandInstagram size={25} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}