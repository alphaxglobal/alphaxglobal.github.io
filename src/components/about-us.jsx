const AboutUs = () => {
  return (
    <section className="bg-light" id="about">
      <div className="container p-lg-5 p-md-3 p-sm-1">
        <h1 className="text-center mb-4">About us</h1>
        {/* <h5 className="text-center">This is some text inside of a div block.</h5> */}
        <div className="row g-3">
          <div className="col-lg-4 col-md-12">
            <div className="bg-white p-5 border rounded shadow-sm">
              <div className="text-center">
                <i className="bi bi-currency-exchange display-1 text-primary"></i>
              </div>
              <h3 className="mt-3">Exchange platform</h3>
              <p className="text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nam eaque suscipit cumque deserunt
                exercitationem sunt assumenda ullam corrupti hic asperiores, harum eligendi molestiae laborum, sit
                quisquam maxime magni porro.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="bg-white p-5 border rounded shadow-sm">
              <div className="text-center">
                <i className="bi bi-coin display-1 text-primary"></i>
              </div>
              <h3 className="mt-3">AlphaX Coin</h3>
              <p className="text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis beatae quisquam
                incidunt ipsum facilis totam magnam dignissimos nemo optio minima soluta, sapiente doloribus vel commodi
                nesciunt eaque sit. Odit.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="bg-white p-5 border rounded shadow-sm">
              <div className="text-center">
                <i className="bi bi-images display-1 text-primary"></i>
              </div>
              <h3 className="mt-3">NFTs</h3>
              <p className="text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium error reprehenderit, animi nulla
                qui vitae recusandae similique doloremque. Provident sint suscipit a totam quasi assumenda officia
                asperiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
