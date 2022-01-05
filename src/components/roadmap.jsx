import "../css/roadmap.css";

const Roadmap = () => {
  const dataList = [
    {
      year: "JAN",
      title: "Presale",
      description: "Hic, pariatur, cum ad natus adipisci a iusto explicabo consequatur eius, ratione facere?",
    },
    {
      year: "April",
      title: "Initial burn",
      description: "Quam laborum distinctio excepturi quos itaque exercitationem ipsam eaque!",
    },
    {
      year: "July",
      title: "Hotbit launch",
      description: "Incidunt aliquid hic deleniti voluptatem dolorum fugiat accusantium vel molestias excepturi reicis",
    },
    {
      year: "Sep",
      title: "Free NFTs",
      description: "Placeat neque, voluptatem ad assumenda, non ducimus dolorum fugiat accusantium debitis nulla",
    },
  ];

  return (
    <section className="bg-light" id="roadmap">
      <div className="container p-4">
        <div className="row">
          <h1 className="text-center">Future roadmap (2022)</h1>

          <div className="col-md-12">
            <div className="main-timeline3">
              {dataList.map((dataItem) => (
                <div className="timeline">
                  <div className="timeline-icon">
                    <span className="year">{dataItem.year}</span>
                  </div>
                  <div className="timeline-content rounded">
                    <h2 className="title">{dataItem.title}</h2>
                    <p className="description">{dataItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
