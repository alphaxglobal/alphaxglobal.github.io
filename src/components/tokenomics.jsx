const Tokenomics = () => {
  return (
    <section className="bg-light" id="tokenomics">
      <div className="container p-5">
        <div className="row g-3">
          <div className="col-md-4 col-sm-12 p-0 text-center">
            <i className="bi bi-pie-chart-fill fs-xxl text-primary"></i>
          </div>
          <div className="col-md-8 col-sm-12 text-start">
            <h1 className="">Token distribution</h1>
            <p className="mb-3">
              The AlphaX token ($APX) is the native asset of our ecosystem. Users are able to participate in the growth
              of our platform and earn fees from the different business lines by holding it.
            </p>

            <div className="table-responsive">
              <table className="table  text-start">
                <tr>
                  <td>
                    <strong>Token</strong>
                  </td>
                  <td>AlphaX ($APX)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total supply</strong>
                  </td>
                  <td>01 Quadrillion</td>
                </tr>
                <tr>
                  <td>
                    <strong>Initial burn</strong>
                  </td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>
                    <strong>Liquidity</strong>
                  </td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td>
                    <strong>Quaterly burn</strong>
                  </td>
                  <td>
                    05%<i className="bi bi-lock-fill"></i>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <strong>Team share</strong>
                  </td>
                  <td>
                    10%<i className="bi bi-lock-fill"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Marketing</strong>
                  </td>
                  <td>
                    05%<i className="bi bi-lock-fill"></i>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
