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
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae amet fuga minima corrupti maiores tempore exercitationem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae `,
  });

  const [experienceData, setExperienceData] = useState({
    position: 'front End developer',
    company: 'Google',
    responsibility: 'creating UX/UI friendly webpages for organization',
    from: '2022-07-02',
    to: '2023-03-27',
  });

  function handlePersonalInformation(e) {
    setPersonalInformation((personalInformation) => {
      return { ...personalInformation, [e.target.name]: e.target.value };
    });
  }

  function handleExperienceInfo(e) {
    setExperienceData((experienceData) => {
      return { ...experienceData, [e.target.name]: e.target.value };
    });
  }

  return (
    <>
      <SideBar
        onPersonalInfoChange={handlePersonalInformation}
        personalInformation={personalInformation}
        onExperienceInput={handleExperienceInfo}
        experienceData={experienceData}
      />
      <CvContainer
        personalInformation={personalInformation}
        experienceData={experienceData}
      />
    </>
  );
}

function Test() {
  return <div className="test"></div>;
}

function SideBar({
  children,
  onPersonalInfoChange,
  personalInformation,
  onExperienceInput,
  experienceData,
}) {
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
            personalInformation={personalInformation}
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
          <ExperienceInput
            onExperienceInput={onExperienceInput}
            experienceData={experienceData}
          />
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
  const [addCount, setAddCount] = useState(1);
  return (
    <div className="card">
      <h3>{tittle}</h3>
      <p>{description}</p>
      <div>
        {isCurrent && (
          <>
            {Array.from({ length: addCount }).map(() => children)}

            {id !== 'information' && id !== 'contact' && (
              <button onClick={() => setAddCount((addCount) => addCount + 1)}>
                Add
              </button>
            )}
          </>
        )}
      </div>
      <button
        onClick={() => {
          isCurrent ? onCurrentActive(null) : onCurrentActive(id);
        }}
      >
        {isCurrent ? 'Close' : 'Open'}
        <span className={`${isCurrent ? 'open' : 'close'}`}>
          {isCurrent ? '⏫' : '⏬'}
        </span>
      </button>
    </div>
  );
}

function CvContainer({ children, personalInformation, experienceData }) {
  return (
    <div className="cv-container">
      <TopCvContainer />
      <CV
        personalInformation={personalInformation}
        experienceData={experienceData}
      />
    </div>
  );
}
function Footer({ children }) {
  return (
    <div className="footer">
      <p>Developed by Adem Kedir </p>
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

// General user CVCard component
function CvCard({ heading, children }) {
  return (
    <div className="cv-card">
      <h3>{heading}</h3>
      {children}
    </div>
  );
}

function CV({ children, personalInformation, experienceData }) {
  return (
    <div className="cv">
      <PersonalInformation personalInformation={personalInformation} />
      <div className="cv__main">
        <div className="left">
          <CvCard heading={'Experience'}>
            <Experience experienceData={experienceData} />
            {/* <Experience /> */}
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

function PersonalInformationInput({
  onPersonalInfoChange,
  personalInformation,
}) {
  return (
    <div className="personal-description-input">
      <label htmlFor="full-name">Full name:</label>
      <input
        type="text"
        name="fullName"
        id="full-name"
        placeholder="Adem kedir Galiyo"
        // value={personalInformation.fullName}
        onChange={(e) => onPersonalInfoChange(e)}
      />
      <label htmlFor="profession">Profession</label>
      <input
        type="text"
        name="profession"
        id="profession"
        placeholder="Software Engineer"
        // value={personalInformation.profession}
        onChange={(e) => onPersonalInfoChange(e)}
      />
      <label htmlFor="description">Heading Sentence</label>
      <textarea
        name="description"
        id="description"
        maxLength={300}
        placeholder="I am dedicated ..."
        // value={personalInformation.description}
        onChange={(e) => onPersonalInfoChange(e)}
      ></textarea>
    </div>
  );
}

function PersonalInformation({ children, personalInformation }) {
  return (
    <div className="cv__personal-information">
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

function Experience({ experienceData }) {
  return (
    <div className="experience">
      <h5>
        Tittle/ Position: <span>{experienceData.position}</span>
      </h5>
      <h6>
        Work Space/ Company: <span>{experienceData.company}</span>
      </h6>
      <h6>
        Task/ Responsibility:
        <span>{experienceData.responsibility}</span>
      </h6>
      <h6 className="date">
        Year:
        <span className="from">{experienceData.from.slice(0, 7)}</span> -
        <span className="to">{experienceData.to.slice(0, 7)}</span>
      </h6>
    </div>
  );
}

function ExperienceInput({ experienceData, onExperienceInput }) {
  return (
    <div className="experience-input">
      <label htmlFor="position">Tittle /Position:</label>
      <input
        type="text"
        name="position"
        id="Position"
        placeholder="front End developer"
        onChange={(e) => onExperienceInput(e)}
        // onChange={(e) => onPersonalInfoChange(e)}
      />
      <label htmlFor="company">Company:</label>
      <input
        type="text"
        name="company"
        id="company"
        placeholder="Google"
        onChange={(e) => onExperienceInput(e)}
        // onChange={(e) => onPersonalInfoChange(e)}
      />
      <label htmlFor="responsibility">Responsibility:</label>
      <input
        type="text"
        name="responsibility"
        id="responsibility"
        placeholder="creating UX/UI ..."
        onChange={(e) => onExperienceInput(e)}
        // onChange={(e) => onPersonalInfoChange(e)}
      />
      <label htmlFor="startDate">From: </label>
      <input
        type="date"
        name="from"
        id="from"
        onChange={(e) => onExperienceInput(e)}
      />
      <label htmlFor="toDate">To: </label>
      <input
        type="date"
        name="to"
        id="to"
        onChange={(e) => onExperienceInput(e)}
      />
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
      </h6>
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
