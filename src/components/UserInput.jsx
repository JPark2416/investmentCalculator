function UserInput({ inputLabel, onChangeInput }) {
  function handleChange() {
    onChangeInput(event.target.value);
  }

  return (
    <div>
      <label>{inputLabel}</label>
      <input type="number" onChange={handleChange}></input>
    </div>
  );
}

export default UserInput;
