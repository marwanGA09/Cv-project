import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

export function Card({
  tittle,
  description,
  children,
  id,
  currentActive,
  onCurrentActive,
}) {
  const isCurrent = currentActive === id;
  return (
    <div className="card">
      <h3>{tittle}</h3>
      <p>{description}</p>
      <div>
        {isCurrent && (
          <>
            {children}

            {/* {id !== 'information' && id !== 'contact' && (
                    
                    )} */}
          </>
        )}
      </div>
      <button
        onClick={() => {
          isCurrent ? onCurrentActive(null) : onCurrentActive(id);
        }}
      >
        {isCurrent ? 'Close' : 'Open'}
        <span className={`${isCurrent ? 'open' : 'close'}`}>
          {isCurrent ? (
            <FontAwesomeIcon
              icon={faArrowUp}
              size="sm"
              color="gray"
              style={{ marginLeft: '1rem' }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faArrowDown}
              size="sm"
              color="gray"
              style={{ marginLeft: '1rem' }}
            />
          )}
        </span>
      </button>
    </div>
  );
}
