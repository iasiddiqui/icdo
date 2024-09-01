import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import Slide from './components/slider/Slider';

import './home.css'
import { Slider } from '@mui/material';

const Home = () => {
  console.log('hi')
  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <div className="top-bar">
          <p><span>HYBRID EVENT:</span> You can participate in person at <span>Madrid, Spain or Virtually</span>  from your home or work.</p>
        </div>

        <div className="header-content">
            <div className='logo'>
                <img src='https://dental-conferences.magnusgroup.org//uploads/logo/9th-edition-of-international-conference-on-dentistry-and-oral-health-6344.png'></img>
            </div>

            <div className="conference-info">
            <p>9th Edition of International Conference on</p>
            <h2>
              <div className="title-line">Dentistry</div>
              <div className="title-line">and Oral Health</div>
            </h2>
          </div>

          <div className='center'>
            <img src='https://dental-conferences.magnusgroup.org/assets-front/images/ce-accredited-icdo.png'></img>
          </div>

          <div className="location-contact">
            <p><strong>Location:</strong> Rafaelhoteles Atocha<br/>
            C. de Mendez Alvaro, 30, 28045<br/>
            Madrid, Spain</p>
            <p><strong>Phone:</strong> +1 (702) 988 2320</p>
            <p><strong>Whatsapp:</strong> +1 434 264 7183</p>
            <p><strong>Email:</strong> dental@magnusconference.com</p>
          </div>

          <div className='lower'>
          <p>September 02-04, 2024 | Madrid, Spain</p>
          </div>
        </div>

        {/* navbar */}
        <nav className="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Scientific Committee</a></li>
            <li className="dropdown">
              <a href="#">Speakers</a>
              <ul className="dropdown-content">
                <li><a href="#">Keynote Speakers</a></li>
                <li><a href="#">Invited Speakers</a></li>
                <li><a href="#">Speaker Guidelines</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Program</a>
              <ul className="dropdown-content">
                <li><a href="#">Agenda</a></li>
                <li><a href="#">Workshops</a></li>
                <li><a href="#">Special Sessions</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Information</a>
              <ul className="dropdown-content">
                <li><a href="#">Venue</a></li>
                <li><a href="#">Travel Info</a></li>
                <li><a href="#">Accommodation</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">About</a>
              <ul className="dropdown-content">
                <li><a href="#">Conference History</a></li>
                <li><a href="#">Organizers</a></li>
                <li><a href="#">Partners</a></li>
              </ul>
            </li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Submit Abstract</a></li>
            <li><a href="#">Register</a></li>
          </ul>
        </nav>

        <div className="alerts">
          <p><NotificationsActiveIcon /> Register Now and Join Meeting!! <NotificationsActiveIcon /> Final Program: Live Now!!!</p>
        </div>
      </header>

      {/* Main Section */}
      {/* <Slider/> */}
      <main className="main-content">
        <img src="https://plus.unsplash.com/premium_photo-1661715812379-23d652805042?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Conference Group"/>
        <h2>9th Edition of International Conference on Dentistry and Oral Health</h2>
        <div className="main-buttons">
          <button>Submit Abstract</button>
          <button>Conference Brochure</button>
          <button>Quick Register</button>
          <button>Speakers</button>
        </div>
      </main>

      {/* About Section */}
      <section className="about-section">
        <h2>About ICDO 2024 | Hybrid Event</h2>
        <p>
          Since 2017, Magnus Group has been spearheading impactful <strong>Dental Conferences</strong> that have significantly influenced the field of dentistry. Due to the enthusiastic response from attendees worldwide, we're excited to unveil the much-anticipated <strong>"9th Edition of International Conference on Dentistry and Oral Health"</strong> slated as a Hybrid Event taking place from <strong>September 02-04, 2024, in Madrid, Spain.</strong>
        </p>
        <p>
          The <strong>HYBRID EVENT</strong> format offers you the option to join either in person at the venue in <strong>Madrid, Spain,</strong> or virtually from the convenience of your home or workplace.
        </p>
        <p>
          The worldwide summit will revolve around the theme <strong>"ORAL: Observing Recent Advances and Leveraging Innovation in Dentistry."</strong>
        </p>
        <p>
          Oral hygiene reflects one's overall health. Often, the mouth serves as an early indicator of various disorders, making it a key area where symptoms initially manifest. As the gateway offering insights into overall well-being, it's vital to uphold exceptional dental hygiene.
        </p>
        <p>
          The core principles of the conference encompass innovation, sustainability, networking, learning, and engagement. This event serves as a platform for inspiration and collaboration in an exceptionally inspiring setting. <strong>ICDO 2024</strong> aims to stimulate professionals with new concepts in innovation and sustainability while also cultivating connections among individuals from across the globe.
        </p>
        <p>
          The primary aim of the global summit is to encourage the exploration of new research paths and inventive therapeutic approaches, while also nurturing highly productive collaborations among prominent laboratories within the dentistry and oral care domain. Attended by individuals from various corners of the globe, this event offers the opportunity to connect with individuals who have encountered similar challenges, walked the same path, and achieved success despite facing comparable hurdles.
        </p>
        <p>
          The <strong>dentistry congress</strong> will be thorough, extensive, and practical, offering a treasure trove of insights to enhance your practice and efficiency upon your return to work. Attendees will be immersed in a diverse group of peers, encompassing influential thought leaders, oral care specialists, healthcare professionals, dentists, subject-matter experts, dental practitioners, and business figures from various global sectors within the <strong>dental industry.</strong>
        </p>
        <p>
          Upcoming Conferences: Dental Conferences 2024 | Oral Health Conferences | CE Accredited Dental Conferences| ICDO 2024| Dentistry Congress International Dental Conferences
        </p>
      </section>

      {/* Scientific Sessions Section */}
      <div className="container">
    <section className="sessions-section">
        <h2>Scientific Sessions</h2>
        <div className="sessions-grid">
          <div className="session-item"> Public Health Dentistry</div>
          <div className="session-item">Prosthodontics & Implantology</div>
          <div className="session-item">Advanced Dental Research</div>
          <div className="session-item">Dental Implants and Dentures</div>
          <div className="session-item">Tooth Anatomy, Decay and Care</div>
          <div className="session-item">Endodontics</div>
          <div className="session-item">Conservative Dentistry</div>
          <div className="session-item">Dental Caries</div>
          <div className="session-item">Oral Surgery and Dental Anesthesiology</div>
          <div className="session-item">General Dentistry and Evidence Based Care</div>
          <div className="session-item">Pediatric Dentistry and Gerodontology</div>
          <div className="session-item">Orthodontics & Dentofacial Orthopedics</div>
          <div className="session-item">Oral Cancer Research</div>
          <div className="session-item">Dental Biomaterials & Bioengineering</div>
          <div className="session-item">Periodontology and Implant Dentistry</div>
          <div className="session-item">Clinical and Medical Case Reports</div>
        </div>
        <div className="sessions-buttons">
          <button>Submit Abstract</button>
          <button>View All Scientific Sessions</button>
        </div>
    </section>

    <section className="signup-section">
        <h2>SIGN UP FOR UPDATES</h2>
        <form className="signup-form">
          <label>Email</label>
          <input type="email" placeholder="Email"/>
          <label>First Name</label>
          <input type="text" placeholder="First Name"/>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name"/>
          <label>Captcha Code:</label>
          <img src="captcha-image.jpg" alt="Captcha"/>
          <input type="text" placeholder="Enter Code"/>
          <button type="submit">SEND MESSAGE</button>
        </form>
    </section>
</div>



      {/* Social Media Links */}
      <aside className="social-media">
        <a href="#" className="whatsapp-link"><WhatsAppIcon/></a>
        <a href="#" className="facebook-link"><FacebookIcon/></a>
        <a href="#" className="twitter-link"><TwitterIcon/></a>
        <a href="#" className="youtube-link"><YouTubeIcon/></a>
      </aside>
    </div>
  );
}

export default Home
