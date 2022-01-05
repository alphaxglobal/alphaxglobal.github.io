const FAQ = () => {
  const dataList = [
    {
      q: "What is the contract address of $ApX Token?",
      aList: [
        {
          a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe dolores blanditiis autem quod quis similique voluptates, nihil debitis ad error? Cumque esse, perferendis omnis labore expedita ratione maiores adipisci repellendus!",
        },
      ],
    },
    {
      q: "How can I buy?",
      aList: [
        {
          a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis a corporis nulla doloremque accusantium ipsa nobis illum. Pariatur hic explicabo velit numquam iure consequatur corporis, recusandae rem officiis nulla?",
        },
      ],
    },
    {
      q: "What are the benefits of buying $APX?",
      aList: [
        {
          a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dolor quod aut eius! Odit optio cumque officiis quis corrupti ipsa molestias non blanditiis, culpa, ipsum eum delectus qui, autem dolor.",
        },
      ],
    },
    {
      q: "What is liquidity mining?",
      aList: [
        {
          a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex adipisci, eum praesentium velit necessitatibus dignissimos autem. Quae sapiente laudantium, dolore autem cumque nihil, beatae architecto minima libero suscipit maxime rem.",
        },
        {
          a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex adipisci, eum praesentium velit necessitatibus dignissimos autem. Quae sapiente laudantium, dolore autem cumque nihil, beatae architecto minima libero suscipit maxime rem.",
        },
        {
          a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex adipisci, eum praesentium velit necessitatibus dignissimos autem. Quae sapiente laudantium, dolore autem cumque nihil, beatae architecto minima libero suscipit maxime rem.",
        },
      ],
    },
  ];

  return (
    <section className="bg-white" id="faqs">
      <div className="container p-lg-5">
        <div className="row g-3">
          <div className="col-md-4 col-sm-12 p-0 text-center">
            <i className="bi bi-patch-question fs-xxl text-primary"></i>
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="mb-4">Frequently Asked Questions ?</h1>

            <div className="accordion" id="accordionExample">
              {dataList.map((dataItem, index) => (
                <div className="accordion-item">
                  <h2 className="accordion-header" id={`headingId${index}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseId${index}`}
                      aria-expanded="true"
                      aria-controls={`collapseId${index}`}
                    >
                      {dataItem.q}
                    </button>
                  </h2>
                  <div
                    id={`collapseId${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`headingId${index}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body pb-0">
                      {dataItem.aList.map((ans) => (
                        <p>{ans.a}</p>
                      ))}
                    </div>
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

export default FAQ;
