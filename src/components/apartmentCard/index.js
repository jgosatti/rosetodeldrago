import React from "react";
import PropTypes from "prop-types";

import { Box, Button, Link } from "@chakra-ui/core";
import { Link as GatsbyLink } from "gatsby";
import GatsbyImage from "gatsby-image";

const ApartmentCard = ({ name, guests, image, link }) => (
    <Box w="100%" borderWidth="1px" rounded="lg" overflow="hidden" borderColor="grey.400" boxShadow="md">
        <GatsbyImage fluid={image} alt={name} />
        <Box p="6">
            <Box d="flex" alignItems="baseline">
                <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                >
                    {guests} ospiti
                </Box>
            </Box>
            <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight" isTruncated>
                {name}
            </Box>
            <Box mt="8">
                <Link as={GatsbyLink} to={link}>
                    <Button w="100%" backgroundColor="blue.400" color="white">
                        Scopri
                    </Button>
                </Link>
            </Box>
        </Box>
    </Box>
);

ApartmentCard.propTypes = {
    apartment: PropTypes.shape({
        name: PropTypes.string,
        guests: PropTypes.string,
        link: PropTypes.string
    })
};

export default ApartmentCard;
