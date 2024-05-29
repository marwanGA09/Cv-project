import { useState } from 'react';
import { getLocalStorage } from '../../setLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function PersonalProject({ personalProject }) {
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
export function PersonalProjectInput({
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
