import DotLoader from 'react-spinners/DotLoader';

const Loader = () => {
  return (
    <div id='spinner-container' className='flex'>
      <DotLoader color='#ffffff' speedMultiplier={2} />
    </div>
  );
};

export default Loader;
