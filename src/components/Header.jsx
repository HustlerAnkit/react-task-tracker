import { useLocation } from "react-router-dom";

import styles from './styles/Header.module.css'
import Button from './Button';
import PropTypes from 'prop-types'

const Header = ({ title, toggleForm, showForm }) => {
    const location = useLocation();
    return(
        <header>
            <h1>{ title }</h1>
            {
                location.pathname === '/' &&
                <Button text={ showForm ? 'Close' : 'Add Task' } color={ showForm ? 'red' : 'green' } btnClick={ toggleForm } />}
        </header>
    )
};

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;