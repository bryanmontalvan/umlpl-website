import React from 'react';
import {
  createStyles,
  Text,
  Title,
  Center,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    wrapper : {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing.xl * 2,
        borderRadius: theme.radius.md,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
        }`,
    
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          flexDirection: 'column-reverse',
          padding: theme.spacing.xl,
        },
    }
}));

const social = [BrandTwitter, BrandYoutube, BrandInstagram];

export function ContactUs() {
  const { classes } = useStyles();

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size={22} />
    </ActionIcon>
  ));

  return (
    <Center className={classes.wrapper}>
        <Title>Interested?</Title>
        <Text weight={500} size="lg" mb={5}>
          Feel free to contact us on our instagram
        </Text>
    </Center>
  );
}