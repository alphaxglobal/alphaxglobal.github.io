import "../css/roadmap.css";

const Roadmap = () => {
  return (
    <section className="bg-light" id="roadmap">
      <div className="container p-4">
        <div className="row">
          <h1 className="text-center">Future roadmap (2022)</h1>

          <div className="col-md-12">
            <div className="main-timeline3">
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">JAN</span>
                </div>
                <div className="timeline-content rounded">
                  <h2 className="title">Presale</h2>
                  <p className="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quaerat dignissimos nemo laborum
                    itaque quae, neque dolorum distinctio blanditiis incidunt labore,
                  </p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">April</span>
                </div>
                <div className="timeline-content rounded">
                  <h3 className="title">Initial burn</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente fugiat libero officia
                    earum fugit, praesentium quis placeat explicabo
                  </p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">July</span>
                </div>
                <div className="timeline-content rounded">
                  <h3 className="title">Hotbit launch</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laborum! Consectetur laboriosam
                    fugit, fugiat molestiae expedita ut omnis
                  </p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">Sep</span>
                </div>
                <div className="timeline-content rounded">
                  <h3 className="title">Free NFTs</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea minima officia libero non repellendus
                    quas molestias in, tempore quia asperiores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
