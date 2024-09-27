import './navbar.scss'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className='logo'>
        <img src='logo.png' alt='logo'/>
        <span>Ridesmash Admin</span>
      </div>
      <div className='icons'>
        <img src='/search.svg' alt='search' className='icon'/>
        <img src='/app.svg' alt='app' className='icon'/>
        <img src='/expand.svg' alt='expand' className='icon'/>
        <div className='notifications'>
          <img src='/notifications.svg' alt='notification' />
          <span>1</span>
        </div>
        <div className='user'>
          <img src='/avatar.jpg' alt='notification'/>
          <span>Abiodun</span>
        </div>
        <img src='/settings.svg' alt='settings' className='icon'/>
        
      </div>
    </div>
  )
}

export default Navbar
