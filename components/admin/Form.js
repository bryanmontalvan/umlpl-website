import React, { useEffect, useState } from 'react';
import {
    TextInput,
    Title,
    Container,
    Group,
    Button,
    Paper
} from '@mantine/core';
import ProgressBar from './ProgressBar';

export function SubmitForm() {
    /* -----------------------------------
    Password state & handling 
    ----------------------------------- */
    const [login, setLogin] = useState(false);

    // Store login-state using sessionStorage
    useEffect(() => {
        setLogin(JSON.parse(window.sessionStorage.getItem("loginStatus")));
    }, [])

    useEffect(() => {
        window.sessionStorage.setItem("loginStatus", login);
    }, [login])

    // Password handling (password stored in .env)
    const handlePassword = (e) => {
        if (e.target.value === process.env.NEXT_PUBLIC_ACCESS_CODE) {
            setLogin(true);
        }
    }

    /* -----------------------------------
    File state, storing, & handling 
    ----------------------------------- */
    const [file, setFile] = useState(null);
    const [img, setImage] = useState(); // Used for displaying
    const [error, setError] = useState(null);
    const [title, setTitle] = useState('');
    const [submitted, setSubmit] = useState(false);

    // Extracts image-reference from inputted file
    const types = ['image/png', 'image/jpeg'];
    const handleFileChange = (e) => {
        const [file] = e.target.files;
        setImage(URL.createObjectURL(file))

        if (file && types.includes(file.type)) {
            setFile(file);
            setError('');
        } else {
            setFile(null);
            setError("Error: Please seelct an image file (png or jpeg)");
        }
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        // If title has been written and picture has been added
        if (title && file) {
            if (error) setError('')
            setSubmit(true)
            // Band-aid fix -- FIX ME
            setTimeout(() => {
                setSubmit(false);
            }, 5000)

        } else {
            setError('Error: make sure to enter an image-title')
        }
        e.preventDefault();
    }

    return (
        <Container size={420} my={40}>
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
                Photo Gallery Submission Form
            </Title>
            {!login &&
                <TextInput
                    label="Access Code"
                    onChange={handlePassword}
                />
            }
            {login &&
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <form onSubmit={handleSubmit}>
                        <TextInput
                            label="Image Title"
                            placeholder="Bob deadlifting at his first meet"
                            onChange={handleTitleChange}
                        />

                        <input type="file"
                            style={{ marginTop: 20 }}
                            onChange={handleFileChange}
                        />

                        {/* Will display image-preview */}
                        {file && <img src={img} style={{ width: 350, marginTop: 30 }} />}

                        <Group position="right" mt="md">
                            <Button type="submit">Submit</Button>
                        </Group>
                    </form>
                    {/* Displays error message if wrong file selected */}
                    {error && <div style={{ marginTop: 20, color: 'red' }}>{error}</div>}
                    {/* Displays file is submitting icon */}
                    {submitted && file && <div> {file.name} <span style={{ color: 'green' }}>is being submitted!</span></div>}
                    {/* Creates progress-bar which then sends image to firestore */}
                    {submitted && file && <ProgressBar file={file} title={title} setFile={setFile} />}
                </Paper>
            }
        </Container>
    );
}