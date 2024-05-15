import { useState } from 'react';
import Navigation from './assets/component/Navigation';

export default function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <SideBarCvContainerGroup />
        <Footer />
      </div>
    </>
  );
}
// I created this to crease state inside app component
function SideBarCvContainerGroup() {
  const [personalInformation, setPersonalInformation] = useState({
    fullName: 'Adem Kedir',
    profession: 'Front end developer',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          molestiae amet fuga minima corrupti maiores tempore exercitationem
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          molestiae necessitatibus. Iusto,.`,
  });

  function handlePersonalInformation(e) {
    setPersonalInformation((personalInformation) => {
      return { ...personalInformation, [e.target.name]: e.target.value };
    });
  }

  return (
    <>
      <SideBar onPersonalInfoChange={handlePersonalInformation} />
      <CvContainer personalInformation={personalInformation} />
    </>
  );
}

function Test() {
  return <div className="test"></div>;
}

function SideBar({ children, onPersonalInfoChange }) {
  const [currentActive, setCurrentActive] = useState(null);
  return (
    <div className="side-bar">
      <div className="general-page-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque natus
          quos eos dicta fugiat laboriosam aliquid amet quisquam magnam ex!
          Officia illum velit aperiam explicabo nesciunt aspernatur ad laborum
          perferendis
        </p>
      </div>
      <div className="cards">
        <Card
          id={'information'}
          tittle={'personal information'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        >
          <PersonalInformationInput
            onPersonalInfoChange={onPersonalInfoChange}
          />
        </Card>
        <Card
          id={'experience'}
          tittle={'Experience'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        >
          {' '}
          <Test />
        </Card>
        <Card
          id={'project'}
          tittle={'Personal Project'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        >
          {' '}
          <Test />
        </Card>
        <Card
          id={'education'}
          tittle={'Education Level'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        >
          {' '}
          <Test />
        </Card>
        <Card
          id={'achievement'}
          tittle={'Personal Achievement'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        >
          {' '}
          <Test />
        </Card>
        <Card
          id={'contact'}
          tittle={'Contact'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        >
          {' '}
          <Test />
        </Card>
        <Card
          id={'skill'}
          tittle={'Skill Set'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        >
          {' '}
          <Test />
        </Card>
        <Card
          id={'language'}
          tittle={'Language'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        >
          {' '}
          <Test />
        </Card>
        <Card
          id={'interest'}
          tittle={'Interest/ Hobbies'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        >
          {' '}
          <Test />
        </Card>
      </div>
    </div>
  );
}

function Card({
  tittle,
  description,
  children,
  id,
  currentActive,
  onCurrentActive,
}) {
  const isCurrent = currentActive === id;

  return (
    <div className="card">
      <h3>{tittle}</h3>
      <p>{description}</p>
      <div>{isCurrent && children}</div>
      <button
        onClick={() => {
          isCurrent ? onCurrentActive(null) : onCurrentActive(id);
        }}
      >
        {isCurrent ? 'Close' : 'Open'}{' '}
        <span className={`${isCurrent ? 'open' : 'close'}`}>
          {isCurrent ? '⏫' : '⏬'}
        </span>
      </button>
    </div>
  );
}

function CvContainer({ children, personalInformation }) {
  return (
    <div className="cv-container">
      <TopCvContainer />
      <CV personalInformation={personalInformation} />
    </div>
  );
}
function Footer({ children }) {
  return (
    <div className="footer">
      {' '}
      <p>Developed by Adem Kedir </p>{' '}
      <div>
        <a href="#">🐈</a> <a href="#">🧩</a> <a href="#">🐦</a>
      </div>
    </div>
  );
}

function TopCvContainer({ children }) {
  return (
    <div className="top">
      <p>Name: merwan</p>
      <div>
        <label htmlFor="font">
          Font-style:
          <select name="font" id="font">
            <option value="ar">Arial</option>
            <option value="he">helvetic</option>
            <option value="mn">mono</option>
            <option value="ss">sans-serif</option>
          </select>
        </label>
        <label htmlFor="color">
          <span>Primary color: </span>
          <input type="color" name="color" id="color" />
        </label>
      </div>
    </div>
  );
}

function CV({ children, personalInformation }) {
  return (
    <div className="cv">
      <CvHeader personalInformation={personalInformation} />
      <div className="cv__main">
        <div className="left">
          <CvCard heading={'Experience'}>
            <Experience />
            <Experience />
          </CvCard>
          <CvCard heading={'Personal Project'}>
            <PersonalProject />
            <PersonalProject />
          </CvCard>
          <CvCard heading={'Education Level'}>
            <Education />
            <Education />
          </CvCard>
          <CvCard heading={'Personal Achievement'}>
            <PersonalAchievement />
          </CvCard>
        </div>
        <div className="right">
          <CvCard heading={'Contact'}>
            <SocialMediaLinks />
          </CvCard>
          <CvCard heading={'Skill Set'}>
            <SkillSet />
          </CvCard>
          <CvCard heading={'Language'}>
            <Language />
          </CvCard>
          <CvCard heading={'Interest/ Hobbies'}>
            <Interest />
          </CvCard>
        </div>
      </div>
    </div>
  );
}

function PersonalInformationInput({ onPersonalInfoChange }) {
  return (
    <div className="personal-description-input">
      <label htmlFor="full-name">Full name:</label>
      <input
        type="text"
        name="fullName"
        id="full-name"
        placeholder="Adem kedir Galiyo"
        onChange={(e) => onPersonalInfoChange(e)}
      />
      <label htmlFor="profession">Profession</label>{' '}
      <input
        type="text"
        name="profession"
        id="profession"
        placeholder="Software Engineer"
        onChange={(e) => onPersonalInfoChange(e)}
      />
      <label htmlFor="description">Heading Sentence</label>{' '}
      <textarea
        name="description"
        id="description"
        maxLength={300}
        placeholder="I am dedicated ..."
        onChange={(e) => onPersonalInfoChange(e)}
      ></textarea>
    </div>
  );
}

function CvHeader({ children, personalInformation }) {
  return (
    <div className="cv__header">
      <div className="personal-description">
        <h2>{personalInformation.fullName}</h2>
        <h4>{personalInformation.profession}</h4>
        <p>{personalInformation.description}</p>
      </div>
      <div className="image">
        <div>
          <img src="./../public/default.jpg" alt="user's image" />
        </div>
      </div>
    </div>
  );
}

function CvCard({ heading, children }) {
  return (
    <div className="cv-card">
      <h3>{heading}</h3>
      <div> {children}</div>
    </div>
  );
}

function Experience() {
  return (
    <div className="experience">
      <h5>
        Tittle/ Position: <span>front End developer</span>
      </h5>
      <h6>
        work Space/ Company: <span>Google</span>
      </h6>
      <h6>
        Task/ Responsibility:
        <span>creating UX/UI friendly webpages for organization</span>
      </h6>
      <h6 className="date">
        Year:
        <span className="from">7/2022</span> -<span className="to">2/2023</span>
      </h6>
    </div>
  );
}

function PersonalProject() {
  return (
    <div className="personal-project">
      <h5>
        Project name: <span>Weather App</span>
      </h5>
      <h6>
        description:
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          mollitia quod esse repellat, sed, amet officiis, molestias quibusdam
          labor.
        </span>
      </h6>
      <a href="#" target="_black">
        <span>🐈</span> Github
      </a>
    </div>
  );
}

function Education() {
  return (
    <div className="education">
      <h5>
        Study Program: <span>Software engineering</span>
      </h5>
      <h6>
        Study Level:
        <span>bachelor degree</span>
      </h6>
      <h6>
        Institution :<span>Haramaya University</span>
      </h6>
      <h6 className="date">
        Year:
        <span className="from">7/2022</span> -<span className="to">2/2023</span>
      </h6>
    </div>
  );
}

function SkillSet() {
  return (
    <div className="skills">
      <span>React</span>
      <span>Javascript</span>
      <span>Node</span>
      <span>HTML</span>
      <span>CSS</span>
      <span>Tailwind</span>
      <span>Bootstrap</span>
      <span>Javascript</span>
      <span>Node</span>
      <span>HTML</span>
      <span>CSS</span>
      <span>Tailwind</span>
      <span>Bootstrap</span>
    </div>
  );
}
function Interest() {
  return (
    <div className="interest">
      <span className="interestItem">Searching for new technology</span>
      <span className="interestItem">Movies</span>
      <span className="interestItem">Reading Article</span>
    </div>
  );
}

function Language() {
  return (
    <ul className="languages">
      <li>
        <span>English</span>:<span>Professional</span>
      </li>
      <li>
        <span>French</span>:<span>Limited professional</span>
      </li>
      <li>
        <span>Amharic</span>:<span>Bilingual</span>
      </li>
      <li>
        <span>Afan Oromo</span>:<span>Bilingual</span>
      </li>
    </ul>
  );
}

function PersonalAchievement() {
  return (
    <div className="achievement">
      <h5>
        Tittle: <span>International Coding Competition</span>
      </h5>
      <h6>
        Description:
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae,
          nostrum, fugit facere quo tenetur corriciis natus reiciendis!
        </span>
      </h6>{' '}
      <h6 className="date">
        Year:
        <span className="from">7/2022</span>
      </h6>
    </div>
  );
}

function SocialMediaLinks() {
  return (
    <ul className="social-media">
      <li>
        <span>🖄</span>
        <a href="#">Email</a>
      </li>
      <li>
        <span>📞</span>
        <a href="#">Phone</a>
      </li>
      <li>
        <span>🧩</span>
        <a href="#">LinkedIn</a>
      </li>
      <li>
        <span>🐈</span>
        <a href="#">Github</a>
      </li>
      <li>
        <span>✖️</span>
        <a href="#">Twitter</a>
      </li>
    </ul>
  );
}
