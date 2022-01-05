const Tokenomics = () => {
  const dataList = [
    { key: "Token", value: "AlphaX ($APX)", isLocked: false },
    { key: "Total supply", value: "01 Quadrillion", isLocked: false },
    { key: "Initial burn", value: "10%", isLocked: false },
    { key: "Liquidity", value: "50%", isLocked: false },
    { key: "Quaterly burn", value: "05%", isLocked: true },
    { key: "Team share", value: "20%", isLocked: true },
    { key: "Marketing", value: "15%", isLocked: true },
  ];

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
                {dataList.map((dataItem) => (
                  <tr>
                    <td className="ff-consolas fw-bold">{dataItem.key}</td>
                    <td className="ff-consolas">
                      {dataItem.value}
                      {dataItem.isLocked && <i className="bi bi-lock-fill"></i>}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
