module.exports = {
    siteMetadata: {
        title: `Roseto del drago`,
        description: `Roseto del drago website`,
        author: ``
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `roseto-del-drago`,
                short_name: `roseto`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/drago_logo.png`
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Roboto:300,300i,400,400i,700,700`,
                    `Montserrat:300,300i,400,400i,700,700`,
                    `Muli:300,300i,400,400i,700,700`,
                    `AbrilFatface:300,300i,400,400i,700,700`,
                    `CormorantGaramond:300,300i,400,400i,700,700`,
                    `NanumMyeongjo:300,300i,400,400i,700,700`,
                    `Cinzel:300,300i,400,400i,700,700`
                ],
                display: "swap"
            }
        },
        `gatsby-plugin-chakra-ui`
    ]
};
