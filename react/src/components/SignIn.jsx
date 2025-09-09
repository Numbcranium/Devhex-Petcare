import '../styles/signIn.css'
import { BiUser } from 'react-icons/bi';
import { BiEnvelope } from 'react-icons/bi';
import { BiLock } from 'react-icons/bi';
import { BiSolidUser } from 'react-icons/bi';
import { BiUserPlus } from 'react-icons/bi';
// import { BiUser } from 'react-icons/bi';

const SignInPage = () => {
    return(
        <>
        <div className='container'>
            <div className='side-pic'></div>
            <div className='welcome'>
                
                <form className='signInForm'>
                    <div className='intro'>
                        <h1>Welcome to FurEver Care</h1>
                        <p>Your trusted companion for all things pet care,
                            create your account and unlock a world of premuim 
                            pet care products and services.                             
                        </p>
                    </div>
                    <div className='formInfo'>
                        <div className='inputDiv'>
                            <div className='labelInput'>
                                <div className='labelDiv'>
                                    <BiUser size={17} color='#9C7456'/>
                                    <label htmlFor='firstName'>FirstName</label>
                                </div>
                                <input type="text" name="firstName" id="" />
                            </div>
                            <div className='labelInput'>
                                <div className='labelDiv'>
                                    <BiUser size={17} color='#9C7456'/>
                                    <label htmlFor='lastName'>LastName</label>
                                </div>
                                <input type="text" name="lastName" id="" />
                            </div>
                        </div>
                        <div className='inputDiv'>
                            <div className='labelInput'>
                                <div className='labelDiv'>
                                    <BiEnvelope size={17} color='#9C7456'/>
                                    <label htmlFor='email'>Email</label>
                                </div>
                                <input type="email" name="email" id="" />
                            </div>
                            
                        </div>
                        <div className='inputDiv'>
                            <div className='labelInput'>
                                <div className='labelDiv'>
                                    <BiLock size={17} color='#9C7456'/>
                                    <label htmlFor='password'>Password</label>
                                </div>
                                <input type="password" name="password" id="" />
                            </div>
                            <div className='labelInput'>
                                <div className='labelDiv'>
                                    <BiLock size={17} color='#9C7456'/>
                                    <label htmlFor='password'>Confirm Password</label>
                                </div>
                                <input type="password" name="password" id="" />
                            </div>
                        </div>
                        <div className="radioDivs">
                            <div className='labelDiv'>
                                <BiSolidUser size={17} color='#9C7456'/>
                                <label htmlFor='category'>Please select the user category you belong to</label>
                            </div>
                            <div className="radioCon">
                                <div className="radioBox">
                                    <input type="radio" name="category" id="" />
                                    <label htmlFor="petowner">Pet Owner</label>
                                </div>
                                <div className="radioBox">
                                    <input type="radio" name="category" id="" />
                                    <label htmlFor="veterinarian">Veterinarian</label>
                                </div>
                                <div className="radioBox">
                                    <input type="radio" name="category" id="" />
                                    <label htmlFor="animalShelter">Animal Shelter / Rescue Volunteer</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='formButton' type="submit">
                        <BiUserPlus size={20} />
                        <span>Create my Account</span>
                    </button>
                </form>
            </div>
            
        </div>
        </>
    )
}

export default SignInPage;