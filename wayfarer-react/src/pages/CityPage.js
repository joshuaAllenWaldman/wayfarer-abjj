import React from 'react';

class CityPage extends React.Component {

  //make api call for cities, should also get the comment id's with it. 

  render () {
    return (
      <div className="container">
        <div className="cities-list">
          <h1>cities</h1>
          <ul>
            <li>City</li>
            <li>City</li>
            <li>City</li>
            <li>City</li>
          </ul>
        </div>
        <div className="city-show">

          <div className="city-header row">
            <div className="city-title">
              <h1>CityName</h1>
              <h2>Country</h2>  
            </div>
            <div className="city-pic">
              <img src="" alt=""/>
            </div>
          </div>

          <div className="post-container">
            <h2>Posts</h2>
            <ul>
              <li>POST</li>
              <li>POST</li>
            </ul>
          </div>
        </div>

    </div>
    )
  }
}

export default CityPage;
