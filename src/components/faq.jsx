const FAQ = () => {
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
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is the contract address of India Coin?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of
                    this with custom CSS or overriding our default variables. It's also worth noting that just about any
                    HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How can I buy?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                    collapse plugin adds the appropriate classes that we use to style each element. These classes
                    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
                    overflow.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What are the benefits of buying $APX?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
                    collapse plugin adds the appropriate classes that we use to style each element. These classes
                    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
                    overflow.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="acHeading4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#acCollapse4"
                    aria-expanded="false"
                    aria-controls="acCollapse4"
                  >
                    What is liquidity mining?
                  </button>
                </h2>
                <div
                  id="acCollapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="acHeading4"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nostrum veritatis temporibus enim
                      possimus eum, consequatur quae repellendus suscipit vitae quia laborum animi illum debitis, maxime
                      deleniti iusto quo? Praesentium?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ducimus quaerat enim a
                      iure iste dolorem nobis, sed sapiente explicabo adipisci omnis incidunt, iusto consequuntur
                      blanditiis molestias, architecto saepe?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laboriosam illum? Debitis minima
                      quam architecto quis facere nostrum laudantium, quas perferendis excepturi quos facilis. Officiis
                      voluptas et perspiciatis illo voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Expedita iure eaque omnis odit rem beatae qui ipsa tempora nulla quasi officiis iusto labore
                      consectetur eveniet perspiciatis aliquam, earum maxime odio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
