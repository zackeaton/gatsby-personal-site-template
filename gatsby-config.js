/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Zack Eaton`,
    author: `Zack Eaton`,
    firstName: `Zack`,
    lastName: `Eaton`,
    description: `Zack Eaton's Personal Portfolio`,
    occupation: `Web Developer & Digital Marketing Strategist`,
    keywords: [`Zack`, `Eaton`, `Personal`, `Blog`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: false,
    designations: [
      `Coding Monkey`,
      `Spice Lord`,
      `Candy Connoisseur`,
      `Digital Nomad`,
    ],
    readingList: [
      {
        title: `Think And Grow Rich`,
        author: `Napoleon Hill`,
        link: `https://www.goodreads.com/book/show/30186948-think-and-grow-rich`,
      },
      {
        title: `How to Win Friends and Influence People`,
        author: `Dale Carnegie`,
        link: `https://www.goodreads.com/book/show/27188370-how-to-win-friends-and-influence-people`,
      },
      {
        title: `Rich Dad, Poor Dad`,
        author: `Robert Kiyosaki`,
        link: `https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad`,
      },
    ],
    showsList: [
      {
        title: `Bojack Horseman`,
        author: `Raphael Bob-Waksberg`,
        link: `https://www.imdb.com/title/tt3398228`,
      },
      {
        title: `Atypical`,
        author: `Robia Rashid`,
        link: `https://www.imdb.com/title/tt6315640/`,
      },
      {
        title: `The Middle`,
        author: `Eileen Heisler, DeAnn Heline`,
        link: `https://www.imdb.com/title/tt1442464/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zack Eaton's Personal Site`,
        short_name: `Z.Eaton`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
