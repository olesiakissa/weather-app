import { useAppContext } from '../../../hooks/useAppContext';
import { useNavigate } from 'react-router-dom';
import { ForecastType, OptionType } from '../../../types';
import { useEffect, useRef } from 'react';

type Props = {
  shouldFocus: boolean;
  shouldExecuteClick: boolean;
  setShouldExecuteClick: (shouldExecute: boolean) => void;
};
const SearchButton = ({
  shouldFocus,
  shouldExecuteClick,
  setShouldExecuteClick,
}: Props): JSX.Element => {
  const { location, getForecast, setSearchInput } = useAppContext() as {
    location: OptionType | null;
    getForecast: (value: OptionType | null) => Promise<ForecastType>;
    setSearchInput: (value: string | undefined) => void;
  };

  const searchButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (shouldFocus && searchButton.current) {
      searchButton.current.focus();
      setShouldExecuteClick(false);
    }
  }, [shouldFocus, setShouldExecuteClick]);

  const navigate = useNavigate();

  const handleClick = async () => {
    if (shouldExecuteClick) {
      await getForecast(location);
      navigate('forecast');
      setSearchInput('');
    }
    setShouldExecuteClick(true); // reset the flag after click
  };

  const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <button
      ref={searchButton}
      id='search-btn'
      name='search'
      type='button'
      onClick={handleClick}
      onKeyDown={handleButtonKeyDown}
      tabIndex={0}
    >
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
