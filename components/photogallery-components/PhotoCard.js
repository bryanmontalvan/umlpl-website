import { createStyles, Paper, Text, Title, Button } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => ({
    card: {
        height: 440,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&:hover': {
            boxShadow: theme.shadows.md,
            transform: 'scale(1.02)',
        },

        [`&:hover .${getRef('title')}`]: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            opacity: 1,
        },
    },

    title: {
        ref: getRef('title'),
        color: 'white',
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
        '&:hover': {
        }
    },
}));


export function PhotoCard({ url, title }) {
    const { classes } = useStyles();

    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(${url})` }}
            className={classes.card}
        >
            <div>
                <Text className={classes.title} size="xs">
                    {title}
                </Text>
            </div>
        </Paper>
    );
}

