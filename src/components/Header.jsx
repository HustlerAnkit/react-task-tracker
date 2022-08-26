import { useContext } from "react";
import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";

import './styles/Header.module.css'
import Button from './Button';

const Header = ({ title }) => {
    const { showForm, setShowForm } = useContext(GlobalContext);
    const location = useLocation();
    
    return(
        <header>
            <h1>{ title }</h1>
            {
                location.pathname === '/' &&
                <Button text={ showForm ? 'Close' : 'Add Task' } color={ showForm ? 'red' : 'green' } btnClick={ setShowForm } />
            }
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