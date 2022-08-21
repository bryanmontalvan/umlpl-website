import { Avatar, Text, Button, Paper, createStyles, Group } from '@mantine/core';
import Link from 'next/link';
import { Mail, BrandInstagram } from 'tabler-icons-react';

const useStyles = createStyles(() => ({
    icon: {
        color: '#b60114',
        '&:hover': {
            backgroundColor: 'black'
        }
    },

    emailBtn: {
        textDecoration: 'none',
        '&:hover': {
            color: '#BB001B'
        }
    },

    email: {
        color: 'black',
        textDecoration: 'none',
        '&:hover': {
            color: '#BB001B'
        }
    },

    instagram: {
        '&:hover': {
            color: '#82008F',
        }
    }
}));

export function MemberCard({ avatar, name, year, job, bio, email, instagram }) {
    const { classes } = useStyles();

    return (
        <Paper
            radius="md"
            withBorder
            p="lg"
            shadow="lg"
            className={classes.card}
        >
            <Avatar src={avatar} size={180} radius={120} mx="auto" className={classes.image} />
            <Text align="center" size="xl" weight={600} mt="md">
                {name}
            </Text>
            <Text align="center" size="md">
                {year} • {job}
            </Text>

            <Text align="center" size="sm">
                {bio}
            </Text>

            <Group position="center">
                <Button variant="default" mt="md" leftIcon={<Mail />} className={classes.emailBtn}>
                    <a href={`mailto:${email}`} className={classes.email}>Email</a>
                </Button>
                <Link href={instagram}>
                    <Button variant="default" mt="md" leftIcon={<BrandInstagram />} className={classes.instagram}>
                        Instagram
                    </Button>
                </Link>
            </Group>
        </Paper>
    );
}