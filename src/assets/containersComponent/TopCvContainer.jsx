export function TopCvContainer({
  children,
  personalInformation,
  userStyle,
  onStyle,
}) {
  return (
    <div className="top">
      <p>User: @{personalInformation.fullName.split(' ')[0]}</p>
      <div>
        <label htmlFor="font">
          Font-style:
          <select
            name="font"
            id="font"
            onChange={(e) =>
              onStyle((style) => {
                return { ...style, fontFamily: e.target.value };
              })
            }
          >
            <option value="Arial">Arial</option>
            <option value="Helvetica">helvetic</option>
            <option value="monospace">mono</option>
            <option value="sans-serif">sans-serif</option>
          </select>
        </label>
        <label htmlFor="color">
          <span>Primary color: </span>
          <input
            type="color"
            name="color"
            id="color"
            onChange={(e) =>
              onStyle((style) => {
                return { ...style, backgroundColor: e.target.value };
              })
            }
          />
        </label>
      </div>
    </div>
  );
}
