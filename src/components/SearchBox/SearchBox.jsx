import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice'

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const onFilter = (filter) => dispatch(changeFilter(filter));

  return (
    <div className={css.search}>
      <p className={css.label}>Find contacts by name:</p>
      <input className={css.field}
        type="text"
        value={filter}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
