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
        name: "Walter Richardson",
        position: "President",
        image: "walter.jpg",
        year: 'Junior',
        bio: "I’m Walter, the President of UML powerlifting, I’m a 75kg lifter and I’m by no means the strongest but training is something I love and I enjoy sharing the powerlifting experience with others!",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Andy Truong",
        position: "Vice President",
        image: "andy.png",
        year: 'Junior',
        bio: "Hey! I’m Andy, the VP of UMLPL. I’m currently a 82.5kg, who’s currently studying MIS at UML. Powerlifting has given me a sense of community that I’m excited to share with others! I hope to see y’all at the club meetings!",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Peter Ou",
        position: "Secretary",
        image: "peter.png",
        year: 'Junior',
        bio: "Hi, my name is Peter and I’ll be serving as your secretary for UMass Lowell Powerlifting. I compete as a 67.5 kg lifter and powerlifting has been a long time passion of mine. Super excited for what’s in store for the future!",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Megan Duong",
        position: "Public Relations",
        image: "megan.jpg",
        year: 'Senior',
        bio: "Hey, I’m Megan! I’m the Public Relations officer of UMLPL and a current senior studying clinical exercise science. Powerlifting has kept weight training exciting for me and I can’t wait to see success in my teammates and myself in this sport!",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Brendan Pham",
        position: "Co-Treasurer",
        image: "brendan.png",
        year: 'Junior',
        bio: "Hey! I’m a Co-Treasurer along with Bryan. I compete at 75kg and am excited to be apart of this great team!",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Bryan Montalvan",
        position: "Co-Treasurer",
        image: "bryan.JPG",
        year: 'Junior',
        bio: "Hey I'm Bryan, the Co-Treasurer of UMLPL. I compete at 90kg and am pretty new to sport. I know first hand how exciting it is to try out this sport and I'm excited to help you with that experience!",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Riley Hennesesy",
        position: "Event Coordinator",
        image: "riley.jpg",
        year: 'Junior',
        bio: "I’m Riley, the UML powerlifting event coordinator. I’m an 82.5kg powerlifter and a US Marine. My goal is to help everyone become the strongest version of themselves.",
        email: "example@gmail.com",
        instagram: "https://www.instagram.com/"
    },

]

const advisors = [
    {
        name: "Dan Howell",
        position: "Club Advisor",
        image: "dan.png",
        year: 'Graduate',
        bio: "Hello my name is Daniel Howell and I am excited to be advising the club. I have had a significant amount of success in powerlifting and in my career. As a alum of UML I am passionate to see everyone in the club succeed and achieve their goals. However I am able to assist you in terms of lifting or school let me know and I’ll do my best to serve.",
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
                <Center>
                    <Title my="lg" className={classes.title}>Meet Our Advisor</Title>
                </Center>
                <Container size="sm">
                    <MemberCard key={advisors[0].name}
                        avatar={advisors[0].image}
                        name={advisors[0].name}
                        year={advisors[0].year}
                        job={advisors[0].position}
                        bio={advisors[0].bio}
                        email={advisors[0].email}
                        instagram={advisors[0].instagram} />
                </Container>
            </Container>
        </div>
    );
}