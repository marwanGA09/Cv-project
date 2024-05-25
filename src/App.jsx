import { useState } from 'react';
import Navigation from './assets/component/Navigation';
import setLocalStorage, { getLocalStorage } from './setLocalStorage';

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

  const initialExperience = JSON.parse(
    getLocalStorage('localExperienceData')
  ) || {
    position: { a0: 'front End developer' },
    company: { a0: 'Google' },
    responsibility: { a0: 'creating UX/UI friendly webpages for organization' },
    from: { a0: '2022-07-02' },
    to: { a0: '2023-03-27' },
  };

  // *********
  const initialPersonalProject = JSON.parse(
    getLocalStorage('localPersonalProject')
  ) || {
    projectName: { a0: 'CV project creator' },
    projectDescription: { a0: 'Create cv dynamically' },
    projectURL: { a0: 'https//:' },
  };

  const [experienceData, setExperienceData] = useState(initialExperience);
  const [personalProject, setPersonalProject] = useState(
    initialPersonalProject
  );
  // *******
  function handlePersonalInformation(e) {
    setPersonalInformation((personalInformation) => {
      return { ...personalInformation, [e.target.name]: e.target.value };
    });
  }
  // *******
  function handleExperienceInfo(e, ind) {
    setExperienceData((experienceData) => {
      const temp = {
        ...experienceData,
        [e.target.name]: {
          ...experienceData[e.target.name],
          ['a' + ind]: e.target.value,
        },
      };
      setLocalStorage('localExperienceData', JSON.stringify(experienceData));
      return temp;
    });
  }

  function handleRemovalOfExperience(index) {
    setExperienceData((experienceData) => {
      delete experienceData.position['a' + index];
      delete experienceData.company['a' + index];
      delete experienceData.responsibility['a' + index];
      delete experienceData.from['a' + index];
      delete experienceData.to['a' + index];
      return { ...experienceData };
    });
  }
  // *******
  function handlePersonalProject(e, ind) {
    setPersonalProject((personalProject) => {
      const temp = {
        ...personalProject,
        [e.target.name]: {
          ...personalProject[e.target.name],
          ['a' + ind]: e.target.value,
        },
      };
      setLocalStorage('localPersonalProject', JSON.stringify(personalProject));
      return temp;
    });
  }

  function handleRemovalOfPersonalProject(index) {
    setPersonalProject((personalProject) => {
      delete personalProject.projectName['a' + index];
      delete personalProject.projectDescription['a' + index];
      delete personalProject.projectURL['a' + index];
      return { ...personalProject };
    });
  }
  return (
    <>
      <SideBar
        personalInformation={personalInformation}
        onPersonalInfoChange={handlePersonalInformation}
        experienceData={experienceData}
        onExperienceInput={handleExperienceInfo}
        onExperienceDelete={handleRemovalOfExperience}
        personalProject={personalProject}
        onPersonalProject={handlePersonalProject}
        onPersonalProjectDelete={handleRemovalOfPersonalProject}
      />
      <CvContainer
        personalInformation={personalInformation}
        experienceData={experienceData}
        personalProject={personalProject}
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
  onExperienceDelete,

  personalProject,
  onPersonalProject,
  onPersonalProjectDelete,
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
            onExperienceDelete={onExperienceDelete}
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
          {/* personalProject, onPersonalProject, onPersonalProjectDelete, */}
          <PersonalProjectInput
            onPersonalProject={onPersonalProject}
            personalProject={personalProject}
            onPersonalProjectDelete={onPersonalProjectDelete}
          />
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
  return (
    <div className="card">
      <h3>{tittle}</h3>
      <p>{description}</p>
      <div>
        {isCurrent && (
          <>
            {children}

            {/* {id !== 'information' && id !== 'contact' && (
            
            )} */}
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

function CvContainer({
  children,
  personalInformation,
  experienceData,
  personalProject,
}) {
  return (
    <div className="cv-container">
      <TopCvContainer />
      <CV
        personalInformation={personalInformation}
        experienceData={experienceData}
        personalProject={personalProject}
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
      <button onClick={() => localStorage.clear()}>clear Local</button>
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

function CV({
  children,
  personalInformation,
  experienceData,
  personalProject,
}) {
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
            <PersonalProject personalProject={personalProject} />
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
    <>
      {Object.keys(experienceData.position).map((key) => (
        <div key={key} className="experience">
          <h5>
            Tittle/ Position:
            <span>{experienceData.position[key] || 'NO Position'}</span>
          </h5>
          <h6>
            Work Space/ Company:
            <span>{experienceData.company[key] || 'NO Company'}</span>
          </h6>
          <h6>
            Task/ Responsibility:
            <span>
              {experienceData.responsibility[key] || 'NO Responsibility'}
            </span>
          </h6>
          <h6 className="date">
            Year:
            <span className="from">
              {experienceData.from[key]?.slice(0, 7) || 'NO Date'}
            </span>
            -
            <span className="to">
              {experienceData.to[key]?.slice(0, 7) || 'NO Date'}
            </span>
          </h6>
        </div>
      ))}
    </>
  );
}

function ExperienceInput({
  experienceData,
  onExperienceInput,
  onExperienceDelete,
}) {
  const localExperienceData = JSON.parse(
    getLocalStorage('localExperienceData')
  );

  let number = localExperienceData
    ? Object.keys(localExperienceData.position).length
    : 1;

  const [addCount, setAddCount] = useState(number);

  return (
    <>
      {Array.from({ length: addCount }, (_, index) => (
        <div key={index}>
          <div className="experience-input">
            <label htmlFor="position">Tittle /Position:</label>
            <input
              type="text"
              name="position"
              id="Position"
              placeholder={localExperienceData?.position['a' + index] || ''}
              onChange={(e) => onExperienceInput(e, index)}
            />
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder={localExperienceData?.company['a' + index] || ''}
              onChange={(e) => onExperienceInput(e, index)}
            />
            <label htmlFor="responsibility">Responsibility:</label>
            <input
              type="text"
              name="responsibility"
              id="responsibility"
              placeholder={
                localExperienceData?.responsibility['a' + index] || ''
              }
              onChange={(e) => onExperienceInput(e, index)}
            />
            <label htmlFor="startDate">From: </label>
            <input
              type="date"
              name="from"
              id="from"
              placeholder={localExperienceData?.from['a' + index] || ''}
              onChange={(e) => onExperienceInput(e, index)}
            />
            <label htmlFor="toDate">To: </label>
            <input
              type="date"
              name="to"
              id="to"
              placeholder={localExperienceData?.to['a' + index] || ''}
              onChange={(e) => onExperienceInput(e, index)}
            />
          </div>
        </div>
      ))}
      <button
        className="del-btn"
        onClick={() => {
          addCount !== 1 && setAddCount((addCount) => addCount - 1);
          addCount !== 1 && onExperienceDelete(addCount - 1);
        }}
      >
        🧹
      </button>
      <button
        className="add-btn"
        onClick={() => setAddCount((addCount) => addCount + 1)}
      >
        ✚
      </button>
    </>
  );
}

function PersonalProject({ personalProject }) {
  return (
    <>
      {Object.keys(personalProject.projectName).map((key) => (
        <div key={key} className="personal-project">
          <h5>
            Project name: <span>{personalProject.projectName[key] || ''}</span>
          </h5>
          <h6>
            description:
            <span>{personalProject.projectDescription[key] || ''}</span>
          </h6>
          <a href="#" target="_black">
            <span>🐈</span>
            {personalProject.projectURL[key] || ''}
          </a>
        </div>
      ))}
    </>
  );
}

function PersonalProjectInput({
  personalProject,
  onPersonalProject,
  onPersonalProjectDelete,
}) {
  const localExperienceData = JSON.parse(
    getLocalStorage('localPersonalProject')
  );

  let number = localExperienceData
    ? Object.keys(localExperienceData.projectName).length
    : 1;

  const [addCount, setAddCount] = useState(number);

  return (
    <>
      {Array.from({ length: addCount }, (_, index) => (
        <div key={index}>
          <div className="personal-project-input">
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              name="projectName"
              id="projectName"
              placeholder={localExperienceData?.projectName['a' + index] || ''}
              onChange={(e) => onPersonalProject(e, index)}
            />
            <label htmlFor="projectDescription">Project Descriptor:</label>
            <input
              type="text"
              name="projectDescription"
              id="projectDescription"
              placeholder={
                localExperienceData?.projectDescription['a' + index] || ''
              }
              onChange={(e) => onPersonalProject(e, index)}
            />
            <label htmlFor="projectURL">Project Link:</label>
            <input
              type="url"
              name="projectURL"
              id="projectURL"
              placeholder={localExperienceData?.projectURL['a' + index] || ''}
              onChange={(e) => onPersonalProject(e, index)}
            />
          </div>
        </div>
      ))}
      <button
        className="del-btn"
        onClick={() => {
          addCount !== 1 && setAddCount((addCount) => addCount - 1);
          addCount !== 1 && onPersonalProjectDelete(addCount - 1);
        }}
      >
        🧹
      </button>
      <button
        className="add-btn"
        onClick={() => setAddCount((addCount) => addCount + 1)}
      >
        ✚
      </button>
    </>
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
