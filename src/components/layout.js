import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faFacebookMessenger, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ThemeProvider, CSSReset, Heading, Box, Link, Stack, Text } from "@chakra-ui/core";

import customTheme from "../../theme";

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            <main>{children}</main>
            <Box backgroundColor="blue.400" color="white">
                <Box maxW="960px" mx="auto" py="3rem" px="1rem">
                    <Heading as="h3" mb="2rem">
                        Contattaci
                    </Heading>
                    <Box fontSize="1.3rem">
                        <Box>
                            <Text as="i">Roseto del Drago</Text>
                        </Box>
                        <Box>
                            <Text as="i">Via Ginnasio 17/19</Text>
                            <Text>23026 Ponte in Valtellina (SO)</Text>
                        </Box>
                        <Box>
                            <Link href="mailto:rosetodeldrago@gmail.com">rosetodeldrago@gmail.com</Link>
                        </Box>
                        <Box>
                            <Text as="i">Antonello Cassan </Text>
                            <Link href="tel:+393356900225">+39 3356900225</Link>
                        </Box>
                        <Box>
                            <Text as="i">CIR: 014052-CNI-00001</Text>
                        </Box>
                        <Stack isInline fontSize="3rem" spacing="4">
                            <Link href="https://www.facebook.com/rosetodeldrago/" isExternal={true}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                            <Link href="https://www.instagram.com/rosetodeldrago/" isExternal={true}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                            <Link href="https://m.me/antonello.cassan.5/" isExternal={true}>
                                <FontAwesomeIcon icon={faFacebookMessenger} />
                            </Link>
                            <Link href="https://wa.me/+393356900225" isExternal={true}>
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </Link>
                        </Stack>
                    </Box>
                </Box>

                <footer>
                    <Box maxW="960px" mx="auto" py="1rem" px="1rem">
                        © {new Date().getFullYear()}, Roseto del drago
                    </Box>
                </footer>
            </Box>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
