import "../css/news.css";

const NavBar = () => {
  const dataList = [
    {
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      item: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      item: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
  ];

  return (
    <nav className="navbar navbar-light bg-white fixed-top shadow">
      <div className="container-fluid">
        <div className="row gx-3 w-100">
          <div className="col-1 bg-white">
            <a className="navbar-brand" href="#">
              <img src="./resources/images/logo/alpha-x-logo.svg" alt="" width="24" height="24" />
              Alpha X
            </a>
          </div>
          <div className="col-lg-11 col-md-10 col-sm-12">
            <div className="ticker">
              <div className="news w-100">
                <marquee className="news-content">
                  {dataList.map((dataItem) => (
                    <p>{dataItem.item}</p>
                  ))}
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
