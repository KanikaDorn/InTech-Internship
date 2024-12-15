import React from "react";

const ProductsSection: React.FC = () => {
  const solutions = [
    {
      title: "Mobile Attendance System",
      description:
        "An intuitive mobile app that makes clocking in and out seamless for employees.",
      image: "src/assets/images/SL.png",
    },
    {
      title: "Face Recognition Attendance System",
      description:
        "Advanced face recognition technology for accurate attendance tracking.",
      image: "src/assets/images/ML.png",
    },
    {
      title: "Smart Laundry System",
      description:
        "Receive weekly QR codes to activate laundry machines with ease.",
      image: "src/assets/images/Group.png",
    },
  ];

  return (
    <section id="products" className="smart-solutions">
      <h2>Our Smart Solutions</h2>
      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <div key={index} className="solution-card">
            <img
              src={solution.image}
              alt={solution.title}
              className="solution-image"
            />
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
