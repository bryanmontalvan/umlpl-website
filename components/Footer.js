import React from 'react';
import { createStyles, Container, Group, ActionIcon, Image } from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: '4px solid black',
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
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image height={40} src="https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/uml.sidearmsports.com/images/responsive_2020/logo_main.svg"/>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="xl">
            <BrandTwitter color="white" size={25} />
          </ActionIcon>
          <ActionIcon size="xl">
            <BrandYoutube color="white" size={25} />
          </ActionIcon>
          <ActionIcon size="xl">
            <BrandInstagram color="white" size={25} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}