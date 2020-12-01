import React from 'react';
import './CustomCatButtonWithImg.css';
import CustomCatButton from './CustomCatButton';
import { useHistory } from 'react-router-dom';

const SubcategoryHobbiesSportsKids = () => {

    const history = useHistory();

    const handleMusicalInstruments = () => {
        history.push('/post-ad-form/musical-instruments')
    }

    const handleSports = () => {
        history.push('/post-ad-form/sports')
    }

    const handleFitnessGym = () => {
        history.push('/post-ad-form/fitness-gym')
    }

    const handleMusicBooksMovies = () => {
        history.push('/post-ad-form/music-books-movies')
    }

    const handleChildrensItems = () => {
        history.push('/post-ad-form/childrens-items')
    }

    const handleOtherHobbySportsKidsItems = () => {
        history.push('/post-ad-form/other-hobby-sports-kids-items')
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
