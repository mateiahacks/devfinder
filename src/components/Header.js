import PropTypes from 'prop-types';
import { BsFillSunFill } from 'react-icons/bs';

const Header = ({ onChange, isLight }) => {
    return (
        <header className='d-flex'>
            <a><h1 href='#'>devfinder</h1></a>
            <div className='d-flex'>
                {isLight ? <p>LIGHT</p>:<p>DARK</p>}
                <BsFillSunFill 
                style={{cursor: 'pointer', marginLeft: '20px'}}
                onClick={onChange}
                />
            </div>
        </header>
    );
}

export default Header;