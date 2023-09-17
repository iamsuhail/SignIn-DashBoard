import React from "react";
import { MaskGroup } from "../components/MaskGroup";
import { Navigation } from "../components/Navigation";
import { useEffect, useState } from "react";
import "./Dashboard.css";
import {FetchData} from '../components/FetchData'
import {DonutChart} from '../components/DonutChart'

function Login(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone,setPhone] = useState('')

    const handleLogin = ()=> {
      const profile = { username, email, phoneNumber };
      props.onAddProfile(profile);
    }

    return (
        <div className="popup">
          <div className="header-module">
      <div className="header-holder">
        <div className="title">Add New Profile</div>
        <img className="button" alt="Button" src="button.svg" />
      </div>
      <img className="divider" alt="Divider" src="divider.svg" />
    </div>
            <div className="popup-inner">
                <h2>Add New Profile</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        Enter Name*
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Enter Email*
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Enter Number*
                        <input type="number" value={phone} onChange={e => setPhone(e.target.value)} />
                    </label>
                    <button className="btn-next" type="submit">Next</button>
                    <button type="submit"onClick={props.toggle}>Close</button>
                </form>
            </div>
        </div>
        
    )
}

const Dashboard = () => {
    const [seen, setSeen] = useState(false)
    const [profiles, setProfiles] = useState([]);
    const onAddProfile = (profile) => {
      setProfiles([...profiles, profile]);
    };
    function togglePop () {
        setSeen(!seen);
    };
  return (
    <div className="dashboard">
      <div className="div-2">
        <Navigation className="navigation-instance" />
        <div className="overlap">
          <div className="frame">
            <div className="frame-2">
              <div className="overlap-group">
                <img className="vector" alt="Vector" src="https://c.animaapp.com/jN1ylutF/img/vector-5.svg" />
              </div>
            </div>
            <div className="frame-2">
              <div className="vector-wrapper">
                <img className="img" alt="Vector" src="https://c.animaapp.com/jN1ylutF/img/vector-4.svg" />
              </div>
              <div className="frame-3">
                <div className="frame-4">
                  <div className="text-wrapper-8">Total Transactions</div>
                  <div className="text-wrapper-9">1,520</div>
                </div>
                <div className="label">
                  <div className="label-text">+1.7%</div>
                </div>
              </div>
            </div>
            <div className="frame-2">
              <div className="img-wrapper">
                <img className="vector-2" alt="Vector" src="https://c.animaapp.com/jN1ylutF/img/vector-3.svg" />
              </div>
              <div className="frame-5">
                <div className="frame-4">
                  <div className="text-wrapper-8">Total Likes</div>
                  <div className="text-wrapper-10">9,721</div>
                </div>
                <div className="label">
                  <div className="label-text-2">+1.4%</div>
                </div>
              </div>
            </div>
            <div className="frame-6">
              <div className="overlap-2">
                <img className="vector-3" alt="Vector" src="https://c.animaapp.com/jN1ylutF/img/vector-2.svg" />
              </div>
              <div className="frame-5">
                <div className="frame-4">
                  <div className="text-wrapper-8">Total Users</div>
                  <div className="text-wrapper-10">9,721</div>
                </div>
                <div className="label">
                  <div className="label-text-2">+4.2%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-7">
            <div className="frame-4">
              <div className="text-wrapper-8">Total Revenues</div>
              <div className="text-wrapper-9">$2,129,430</div>
            </div>
            <div className="label">
              <div className="label-text-2">+2.5%</div>
            </div>
          </div>
          <div className="activities-card">
              <div className="card" >
              <div className="chart" ><FetchData /></div>
              </div>
              <div className="text-wrapper-13">Activities</div>
              <div className="group">
                <div className="text-wrapper-14">May - June 2021</div>
              </div>
              
          </div>
          
          
        </div>
        <div className="overlap-4">
          <div className="top-products-card">
            <div className="overlap-5">
              <div className="card-wrapper">
                <div className="div-3" />
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-23">May - June 2021</div>
              </div>
              <div className="text-wrapper-24">Top products</div>
            </div>
          </div>
          <div className="overlap-wrapper">
              <DonutChart />
          </div>
        </div>
        <header className="header">

          <div className="text-wrapper-25">Dashboard</div>
          <div className="search-bar">
            <div className="overlap-7">
              <div className="text-wrapper-26">Search...</div>
              <div className="search-icon">
                <div className="overlap-group-3">
                  <div className="ellipse-7" />
                  <img className="line-3" alt="Line" src="" />
                </div>
              </div>
            </div>
          </div>
          <MaskGroup className="mask-group-instance" maskGroup="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1K-1bHdbdKgxfULiCVgKS-049Nc42iSu6vr2JEds_w&s" />
          <img className="vector-5" alt="Vector" src="https://c.animaapp.com/jN1ylutF/img/vector.svg" />
        </header>
        <div className="overlap-group-wrapper">
          <div className="div-3">
            <div className="frame-8">
              <div className="controls-wrapper">
                <img className="controls" alt="Controls" src="https://c.animaapp.com/jN1ylutF/img/controls.svg" onClick={togglePop}/>
              </div>
                <button className="text-wrapper-27" onClick={togglePop}>Add New Profile</button>
            {seen ? <Login onAddProfile={onAddProfile} toggle={togglePop} /> : null}
            </div>
        <div>
          <ul>
          {profiles.map((profile, index) => (
            <li key={index}>
              Username: {profile.username}, Email: {profile.email}, Phone: {profile.phone}
            </li>
          ))}
        </ul>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;