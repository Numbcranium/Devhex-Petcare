import React, { useEffect, useState } from "react";
import historyData from "../../data/medicalHistory.json";
import "../../styles/MedicalHistory.css";

const MedicalHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(historyData);
  }, []);

  return (
     <div className="section">
                <h2 className="section-title">
                    <div className="section-icon">📋</div>
                    Sample Pet Medical Histories
                </h2>
                <div className="case-studies">
                    <div className="case-study">
                        <div className="case-title"> Golden Retriever - Max (Age: 5 years)</div>
                        <div className="case-details">
                            <div className="case-detail">
                                <span><strong>Condition:</strong></span>
                                <span>Hip Dysplasia</span>
                            </div>
                            <div className="case-detail">
                                <span><strong>Treatment:</strong></span>
                                <span>Physical Therapy</span>
                            </div>
                            <div className="case-detail">
                                <span><strong>Status:</strong></span>
                                <span >Recovered</span>
                            </div>
                            <div className="case-detail">
                                <span><strong>Duration:</strong></span>
                                <span>6 weeks</span>
                            </div>
                        </div>
                        <p className="case-description">
                            Successful treatment of hip dysplasia through a combination of weight management, 
                            physical therapy, and pain management. Max is now enjoying daily walks and playing fetch again.
                        </p>
                    </div>

                    <div className="case-study">
                        <div className="case-title"> Persian Cat - Luna (Age: 3 years)</div>
                        <div className="case-details">
                            <div className="case-detail">
                                <span><strong>Condition:</strong></span>
                                <span>Respiratory Issues</span>
                            </div>
                            <div className="case-detail">
                                <span><strong>Treatment:</strong></span>
                                <span>Medication & Care</span>
                            </div>
                            <div className="case-detail">
                                <span><strong>Status:</strong></span>
                                <span >Monitoring</span>
                            </div>
                            <div className="case-detail">
                                <span><strong>Duration:</strong></span>
                                <span>Ongoing</span>
                            </div>
                        </div>
                        <p className="case-description">
                            Treatment of brachycephalic airway syndrome common in Persian cats. 
                            Regular monitoring and environmental modifications have significantly improved Luna's breathing.
                        </p>
                    </div>

                    <div className="case-study">
                        <div className="case-title"> Holland Lop Rabbit - Coco (Age: 2 years)</div>
                        <div className="case-details">
                            <div className="case-detail">
                                <span><strong>Condition:</strong></span>
                                <span>Dental Overgrowth</span>
                            </div>
                            <div className="case-detail">
                                <span><strong>Treatment:</strong></span>
                                <span>Dental Trimming</span>
                            </div>
                            <div className="case-detail">
                                <span><strong>Status:</strong></span>
                                <span >Recovered</span>
                            </div>
                            <div className="case-detail">
                                <span><strong>Duration:</strong></span>
                                <span>1 day procedure</span>
                            </div>
                        </div>
                        <p className="case-description">
                            Routine dental procedure to address overgrown teeth. Coco is back to eating normally 
                            and the owners have been educated on proper diet to prevent future occurrences.
                        </p>
                    </div>

                    <div className="case-study">
                        <div className="case-title"> African Grey Parrot - Charlie (Age: 12 years)</div>
                        <div className="case-details">
                            <div className="case-detail">
                                <span><strong>Condition:</strong></span>
                                <span>Feather Plucking</span>
                            </div>
                            <div className="case-detail">
                                <span><strong>Treatment:</strong></span>
                                <span>Behavioral Therapy</span>
                            </div>
                            <div className="case-detail">
                                <span><strong>Status:</strong></span>
                                <span >Improved</span>
                            </div>
                            <div className="case-detail">
                                <span><strong>Duration:</strong></span>
                                <span>3 months</span>
                            </div>
                        </div>
                        <p className="case-description">
                            Addressed chronic feather plucking through environmental enrichment, dietary changes, 
                            and behavioral modification. Charlie's plumage is growing back healthy and strong.
                        </p>
                    </div>
                </div>
            </div>
    
 

  )
};

export default MedicalHistory;
