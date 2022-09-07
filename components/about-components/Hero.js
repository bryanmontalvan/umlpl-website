import React from 'react';
import {
    createStyles,
    SimpleGrid,
    Overlay,
    Container,
    Title,
    Text,
    Center,
    Stack
} from '@mantine/core';
import { MemberCard } from './Card';

const team_members = [
    {
        name: "Dan Howell",
        position: "Club Advisor",
        image: "dan.png",
        year: 'Graduate',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Walter Richardson",
        position: "President",
        image: "walter.jpg",
        year: 'Senior',
        bio: "I’m Walter, the President of UML powerlifting, I’m a 75kg lifter and I’m by no means the strongest but training is something I love and I enjoy sharing the powerlifting experience with others!",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Andy Truong",
        position: "Vice President",
        image: "",
        year: 'Junior',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Peter Ou",
        position: "Secretary",
        image: "peter.png",
        year: 'Junior',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Megan Duong",
        position: "Public Relations",
        image: "",
        year: 'Junior',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Brendan Pham",
        position: "Co-Treasurer",
        image: "brendan.png",
        year: 'Junior',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Bryan Montalvan",
        position: "Co-Treasurer",
        image: "bryan.JPG",
        year: 'Junior',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Riley Hennesesy",
        position: "Event Coordinator",
        image: "",
        year: 'Junior',
        bio: "Hello my name is (name) and I'm excited to be doing x for the club in this upcoming year. Hope to see you all at the club meeting!",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
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

    aboutHero: {
        backgroundColor: "white",
        borderRadius: '8px',
    },

    aboutTitle: {
        fontFamily: 'upbolters',

        [theme.fn.smallerThan('sm')]: {
            fontSize: 25,
        },
    },

    aboutDescription: {
        width: '30vw',

        [theme.fn.smallerThan('sm')]: {
            width: '75vw',
        },
    }


}));

export function AboutHero() {
    const { classes } = useStyles();

    const cards = team_members.map((card) => (
        <MemberCard
            key={card.name}
            avatar={card.image}
            name={card.name}
            year={card.year}
            job={card.position}
            bio={card.bio}
            email={card.email}
            instagram={card.instagram}
        />
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
                    <Title my="lg" className={classes.title}>About Us</Title>
                </Center>
                <Stack align="center" my="sm" py="md" className={classes.aboutHero}>
                    <Title className={classes.aboutTitle}>What is our purpose?</Title>
                    <Text className={classes.aboutDescription}>To provide a safe space for people who are interested in the sport of powerlifting. To teach people the basics of the sport and to help foster newer lifters.  </Text>
                </Stack>
                <Center>
                    <Title my="lg" className={classes.title}>Meet Our E-Board</Title>
                </Center>
                <SimpleGrid
                    cols={3}
                    spacing="xl"
                    my="lg"
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