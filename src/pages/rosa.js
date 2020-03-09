import React, { useState } from "react";

import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import {
    Box,
    Link,
    Button,
    Flex,
    Grid,
    Heading,
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
import { faParking, faWifi, faCalendarCheck, faBicycle, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/layout";
import ZoomableImage from "../components/zoomableImage";
import SEO from "../components/seo";

const Rosa = () => {
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
            <SEO title="Rosa" />
            <Box maxW="1280px" mx="auto" py="3rem" px="1rem">
                <Box maxW="960px" mx="auto" py="3rem" px="1rem">
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
                    <Heading as="h1">La "Rosa"</Heading>
                    <Text my="2rem" fontSize="1.3rem">
                        La Rosa è un bilocale perfetto per una coppia, composto da soggiorno, camera matrimoniale, bagno
                        e cucinetta attrezzata con macchina per il caffé, bollitore, forno a microonde e frigorifero.
                        L'appartamento si affaccia sul terrazzo al piano, dove è possibile fare colazione tra le rose.
                    </Text>
                    <Text mt="4">L'appartamento è composto da:</Text>
                    <Box my="4">
                        <Stack spacing="4" isInline={true} wrap="wrap">
                            <Tag rounded="full" backgroundColor="blue.50" mb="4">
                                Soggiorno con cucinetta
                            </Tag>
                            <Tag rounded="full" backgroundColor="blue.50" mb="4">
                                1 Camera Matrimoniale
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
                            <Tag rounded="full" backgroundColor="blue.50" mb="4">
                                Locale lavanderia
                            </Tag>
                        </Stack>
                    </Box>
                    <Box my="8">
                        <Text as="i">Giardino accessibile su richiesta.</Text>
                    </Box>
                    <Box my="8">
                        <Text as="i">Parcheggio coperto per:</Text>
                        <Stack spacing="4" isInline={true} my="4" wrap="wrap">
                            <Tag rounded="full" backgroundColor="blue.50" mb="4">
                                <FontAwesomeIcon icon={faBicycle} /> Biciclette
                            </Tag>
                            <Tag rounded="full" backgroundColor="blue.50" mb="4">
                                <FontAwesomeIcon icon={faMotorcycle} /> Moto
                            </Tag>
                        </Stack>
                    </Box>
                    <Box my="8">
                        <Text as="i">
                            <FontAwesomeIcon icon={faParking} /> Parcheggio auto libero nelle immediate vicinanze.
                        </Text>
                    </Box>
                    <Box my="8">
                        <Text as="b">
                            <FontAwesomeIcon icon={faCalendarCheck} /> Check-in disponibile 24 ore su 24
                        </Text>
                    </Box>
                </Box>
                <Grid templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
                    <ZoomableImage
                        onClick={() => handleShowImage("rosa_soggiorno")}
                        image={files.find(x => x.name === "rosa_soggiorno").childImageSharp.fluid}
                    />
                    <ZoomableImage
                        onClick={() => handleShowImage("rosa_letto")}
                        image={files.find(x => x.name === "rosa_letto").childImageSharp.fluid}
                    />
                    <ZoomableImage
                        onClick={() => handleShowImage("rosa_bagno")}
                        image={files.find(x => x.name === "rosa_bagno").childImageSharp.fluid}
                    />
                </Grid>
                <Box my="8" maxW="960px" mx="auto" id="seemore">
                    <Text as="b" fontSize="1.3rem">
                        Prenotazioni e Info contattaci o visita la pagina su{" "}
                        <Link href="https://www.airbnb.it/rooms/33285828" isExternal={true}>
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

export default Rosa;
