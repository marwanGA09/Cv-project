import { useState } from 'react';
import { getLocalStorage } from '../../setLocalStorage';

export function PersonalAchievement({ personalAchievement }) {
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
export function PersonalAchievementInput({
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
