const Banner = () => {
  return (
    <header className="border-top banner text-center">
      <h1 className="banner-heading">
        <img src="./resources/images/logo/alpha-x-logo-white.svg" alt="" width="128" height="128" />
        <br />
        Alpha X
      </h1>

      <h4 className="text-white p-4 my-3 bg-black-tr-3">
        <p className="m-0">
          An ecosystem which will creates secure and easy-to-use yield enhancing vaults on multiple blockchains.
        </p>
      </h4>

      <div className="container text-center">
        <div className="row g-1">
          <div className="col-md-4 col-sm-6">
            <a href="#" className="btn btn-lg btn-light w-100">
              Whitepaper
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="#" className="btn btn-lg btn-outline-light w-100">
              Documentaions
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a
              href="https://bscscan.com/token/0x27501de2ad9688fd620ed07a546b08ea6796327a"
              className="btn btn-lg btn-outline-light w-100"
              target="_blank"
            >
              <i className="bi bi-box-arrow-up-right"></i>
              Explore
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
