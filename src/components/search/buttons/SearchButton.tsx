import { useAppContext } from '../../../hooks/useAppContext';
import { Link } from 'react-router-dom';

const SearchButton = (): JSX.Element => {
  const { getForecast } = useAppContext() as { getForecast: () => void };

  return (
    <Link to={'/forecast'}>
      <button
        id='search-btn'
        name='search'
        type='button'
        onClick={() => getForecast()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='9'
          height='14'
          viewBox='0 0 9 14'
          fill='none'
        >
          <path d='M1 1L7 7L1 13' stroke='#FFF' strokeWidth='2' />
        </svg>
        <span className='visually-hidden'>Search</span>
      </button>
    </Link>
  );
};

export default SearchButton;
