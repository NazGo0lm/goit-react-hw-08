import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';


const SearchBox = () => {
  const searchFieldId = useId();
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor={searchFieldId}>Find contacts by name and number</label>
      <input
        id={searchFieldId}
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;