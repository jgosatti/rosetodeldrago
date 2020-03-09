import React from "react";
import PropTypes from "prop-types";

import { Box } from "@chakra-ui/core";
import GatsbyImage from "gatsby-image";

const ZoomableImage = ({ onClick, image }) => (
    <Box onClick={onClick} w="100%" h="100%" cursor="pointer">
        <GatsbyImage fluid={image} style={{ height: "100%", width: "100%" }} />
    </Box>
);

ZoomableImage.propTypes = {
    onClick: PropTypes.func,
    image: PropTypes.object
};

export default ZoomableImage;
