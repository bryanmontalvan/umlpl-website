import {
    SimpleGrid,
    Container,
    Title,
    Center,
    createStyles
} from '@mantine/core';
import useFirestore from '../../hooks/useFirestore';
import { PhotoCard } from './PhotoCard';

const useStyles = createStyles((theme) => ({
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
}));

export function PGMain() {
    // Creates docs objeect (destructured from firestore hook)
    const { docs } = useFirestore('images');
    const { classes } = useStyles();

    let photoCards = docs.map((card) => (
        <PhotoCard
            url={card.url}
            title={card.title}
            key={card.id}
        />
    ));

    return (
        <Container my="md" size="xl">
            <Center>
                <Title my="lg" className={classes.title}>Photo Gallery</Title>
            </Center>
            <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
                {photoCards}
            </SimpleGrid>
        </Container>
    );
}