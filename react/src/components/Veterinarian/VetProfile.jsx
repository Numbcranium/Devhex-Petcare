import React, { useEffect, useState } from "react";
import vetsData from "../../data/vets.json";
import "../../styles/VetProfile.css";
import Footer from "../Footer";

const VetProfile = () => {
  const [vets, setVets] = useState([]);

  useEffect(() => {
    setVets(vetsData);
  }, []);

  return (
  <div className="profile-container">
        <div className="profile-sidebar">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face" alt="Dr. Sarah Johnson" className="vet-photo"/>
            <h1 className="vet-name">Dr. Sarah Johnson</h1>
            <p className="specialization">🩺 Small Animal Veterinarian</p>
            
            <div className="contact-info">
                <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div>
                        <strong>Phone:</strong><br/>
                        +234-803-123-4567
                    </div>
                </div>
                
                <div className="contact-item">
                    <div className="contact-icon">✉️</div>
                    <div>
                        <strong>Email:</strong><br/>
                        dr.johnson@furevercare.com
                    </div>
                </div>
                
                <div className="contact-item">
                    <div className="contact-icon">🏥</div>
                    <div>
                        <strong>Clinic:</strong><br/>
                        FurEver Care Veterinary Center
                    </div>
                </div>
                
                <div className="contact-item">
                    <div className="contact-icon">🎓</div>
                    <div>
                        <strong>Experience:</strong><br/>
                        8+ Years in Practice
                    </div>
                </div>
            </div>
        </div>
         <div className="profile-sidebar">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face" alt="Dr. Sarah Johnson" className="vet-photo"/>
            <h1 className="vet-name">Dr. Sarah Johnson</h1>
            <p className="specialization">🩺 Small Animal Veterinarian</p>
            
            <div className="contact-info">
                <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div>
                        <strong>Phone:</strong><br/>
                        +234-803-123-4567
                    </div>
                </div>
                
                <div className="contact-item">
                    <div className="contact-icon">✉️</div>
                    <div>
                        <strong>Email:</strong><br/>
                        dr.johnson@furevercare.com
                    </div>
                </div>
                
                <div className="contact-item">
                    <div className="contact-icon">🏥</div>
                    <div>
                        <strong>Clinic:</strong><br/>
                        FurEver Care Veterinary Center
                    </div>
                </div>
                
                <div className="contact-item">
                    <div className="contact-icon">🎓</div>
                    <div>
                        <strong>Experience:</strong><br/>
                        8+ Years in Practice
                    </div>
                </div>
            </div>
        </div>

         <div className="profile-sidebar">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face" alt="Dr. Sarah Johnson" className="vet-photo"/>
            <h1 className="vet-name">Dr. Sarah Johnson</h1>
            <p className="specialization">🩺 Small Animal Veterinarian</p>
            
            <div className="contact-info">
                <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div>
                        <strong>Phone:</strong><br/>
                        +234-803-123-4567
                    </div>
                </div>
                
                <div className="contact-item">
                    <div className="contact-icon">✉️</div>
                    <div>
                        <strong>Email:</strong><br/>
                        dr.johnson@furevercare.com
                    </div>
                </div>
                
                <div className="contact-item">
                    <div className="contact-icon">🏥</div>
                    <div>
                        <strong>Clinic:</strong><br/>
                        FurEver Care Veterinary Center
                    </div>
                </div>
                
                <div className="contact-item">
                    <div className="contact-icon">🎓</div>
                    <div>
                        <strong>Experience:</strong><br/>
                        8+ Years in Practice
                    </div>
                </div>
            </div>
        </div>

         <div className="profile-sidebar">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face" alt="Dr. Sarah Johnson" className="vet-photo"/>
            <h1 className="vet-name">Dr. Sarah Johnson</h1>
            <p className="specialization">🩺 Small Animal Veterinarian</p>
            
            <div className="contact-info">
                <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div>
                        <strong>Phone:</strong><br/>
                        +234-803-123-4567
                    </div>
                </div>
                
                <div className="contact-item">
                    <div className="contact-icon">✉️</div>
                    <div>
                        <strong>Email:</strong><br/>
                        dr.johnson@furevercare.com
                    </div>
                </div>
                
                <div className="contact-item">
                    <div className="contact-icon">🏥</div>
                    <div>
                        <strong>Clinic:</strong><br/>
                        FurEver Care Veterinary Center
                    </div>
                </div>
                
                <div className="contact-item">
                    <div className="contact-icon">🎓</div>
                    <div>
                        <strong>Experience:</strong><br/>
                        8+ Years in Practice
                    </div>
                </div>
            </div>
        </div>
   
        <Footer />
</div>
  );
};

export default VetProfile;
