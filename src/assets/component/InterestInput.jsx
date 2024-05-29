import { useState } from 'react';
import { getLocalStorage } from '../../setLocalStorage';

export function Interest({ interestList }) {
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
export function InterestInput({ onInterest, OnInterestDelete }) {
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
