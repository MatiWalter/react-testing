import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/auth'

const Header = ({ navigation = [] }) => {

  const dispatch = useDispatch();

  return (
    <div style={styles}>
      <nav style={navbar}>
        {navigation.map((item) => {
            return (
              item.logged && <Link style={a} to={item.link} key={item.name}> {item.name} </Link>
            )
        })}
        <button onClick={() => dispatch(logout())} style={button}>Logout</button>
      </nav>
    </div>
  )
}

export default Header

const styles = {
  minWidth: '100vh',
  backgroundColor: '#418BCC',
}

const navbar = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: '100px',
}

const a = {
  textDecoration: 'none',
  color: '#FFF',
  marginRight: '15px',
  fontSize: '20px'
}

const button = {
  padding: '10px',
  fontSize: '20px',
  marginRight: '10px'
}