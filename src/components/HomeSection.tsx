import React from "react";

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h2>Revolutionizing Workplace Efficiency with Smart Technology!</h2>
        <p>
          Explore our cutting-edge solutions designed to simplify and secure
          your business operations.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="hero-image">
        <img
          src="https://s3-alpha-sig.figma.com/img/be37/ffd1/4be67f34629bd4e447d1cf3a6c023545?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cm5QjLofqJZdYQWy-B3n~FxspLYRvYHsFd8-cMA2RbVrRgtYzT37W9uxB84sD53sB54KPUPwa6VIlDBRRdoMyUPI~Uej4~5iP6umvH8iz764VgT1DYlUiNz10MD-wm1scPkDp018QTdgUqzZJdzYMeYqfacmvhB6g0rVxvziwrl~w0Up11xmvRS5AnGKwBcKtN6isrN0Oqywv3a8bV0ntl6m2i27JbgVNawyV9~HijVR4gWWD-SY3sW1E8bFWzG4v06dzhKmlkc~Hb-QulLLS0kU0BZnr1NQNdEzt6sOpXRy3AvvDc9jHPc4luX8G9yp6CQSEa4-LNCwlGKeSkwB2Q__"
          alt="Revolutionizing Technology"
        />
      </div>
    </section>
  );
};

export default HomeSection;
