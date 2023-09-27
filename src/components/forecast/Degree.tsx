export interface Props {
  temp: number
  id?: string | undefined
}

const Degree = ({temp, id} : Props): JSX.Element => (
    <p id={id}>
      {temp}
      <sup>o</sup>
    </p>
  )
  
export default Degree