import "../css/timeline.css";

const TimeLine = () => {
  const dataList = [
    {
      month: "Jan",
      year: "2022",
      title: "Presale",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt earum, eaque molestiae tempora fuga veritatis blanditiis quidem optio consequatur eius nam suscipit, delectus, laborum aspernatur eos sapiente officia aperiam doloremque!",
    },
    {
      month: "April",
      year: "2022",
      title: "Initial burn",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloribus, laudantium ratione magni deserunt corporis, labore reprehenderit facilis eos iste quam laboriosam quos recusandae vitae minus amet maxime autem non!",
    },
    {
      month: "July",
      year: "2022",
      title: "Launch on exchange",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam voluptate repellat earum nam fuga sequi aliquid. Beatae aliquid suscipit quam saepe at, consectetur, odio provident, corporis officiis blanditiis laboriosam voluptatum!",
    },
    {
      month: "Sep",
      year: "2022",
      title: "Free NFTs & more",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex a odit voluptate quibusdam pariatur sequi perspiciatis quis labore ullam, saepe ratione odio cum voluptatem, doloremque, eos quia. Error, minima architecto?",
    },
  ];
  return (
    <section className="bg-light" id="roadmap">
      <div className="container-fluid p-4">
        <div className="row">
          <h1 className="text-center mb-4">Future roadmap (2022)</h1>

          <div className="col-md-12">
            <div class="timeline-container">
              {dataList.map((dataItem) => (
                <div className="timeline">
                  <div className="icon"></div>
                  <div className="date-content">
                    <div className="date-outer">
                      <span className="date">
                        <span className="month">{dataItem.month}</span>
                        <span className="year">{dataItem.year}</span>
                      </span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h5 className="title">{dataItem.title}</h5>
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

export default TimeLine;
