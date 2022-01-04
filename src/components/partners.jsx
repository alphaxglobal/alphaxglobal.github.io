const Partners = () => {
  return (
    <section className="bg-white" id="partners">
      <div className="container p-5 text-center">
        <h1 className="text-center mb-4">Will be available soon on</h1>
        <div className="row g-5 align-items-center justify-content-around">
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="partner-img">
              <a href="#" target="_blank">
                <img src="./resources/images/logo/alpha-x-logo.svg" width="128px" height="128px" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="partner-img">
              <a href="https://bscscan.com/token/0x27501de2ad9688fd620ed07a546b08ea6796327a" target="_blank">
                <img src="./resources/images/logo/3p/bscscan.svg" width="128px" height="128px" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="partner-img">
              <a href="https://pancakeswap.finance/" target="_blank">
                <img src="./resources/images/logo/3p/pancakeswap.svg" width="128px" height="128px" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="partner-img">
              <a href="https://www.bitmart.com/" target="_blank">
                <img src="./resources/images/logo/3p/bitmart.svg" width="128px" height="128px" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="partner-img">
              <a href="https://www.kucoin.com/" target="_blank">
                <img src="./resources/images/logo/3p/kucoin.svg" width="128px" height="128px" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="partner-img">
              <a href="https://metamask.io/" target="_blank">
                <img src="./resources/images/logo/3p/metamask.svg" width="128px" height="128px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
