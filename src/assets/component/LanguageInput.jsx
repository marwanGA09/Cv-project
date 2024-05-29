import { useState } from 'react';
import { getLocalStorage } from '../../setLocalStorage';

export function Language({ language }) {
  return (
    <>
      {' '}
      <ul className="languages">
        {Object.keys(language.languageName).map((key) => (
          <li key={key}>
            <span>{language.languageName[key]}</span>:
            <span>{language.level[key] || 'Professional'}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
export function LanguageInput({ onLanguage, onLanguageDelete }) {
  const languageList = JSON.parse(getLocalStorage('localLanguage'));
  let number = languageList ? Object.keys(languageList.languageName).length : 1;
  const [addCount, setAddCount] = useState(number);
  return (
    <>
      {Array.from({ length: addCount }, (_, index) => (
        <div key={index}>
          <div className="language-input">
            <label htmlFor="languageName">Language:</label>
            <input
              type="text"
              name="languageName"
              data-set="languageName"
              id="languageName"
              placeholder={languageList?.languageName['a' + index] || ''}
              onChange={(e) => onLanguage(e, index)}
            />
            <div className="radio-btn">
              <input
                type="radio"
                name={`level${index}`}
                data-set={'level'}
                value="Bilingual"
                id={`Bilingual${index}`}
                onChange={(e) => onLanguage(e, index)}
              />
              <label htmlFor={`Bilingual${index}`}> Bilingual</label>
              <input
                type="radio"
                name={`level${index}`}
                data-set={'level'}
                value="Professional"
                id={`Professional${index}`}
                onChange={(e) => onLanguage(e, index)}
                checked
              />
              <label htmlFor={`Professional${index}`}> Professional</label>
              <input
                type="radio"
                name={`level${index}`}
                data-set={'level'}
                value="Limited Professional"
                id={`LimitedProfessional${index}`}
                onChange={(e) => onLanguage(e, index)}
              />
              <label htmlFor={`LimitedProfessional${index}`}>
                {' '}
                Limited Professional
              </label>
              <input
                type="radio"
                name={`level${index}`}
                data-set={'level'}
                value="conversation"
                id={`Conversation${index}`}
                onChange={(e) => onLanguage(e, index)}
              />
              <label htmlFor={`Conversation${index}`}> Conversational</label>
            </div>{' '}
          </div>
        </div>
      ))}
      <button
        className="del-btn"
        onClick={() => {
          addCount !== 1 && setAddCount((addCount) => addCount - 1);
          addCount !== 1 && onLanguageDelete(addCount - 1);
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
