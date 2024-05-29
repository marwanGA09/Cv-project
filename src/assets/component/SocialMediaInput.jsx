import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export function SocialMediaLinks({ socialMedia }) {
  return (
    <ul className="social-media">
      <li>
        <span>
          {' '}
          <FontAwesomeIcon icon={faPhone} size="sm" color="gray" />
        </span>
        <a href="#">{socialMedia.phone}</a>
      </li>
      <li>
        <span>
          <FontAwesomeIcon icon={faEnvelope} size="sm" color="gray" />
        </span>
        <a href="#">{socialMedia.email}</a>
      </li>
      <li>
        <span>
          <FontAwesomeIcon icon={faLinkedin} size="sm" color="gray" />
        </span>
        <a href="#">{socialMedia.linkedIn}</a>
      </li>
      <li>
        <span>
          <FontAwesomeIcon icon={faXTwitter} size="sm" color="gray" />
        </span>
        <a href="#">{socialMedia.twitter}</a>
      </li>
    </ul>
  );
}
export function SocialMediaInput({ onSocialMedia }) {
  return (
    <div className="contact-link">
      <label htmlFor="phone">Phone number:</label>
      <input
        type="tel"
        name="phone"
        onChange={(e) => onSocialMedia(e)}
        id="phone"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        onChange={(e) => onSocialMedia(e)}
        id="email"
      />
      <label htmlFor="twitter">X/twitter user-name:</label>
      <input
        type="text"
        name="twitter"
        onChange={(e) => onSocialMedia(e)}
        id="twitter"
      />
      <label htmlFor="linkedIn">LinkedIn user-name:</label>
      <input
        type="text"
        name="linkedIn"
        onChange={(e) => onSocialMedia(e)}
        id="linkedIn"
      />
    </div>
  );
}
