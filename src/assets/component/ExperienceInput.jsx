import { useState } from 'react';
import { getLocalStorage } from '../../setLocalStorage';

export function Experience({ experienceData }) {
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
export function ExperienceInput({ onExperienceInput, onExperienceDelete }) {
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
