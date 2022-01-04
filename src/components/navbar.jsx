import "../css/news.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-white fixed-top shadow">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-2 col-sm-12 bg-white">
            <a className="navbar-brand" href="#">
              <img src="./resources/images/logo/alpha-x-logo.svg" alt="" width="24" height="24" />
              Alpha X
            </a>
          </div>
          <div className="col-lg-11 col-md-10 col-sm-12">
            <div className="ticker">
              <div className="news">
                <marquee className="news-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                  </p>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                    quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Ut enim ad minima veniam
                  </p>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
