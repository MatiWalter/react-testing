import React from 'react'
import Header from '../components/Header'

const Home = () => {

  const links = [
    { name: 'Login', link: '/login', logged: false },
    { name: 'Register', link: '/register', logged: false },
    { name: 'Inicio', link: '/', logged: true}
  ];

  return (
    <div>
      <Header navigation={links} />
      <h1>Home</h1>
    </div>
  )
}

export default Home
