type Props = {
    tileId: string
    heading: string | JSX.Element // in case of Degree component
    text?: string | null
}

const TileHeader = ({tileId, heading, text}: Props) => {
  return (
    <>
        <h3 className='tile-header' id={`${tileId}-header`}>
            {heading}
        </h3>
        {text && (
        <p className='tile-large-text'>
          {`${text} AM`}
        </p>
        )}

    </>
  )
}

export default TileHeader