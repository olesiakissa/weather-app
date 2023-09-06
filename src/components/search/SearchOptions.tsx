import { useAppContext } from '../../hooks/useAppContext'
import { OptionType } from '../../types'
import { nanoid } from 'nanoid'

const SearchOptions = (): JSX.Element => {
  const { options, onOptionSelect } = useAppContext()

  return (
    <section id='locations'>
        <ul>
        {options.map( (option: OptionType) => (
            <li key={nanoid()}>
            <button className='location-option'
                    onClick={() => onOptionSelect(option)}>
                        {option.name}, {option.country}
            </button>
            </li>
        ))}
        </ul>
    </section> 
  )
}

export default SearchOptions