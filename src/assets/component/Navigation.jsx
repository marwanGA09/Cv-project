import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navigation() {
  return (
    <div className="navigation">
      <p>
        <span style={{ color: 'red' }}>CV c</span>reator
      </p>
      <div>
        Contact me
        <div>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} size="sm" color="gray" />
          </a>{' '}
          <a href="#">
            {' '}
            <FontAwesomeIcon icon={faLinkedin} size="sm" color="gray" />
          </a>{' '}
          <a href="#">
            {' '}
            <FontAwesomeIcon icon={faXTwitter} size="sm" color="gray" />
          </a>
          <span>Merwan KG</span>
        </div>
      </div>
    </div>
  );
}
