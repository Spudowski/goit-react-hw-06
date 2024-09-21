import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filtersSlice.js";
import styles from './SearchBox.module.css';

const SearchBox = ({ isActive }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    isActive && <input className={styles.searchbox}
      type="text"
      placeholder="Search contacts..."
      value={filter}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
