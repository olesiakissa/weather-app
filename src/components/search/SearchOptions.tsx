import { useEffect, useRef } from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import { OptionType } from '../../types';
import { nanoid } from 'nanoid';

type Props = {
  setShouldFocusSearchButton: (shouldFocus: boolean) => void;
  setShouldExecuteClick: (shouldExecute: boolean) => void;
};

const SearchOptions = ({
  setShouldFocusSearchButton,
  setShouldExecuteClick,
}: Props): JSX.Element => {
  const { options, onOptionSelect } = useAppContext() as {
    options: [] | undefined;
    onOptionSelect: (option: OptionType) => void;
  };

  const ulRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const current = ulRef.current;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && (e.target as HTMLLIElement).dataset.option) {
        onOptionSelect(
          JSON.parse(String((e.target as HTMLLIElement).dataset.option))
        );
        setShouldExecuteClick(false);
        setShouldFocusSearchButton(true);
      }
    };

    if (current) {
      current.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (current) {
        current.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [onOptionSelect, setShouldExecuteClick, setShouldFocusSearchButton]);

  return (
    <section id='locations'>
      <ul ref={ulRef} tabIndex={-1}>
        {options &&
          options.map((option: OptionType) => (
            <li
              key={nanoid()}
              tabIndex={0}
              data-option={JSON.stringify(option)}
            >
              <button
                tabIndex={-1}
                className='location-option'
                onClick={() => onOptionSelect(option)}
              >
                {option.name}, {option.country}
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default SearchOptions;
