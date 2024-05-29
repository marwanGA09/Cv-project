import { useState } from 'react';
import setLocalStorage, { getLocalStorage } from '../../setLocalStorage';
import { CvContainer } from './CvContainer';
import { SideBar } from './SideBar';

// I created this to crease state inside app component
export function SideBarCvContainerGroup() {
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
