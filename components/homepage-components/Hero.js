import React from 'react';
import { createStyles, Overlay, Container, Title, Button, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://goriverhawks.com/images/2020/12/1/parallax3_bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    fontFamily: 'upbolters',
    color: 'rgb(216, 215, 212)',
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    '&:hover': {
      backgroundColor: '#blue',
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 35,
      lineHeight: 1.3,
    },
  },

  description: {
    fontFamily: 'upbolters',
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    backgroundColor: '#b60114',
    marginTop: theme.spacing.xl * 1.5,

    '&:hover': {
      backgroundColor: '#blue',
    },


    [theme.fn.smallerThan('sm')]: {
      width: '100%',
      height: 50
    },
  },
}));

export function HeroContentUML() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>UMASS LOWELL POWERLIFTING CLUB</Title>
        <Text className={classes.description} size="xl" mt="xl">
          A competitive collegiate club team with the goal of developing student athletes as powerlifters
          -- Welcoming students of all backgrounds and levels
        </Text>

        <Button size="xl" className={classes.control}>
          Contact Us
        </Button>
      </Container>
    </div>
  );
}