import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import './styles/Header.module.css'
import Button from './Button';
import PropTypes from 'prop-types'

const Header = ({ title }) => {
    const dispatch = useDispatch();
    const showForm = useSelector(store => store.showForm);

    const toggleForm = () => {
        dispatch({ type: 'TOGGLE_FORM' });
    }
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