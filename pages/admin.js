// React
import React from 'react';
// Components
import { FooterSocial } from "../components/Footer";
import { Nav } from "../components/NavBar";
import ImageGrid from '../components/admin/ImageGrid';
// Mantine
import { Container } from '@mantine/core';
import { SubmitForm } from '../components/admin/Form';

export default function Admin() {
    return (
        <>
            <Nav />
            <Container my="xl" size="xl">
                <SubmitForm />
                <ImageGrid />
            </Container>
            <FooterSocial />
        </>
    )
}
