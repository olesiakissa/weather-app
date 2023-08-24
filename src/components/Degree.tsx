interface Props {
  temp: number
  spanId?: string | undefined
}

const Degree = ({temp, spanId = ''} : Props): JSX.Element => (
    <>
      <span id={spanId}>
        {temp}
        <sup>o</sup>
      </span>
    </>
  )
  
export default Degree