import PetProfile from "./PetProfile";
import FeedingGuide from "./FeedingGuide";
import GroomingVideos from "./GroomingVideos";
import HealthTips from "./HealthTips";
import Trainingtips from "./TrainingTips";
import "../../../styles/PetCare.css";

const PetCare = () => {
    return(
        <>
        <div className="petcare-container">
         

            <PetProfile/>
            <FeedingGuide/>
            <GroomingVideos/>
            <HealthTips/>
            <Trainingtips/>
        </div>
        </>
    );
};

export default PetCare;
