const Banner = () => {
  return (
    <header className="banner text-center">
      <div className="text-white p-5 bg-black-tr">
        <img src="./resources/images/logo/alpha-x-logo-white.svg" alt="" width="128" height="128" />

        <h1 className="">Alpha X</h1>

        <h4 className="">
          &ldquo;An ecosystem which will creates secure <br />
          and easy-to-use yield enhancing vaults <br />
          on multiple blockchains.&rdquo;
        </h4>
      </div>

      <div className="container text-center mt-3">
        <div className="row gx-lg-5 g-1">
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
              rel="noreferrer"
            >
              <i className="bi bi-box-arrow-up-right"></i>
              &nbsp; Explore
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
