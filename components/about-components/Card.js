import { Avatar, Text, Button, Paper, createStyles, Group } from '@mantine/core';
import { Mail, BrandInstagram } from 'tabler-icons-react';

const useStyles = createStyles(() => ({
    icon: {
        color: '#b60114',
        '&:hover': {
            backgroundColor: 'black'
        }
    },
}));

export function MemberCard({ avatar, name, email, job, bio }) {
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
                {email} • {job}
            </Text>

            <Text align="center" size="sm">
                {bio}
            </Text>

            <Group position="center">
                <Button variant="default" mt="md" leftIcon={<Mail />}>
                    Email
                </Button>
                <Button variant="default" mt="md" leftIcon={<BrandInstagram />}>
                    Instagram
                </Button>
            </Group>
        </Paper>
    );
}