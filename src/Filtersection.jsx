import React, { useState } from 'react';
import './FilterSection.css';

const FilterCategory = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="filter-category">
      <div className="filter-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span>{open ? '−' : '+'}</span>
      </div>
      {open && <div className="filter-content">{children}</div>}
    </div>
  );
};

const FilterSection = () => {
  return (
    <div className="filter-section">
      <h3>FILTERS</h3>
      <FilterCategory title="Price">
        <label><input type="checkbox" /> Under ₹1000</label><br />
        <label><input type="checkbox" /> ₹1000 - ₹5000</label><br />
        <label><input type="checkbox" /> Above ₹5000</label>
      </FilterCategory>

      <FilterCategory title="Discount %">
        <label><input type="checkbox" /> 10% or more</label><br />
        <label><input type="checkbox" /> 20% or more</label>
      </FilterCategory>

      <FilterCategory title="Sub Categories">
        <label><input type="checkbox" /> Sherwanis</label><br />
        <label><input type="checkbox" /> Kurtas</label>
      </FilterCategory>

      <FilterCategory title="Color">
        <label><input type="checkbox" /> Red</label><br />
        <label><input type="checkbox" /> Blue</label><br />
        <label><input type="checkbox" /> Gold</label>
      </FilterCategory>
    </div>
  );
};

export default FilterSection;