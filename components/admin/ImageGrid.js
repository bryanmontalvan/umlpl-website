import { Center, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { PhotoCard } from '../photogallery-components/PhotoCard';

const ImageGrid = () => {
    const { docs } = useFirestore('images');
    return (
        <>
            <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
                {docs && docs.map(doc => (
                    <PhotoCard url={doc.url} title={doc.title} key={doc.id}/>
                ))}
            </SimpleGrid>
            {/* If no photos present, display no pictures found */}
            {docs.length === 0 &&
                <Center>
                    <Text>No photos to be found</Text>
                </Center>
            }
        </>
    )
}

export default ImageGrid;