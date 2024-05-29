import { useState } from 'react';
import { getLocalStorage } from '../../setLocalStorage';

export function SkillSet({ skills }) {
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
export function SkillSetInput({ onSkills, onSkillDelete }) {
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
