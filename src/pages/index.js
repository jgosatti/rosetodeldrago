import React, { useState } from "react";

import styled from "styled-components";
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-regular-svg-icons";
import {
    Box,
    Grid,
    Link,
    Button,
    Heading,
    Text,
    Flex,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalHeader,
    ModalCloseButton,
    SlideIn
} from "@chakra-ui/core";

import Layout from "../components/layout";
import ApartmentCard from "../components/apartmentCard";
import ZoomableImage from "../components/zoomableImage";

const ImageContainer = styled(BackgroundImage)`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 90vh;
    color: white;
    padding: 1rem;
    box-sizing: border-box;
`;

const IndexPage = () => {
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

    const apartments = [
        {
            image: "drago_soggiorno",
            guests: "MAX 3",
            name: "Il Drago",
            link: "/drago",
            id: "drago"
        },
        {
            image: "rosa_soggiorno",
            guests: "MAX 2",
            name: "La Rosa",
            link: "/rosa",
            id: "rosa"
        },
        {
            image: "sorgente_soggiorno",
            guests: "MAX 8",
            name: "La Sorgente",
            link: "/sorgente",
            id: "sorgente"
        }
    ];

    const handleShowImage = image => {
        setCurrentImage(image);
        onOpen();
    };

    return (
        <Layout>
            <ImageContainer fluid={files.find(x => x.name === "sdraio_vigne").childImageSharp.fluid}>
                <Flex direction="column" justify="space-between" h="100%" maxW="960px" mx="auto">
                    <Box>
                        <Heading as="h1" fontSize="3rem">
                            Roseto del drago
                        </Heading>
                        <Heading as="h2" fontSize="2xl">
                            Di Casa Cassan
                        </Heading>
                    </Box>
                    <Box>
                        <Heading as="h3" fontSize="xl">
                            Casa Vacanze
                        </Heading>
                        <Heading as="h3" fontSize="xl">
                            Ponte in Valtellina
                        </Heading>
                    </Box>
                </Flex>
            </ImageContainer>
            <Flex
                maxW="960px"
                mx="auto"
                py="3rem"
                px="1rem"
                direction="column"
                align="center"
                justify="center"
                mt="5rem"
                mb="3rem"
                textAlign={["center"]}
            >
                <Text as="i" fontSize="1.5rem" fontWeight="light">
                    Il fascino di una dimora storica e del suo giardino nel panorama delle Alpi.
                    <br />
                    Circondati dai vigneti, il vostro procedere, in un susseguirsi di dislivelli erbosi e muri in
                    pietra, vi sorprenderà con un ambiente da fiaba, rose, ortensie e piante aromatiche.
                </Text>
                <Box height="3px" width="40%" backgroundColor="blue.400" mt="6rem" mx="auto" />
            </Flex>
            <Box maxW="1280px" mx="auto" py="3rem" px="1rem">
                <Box maxW="960px" mx="auto">
                    <Heading as="h3">Appartamenti indipendenti</Heading>
                </Box>
                <Grid templateColumns={{ md: "1fr", lg: "repeat(3, 1fr)" }} gap={4} my="8">
                    {apartments.map((apartment, key) => {
                        return (
                            <ApartmentCard
                                guests={apartment.guests}
                                image={files.find(x => x.name === apartment.image).childImageSharp.fluid}
                                link={apartment.link}
                                name={apartment.name}
                                id={apartment.id}
                                key={key}
                            />
                        );
                    })}
                </Grid>
            </Box>
            <Box backgroundColor="blue.400" color="white">
                <Box maxW="960px" mx="auto" py="3rem" px="1rem">
                    <Box my="8">
                        <Heading as="h3">Casa Cassan</Heading>
                    </Box>
                    <Text fontSize="1.3rem">
                        Ambiente suggestivo curato per voi dalla famiglia che vi ospita e lo vive da 3 secoli, la Casa
                        Vacanze per affitti brevi il "Roseto del Drago" è costituita da tre appartamenti indipendenti.
                        <br />
                        Situata nel centro storico di Ponte in Valtellina, inserita in un suggestivo complesso
                        architettonico ricco di storia dal 1400, dispone di ampi spazi, porticati, salone affrescato e
                        locali per eventi. Un ambiente luminoso, riservato, con ampio terrazzo affacciato sul cortile di
                        Casa Cassan, impreziosito da costante fioritura di rose, ortensie, glicine e pergolato di uva.
                    </Text>
                    <Link as={GatsbyLink} to="/about/">
                        <Button variant="outline" my="8">
                            Leggi di più
                        </Button>
                    </Link>
                </Box>
            </Box>

            <Box maxW="1280px" mx="auto" py="3rem" px="1rem">
                <Box maxW="960px" mx="auto">
                    <Heading as="h3" mb="2rem">
                        Il Giardino
                    </Heading>
                    <Text fontSize="1.3rem" mb="3rem">
                        Il giardino fiabesco affacciato sulle Alpi Orobie, con orto e frutteto, allestito in quinte
                        scenografiche nel rispetto della tradizione valtellinese, è accessibile su richiesta.
                    </Text>
                </Box>
                <Grid gap={4} templateColumns={{ md: "1fr", lg: "repeat(3, 1fr)" }}>
                    <ZoomableImage
                        onClick={() => handleShowImage("giardino1")}
                        image={files.find(x => x.name === "giardino1").childImageSharp.fluid}
                    />
                    <ZoomableImage
                        onClick={() => handleShowImage("ANC_0810")}
                        image={files.find(x => x.name === "ANC_0810").childImageSharp.fluid}
                    />
                    <ZoomableImage
                        onClick={() => handleShowImage("ANC_1753")}
                        image={files.find(x => x.name === "ANC_1753").childImageSharp.fluid}
                    />
                </Grid>
            </Box>
            <Box maxW="1280px" mx="auto" py="3rem" px="1rem">
                <Box maxW="960px" mx="auto">
                    <Heading as="h3" mb="2rem">
                        Sale Storiche per eventi
                    </Heading>
                    <Text fontSize="1.3rem" mb="3rem">
                        Casa Cassan, è anche la sede valtellinese dell'associazion culturale{" "}
                        <Link href="https://www.liberodiscrivere.it/" isExternal={true}>
                            <Text as="i">
                                <b>Liberodiscrivere</b>
                            </Text>{" "}
                            <FontAwesomeIcon icon={faRegistered} size="xs" />
                        </Link>
                        . Questi spazi affrescati, voltati, sapientemente restaurati sono visitabili su richiesta e
                        possono ospitare matrimoni, cerrimonie, eventi, corsi, mostre, set fotografici, conferenze,
                        presentazioni, concerti e seminari yoga.
                    </Text>
                </Box>
                <Grid gap={4} templateColumns={{ md: "1fr", lg: "repeat(3, 1fr)" }}>
                    <ZoomableImage
                        onClick={() => handleShowImage("ANC_1910")}
                        image={files.find(x => x.name === "ANC_1910").childImageSharp.fluid}
                    />
                    <ZoomableImage
                        onClick={() => handleShowImage("ANC_1911")}
                        image={files.find(x => x.name === "ANC_1911").childImageSharp.fluid}
                    />
                    <ZoomableImage
                        onClick={() => handleShowImage("ANC_1955")}
                        image={files.find(x => x.name === "ANC_1955").childImageSharp.fluid}
                    />
                </Grid>
            </Box>
            <Box maxW="1280px" mx="auto" py="3rem" px="1rem">
                <Box maxW="960px" mx="auto">
                    <Heading as="h3" mb="2rem">
                        La Cantina
                    </Heading>
                </Box>
                <Grid gap={4} templateColumns={{ md: "1fr", lg: "repeat(3, 1fr)" }}>
                    <ZoomableImage
                        onClick={() => handleShowImage("cantina")}
                        image={files.find(x => x.name === "cantina").childImageSharp.fluid}
                    />
                    <ZoomableImage
                        onClick={() => handleShowImage("ANC_1715")}
                        image={files.find(x => x.name === "ANC_1715").childImageSharp.fluid}
                    />
                    <ZoomableImage
                        onClick={() => handleShowImage("ANC_1712")}
                        image={files.find(x => x.name === "ANC_1712").childImageSharp.fluid}
                    />
                </Grid>
            </Box>
            <Box backgroundColor="blue.400" color="white">
                <Box maxW="960px" mx="auto" py="3rem" px="1rem">
                    <Box my="8">
                        <Heading as="h3">Galleria</Heading>
                    </Box>
                    <Link as={GatsbyLink} to="/gallery">
                        <Button variant="outline" my="8">
                            Visita la galleria
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Flex
                maxW="960px"
                mx="auto"
                py="3rem"
                px="1rem"
                direction="column"
                align="center"
                justify="center"
                textAlign={["center"]}
            >
                <Box height="3px" width="40%" backgroundColor="blue.400" mt="6rem" mx="auto" />
                <Box maxW="960px" mx="auto" py="3rem" px="1rem" fontSize="1.3rem">
                    <Box textAlign="center">
                        <Text as="cite">
                            "What a wonderful and magic place! Sara and Antonello have created a paradise called “Roseto
                            del Drago“.
                            <br />
                            The apartment is spacious with a nice layout. It is equipped with beautiful antique
                            furniture and you will find everything you need for a cozy and relaxing stay. In front of
                            the apartment there is an idyllic terrace surrounded by grapevines.
                            <br />
                            This can only be topped by the amazing rose garden. Everything is so well taken care of and
                            perfectly clean. Sara and Antonello are warmhearted people, always reachable and aiming to
                            create the best experience for their guests.
                            <br />
                            This place is definitely a home away from home, an experience that I will never forget.
                            <br />
                            Thank you so much!"
                        </Text>
                    </Box>
                    <Box textAlign="right" mt="4">
                        <Text as="i">
                            <b>Margit B.</b>
                        </Text>
                    </Box>
                </Box>
            </Flex>

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

export default IndexPage;
