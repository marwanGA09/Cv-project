import { useState } from 'react';
import { CV } from './CV';
import { TopCvContainer } from './TopCvContainer';

export function CvContainer({
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
