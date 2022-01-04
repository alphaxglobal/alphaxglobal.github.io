const UsefulLinks = () => {
  return (
    <section className="p-5 bg-light border-top border-2" id="useful-links">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <h5>
            About&nbsp;
            <img src="./resources/images/logo/alpha-x-logo-black.svg" alt="logo" width="18" />
            &nbsp;
            <b>AlphaX</b>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis inventore voluptatum. Ea molestias
            odio fuga officiis eos tempore magni illo, ratione asperiores reprehenderit labore molestiae nihil.
            Molestias, ut eius!
          </p>
        </div>

        <div className="col-md-4 col-sm-12 my-2">
          <h5 className="fs-3 text-dark">
            <i className="bi bi-link-45deg"></i>
            Useful links
          </h5>
          <div className="container">
            <div className="mb-2 border-bottom border-1">
              <a
                href="https://bscscan.com/token/0x27501de2ad9688fd620ed07a546b08ea6796327a"
                className="text-decoration-none"
              >
                BSCscan
              </a>
            </div>
            <div className="mb-2 border-bottom border-1">
              <a
                href="https://bscscan.com/token/0x27501de2ad9688fd620ed07a546b08ea6796327a"
                className="text-decoration-none"
              >
                Suspendisse
              </a>
            </div>
            <div className="mb-2 border-bottom border-1">
              <a
                href="https://bscscan.com/token/0x27501de2ad9688fd620ed07a546b08ea6796327a"
                className="text-decoration-none"
              >
                Dellentesque habitant
              </a>
            </div>
            <div className="mb-2 border-bottom border-1">
              <a
                href="https://bscscan.com/token/0x27501de2ad9688fd620ed07a546b08ea6796327a"
                className="text-decoration-none"
              >
                Etiam sollicitudin
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 my-2 text-start text-muted">
          <h5 className="fs-3 text-dark">Social</h5>

          <div className="container">
            <div className="mb-2 border-bottom border-1">
              <i className="bi bi-telegram me-2"></i>
              <a href="#" className="text-decoration-none">
                Telegram
              </a>
            </div>

            <div className="mb-2 border-bottom border-1">
              <i className="bi bi-twitter me-2"></i>
              <a href="#" className="text-decoration-none">
                Twitter
              </a>
            </div>

            <div className="mb-2 border-bottom border-1">
              <i className="bi bi-instagram me-2"></i>
              <a href="#" className="text-decoration-none">
                Instagram
              </a>
            </div>

            <div className="mb-2 border-bottom border-1">
              <i className="bi bi-facebook me-2"></i>
              <a href="#" className="text-decoration-none">
                Facebook
              </a>
            </div>

            <div className="mb-2 border-bottom border-1">
              <i className="bi bi-github me-2"></i>
              <a href="#" className="text-decoration-none">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;
