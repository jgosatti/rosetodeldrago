import React, { useState } from "react";

import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import {
    Box,
    Link,
    Button,
    Flex,
    Heading,
    Grid,
    Text,
    Tag,
    Stack,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalHeader,
    ModalCloseButton,
    SlideIn
} from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faParking, faWifi } from "@fortawesome/free-solid-svg-icons";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/layout";
import ZoomableImage from "../components/zoomableImage";
import SEO from "../components/seo";

const Sorgente = () => {
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
            <SEO title="Sorgente" />
            <Box maxW="1280px" mx="auto" py="3rem" px="1rem">
                <Box maxW="960px" mx="auto">
                    <Flex justify="space-between" align="center">
                        <Link as={GatsbyLink} to="/">
                            <Button variant="outline" my="8">
                                Torna indietro
                            </Button>
                        </Link>
                        <Link href="#seemore">
                            <Button variant="outline" my="8">
                                Prenotazioni e Info
                            </Button>
                        </Link>
                    </Flex>
                    <Heading as="h1">La "Sorgente"</Heading>
                    <Text my="2rem" fontSize="1.3rem">
                        La Sorgente è una casa intera suddivisa su due piani, ideale per le famiglie: dall'ingresso si
                        accede a una camera da letto e a una comoda scala in pietra che porta al piano superiore. A metà
                        scala c'è un ampio bagno e, proseguendo, un luminoso soggiorno pranzo con cucina attrezzata, su
                        cui si affacciano due spaziose camere da letto. Tutti i pavimenti son in caldo legno di larice.
                        Terrazzo al piano arredato ove è possibile fare colazione all'ombra del pergolato.
                    </Text>
                    <Text mt="4">L'appartamento è composto da:</Text>
                    <Box my="4">
                        <Stack spacing="4" isInline={true} wrap="wrap">
                            <Tag rounded="full" backgroundColor="blue.50" mb="4">
                                Soggiorno
                            </Tag>
                            <Tag rounded="full" backgroundColor="blue.50" mb="4">
                                Cucina
                            </Tag>
                            <Tag rounded="full" backgroundColor="blue.50" mb="4">
                                1 Camera Matrimoniale
                            </Tag>
                            <Tag rounded="full" backgroundColor="blue.50" mb="4">
                                2 Camere Doppie
                            </Tag>
                            <Tag rounded="full" backgroundColor="blue.50" mb="4">
                                1 Bagno
                            </Tag>
                        </Stack>
                    </Box>
                    <Text>Il soggiorno include:</Text>
                    <Box my="4">
                        <Stack spacing="4" isInline={true} wrap="wrap">
                            <Tag rounded="full" backgroundColor="blue.50" mb="4">
                                <FontAwesomeIcon icon={faWifi} /> Wifi
                            </Tag>
                            <Tag rounded="full" backgroundColor="blue.50" mb="4">
                                Asciugamani
                            </Tag>
                            <Tag rounded="full" backgroundColor="blue.50" mb="4">
                                Lenzuola
                            </Tag>
                            <Tag rounded="full" backgroundColor="blue.50" mb="4">
                                Terrazza al piano
                            </Tag>
                        </Stack>
                    </Box>
                    <Box my="8">
                        <Text as="i">
                            <FontAwesomeIcon icon={faParking} /> Parcheggio libero nelle vicinanze
                        </Text>
                    </Box>
                </Box>

                <Grid templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
                    <ZoomableImage
                        onClick={() => handleShowImage("sorgente_soggiorno")}
                        image={files.find(x => x.name === "sorgente_soggiorno").childImageSharp.fluid}
                    />
                    <ZoomableImage
                        onClick={() => handleShowImage("sorgente_matrimoniale")}
                        image={files.find(x => x.name === "sorgente_matrimoniale").childImageSharp.fluid}
                    />
                    <ZoomableImage
                        onClick={() => handleShowImage("sorgente_tripla")}
                        image={files.find(x => x.name === "sorgente_tripla").childImageSharp.fluid}
                    />
                    <ZoomableImage
                        onClick={() => handleShowImage("sorgente_piano_terra")}
                        image={files.find(x => x.name === "sorgente_piano_terra").childImageSharp.fluid}
                    />
                    <ZoomableImage
                        onClick={() => handleShowImage("sorgente_terrazzo")}
                        image={files.find(x => x.name === "sorgente_terrazzo").childImageSharp.fluid}
                    />
                    <ZoomableImage
                        onClick={() => handleShowImage("sorgente_bagno")}
                        image={files.find(x => x.name === "sorgente_bagno").childImageSharp.fluid}
                    />
                </Grid>

                <Box my="8" maxW="960px" mx="auto" id="seemore">
                    <Text as="b" fontSize="1.3rem">
                        Prenotazioni e Info contattaci o visita la pagina su{" "}
                        <Link href="https://www.airbnb.it/rooms/33286252" isExternal={true}>
                            Airbnb <FontAwesomeIcon icon={faAirbnb} />
                        </Link>
                    </Text>
                </Box>
                <Box my="8" maxW="960px" mx="auto">
                    <Link as={GatsbyLink} to="/">
                        <Button variant="outline" my="8">
                            Torna indietro
                        </Button>
                    </Link>
                </Box>
            </Box>
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
                                <GatsbyImage fluid={files.find(x => x.name === currentImage).childImageSharp.fluid} />
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                )}
            </SlideIn>
        </Layout>
    );
};

export default Sorgente;
