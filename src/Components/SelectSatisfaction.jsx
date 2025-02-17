function SelectSatisfaction({ children, value, setValue }) {
  return (
    <label>
      {children}
      <select value={value} onChange={(e) => setValue(Number(e.target.value))}>
        <option value='0'>Disatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing! (20%)</option>
      </select>
    </label>
  );
}

export default SelectSatisfaction;
