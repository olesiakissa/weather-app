import { useAppContext } from '../../../hooks/useAppContext';
import { useNavigate } from 'react-router-dom';
import { ForecastType, OptionType } from '../../../types';

const SearchButton = (): JSX.Element => {
  const { location, getForecast, setSearchInput } = useAppContext() as {
    location: OptionType | null;
    getForecast: (value: OptionType | null) => Promise<ForecastType>;
    setSearchInput: (value: string | undefined) => void;
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    await getForecast(location);
    navigate('forecast');
    setSearchInput('');
  };

  return (
    <button id='search-btn' name='search' type='button' onClick={handleClick}>
      <svg
        role='graphics-symbol'
        aria-hidden='true'
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
  );
};

export default SearchButton;
