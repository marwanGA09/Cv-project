import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

export function Footer({ children }) {
  return (
    <div className="footer">
      <p>Developed by Adem Kedir </p>
      <div>
        <a href="#">
          {' '}
          <FontAwesomeIcon icon={faGithub} size="lg" color="gray" />
        </a>{' '}
        <a href="#">
          {' '}
          <FontAwesomeIcon icon={faLinkedin} size="lg" color="gray" />
        </a>{' '}
        <a href="#">
          {' '}
          <FontAwesomeIcon icon={faXTwitter} size="lg" color="gray" />
        </a>
      </div>
    </div>
  );
}
