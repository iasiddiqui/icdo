import React from 'react'
import './session.css'

const Session = () => {
  return (
    <section className="sessions-section">
    <h2>Scientific Sessions</h2>
    <div className="sessions-grid">
      <div className="session-item">Public Health Dentistry</div>
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
  )
}

export default Session