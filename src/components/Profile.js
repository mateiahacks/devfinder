import {CgProfile} from 'react-icons/cg'
import {GoLocation} from 'react-icons/go'
import {BsTwitter} from 'react-icons/bs'
import {BiLink} from 'react-icons/bi'
import {FaGithub} from 'react-icons/fa'
import Searchbar from './Searchbar';
import { useState, useEffect } from 'react';
import { calendarMap } from './cal';

const Profile = () => {
    var userName = "username";
    const [data, setData] = useState({login: "Username"});
    const [calMap, setCalMap] = useState(calendarMap());
    const fetchUser = async () => {
        userName = document.getElementsByTagName("input")[0].value;
        const res = await fetch("https://api.github.com/users/"+userName);
        const result = await res.json();
        setData(result);
        console.log(result);    
    }

    const imgStyle = {
        with: '100px',
        height: '100px',
        marginRight: '20px'
    }
    

    return (
        <div>
            <Searchbar onFetch={fetchUser}/>
            <div className="profile">
                <div className='main-profile d-flex'>
                    <div className='d-flex user'>
                        {data.avatar_url==null ? 
                        <img alt="profile" src="https://avatars.githubusercontent.com/u/84631689?v=4" id="profile_img"style={imgStyle}/>:
                        <img alt="profile" src={data.avatar_url} id="profile_img"style={imgStyle}/>}
                        <div className='main-info'>
                            <h2 style={{margin: '0'}}>{data.login}</h2>
                            {data.bio==null ? <p style={{fontSize: '13px', color: 'grey'}}>This profile has no bio</p>:<p style={{fontSize: '13px', color: 'grey'}}>{data.bio}</p>}
                        </div>
                    </div>
                    {data.created_at!==undefined ? <p style={{marginTop: '-20px', marginRight: '10px'}}>joined {parseInt(data.created_at.substring(8, 10), 10)} {calMap.get(data.created_at.substring(5, 7) )} {data.created_at.substring(0, 4)}</p>:<p>Not avaible</p>}
                </div>
                <div className='stats'>
                    <ul className='d-flex'>
                        <li>
                            <p>Repos</p>
                            {data.public_repos==null ?<h2>0</h2>:<h2>{data.public_repos}</h2>}
                        </li>
                        <li>
                            <p>Followers</p>
                            {data.followers==null ?<h2>0</h2>:<h2>{data.followers}</h2>}
                        </li>
                        <li>
                            <p>Following</p>
                            {data.following==null ?<h2>0</h2>:<h2>{data.following}</h2>}
                        </li>
                    </ul>
                </div>
                <div className="addresses">
                    {data.location==null ? <p style={{color: 'gray'}}><span><GoLocation /></span> Not avaible</p>:<p><span><GoLocation /></span> {data.location}</p>}
                    {data.twitter_username==null ? <p style={{color: 'gray'}}><span><BsTwitter /></span> Not avaible</p>:<p><span><BsTwitter /></span> {data.twitter_username}</p>}
                    {data.html_url==null ? <p id="link" style={{color: 'gray'}}><span><BiLink /></span> Not avaible</p>:<p><span><BiLink /></span> {data.html_url}</p>}
                    <p><span><FaGithub /></span> aGithub</p>
                </div>

            </div>
        </div>
    );
}

export default Profile;