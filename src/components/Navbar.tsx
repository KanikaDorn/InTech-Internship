import React from "react";
const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://s3-alpha-sig.figma.com/img/ec42/b7f8/5458d66e117f57150064c5a89b3b5e33?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FY3oDk6WxLj30rHGU0flkrkY7uScngxcOzC9OoiE-Xbgt9o3fqRUMEpNCXO~wMfCyiYywE14Krz9iyt26COZmnx9bEvXb9ouiYimq~SvTf-bYe5baRKKpdhsC8jCLT~OrPqMuAYZJbp2370~oGjR81f4oRpP2b2D4tPxSXdSeqtM6xKK7Vbsmkn-OjQkWsbzhoPewzTAb7O0nszN8je68GMQB-0vtkrYIEuskt~SBDawU94ORGax3Tb5DYlXEp9ovNxAKGQju56c2h2Iui6Qs6nBTtMDr~eOzEmJQ9y4lYIuTmdsWX2taeVDVhEduNQjpDmZ-UTANUDyguSpN7-THQ__"
          alt="Logo"
          className="logo-image"
        />
      </div>
      <ul className="navbar-links">
        <li>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("products");
            }}
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <button className="request-demo-button">Request Demo</button>
      </div>
    </nav>
  );
};

export default Navbar;
