import React from 'react';
import image1 from '../images/london.jpg';

class CityPage extends React.Component {

  //make api call for cities, should also get the comment id's with it. 

  render () {
    return (
      <div className="container-fluid cities">
        <div className="col-6 col-md-4" id="cities-container">
          <span className="cities-card">Cities</span>

          <div className="card mb-3" id="city-container">
            <div className="row g-0" id="city-card">
              <div className="col-md-4">
                <img src={image1} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body" id="city-body">
                  <span className="city-title">London</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" id="city-container">
            <div className="row g-0" id="city-card">
              <div className="col-md-4">
                <img src={image1} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body" id="city-body">
                  <span className="city-title">London</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" id="city-container">
            <div className="row g-0" id="city-card">
              <div className="col-md-4">
                <img src={image1} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body" id="city-body">
                  <span className="city-title">London</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" id="city-container">
            <div className="row g-0" id="city-card">
              <div className="col-md-4">
                <img src={image1} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body" id="city-body">
                  <span className="city-title">London</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" id="city-container">
            <div className="row g-0" id="city-card">
              <div className="col-md-4">
                <img src={image1} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body" id="city-body">
                  <span className="city-title">London</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="col-md-8">
          <div className="container-fluid" id="cities">
          <p>hello</p>
          </div>
          <div className="container-fluid" id="city-post">
          <p>hi</p>
          </div>
        </div>
      </div>



    //   <div className="container">
    //     <div className="cities-list">
    //       <h1>cities</h1>
    //       <ul>
    //         <li>City</li>
    //         <li>City</li>
    //         <li>City</li>
    //         <li>City</li>
    //       </ul>
    //     </div>
    //     <div className="city-show">

    //       <div className="city-header row">
    //         <div className="city-title">
    //           <h1>CityName</h1>
    //           <h2>Country</h2>  
    //         </div>
    //         <div className="city-pic">
    //           <img src="" alt=""/>
    //         </div>
    //       </div>

    //       <div className="post-container">
    //         <h2>Posts</h2>
    //         <ul>
    //           <li>POST</li>
    //           <li>POST</li>
    //         </ul>
    //       </div>
    //     </div>

    // </div>
    )
  }
}

export default CityPage;