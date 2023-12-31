import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className ='header'>
        <h1>{title}</h1>
        {location.pathname !== '/TaskTracker/about' && (
          <Button 
          color ={showAdd ? 'maroon' : 'green'}
          text = {showAdd ? 'Close' : 'Add'} 
          onClick={onAdd} />
        )}
    </header>
  )
}

Header.defaultProps = {
    title: 'Mini Task Tracker',
}


export default Header