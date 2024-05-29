import { useState } from 'react';
import { InterestInput } from '../component/InterestInput';
import { LanguageInput } from '../component/LanguageInput';
import { SkillSetInput } from '../component/SkillSetInput';
import { SocialMediaInput } from '../component/SocialMediaInput';
import { PersonalAchievementInput } from '../component/PersonalAchievementInput';
import { EducationInput } from '../component/EducationInput';
import { PersonalProjectInput } from '../component/PersonalProjectInput';
import { ExperienceInput } from '../component/ExperienceInput';
import { PersonalInformationInput } from '../component/PersonalInformationInput';
import { Card } from '../component/Card';

export function SideBar({
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
