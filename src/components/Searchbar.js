import { BsSearch } from 'react-icons/bs';

const Searchbar = ({ onFetch }) => {
    return (
        <div className='searchbar'>
            <BsSearch className='searchicon'/>
            <input placeholder='Enter GitHub username'></input>
            <div onClick={onFetch} className="btn" type='button'>Search</div>
        </div>
    );
}

export default Searchbar;