import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <img
          src="https://s3-alpha-sig.figma.com/img/4537/05a9/b0c12226f00763fd5b929805c82b6e4c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQrBHnTgbjKXUjAEdJlmBcpDxwnjI7aeBxYNfU3qjT8JwQGBiSdSpDhViczVFuGAV7q~VPU-tyPC-qKcdPni7iIThJlHPjoB-q5OSTbnsUzTXmJwT8d3ydEUTJB9JAGL2jWB4usCQY~cCYfiHinSUh7~YxFKuhoaFAH6WRThl4N-HrQYvJwNs-0WOl-wlKspuXiiGFkUPnHMXd5IsL5ztWVa298dq79W2nkckTA1Z80DJp0ClwK7nE-PyRuaGbxmGp2JOMjpqhCJR3HGqeDAW6weDXLtzBO8msCw6pO1y3tvQi4pgvSStbPkXXNbXyk~loeAQ0eYY9Cq8NJ3zraBLA__"
          alt="About InTech"
          className="about-image"
        />
        <div className="about-text">
          <h2>About InTech</h2>
          <h3>Mission</h3>
          <p>
            Revolutionize workplace efficiency and security through innovative
            smart technology solutions.
          </p>
          <h3>Vision</h3>
          <p>
            Be the leading provider of cutting-edge smart technology, creating
            smarter, more efficient, and secure work environments for businesses
            of all sizes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
