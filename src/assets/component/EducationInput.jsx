import { useState } from 'react';
import { getLocalStorage } from '../../setLocalStorage';

export function Education({ educationData }) {
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
export function EducationInput({ onEducationData, onEducationDelete }) {
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
