import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';

const SubcategoryHobbiesSportsKids = () => {

    const history = useHistory();

    const handleMusicalInstruments = () => {
        history.push('/post-ad-form/hobbies-sports-kids/musical-instruments')
    }

    const handleSports = () => {
        history.push('/post-ad-form/hobbies-sports-kids/sports')
    }

    const handleFitnessGym = () => {
        history.push('/post-ad-form/hobbies-sports-kids/fitness-gym')
    }

    const handleMusicBooksMovies = () => {
        history.push('/post-ad-form/hobbies-sports-kids/music-books-movies')
    }

    const handleChildrensItems = () => {
        history.push('/post-ad-form/hobbies-sports-kids/childrens-items')
    }

    const handleOtherHobbySportsKidsItems = () => {
        history.push('/post-ad-form/hobbies-sports-kids/other-hobby-sports-kids-items')
    }

    return (
        <div className="modalContainer">
            <div className="modalColumn">
            <button onClick={()=>{handleMusicalInstruments()}}>
                <CustomCatButton
                title="Musical Instruments"
                />
                </button>
                <button onClick={()=>{handleSports()}}>
                <CustomCatButton
                title="Sports"
                />
                </button>
                <button onClick={()=>{handleFitnessGym()}}>
                <CustomCatButton
                title="Fitness & Gym"
                />
                </button>
                <button onClick={()=>{handleMusicBooksMovies()}}>
                <CustomCatButton
                title="Music, Books & Movies"
                />
                </button>
                <button onClick={()=>{handleChildrensItems()}}>
                <CustomCatButton
                title="Children's Items"
                />
                </button>
                <button onClick={()=>{handleOtherHobbySportsKidsItems()}}>
                <CustomCatButton
                title="Other Hobby, Sports & Kids Items"
                />
                </button>
            </div>
    </div>
    )
}

export default SubcategoryHobbiesSportsKids;
