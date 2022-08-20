import React from 'react';
import { 
    createStyles,
    SimpleGrid,
    Overlay,
    Container,
    Title,
    Center
} from '@mantine/core';
import { MemberCard } from './Card';

const team_members = [
    {
        name: "Dan Howell",
        position: "Club Advisor",
        image: "dan.png",
        year: 'Graduate',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!"
    },
    {
        name: "Walter Richardson",
        position: "President",
        image: "",
        year: 'Senior',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!"
    },
    {
        name: "Andy Truong",
        position: "Vice President",
        image: "",
        year: 'Junior',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!"
    },
    {
        name: "Peter Ou",
        position: "Secretary",
        image: "peter.png",
        year: 'Junior',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!"
    },
    {
        name: "Megan Duong",
        position: "Public Relations",
        image: "",
        year: 'Junior',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!"
    },
    {
        name: "Brendan Pham",
        position: "Co-Treasurer",
        image: "brendan.png",
        year: 'Junior',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!"
    },
    {
        name: "Bryan Montalvan",
        position: "Co-Treasurer",
        image: "bryan.JPG",
        year: 'Junior',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!"
    },
    {
        name: "Riley Hennesesy",
        position: "Event Coordinator",
        image: "",
        year: 'Junior',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!"
    },

]

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        backgroundImage:
            'url(https://goriverhawks.com/images/2020/12/1/parallax3_bg.jpg)',
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


}));

export function AboutHero() {
    const { classes } = useStyles();

    const cards = team_members.map((card) => (
        <MemberCard avatar={card.image} name={card.name} email={card.year} job={card.position} bio={card.bio} />
    ));

    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container} pb={40}>
                <Center>
                    <Title my="md" className={classes.title}>Meet Our E-Board</Title>
                </Center>
                <SimpleGrid
                    cols={3}
                    spacing="xl"
                    breakpoints={[
                        { maxWidth: 1950, cols: 2, spacing: 'lg' },
                        { maxWidth: 1300, cols: 1, spacing: 'md' },
                    ]}>
                    {cards}
                </SimpleGrid>
            </Container>
        </div>
    );
}