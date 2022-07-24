import React from 'react';
import { Card, Center, Grid, Group, useMantineTheme, Image, Text, Title, createStyles, Button } from '@mantine/core';

const PRIMARY_COL_HEIGHT = 500;

const useStyles = createStyles((theme) => ({
	root: {
		fontFamily: 'upbolters',
	},

	container: {
		maxWidth: 1800,
	},

	title: {
		width: '570px',
		textAlign: 'center',
		fontFamily: 'upbolters',
		color: 'rgb(216, 215, 212)',
		backgroundColor: '#0048b6',
	},

	card: {
		height: `${PRIMARY_COL_HEIGHT}px`,
		backgroundColor: 'rgb(216, 215, 212)',
		'&:hover': {
			// WebkitFilter: 'brightness(70%)',
			// WebkitTransition: ' all 1s ease;',
			transform: 'scale(.98)',
			transition: 'all 0.2s ease-in',
		},
	},

	imgText: {
		fontFamily: 'upbolters',
		bottom: '8px',
	},

	cardButton: {
		backgroundColor: '#b60114',
		color: 'rgb(216, 215, 212)',
		'&:hover': {
			backgroundColor: 'black'
		}
	},

}));

const cardItems = [
	{
		// Newest
		id: 1,
		title: "Odyssey Barbell Club Summer Open",
		image: "obc-teampicture.jpg"
	},
	{
		id: 2,
		title: "Members competed at Collegiate Nationals",
		image: "https://ticketleap-media-master.s3.amazonaws.com/caa00a10-242c-4d23-b36e-7de0635bc51b/full.jpg"
	},
	{
		// Oldest
		id: 3,
		title: "Odyssey Barbell Club Summer Open",
		image: "teamworkout.jpg"
	}
]


export function LeadGrid() {
	const { classes } = useStyles();
	const theme = useMantineTheme();

	const cards = cardItems.map((card) => (
		<Grid.Col span={4} height={PRIMARY_COL_HEIGHT} key={card.id}>
			<Card className={classes.card}>
				<Card.Section>
					<Image src={card.image} height={PRIMARY_COL_HEIGHT / 1.15} />
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
		</Grid.Col>
	));


	return (
		<Center my="md" style={{ display: 'flex', flexDirection: 'column' }}>
			<Title my="md" className={classes.title}>Recent Media</Title>
			<Grid>
				{cards}
			</Grid>
		</Center>
	);
}