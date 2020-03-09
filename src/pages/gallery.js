import React, { useState } from "react";

import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import {
    Box,
    Button,
    Grid,
    Heading,
    Link,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalHeader,
    ModalCloseButton,
    SlideIn
} from "@chakra-ui/core";
import ZoomableImage from "../components/zoomableImage";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile {
                nodes {
                    name
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `);
    const files = data.allFile.nodes;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentImage, setCurrentImage] = useState("giardino1");

    const handleShowImage = image => {
        setCurrentImage(image);
        onOpen();
    };
    return (
        <Layout>
            <SEO title="Gallery" />
            <Box maxW="1280px" mx="auto" py="3rem" px="1rem">
                <Box maxW="960px" mx="auto" py="3rem" px="1rem">
                    <Link as={GatsbyLink} to="/">
                        <Button variant="outline" my="8">
                            Torna indietro
                        </Button>
                    </Link>
                    <Heading as="h1">Galleria</Heading>
                </Box>
                <Grid templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
                    {files.map((file, key) => (
                        <ZoomableImage
                            key={key}
                            onClick={() => handleShowImage(file.name)}
                            image={file.childImageSharp.fluid}
                        />
                    ))}
                </Grid>
                <SlideIn in={isOpen}>
                    {() => (
                        <Modal isOpen={true} onClose={onClose} size="xl" isCentered={true}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>{currentImage}</ModalHeader>
                                <Box>
                                    <ModalCloseButton />
                                </Box>
                                <ModalBody>
                                    <GatsbyImage
                                        fluid={files.find(x => x.name === currentImage).childImageSharp.fluid}
                                    />
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    )}
                </SlideIn>
                <Box maxW="960px" mx="auto" py="3rem" px="1rem">
                    <Link as={GatsbyLink} to="/">
                        <Button variant="outline" my="8">
                            Torna indietro
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Layout>
    );
};

export default SecondPage;
