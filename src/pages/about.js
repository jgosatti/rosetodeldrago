import React from "react";

import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import styled from "styled-components";
import { Box, Link, Button, Heading, Text } from "@chakra-ui/core";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;

    @media (max-width: 1023px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const About = () => {
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

    return (
        <Layout>
            <SEO title="About" />
            <Box maxW="960px" mx="auto" py="3rem" px="1rem">
                <Link as={GatsbyLink} to="/">
                    <Button variant="outline" my="8" borderColor="blue.400" color="blue.400">
                        Torna indietro
                    </Button>
                </Link>
                <Heading as="h1">Casa Cassan già Quadrio Peranda: tutto parte da qui.</Heading>
                <Text my="2rem" fontSize="1.3rem" textAlign="justify">
                    <GatsbyImage fluid={files.find(x => x.name === "wallpaper").childImageSharp.fluid} />
                    <br />
                    <b>Tutto parte da qui.</b> La casa appartenne alla famiglia Quadrio-Peranda, famiglia di antica
                    origine. Nel settecento diede i natali a luogotenenti, sacerdoti, personaggi di spicco che ebbero un
                    ruolo importante nella vita locale. Nella fine del settecento passa alla attuale famiglia prima
                    Foppoli-Gerosa, poi Gerosa-Cassan ora Cassan. La facciata su via Ginnasio si presenta compatta e con
                    il suo colore originale bianco. Unici elementi decorativi sono il bugnato angolare e il marcapiano
                    dipinti di colore verde ad imitazione della “pietra verde di Tresivio”, ampiamente utilizzata negli
                    elementi architettonici (colonne, stipiti delle porte, finestre e pavimenti). Articolata è la corte
                    principale, nei seminterrati; in successione vi sono ampie canue, torchio, stalle e cantine. La
                    parte rustica della casa si affaccia sul giardino che un tempo era impreziosito da un parterre con
                    siepi di bosso mentre ancora oggi salendo verso monte si estende il brolo. Nei documenti
                    testamentari del Settecento si menziona la casa con il giardino, la corte, il fienile l’astrico, le
                    cantine e la colombaia. Emerge una tradizione consolidata della nobiltà locale che univa prestigio
                    rilevabile dalle cariche pubbliche e militari ed ecclesiastiche al reddito delle proprietà agricole
                    con maggior risalto alla vitivinicoltura. Il corpo di fabbrica che si affaccia sulla corte
                    principale si presenta come una quinta di forte impatto: l’intonaco è rivestito da una decorazione
                    della fine dell’ottocento ad imitazione di una facciata in legno dell’architettura d’oltralpe. La
                    resa del dettaglio tipologico è sorprendente. Questo corpo di fabbrica è il risultato di una
                    riplasmazione di corpi preesistenti molto antichi, si conserva come testimonianza un affresco con la
                    Madonna e due Santi databile intorno alla metà del quattrocento. Il corpo principale è a due piani
                    con ingresso sul lato orientale; la pianta di ciascun piano si sviluppa su un lungo corridoio
                    centrale con armonico soffitto a vele. Le stanze sono voltate al piano primo mentre sono con
                    soffitto piano al piano secondo e con soffitti in legno a vista. Al piano terra è riemersa
                    recentemente e sapientemente restaurata una volta riccamente dipinta con personaggi, festoni, finte
                    balaustre e al centro campeggia lo stemma dei Quadrio-Peranda. Nella casa vi sono pregevoli portali
                    in “pietra verde di Tresivio”: nei piedritti e nell’architrave sono scolpite delle rose, simbolo
                    ampiamente utilizzato nell’architettura rinascimentale, in quanto esprime la continuità della vita.
                    I petali simboleggiano i diversi valori positivi che combattono nella vita le forze del male.
                    Giardino orto e frutteto sono ripristinati in quinte scenografiche nel rispetto della tradizione
                    valtellinese. Degni di nota la fontana con testa di cinghiale e il portico con cortile interno che
                    introduce al giardino. Datazione del complesso: dalla prima metà del 1400 con sovrapposizioni fino
                    alla seconda meta del 1800. Il restauro conservativo, sotto la direzione della famiglia Cassan con
                    la consulenza del dott. Giorgio Baruta, è iniziato nel 1978 e ha restituito il complesso
                    architettonico alla sua originale connotazione storica e visiva.
                </Text>
                <ImagesContainer>
                    <GatsbyImage fluid={files.find(x => x.name === "cortile").childImageSharp.fluid} />
                    <GatsbyImage fluid={files.find(x => x.name === "ingresso_roseto").childImageSharp.fluid} />
                </ImagesContainer>
            </Box>
        </Layout>
    );
};

export default About;
