function Gallery() {
    return(
        <>
        <div style={{marginLeft: '15%', marginTop: '20px', width: '70%', height: '50%'}}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active hover-zoomin">
                  <img style={{height: '500px'}} alt='image' src='https://miro.medium.com/max/748/1*7VFewln8nrykeF7kQyXwLg.png' className="d-block w-100"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide</h5>
                  </div>
                </div>
                <div className="carousel-item  hover-zoomin">
                  <img style={{height: '500px'}} alt='image' src='https://epostalnews.com/wallpaper/wallpaper/20220505/react-js-wallpapers-wallpaper-preview.webp' className="d-block w-100"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide</h5>
                  </div>
                </div>
                <div className="carousel-item  hover-zoomin">
                  <img style={{height: '500px'}} alt='image' src='https://c8.alamy.com/comp/2DAW2TH/react-js-inscription-against-laptop-and-code-background-learn-react-programming-language-computer-courses-training-2DAW2TH.jpg' className="d-block w-100"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide</h5>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </>
    )
}
export default Gallery