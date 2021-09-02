import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home-2" />
      <Container className="py-5 my-5" fluid>
        <Image
          width="150"
          height="150"
          fluid
          src={dark ? `../../icons/z-logo-dark.png` : `../../icons/z-logo-light.png`}
          alt={dark ? "The Dark Side" : "The Ashla"}
        />
        {unemployed && (
          <p className="mt-2">
            <b>Hey! I am looking for new opportunities :)</b>
          </p>
        )}
        <Container className="py-0 my-0">
        <h2
            style={{
              fontSize: "1.5rem",
              color: "black",
            }}
          >
            <span className="greeting">{dark ? `Hey` : `Hello`},</span>&nbsp;
            <span className="greeting">my name is</span>
          </h2>

          <h1
            style={{
              fontSize: "3.5rem",
              color: "black",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <p>
            <i>
              {occupation} by day,&nbsp;
              {dark ? `Hacker by night` : `Programmer by night`}
            </i>
          </p>        
        </Container>

        {/* <Container>
        <h1
            style={{
              fontSize: "1.5rem",
              color: "black",
            }}
          >
            <span className="hello">hello</span>
            <span className="at">@</span>
            <span className="email-domain">zackeaton.dev</span>
          </h1>
        </Container> */}

        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
        <a
            href="https://linkedin.com/in/zack-eaton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin-in"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          <a
            href="https://instagram.com/zackaryeaton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="icons instagram"
              title="Instagram"
            />
          </a>
        <a
            href="https://www.facebook.com/eatonstl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className="icons facebook"
              title="Facebook"
            />
          </a>
          <a
            href="https://www.twitter.com/zack_eaton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="icons twitter"
              title="Twitter"
            />
          </a>
          <a
            href="https://dev.to/zackeaton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "dev"]}
              className="icons dev"
              title="Dev"
            />
          </a>
          <a
            href="https://www.github.com/zackeaton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="mailto:zackeaton@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="../../resume_zack_eaton.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
        </div>
        <Container className="pt-4 my-2">
        <h2
            style={{
              fontSize: "2rem",
              color: "black",
            }}
          >
            <span className="hello">Skills</span>
          </h2> 
          </Container>

          <Container className="d-flex flex-row flex-wrap justify-content-center">
          <div class="p-3">
              <h6 className="greeting">
                  Ecommerce &nbsp;
                  <FontAwesomeIcon
              icon={["fab", "shopify"]}
              title="Shopify"
            />
                </h6>
                <h6
                  className=" greeting mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                (Shopify/WooCommerce/WordPress)
                </h6>
                </div>
                
                <div class="p-3">
              <h6 className="greeting">
                  Influencer Marketing &nbsp;
                  <FontAwesomeIcon
              icon={["fab", "tiktok"]}
              title="TikTok"
            />
                </h6>
                <h6
                  className=" greeting mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                (Social Media, Affiliatly, Management)
                </h6>
                </div>
                
                <div class="p-3">
              <h6 className="greeting">
                  Customer Relationship Management &nbsp;
                  <FontAwesomeIcon
              icon={["fab", "hubspot"]}
              title="HubSpot"
            />
                </h6>
                <h6
                  className=" greeting mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                (HubSpot/Asana/ZenDesk)
                </h6>
                </div>
                
                <div class="p-3">
              <h6 className="greeting">
              Analytics & Reporting &nbsp;
              <FontAwesomeIcon
              icon={["fas", "chart-pie"]}
              title="chart-pie"
            />
                </h6>
                <h6
                  className=" greeting mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                (Power BI/Google Analytics/Excel)
                </h6>
                </div>
                
                <div class="p-3">
              <h6 className="greeting">
              Web Design & Development &nbsp;
              <FontAwesomeIcon
              icon={["fab", "wordpress"]}
              title="Wordpress"
            />
                </h6>
                <h6
                  className=" greeting mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                (HTML/CSS/Javascript)
                </h6>
                </div>
                
                <div class="p-3">
              <h6 className="greeting">
              Frontend JS Frameworks &nbsp;
              <FontAwesomeIcon
              icon={["fab", "angular"]}
              title="Angular"
            />
                </h6>
                <h6
                  className=" greeting mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                (React/Vue.js/Gatsby/Angular)
                </h6>
                </div>
                
                <div class="p-3">
              <h6 className="greeting">
              Backend JS Frameworks &nbsp;
              <FontAwesomeIcon
              icon={["fab", "js"]}
              title="JS"
            />
                </h6>
                <h6
                  className=" greeting mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                (Node.js/Express.js/Mongoose)
                </h6>
                </div>
                
                <div class="p-3">
              <h6 className="greeting">
                Database Management Systems &nbsp;
                <FontAwesomeIcon
              icon={["fas", "database"]}
              title="Database"
            />
                </h6>
                <h6
                  className=" greeting mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                (MySQL/Firebase/MongoDB)
                </h6>
                </div>

                <div class="p-3">
              <h6 className="greeting">
                  Social Media &nbsp;
                  <FontAwesomeIcon
              icon={["fab", "instagram"]}
              title="Instagram"
            />
                </h6>
                <h6
                  className=" greeting mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                (Content Management, Paid Ads, Analytics)
                </h6>
                </div>

              <div class="p-3">
                <h6 className="greeting">
                  Search Engine Optimization &nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "google"]}
                    title="Google"
                  />
                </h6>
                <h6
                  className=" greeting mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                (PageRank, SEMRush, Moz)
                </h6>
              </div>

              <div class="p-3">
                <h6 className="greeting">
                  Photography &nbsp;
                  <FontAwesomeIcon
                    icon={["fas", "camera"]}
                    title="Photography"
                  />
                </h6>
                <h6
                  className=" greeting mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                (Adobe Photoshop/Lightroom)
              </h6>
              </div>
              
              <div class="p-3">
                <h6 className="greeting">
                  Videoography &nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "youtube"]}
                    title="Videography"
                  />
                </h6>
                <h6
                  className=" greeting mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                (Adobe Photoshop/Lightroom)
                </h6>
                </div>
        </Container>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
