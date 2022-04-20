import woah from '../../..assets/images/woah.png';

const Error = () => {
  return (
    <div className="error-page">
      <img src={woah} alt="" className="error-page-image" />
      <p>Something went wrong</p>
    </div>
  )
}

export default Error;