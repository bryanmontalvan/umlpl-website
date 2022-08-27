import React from 'react';
import {
    createStyles,
    SimpleGrid,
    Overlay,
    Container,
    Title,
    Text,
    Center,
    Stack,
    ActionIcon,
    Group
} from '@mantine/core';
import { BrandYoutube, BrandInstagram, BrandGmail } from 'tabler-icons-react';
import { ScheduleTable } from '../small-components/ScheduleTable';
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        backgroundImage:
            'url(teamworkout.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    container: {
        maxWidth: '50vw',
        zIndex: 0.2,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '90vw'
        },
    },

    title: {
        width: '20vw',
        textAlign: 'center',
        fontFamily: 'upbolters',
        color: 'rgb(216, 215, 212)',
        backgroundColor: '#0048b6',

        [theme.fn.smallerThan('sm')]: {
            fontSize: '25px',
            width: '80vw',
        },
    },

    subTitle: {
        width: '13vw',
        textAlign: 'center',
        fontFamily: 'upbolters',
        color: 'rgb(216, 215, 212)',
        backgroundColor: '#b60114',

        [theme.fn.smallerThan('sm')]: {
            fontSize: '25px',
            width: '70vw',
        },
    },

    whiteSection: {
        backgroundColor: "white",
        borderRadius: '8px',
    },

    mapFrame: {
        width: '20vw',
        height: '30vh',
        [theme.fn.smallerThan('lg')]: {
            width: '40vw',
        },
        [theme.fn.smallerThan('sm')]: {
            width: '80vw',
            height: '40vh',
        },
    },

    icon: {
        backgroundColor: '#b60114',
        width: 50,
        height: 50,
        color: 'white',
        '&:hover': {
            backgroundColor: '#b60114'
        }
    },

    socialButton: {
        cursor: 'pointer',
        '&:hover': {
            boxShadow: "1px 1px 8px grey"
        }
    }

}));

export function ContactMain() {
    const { classes } = useStyles();

    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container} pb={40}>
                <Center>
                    <Title my="lg" className={classes.title}>Contact US</Title>
                </Center>
                <Container align="center" my="sm" py="md" className={classes.whiteSection}>
                    <Title order={2} mt="lg" className={classes.subTitle}>Meeting Location</Title>
                    <Text size="lg" mt="sm" weight={600}>UMass Lowell Campus Recreation</Text>
                    <Text size="sm" mb="sm">
                        322 Aiken Ave, Lowell, MA 01854
                    </Text>
                    <iframe
                        className={classes.mapFrame}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.4383850707027!2d-71.32088438453441!3d42.65206467916845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3a445f48b8e49%3A0x928333e7f8f296dd!2sCampus%20Recreation%20Center!5e0!3m2!1sen!2sus!4v1661556915977!5m2!1sen!2sus"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        style={{ border: 0 }}
                    ></iframe>
                    <Title order={2} my="lg" className={classes.subTitle}>Team Schedule</Title>
                    <ScheduleTable />
                    <Title order={2} my="lg" className={classes.subTitle}>Socials</Title>
                    <SimpleGrid
                        cols={3}
                        my="lg"
                        breakpoints={[
                            { maxWidth: 980, cols: 2, spacing: 'md' },
                            { maxWidth: 755, cols: 1, spacing: 'sm' },
                        ]}
                    >
                        <Group className={classes.socialButton}>
                            <ActionIcon size="xl" radius="lg" className={classes.icon}>
                                <BrandGmail size={45} />
                            </ActionIcon>
                            <Stack style={{ gap: 0 }}>
                                <Text align="center" size="xl">Our Email</Text>
                                <Text align="center" size="xs">If you have any questions or concerns</Text>
                            </Stack>
                        </Group>
                        <Group className={classes.socialButton}>
                            <ActionIcon size="xl" radius="lg" className={classes.icon}>
                                <BrandInstagram size={45} />
                            </ActionIcon>
                            <Link href="https://www.instagram.com/umlpowerlifting/">
                                <Stack style={{ gap: 0 }} >
                                    <Text align="center" size="xl">@umlpowerlifting</Text>
                                    <Text align="center" size="xs">Follow our instagram</Text>
                                </Stack>
                            </Link>
                        </Group>
                        <Group className={classes.socialButton}>
                            <ActionIcon size="xl" radius="lg" className={classes.icon}>
                                <BrandYoutube size={45} />
                            </ActionIcon>
                            <Stack style={{ gap: 0 }}>
                                <Text align="center" size="xl">To Be Announced</Text>
                                <Text align="center" size="xs">Check out our YouTube</Text>
                            </Stack>
                        </Group>
                    </SimpleGrid>
                </Container>
            </Container>
        </div >
    );
}