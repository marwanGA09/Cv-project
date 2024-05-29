import { useState } from 'react';
import Navigation from './assets/component/Navigation';
import setLocalStorage, { getLocalStorage } from './setLocalStorage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowDown,
  faArrowUp,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <>
      {' '}
      {localStorage.clear()}
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
  // *********
  // *********
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
  // *********
  const initialPersonalProject = JSON.parse(
    getLocalStorage('localPersonalProject')
  ) || {
    projectName: { a0: 'CV project creator' },
    projectDescription: {
      a0: 'This project allows users to dynamically create their CVs through a user-friendly interface. It focuses on providing a streamlined experience for building and customizing CV content.',
    },
    projectURL: { a0: 'https://your-cv-project-link.com' },
  };

  // *********
  // *********
  const initialEducation = JSON.parse(
    getLocalStorage('localEducationData')
  ) || {
    program: { a0: 'Software engineering' },
    level: { a0: 'bachelor degree' },
    institution: { a0: 'Haramaya University' },
    from: { a0: '2022-07-02' },
    to: { a0: '2023-03-27' },
  };

  // *********
  // *********
  const initialPersonalAchievement = JSON.parse(
    getLocalStorage('localPersonalAchievement')
  ) || {
    tittle: { a0: 'International Coding Competition' },
    description: {
      a0: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, nostrum, fugit facere quo tenetur corriciis natus reiciendis',
    },
    year: { a0: '2022-07-02' },
  };
  const initialSkills = JSON.parse(getLocalStorage('localSkills')) || {
    skill: { a0: 'React', a1: 'Javascript', a2: 'Node' },
  };
  const initialLanguage = JSON.parse(getLocalStorage('localLanguage')) || {
    languageName: { a0: 'English' },
    level: { a0: 'Professional' },
  };
  const initialInterest = JSON.parse(getLocalStorage('localInterest')) || {
    interest: { a0: 'Cinema' },
  };

  // USE STATE
  const [personalInformation, setPersonalInformation] = useState({
    fullName: 'Adem Kedir',
    profession: 'Front end developer',
    description: `Front-End Engineer passionate about building user-friendly interfaces with React & modern frameworks. Experienced in crafting interactive & performant web apps that delight users.`,
  });
  const [experienceData, setExperienceData] = useState(initialExperience);
  const [personalProject, setPersonalProject] = useState(
    initialPersonalProject
  );
  const [education, setEducation] = useState(initialEducation);
  const [personalAchievement, setPersonalAchievement] = useState(
    initialPersonalAchievement
  );
  const [socialMedia, setSocialMedia] = useState({
    phone: '+251 --- ---- ----',
    email: '...@gmail.com',
    twitter: '....',
    linkedIn: '....',
  });
  const [skills, setSkills] = useState(initialSkills);
  const [language, setLanguage] = useState(initialLanguage);
  const [interestList, setInterestList] = useState(initialInterest);
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

  // *******
  function handleEducation(e, ind) {
    setEducation((education) => {
      const temp = {
        ...education,
        [e.target.name]: {
          ...education[e.target.name],
          ['a' + ind]: e.target.value,
        },
      };
      setLocalStorage('localEducationData', JSON.stringify(education));
      return temp;
    });
  }

  function handleRemovalEducation(index) {
    setEducation((education) => {
      delete education.program['a' + index];
      delete education.level['a' + index];
      delete education.institution['a' + index];
      delete education.from['a' + index];
      delete education.to['a' + index];
      return { ...education };
    });
  }

  // *******
  function handlePErsonalAchievement(e, ind) {
    setPersonalAchievement((personalAchievement) => {
      const temp = {
        ...personalAchievement,
        [e.target.name]: {
          ...personalAchievement[e.target.name],
          ['a' + ind]: e.target.value,
        },
      };
      setLocalStorage(
        'localPersonalAchievement',
        JSON.stringify(personalAchievement)
      );
      return temp;
    });
  }

  function handleRemovalPersonalAchievement(index) {
    setPersonalAchievement((personalAchievement) => {
      delete personalAchievement.tittle['a' + index];
      delete personalAchievement.description['a' + index];
      delete personalAchievement.year['a' + index];
      return { ...personalAchievement };
    });
  }
  // *******
  function handleSocialMedia(e) {
    setSocialMedia((socialMedia) => {
      return {
        ...socialMedia,
        [e.target.name]: e.target.value,
      };
    });
  }
  // *******
  function handleSkills(e, ind) {
    setSkills((skills) => {
      const temp = {
        ...skills,
        [e.target.name]: {
          ...skills[e.target.name],
          ['a' + ind]: e.target.value,
        },
      };
      setLocalStorage('localSkills', JSON.stringify(skills));
      return temp;
    });
  }

  function handleRemovalOfSkill(index) {
    setSkills((skills) => {
      delete skills.skill['a' + index];
      return { ...skills };
    });
  }

  // *******

  function handleLanguage(e, ind) {
    setLanguage((language) => {
      const temp = {
        ...language,
        [e.target.dataset.set]: {
          ...language[e.target.dataset.set],
          ['a' + ind]: e.target.value,
        },
      };
      setLocalStorage('localLanguage', JSON.stringify(language));
      return temp;
    });
  }

  function handleRemovalOfLanguage(index) {
    setLanguage((language) => {
      delete language.languageName['a' + index];
      delete language.level['a' + index];
      return { ...language };
    });
  }
  // *******

  function handleInterest(e, ind) {
    setInterestList((interestList) => {
      const temp = {
        ...interestList,
        [e.target.name]: {
          ...interestList[e.target.name],
          ['a' + ind]: e.target.value,
        },
      };
      setLocalStorage('localInterest', JSON.stringify(interestList));
      return temp;
    });
  }

  function handleRemovalOfInterest(index) {
    setInterestList((interestList) => {
      delete interestList.interest['a' + index];
      return { ...interestList };
    });
  }

  const [selectedImage, setSelectedImage] = useState(null);

  function handleUploadedImage(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <>
      <SideBar
        onPersonalInfoChange={handlePersonalInformation}
        onImageUpLoad={handleUploadedImage}
        onExperienceInput={handleExperienceInfo}
        onExperienceDelete={handleRemovalOfExperience}
        onPersonalProject={handlePersonalProject}
        onPersonalProjectDelete={handleRemovalOfPersonalProject}
        onEducationData={handleEducation}
        onEducationDelete={handleRemovalEducation}
        onPersonalAchievement={handlePErsonalAchievement}
        onPersonalAchievementDelete={handleRemovalPersonalAchievement}
        onSocialMedia={handleSocialMedia}
        onSkills={handleSkills}
        onSkillDelete={handleRemovalOfSkill}
        onLanguage={handleLanguage}
        onLanguageDelete={handleRemovalOfLanguage}
        onInterest={handleInterest}
        OnInterestDelete={handleRemovalOfInterest}
      />
      <CvContainer
        personalInformation={personalInformation}
        uploadedImage={selectedImage}
        experienceData={experienceData}
        personalProject={personalProject}
        educationData={education}
        personalAchievement={personalAchievement}
        socialMedia={socialMedia}
        skills={skills}
        language={language}
        interestList={interestList}
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
  onImageUpLoad,

  onExperienceInput,
  onExperienceDelete,

  onPersonalProject,
  onPersonalProjectDelete,

  onEducationData,
  onEducationDelete,

  onPersonalAchievement,
  onPersonalAchievementDelete,

  onSocialMedia,

  onSkills,
  onSkillDelete,

  onLanguage,
  onLanguageDelete,

  onInterest,
  OnInterestDelete,
}) {
  const [currentActive, setCurrentActive] = useState(null);
  return (
    <div className="side-bar">
      <div className="general-page-description">
        <p>
          A CV is a document that outlines an individual&apos;s work experience,
          education, skills, and accomplishments, and is typically used for job
          applications. It is a summary of an individual&apos;s qualifications
          and experience, and is usually one or two pages in length. A resume
          should be well-organized, easy to read, and free of errors. It is
          important to tailor a resume to each job application, highlighting the
          most relevant skills and experiences for the position. A resume should
          also be up-to-date, adding new skills, experiences, and
          accomplishments as they are gained.
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
            onImageUpLoad={onImageUpLoad}
          />
        </Card>
        <Card
          id={'experience'}
          tittle={'Experience'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={`List your professional experiences here. Include company names, job titles, dates of employment, and key responsibilities or accomplishments.`}
        >
          <ExperienceInput
            onExperienceInput={onExperienceInput}
            onExperienceDelete={onExperienceDelete}
          />
        </Card>
        <Card
          id={'project'}
          tittle={'Personal Project'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={`Highlight your personal projects here. Showcase your skills, creativity, and problem-solving abilities. Briefly describe each project, including its purpose, technologies used, and any achievements.`}
        >
          {/* personalProject, onPersonalProject, onPersonalProjectDelete, */}
          <PersonalProjectInput
            onPersonalProject={onPersonalProject}
            onPersonalProjectDelete={onPersonalProjectDelete}
          />
        </Card>
        <Card
          id={'education'}
          tittle={'Education Level'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={`List your educational background here. Include the names of institutions, degrees earned, majors or specializations, and graduation dates.`}
        >
          {/*  onEducationData, onEducationDelete  */}
          <EducationInput
            onEducationData={onEducationData}
            onEducationDelete={onEducationDelete}
          />
        </Card>
        <Card
          id={'achievement'}
          tittle={'Personal Achievement'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={`Highlight your accomplishments and accolades here. Showcase your skills, dedication, and any significant achievements that go beyond formal education.`}
        >
          <PersonalAchievementInput
            onPersonalAchievement={onPersonalAchievement}
            onPersonalAchievementDelete={onPersonalAchievementDelete}
          />
        </Card>
        <Card
          id={'contact'}
          tittle={'Contact'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={`Provide your preferred methods of contact here. This could include email address, phone number, professional social media profiles (e.g., LinkedIn, GitHub).`}
        >
          <SocialMediaInput onSocialMedia={onSocialMedia} />
        </Card>
        <Card
          id={'skill'}
          tittle={'Skill Set'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={`Highlight your technical and soft skills here. Categorize and list your skills, and optionally indicate proficiency levels.`}
        >
          {/*onskill input  */}
          <SkillSetInput onSkills={onSkills} onSkillDelete={onSkillDelete} />
        </Card>
        <Card
          id={'language'}
          tittle={'Language'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={`ist the languages you speak and your proficiency level in each. This information can be valuable for employers seeking multilingual candidates.`}
        >
          <LanguageInput
            onLanguage={onLanguage}
            onLanguageDelete={onLanguageDelete}
          />
        </Card>
        <Card
          id={'interest'}
          tittle={'Interest/ Hobbies'}
          currentActive={currentActive}
          onCurrentActive={setCurrentActive}
          description={`Share your interests and hobbies here. This can help potential employers get a better sense of you as a person and your well-roundedness.`}
        >
          <InterestInput
            onInterest={onInterest}
            OnInterestDelete={OnInterestDelete}
          />
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
          {isCurrent ? (
            <FontAwesomeIcon
              icon={faArrowUp}
              size="sm"
              color="gray"
              style={{ marginLeft: '1rem' }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faArrowDown}
              size="sm"
              color="gray"
              style={{ marginLeft: '1rem' }}
            />
          )}
        </span>
      </button>
    </div>
  );
}

function CvContainer({
  children,
  personalInformation,
  uploadedImage,
  experienceData,
  personalProject,
  educationData,
  personalAchievement,
  socialMedia,
  skills,
  language,
  interestList,
}) {
  const [userStyle, setUserStyle] = useState({
    fontFamily: 'sans-serif',
    backgroundColor: '#0349a5f7',
  });
  return (
    <div className="cv-container">
      <TopCvContainer
        personalInformation={personalInformation}
        userStyle={userStyle}
        onStyle={setUserStyle}
      />
      <CV
        userStyle={userStyle}
        personalInformation={personalInformation}
        uploadedImage={uploadedImage}
        experienceData={experienceData}
        personalProject={personalProject}
        educationData={educationData}
        personalAchievement={personalAchievement}
        socialMedia={socialMedia}
        skills={skills}
        language={language}
        interestList={interestList}
      />
    </div>
  );
}
function Footer({ children }) {
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

function TopCvContainer({ children, personalInformation, userStyle, onStyle }) {
  return (
    <div className="top">
      <p>User: @{personalInformation.fullName.split(' ')[0]}</p>
      <div>
        <label htmlFor="font">
          Font-style:
          <select
            name="font"
            id="font"
            onChange={(e) =>
              onStyle((style) => {
                return { ...style, fontFamily: e.target.value };
              })
            }
          >
            <option value="Arial">Arial</option>
            <option value="Helvetica">helvetic</option>
            <option value="monospace">mono</option>
            <option value="sans-serif">sans-serif</option>
          </select>
        </label>
        <label htmlFor="color">
          <span>Primary color: </span>
          <input
            type="color"
            name="color"
            id="color"
            onChange={(e) =>
              onStyle((style) => {
                return { ...style, backgroundColor: e.target.value };
              })
            }
          />
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
  userStyle,
  personalInformation,
  uploadedImage,
  experienceData,
  personalProject,
  educationData,
  personalAchievement,
  socialMedia,
  skills,
  language,
  interestList,
}) {
  return (
    <div className="cv" style={{ fontFamily: userStyle.fontFamily }}>
      <PersonalInformation
        personalInformation={personalInformation}
        uploadedImage={uploadedImage}
        userStyle={userStyle}
      />
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
            <Education educationData={educationData} />
          </CvCard>
          <CvCard heading={'Personal Achievement'}>
            <PersonalAchievement personalAchievement={personalAchievement} />
          </CvCard>
        </div>
        <div className="right">
          <CvCard heading={'Contact'}>
            <SocialMediaLinks socialMedia={socialMedia} />
          </CvCard>
          <CvCard heading={'Skill Set'}>
            <SkillSet skills={skills} />
          </CvCard>
          <CvCard heading={'Language'}>
            <Language language={language} />
          </CvCard>
          <CvCard heading={'Interest/ Hobbies'}>
            <Interest interestList={interestList} />
          </CvCard>
        </div>
      </div>
    </div>
  );
}

function PersonalInformationInput({ onPersonalInfoChange, onImageUpLoad }) {
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
      <label htmlFor="image">Profile Picture</label>{' '}
      <input
        type="file"
        name="image"
        id="image"
        accept="image/*"
        onChange={(e) => onImageUpLoad(e)}
      />
    </div>
  );
}

function PersonalInformation({
  children,
  personalInformation,
  uploadedImage,
  userStyle,
}) {
  return (
    <div className="cv__personal-information">
      <div
        className="personal-description"
        style={{ backgroundColor: userStyle.backgroundColor }}
      >
        <h2>{personalInformation.fullName}</h2>
        <h4>{personalInformation.profession}</h4>
        <p>{personalInformation.description}</p>
      </div>
      <div
        className="image"
        style={{ backgroundColor: userStyle.backgroundColor }}
      >
        <div>
          <img
            src={uploadedImage ? uploadedImage : '/dist/default.jpg'}
            alt="user's image"
          />
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

function ExperienceInput({ onExperienceInput, onExperienceDelete }) {
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
          <a href={personalProject.projectURL[key] || ''} target="_black">
            <span style={{ marginRight: '1rem' }}>
              <FontAwesomeIcon icon={faGithub} size="sm" color="gray" />
            </span>
            Open
          </a>
        </div>
      ))}
    </>
  );
}

function PersonalProjectInput({ onPersonalProject, onPersonalProjectDelete }) {
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

function Education({ educationData }) {
  return (
    <>
      {Object.keys(educationData.program).map((key) => (
        <div key={key} className="education">
          <h5>
            Study Program: <span>{educationData.program[key] || '...'}</span>
          </h5>
          <h6>
            Study Level:
            <span>{educationData.level[key] || '...'}</span>
          </h6>
          <h6>
            Institution :<span>{educationData.institution[key] || '...'}</span>
          </h6>
          <h6 className="date">
            Year:
            <span className="from">{educationData.from[key] || '...'}</span> -
            <span className="to">{educationData.to[key] || '...'}</span>
          </h6>
        </div>
      ))}
    </>
  );
}

function EducationInput({ onEducationData, onEducationDelete }) {
  const localEducationData = JSON.parse(getLocalStorage('localEducationData'));

  let number = localEducationData
    ? Object.keys(localEducationData.program).length
    : 1;

  const [addCount, setAddCount] = useState(number);

  return (
    <>
      {Array.from({ length: addCount }, (_, index) => (
        <div key={index}>
          <div className="education-input">
            <label htmlFor="program">Study Program:</label>
            <input
              type="text"
              name="program"
              id="program"
              placeholder={localEducationData?.program['a' + index] || ''}
              onChange={(e) => onEducationData(e, index)}
            />
            <label htmlFor="level">Study Level:</label>
            <input
              type="text"
              name="level"
              id="level"
              placeholder={localEducationData?.level['a' + index] || ''}
              onChange={(e) => onEducationData(e, index)}
            />
            <label htmlFor="institution">Institution:</label>
            <input
              type="text"
              name="institution"
              id="institution"
              placeholder={localEducationData?.institution['a' + index] || ''}
              onChange={(e) => onEducationData(e, index)}
            />
            <label htmlFor="from">From : </label>
            <input
              type="date"
              name="from"
              id="from"
              placeholder={localEducationData?.from['a' + index] || ''}
              onChange={(e) => onEducationData(e, index)}
            />
            <label htmlFor="to">To: </label>
            <input
              type="date"
              name="to"
              id="to"
              placeholder={localEducationData?.to['a' + index] || ''}
              onChange={(e) => onEducationData(e, index)}
            />
          </div>
        </div>
      ))}
      <button
        className="del-btn"
        onClick={() => {
          addCount !== 1 && setAddCount((addCount) => addCount - 1);
          addCount !== 1 && onEducationDelete(addCount - 1);
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

function PersonalAchievement({ personalAchievement }) {
  return (
    <>
      {' '}
      {Object.keys(personalAchievement.tittle).map((key) => (
        <div key={key} className="achievement">
          <h5>
            Tittle: <span>{personalAchievement.tittle[key] || ''}</span>
          </h5>
          <h6>
            Description:
            <span>{personalAchievement.description[key] || ''}</span>
          </h6>
          <h6 className="date">
            Year:
            <span className="from">{personalAchievement.year[key] || ''}</span>
          </h6>
        </div>
      ))}
    </>
  );
}

function PersonalAchievementInput({
  onPersonalAchievement,
  onPersonalAchievementDelete,
}) {
  const personalAchievement = JSON.parse(
    getLocalStorage('localPersonalAchievement')
  );

  let number = personalAchievement
    ? Object.keys(personalAchievement.tittle).length
    : 1;

  const [addCount, setAddCount] = useState(number);

  return (
    <>
      {Array.from({ length: addCount }, (_, index) => (
        <div key={index}>
          <div className="personal-achievement-input">
            <label htmlFor="tittle">Tittle:</label>
            <input
              type="text"
              name="tittle"
              id="tittle"
              placeholder={personalAchievement?.tittle['a' + index] || ''}
              onChange={(e) => onPersonalAchievement(e, index)}
            />

            <label htmlFor="description">Description:</label>
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder={personalAchievement?.description['a' + index] || ''}
              onChange={(e) => onPersonalAchievement(e, index)}
            />

            <label htmlFor="year">Year:</label>
            <input
              type="date"
              name="year"
              id="year"
              placeholder={personalAchievement?.year['a' + index] || ''}
              onChange={(e) => onPersonalAchievement(e, index)}
            />
          </div>
        </div>
      ))}
      <button
        className="del-btn"
        onClick={() => {
          addCount !== 1 && setAddCount((addCount) => addCount - 1);
          addCount !== 1 && onPersonalAchievementDelete(addCount - 1);
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

function SocialMediaLinks({ socialMedia }) {
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

function SocialMediaInput({ onSocialMedia }) {
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

function SkillSet({ skills }) {
  return (
    <>
      <div className="skills">
        {Object.keys(skills.skill).map((key) => (
          <span key={key}>{skills.skill[key]}</span>
        ))}
      </div>
    </>
  );
}

function SkillSetInput({ onSkills, onSkillDelete }) {
  const skills = JSON.parse(getLocalStorage('localSkills'));
  let number = skills ? Object.keys(skills.skill).length : 3;
  const [addCount, setAddCount] = useState(number);
  return (
    <>
      {Array.from({ length: addCount }, (_, index) => (
        <div key={index}>
          <div className="skill-input">
            <label htmlFor="skill">Skill ({index + 1}):</label>
            <input
              type="text"
              name="skill"
              id="skill"
              placeholder={skills?.skill['a' + index] || ''}
              onChange={(e) => onSkills(e, index)}
            />
          </div>
        </div>
      ))}
      <button
        className="del-btn"
        onClick={() => {
          addCount !== 3 && setAddCount((addCount) => addCount - 1);
          addCount !== 3 && onSkillDelete(addCount - 1);
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

function Language({ language }) {
  return (
    <>
      {' '}
      <ul className="languages">
        {Object.keys(language.languageName).map((key) => (
          <li key={key}>
            <span>{language.languageName[key]}</span>:
            <span>{language.level[key] || 'Professional'}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

function LanguageInput({ onLanguage, onLanguageDelete }) {
  const languageList = JSON.parse(getLocalStorage('localLanguage'));
  let number = languageList ? Object.keys(languageList.languageName).length : 1;
  const [addCount, setAddCount] = useState(number);
  return (
    <>
      {Array.from({ length: addCount }, (_, index) => (
        <div key={index}>
          <div className="language-input">
            <label htmlFor="languageName">Language:</label>
            <input
              type="text"
              name="languageName"
              data-set="languageName"
              id="languageName"
              placeholder={languageList?.languageName['a' + index] || ''}
              onChange={(e) => onLanguage(e, index)}
            />
            <div className="radio-btn">
              <input
                type="radio"
                name={`level${index}`}
                data-set={'level'}
                value="Bilingual"
                id={`Bilingual${index}`}
                onChange={(e) => onLanguage(e, index)}
              />
              <label htmlFor={`Bilingual${index}`}> Bilingual</label>
              <input
                type="radio"
                name={`level${index}`}
                data-set={'level'}
                value="Professional"
                id={`Professional${index}`}
                onChange={(e) => onLanguage(e, index)}
                checked
              />
              <label htmlFor={`Professional${index}`}> Professional</label>
              <input
                type="radio"
                name={`level${index}`}
                data-set={'level'}
                value="Limited Professional"
                id={`LimitedProfessional${index}`}
                onChange={(e) => onLanguage(e, index)}
              />
              <label htmlFor={`LimitedProfessional${index}`}>
                {' '}
                Limited Professional
              </label>
              <input
                type="radio"
                name={`level${index}`}
                data-set={'level'}
                value="conversation"
                id={`Conversation${index}`}
                onChange={(e) => onLanguage(e, index)}
              />
              <label htmlFor={`Conversation${index}`}> Conversational</label>
            </div>{' '}
          </div>
        </div>
      ))}
      <button
        className="del-btn"
        onClick={() => {
          addCount !== 1 && setAddCount((addCount) => addCount - 1);
          addCount !== 1 && onLanguageDelete(addCount - 1);
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

function Interest({ interestList }) {
  return (
    <div className="interest">
      {' '}
      {Object.keys(interestList.interest).map((key) => (
        <span key={key} className="interestItem">
          {interestList.interest[key] || '...'}
        </span>
      ))}
    </div>
  );
}

function InterestInput({ onInterest, OnInterestDelete }) {
  const interestList = JSON.parse(getLocalStorage('localInterest'));
  let number = interestList ? Object.keys(interestList.interest).length : 1;
  const [addCount, setAddCount] = useState(number);
  return (
    <>
      {Array.from({ length: addCount }, (_, index) => (
        <div key={index}>
          <div className="interest-input">
            <label htmlFor="interest">interest ({index + 1}):</label>
            <input
              type="text"
              name="interest"
              id="interest"
              placeholder={interestList?.interest['a' + index] || ''}
              onChange={(e) => onInterest(e, index)}
            />
          </div>
        </div>
      ))}
      <button
        className="del-btn"
        onClick={() => {
          addCount !== 1 && setAddCount((addCount) => addCount - 1);
          addCount !== 1 && OnInterestDelete(addCount - 1);
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
