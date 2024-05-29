export function PersonalInformationInput({
  onPersonalInfoChange,
  onImageUpLoad,
}) {
  return (
    <div className="personal-description-input">
      <label htmlFor="full-name">Full name:</label>
      <input
        type="text"
        name="fullName"
        id="full-name"
        placeholder="Adem kedir Galiyo"
        // value={personalInformation.fullName}
        onChange={(e) => onPersonalInfoChange(e)}
      />
      <label htmlFor="profession">Profession</label>
      <input
        type="text"
        name="profession"
        id="profession"
        placeholder="Software Engineer"
        // value={personalInformation.profession}
        onChange={(e) => onPersonalInfoChange(e)}
      />
      <label htmlFor="description">Heading Sentence</label>
      <textarea
        name="description"
        id="description"
        maxLength={300}
        placeholder="I am dedicated ..."
        // value={personalInformation.description}
        onChange={(e) => onPersonalInfoChange(e)}
      ></textarea>
      <label htmlFor="image">Profile Picture</label>{' '}
      <input
        type="file"
        name="image"
        id="image"
        accept="image/*"
        onChange={(e) => onImageUpLoad(e)}
      />
    </div>
  );
}
export function PersonalInformation({
  children,
  personalInformation,
  uploadedImage,
  userStyle,
}) {
  return (
    <div className="cv__personal-information">
      <div
        className="personal-description"
        style={{ backgroundColor: userStyle.backgroundColor }}
      >
        <h2>{personalInformation.fullName}</h2>
        <h4>{personalInformation.profession}</h4>
        <p>{personalInformation.description}</p>
      </div>
      <div
        className="image"
        style={{ backgroundColor: userStyle.backgroundColor }}
      >
        <div>
          <img
            src={uploadedImage ? uploadedImage : 'default.jpg'}
            alt="user's image"
          />
        </div>
      </div>
    </div>
  );
}
