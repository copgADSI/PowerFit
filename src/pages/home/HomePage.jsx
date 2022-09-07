import { Link } from 'react-router-dom'
import banner from  '../../assets/images/banner.png'
import './Styles.css'
const HomePage = () => {
  return (
    <div className="home__container" style={{ justifyContent: 'center' }} >
      <div className="info">
        <div className="welcome">
          <h3>Power<span>.Fit</span> </h3>
          <strong>El mejor sitio para entrenar calistenia.</strong><br />
          <img src={banner} style={{marginTop:20}} width={300} height={400} alt="" />
        </div><br />
        {
          !localStorage.getItem('access_token') ??
          <Link to="/signIn">
            <button>Iniciar Sesión</button>
          </Link>
        }
      </div>
    </div>
  )
}

export default HomePage