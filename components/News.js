import React from 'react';
import { Card, Center, Group, useMantineTheme, Image, Text, Title, createStyles, Button, SimpleGrid } from '@mantine/core';

const PRIMARY_COL_HEIGHT = 500;

const useStyles = createStyles((theme) => ({
	root: {
		fontFamily: 'upbolters',
	},

	container: {
		maxWidth: 1800,
	},

	title: {
		width: '20vw',
		textAlign: 'center',
		fontFamily: 'upbolters',
		color: 'rgb(216, 215, 212)',
		backgroundColor: '#0048b6',

		[theme.fn.smallerThan('sm')]: {
			fontSize: '25px',
			width: '60vw',
		},
	},

	card: {
		height: `20vw`,
		backgroundColor: 'rgb(216, 215, 212)',
		'&:hover': {
			transform: 'scale(.98)',
			transition: 'all 0.2s ease-in',
		},
		[theme.fn.smallerThan('md')]: {
			height: '30vh',
		},
		[theme.fn.smallerThan('sm')]: {
			height: '30vh',
		},
	},

	imgText: {
		fontFamily: 'upbolters',
		position: 'absolute',
		top: '8px',
		[theme.fn.smallerThan('sm')]: {
			top: '3px',
			position: 'absolute',
			fontSize: '18px',
		},
	},

	cardButton: {
		backgroundColor: '#b60114',
		color: 'rgb(216, 215, 212)',
		'&:hover': {
			backgroundColor: '#0048b6'
		},
		position: 'absolute',
		bottom: '15px',


		[theme.fn.smallerThan('sm')]: {
			bottom: '8px',
			left: '8px',
			height: 35,
		},
	},

	image: {
		[theme.fn.smallerThan('sm')]: {
			height: '100px',
			width: '100%'
		},
	},

	simpleGrid: {
		paddingLeft: 60,
		paddingRight: 60,
		[theme.fn.smallerThan('sm')]: {
			paddingLeft: 15,
			paddingRight: 15,
		},
	}

}));

const cardItems = [
	// Newest
	{
		id: 1,
		title: "Odyssey Barbell Club Summer Open",
		image: "obc-teampicture.jpg"
	},
	{
		id: 2,
		title: "Members competed at Collegiate Nationals",
		image: "https://ticketleap-media-master.s3.amazonaws.com/caa00a10-242c-4d23-b36e-7de0635bc51b/full.jpg"
	},
	// Oldest
	{
		id: 3,
		title: "Odyssey Barbell Club Summer Open",
		image: "teamworkout.jpg"
	}
]


export function LeadGrid() {
	const { classes } = useStyles();
	const theme = useMantineTheme();

	const cards = cardItems.map((card) => (
		<div height={PRIMARY_COL_HEIGHT} key={card.id}>
			<Card className={classes.card}>
				<Card.Section>
					<Image src={card.image} className={classes.image} />
				</Card.Section>

				<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
					<Text size="xl" className={classes.imgText}>
						{card.title}
					</Text>
					<Button color="blue" size="md" className={classes.cardButton}>
						Read More
					</Button>
				</Group>
			</Card>
		</div>
	));


	return (
		<Center my="md" style={{ display: 'flex', flexDirection: 'column' }}>
			<Title my="md" className={classes.title}>Recent Media</Title>
			<SimpleGrid
				className={classes.simpleGrid}
				cols={3}
				breakpoints={[
					{ maxWidth: 'lg', cols: 3, spacing: 'sm' },
					{ maxWidth: 'md', cols: 1, spacing: 'sm' },
					{ maxWidth: 'xs', cols: 1, spacing: 'sm' },
				]}
			>
				{cards}
			</SimpleGrid>
		</Center>
	);
}