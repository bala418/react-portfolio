import { contact, about } from "../../portfolio";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Contact.css";

const Contact = () => {
  const { photo, name, role, description, resume, social } = about;

  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Let's get in touch</h2>
      <a href={`mailto:${contact.email}`}>
        <span type="button" className="btn btn--outline">
          Email me
        </span>
      </a>
      <h4 className="head4">Other platforms</h4>

      {social && (
        <>
          <div className="center contact__social">
            <div>
              {social.github && (
                <a
                  href={social.github}
                  aria-label="github"
                  className="link link--icon"
                  target={"_blank"}
                >
                  <GitHubIcon />
                </a>
              )}
            </div>

            <div>
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label="linkedin"
                  className="link link--icon"
                  target={"_blank"}
                >
                  <LinkedInIcon />
                </a>
              )}
            </div>

            <div>
              {social.twitter && (
                <a
                  href={social.twitter}
                  aria-label="twitter"
                  className="link link--icon"
                  target={"_blank"}
                >
                  <TwitterIcon />
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Contact;
