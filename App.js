var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CareerVerse Explorer</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@300;400;700&display=swap');\n\n        :root {\n            --primary-color: #00ffff;\n            --secondary-color: #ff00ff;\n            --background-color: #000033;\n            --text-color: #ffffff;\n        }\n\n        body, html {\n            margin: 0;\n            padding: 0;\n            font-family: 'Roboto', sans-serif;\n            background-color: var(--background-color);\n            color: var(--text-color);\n            overflow-x: hidden;\n        }\n\n        .container {\n            max-width: 1200px;\n            margin: 0 auto;\n            padding: 0 20px;\n        }\n\n        header {\n            background-color: rgba(0, 0, 0, 0.7);\n            padding: 20px 0;\n            position: fixed;\n            width: 100%;\n            z-index: 1000;\n            transition: background-color 0.3s ease;\n        }\n\n        header.scrolled {\n            background-color: rgba(0, 0, 0, 0.9);\n        }\n\n        nav {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n\n        .logo {\n            font-family: 'Orbitron', sans-serif;\n            font-size: 28px;\n            font-weight: bold;\n            color: var(--primary-color);\n            text-shadow: 0 0 10px var(--primary-color);\n        }\n\n        .nav-links {\n            display: flex;\n            gap: 20px;\n        }\n\n        .nav-links a {\n            color: var(--text-color);\n            text-decoration: none;\n            transition: color 0.3s ease;\n            font-family: 'Orbitron', sans-serif;\n        }\n\n        .nav-links a:hover {\n            color: var(--primary-color);\n            text-shadow: 0 0 5px var(--primary-color);\n        }\n\n        .hero {\n            height: 100vh;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n            background: linear-gradient(rgba(0, 0, 51, 0.7), rgba(0, 0, 51, 0.7)), url('/api/placeholder/1200/800') no-repeat center center;\n            background-size: cover;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .hero::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: \n                radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),\n                radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),\n                radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),\n                radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);\n            background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;\n            background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;\n            animation: bgAnimation 15s linear infinite;\n        }\n\n        @keyframes bgAnimation {\n            0% { background-position: 0 0, 40px 60px, 130px 270px, 70px 100px; }\n            100% { background-position: 550px 550px, 390px 410px, 380px 820px, 220px 650px; }\n        }\n\n        .hero-content {\n            max-width: 800px;\n            position: relative;\n            z-index: 1;\n        }\n\n        h1 {\n            font-family: 'Orbitron', sans-serif;\n            font-size: 48px;\n            margin-bottom: 20px;\n            animation: glow 2s ease-in-out infinite alternate;\n        }\n\n        @keyframes glow {\n            from {\n                text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px var(--primary-color), 0 0 20px var(--primary-color);\n            }\n            to {\n                text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px var(--primary-color), 0 0 40px var(--primary-color);\n            }\n        }\n\n        .hero p {\n            font-size: 18px;\n            margin-bottom: 30px;\n            animation: fadeInUp 1s ease 0.2s;\n        }\n\n        .cta-button {\n            display: inline-block;\n            background-color: var(--primary-color);\n            color: var(--background-color);\n            padding: 12px 24px;\n            border-radius: 30px;\n            text-decoration: none;\n            font-weight: bold;\n            transition: all 0.3s ease;\n            animation: fadeInUp 1s ease 0.4s;\n            font-family: 'Orbitron', sans-serif;\n            text-transform: uppercase;\n            letter-spacing: 1px;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .cta-button:hover {\n            background-color: var(--secondary-color);\n            box-shadow: 0 0 20px var(--secondary-color);\n            transform: scale(1.05);\n        }\n\n        .cta-button::before {\n            content: '';\n            position: absolute;\n            top: -50%;\n            left: -50%;\n            width: 200%;\n            height: 200%;\n            background: rgba(255, 255, 255, 0.1);\n            transform: rotate(45deg);\n            z-index: -1;\n            transition: all 0.3s ease;\n        }\n\n        .cta-button:hover::before {\n            left: 100%;\n        }\n\n        .features {\n            padding: 100px 0;\n            text-align: center;\n            position: relative;\n        }\n\n        .features::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: linear-gradient(45deg, var(--background-color) 25%, transparent 25%, transparent 75%, var(--background-color) 75%, var(--background-color)),\n                        linear-gradient(45deg, var(--background-color) 25%, transparent 25%, transparent 75%, var(--background-color) 75%, var(--background-color));\n            background-size: 60px 60px;\n            background-position: 0 0, 30px 30px;\n            opacity: 0.1;\n        }\n\n        .feature-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n            gap: 40px;\n            margin-top: 50px;\n        }\n\n        .feature-item {\n            background-color: rgba(255, 255, 255, 0.05);\n            padding: 30px;\n            border-radius: 10px;\n            transition: all 0.3s ease;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .feature-item:hover {\n            transform: translateY(-10px);\n            box-shadow: 0 10px 20px rgba(0, 255, 255, 0.2);\n        }\n\n        .feature-item::before {\n            content: '';\n            position: absolute;\n            top: -50%;\n            left: -50%;\n            width: 200%;\n            height: 200%;\n            background: radial-gradient(circle, var(--primary-color) 10%, transparent 70%);\n            opacity: 0;\n            transform: scale(0);\n            transition: all 0.5s ease;\n        }\n\n        .feature-item:hover::before {\n            opacity: 0.1;\n            transform: scale(1);\n        }\n\n        .feature-icon {\n            font-size: 48px;\n            color: var(--primary-color);\n            margin-bottom: 20px;\n        }\n\n        .mind-map {\n            padding: 100px 0;\n            text-align: center;\n            background-color: rgba(255, 255, 255, 0.05);\n            position: relative;\n        }\n\n        .mind-map::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: \n                linear-gradient(90deg, var(--background-color) 10px, transparent 1%) center,\n                linear-gradient(var(--background-color) 10px, transparent 1%) center,\n                rgba(255, 255, 255, 0.1);\n            background-size: 12px 12px;\n        }\n\n        .mind-map-container {\n            margin-top: 50px;\n            position: relative;\n            height: 400px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n\n        .mind-map-node {\n            position: absolute;\n            width: 120px;\n            height: 120px;\n            border-radius: 50%;\n            background-color: var(--primary-color);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-weight: bold;\n            transition: all 0.3s ease;\n            cursor: pointer;\n            font-family: 'Orbitron', sans-serif;\n        }\n\n        .mind-map-node:hover {\n            transform: scale(1.1);\n            box-shadow: 0 0 20px var(--primary-color);\n        }\n\n        footer {\n            background-color: rgba(0, 0, 0, 0.8);\n            padding: 20px 0;\n            text-align: center;\n        }\n\n        .social-links {\n            margin-top: 20px;\n        }\n\n        .social-links a {\n            color: var(--text-color);\n            font-size: 24px;\n            margin: 0 10px;\n            transition: all 0.3s ease;\n        }\n\n        .social-links a:hover {\n            color: var(--primary-color);\n            transform: scale(1.2);\n        }\n\n        .modal {\n            display: none;\n            position: fixed;\n            z-index: 2000;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            background-color: rgba(0, 0, 0, 0.8);\n        }\n\n        .modal-content {\n            background-color: var(--background-color);\n            margin: 10% auto;\n            padding: 20px;\n            border: 1px solid var(--primary-color);\n            width: 80%;\n            max-width: 600px;\n            border-radius: 10px;\n            box-shadow: 0 0 20px var(--primary-color);\n        }\n\n        .close {\n            color: var(--primary-color);\n            float: right;\n            font-size: 28px;\n            font-weight: bold;\n            cursor: pointer;\n        }\n\n        .close:hover {\n            color: var(--secondary-color);\n        }\n\n        .career-list {\n            list-style-type: none;\n            padding: 0;\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n            gap: 10px;\n        }\n\n        .career-item {\n            background-color: rgba(255, 255, 255, 0.1);\n            padding: 10px;\n            border-radius: 5px;\n            cursor: pointer;\n            transition: all 0.3s ease;\n        }\n\n        .career-item:hover {\n            background-color: var(--primary-color);\n            color: var(--background-color);\n        }\n\n        @media (max-width: 768px) {\n            h1 {\n                font-size: 36px;\n            }\n\n            .hero p {\n                font-size: 16px;\n            }\n\n            .feature-grid {\n                grid-template-columns: 1fr;\n            }\n\n            .mind-map-container {\n                height: 300px;\n            }\n        }\n    " }} />
        <header>
          <div className="container">
            <nav>
              <div className="logo">CareerVerse</div>
              <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#mind-map">Mind Map</a>
                <a href="#contact">Contact</a>
              </div>
            </nav>
          </div>
        </header>
        <main>
          <section id="home" className="hero">
            <div className="hero-content">
              <h1>Explore Your Career Universe</h1>
              <p>Discover millions of career possibilities through immersive simulations and personalized mind maps.</p>
              <a href="#" className="cta-button" id="start-journey">Start Your Journey</a>
            </div>
          </section>
          <section id="features" className="features">
            <div className="container">
              <h2>Unlock Your Potential</h2>
              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-vr-cardboard" />
                  </div>
                  <h3>Immersive Simulations</h3>
                  <p>Experience 'A day In life of' through our options based simulator.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-sitemap" />
                  </div>
                  <h3>Interactive Mind Maps</h3>
                  <p>Visualize your career options and pathways with our dynamic, customizable mind maps.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-users" />
                  </div>
                  <h3>Expert Mentorship</h3>
                  <p>Connect with Career counsellors for guidance and real-world insights.</p>
                </div>
              </div>
            </div>
          </section>
          <section id="mind-map" className="mind-map">
            <div className="container">
              <h2>Your Career Universe</h2>
              <p>Explore the interconnected web of career possibilities tailored to your profile.</p>
              <div className="mind-map-container">
                {/* Mind map nodes will be dynamically added here */}
              </div>
            </div>
          </section>
        </main>
        <footer id="contact">
          <div className="container">
            <p>© 2024 CareerVerse Explorer. All rights reserved.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook" /></a>
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-linkedin" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
            </div>
          </div>
        </footer>
        <div id="careerModal" className="modal">
          <div className="modal-content">
            <span className="close">×</span>
            <h2>Choose Your Career Path</h2>
            <ul className="career-list">
              <li className="career-item" data-page="medical.html">Surgeon</li>
              <li className="career-item" data-page="law.html">Criminal Lawyer</li>
              <li className="career-item">Architect</li>
              <li className="career-item">Teacher</li>
              <li className="career-item">Software Engineer</li>
              <li className="career-item">Chef</li>
              <li className="career-item">Accountant</li>
              <li className="career-item">Journalist</li>
              <li className="career-item">Pharmacist</li>
              <li className="career-item">Psychologist</li>
              <li className="career-item">Pilot</li>
              <li className="career-item">Veterinarian</li>
              <li className="career-item">Electrician</li>
              <li className="career-item">Marketing Manager</li>
              <li className="career-item">Dental Hygienist</li>
              <li className="career-item">Financial Advisor</li>
              <li className="career-item">Graphic Designer</li>
              <li className="career-item">Mechanical Engineer</li>
              <li className="career-item">Social Worker</li>
              <li className="career-item">Real Estate Agent</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
