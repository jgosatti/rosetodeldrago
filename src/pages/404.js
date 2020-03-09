import React from "react";

import { Box, Button, Heading, Link, Text } from "@chakra-ui/core";
import { Link as GatsbyLink } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
    <Layout>
        <Box maxW="960px" mx="auto" py="3rem" px="1rem">
            <SEO title="404: Not found" />
            <Heading as="h1" fontSize="3xl">
                NOT FOUND
            </Heading>
            <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
            <Link as={GatsbyLink} to="/">
                <Button variant="outline" my="8">
                    Torna alla home
                </Button>
            </Link>
        </Box>
    </Layout>
);

export default NotFoundPage;
