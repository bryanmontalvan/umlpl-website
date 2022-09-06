import React from 'react';
import {
  createStyles,
  Text,
  Title,
  Center,
  Grid,
  Button,
  Group
} from '@mantine/core';
import { BrandDiscord, BrandInstagram } from 'tabler-icons-react';
import { ScheduleTable } from '../small-components/ScheduleTable';
import Link from 'next/link';

const crc_address = "https://goo.gl/maps/YBBne4oKhY8EMrvH7";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    width: '20vw',
    textAlign: 'center',
    fontFamily: 'upbolters',
    color: 'rgb(216, 215, 212)',
    backgroundColor: '#0048b6',
    [theme.fn.smallerThan('sm')]: {
      width: '60vw'
    },
  },

  subTitle: {
    fontFamily: 'upbolters',
  },

  description: {
    fontFamily: 'Roboto',
  },

  btnInstagram: {
    backgroundColor: '#b60114',
    width: '40%',
    '&:hover': {
      backgroundColor: 'black',
    },
  },

  btnDiscord: {
    backgroundColor: '#7289da',
    width: '40%',
    '&:hover': {
      backgroundColor: 'black',
    },
  },

  link: {
    textDecoration: 'none',
    '&:visited': {
      color: '#b60114'
    },

    '&:hover': {
      textDecoration: 'underline',
    }
  }
}));

export function ContactUs() {
  const { classes } = useStyles();

  return (
    <Center className={classes.wrapper}>
      <Title my="md" className={classes.title}>Contact Us</Title>
      <Grid grow gutter='lg'>
        <Grid.Col span={4}>
          <Title order={2} className={classes.subTitle}>Contact Info</Title>
          <hr />
          <Text className={classes.description}>Follow our instagram to stay up to date with club activity and important announcements. And join our Discord if you are interested in talking to current members!</Text>
          <Group>
            <Link href="https://www.instagram.com/umlpowerlifting/">
              <Button leftIcon={<BrandInstagram size={18} />} variant="filled" mt="sm" className={classes.btnInstagram}>
                Our instagram
              </Button>
            </Link>
            <Link href="https://discord.gg/Sk4T5m8zh6">
              <Button leftIcon={<BrandDiscord size={18} />} variant="filled" mt="sm" className={classes.btnDiscord}>
                Our Discord
              </Button>
            </Link>
          </Group>
        </Grid.Col>
        <Grid.Col span={6}>
          <Title order={2} className={classes.subTitle}>Facility / Meeting Place</Title>
          <hr />
          <Text size="md" weight={600} className={classes.description}>
            UMass Lowell Campus Recreation Center
          </Text>
          <Text size="md" className={classes.description}>
            <a href={crc_address} target="_blank" rel="noreferrer" className={classes.link}>
              322 Aiken Ave, Lowell, MA 01854
            </a>
          </Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Title order={2} className={classes.subTitle}>Schedule</Title>
          <hr />
          <ScheduleTable />
        </Grid.Col>
      </Grid>
    </Center>
  );
}