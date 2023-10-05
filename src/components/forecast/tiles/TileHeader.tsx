import { IconType } from 'react-icons';

type Props = {
  tileId: string;
  heading: string | JSX.Element; // in case of Degree component
  text?: string | null;
  icon: IconType;
};

const TileHeader = ({ tileId, heading, text, icon: Icon }: Props) => {
  return (
    <>
      <h3 className='tile-header flex' id={`${tileId}-header`}>
        <Icon
          size={24}
          style={{ marginInline: '-5px 2px' }}
        />{' '}
        {heading}
      </h3>
      {text && <p className='tile-large-text'>{`${text} AM`}</p>}
    </>
  );
};

export default TileHeader;
