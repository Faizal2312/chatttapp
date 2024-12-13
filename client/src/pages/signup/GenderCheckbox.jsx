const GenderCheckbox = () => {
  return (
    <div className="flex gap-4">
      <div className="form-control">
        <label className="label gap-2  cursor-pointer">
          <span className="label-text">Male</span>
          <input type="checkbox" defaultChecked className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input type="checkbox" defaultChecked className="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
