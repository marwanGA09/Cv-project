import { Interest } from '../component/InterestInput';
import { Language } from '../component/LanguageInput';
import { SkillSet } from '../component/SkillSetInput';
import { SocialMediaLinks } from '../component/SocialMediaInput';
import { PersonalAchievement } from '../component/PersonalAchievementInput';
import { Education } from '../component/EducationInput';
import { PersonalProject } from '../component/PersonalProjectInput';
import { Experience } from '../component/ExperienceInput';
import { PersonalInformation } from '../component/PersonalInformationInput';
import { CvCard } from './CvCard';

export function CV({
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
