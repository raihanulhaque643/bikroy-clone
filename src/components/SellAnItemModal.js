import { useEffect, useState } from 'react';
import { CustomDialog, useDialog } from 'react-st-modal';
import CustomCatButtonWithImg from './CustomCatButtonWithImg';
import './SellAnItemModal.css';
import './CustomCatButtonWithImg.css';

import SubcategoryAgriculture from './SubcategoryAgriculture';
import SubcategoryBusinessIndustry from './SubcategoryBusinessIndustry';
import SubcategoryEducation from './SubcategoryEducation';
import SubcategoryElectronics from './SubcategoryElectronics';
import SubcategoryEssentials from './SubcategoryEssentials';
import SubcategoryFashionBeauty from './SubcategoryFashionBeauty';
import SubcategoryHobbiesSportsKids from './SubcategoryHobbiesSportsKids';
import SubcategoryHomeLiving from './SubcategoryHomeLiving';
import SubcategoryMobiles from './SubcategoryMobiles';
import SubcategoryPetsAnimals from './SubcategoryPetsAnimals';
import SubcategoryProperty from './SubcategoryProperty';
import SubcategoryServices from './SubcategoryServices';
import SubcategoryVehicles from './SubcategoryVehicles';


function SellAnItemContent() {
  const dialog = useDialog();

  const [value, setValue] = useState();

  const [show_Essentials_Subcategory, set_show_Essentials_Subcategory] = useState(false);
  const [show_Mobiles_Subcategory, set_show_Mobiles_Subcategory] = useState(false);
  const [show_Electronics_Subcategory, set_show_Electronics_Subcategory] = useState(false);
  const [show_Vehicles_Subcategory, set_show_Vehicles_Subcategory] = useState(false);
  const [show_Property_Subcategory, set_show_Property_Subcategory] = useState(false);
  const [show_Services_Subcategory, set_show_Services_Subcategory] = useState(false);
  const [show_HomeLiving_Subcategory, set_show_HomeLiving_Subcategory] = useState(false);
  const [show_FashionBeauty_Subcategory, set_show_FashionBeauty_Subcategory] = useState(false);
  const [show_HobbiesSportsKids_Subcategory, set_show_HobbiesSportsKids_Subcategory] = useState(false);
  const [show_BusinessIndustry_Subcategory, set_show_BusinessIndustry_Subcategory] = useState(false);
  const [show_Education_Subcategory, set_show_Education_Subcategory] = useState(false);
  const [show_PetsAnimals_Subcategory, set_show_PetsAnimals_Subcategory] = useState(false);
  const [show_Agriculture_Subcategory, set_show_Agriculture_Subcategory] = useState(false);

  const handleEssentialsButton = () => {
    set_show_Essentials_Subcategory(true);
    set_show_Mobiles_Subcategory(false);
    set_show_Electronics_Subcategory(false);
    set_show_Vehicles_Subcategory(false);
    set_show_Property_Subcategory(false);
    set_show_Services_Subcategory(false);
    set_show_HomeLiving_Subcategory(false);
    set_show_FashionBeauty_Subcategory(false);
    set_show_HobbiesSportsKids_Subcategory(false);
    set_show_BusinessIndustry_Subcategory(false);
    set_show_Education_Subcategory(false);
    set_show_PetsAnimals_Subcategory(false);
    set_show_Agriculture_Subcategory(false);
  }

  const handleMobilesButton = () => {
    set_show_Essentials_Subcategory(false);
    set_show_Mobiles_Subcategory(true);
    set_show_Electronics_Subcategory(false);
    set_show_Vehicles_Subcategory(false);
    set_show_Property_Subcategory(false);
    set_show_Services_Subcategory(false);
    set_show_HomeLiving_Subcategory(false);
    set_show_FashionBeauty_Subcategory(false);
    set_show_HobbiesSportsKids_Subcategory(false);
    set_show_BusinessIndustry_Subcategory(false);
    set_show_Education_Subcategory(false);
    set_show_PetsAnimals_Subcategory(false);
    set_show_Agriculture_Subcategory(false);
  }

  const handleElectronicsButton = () => {
    set_show_Essentials_Subcategory(false);
    set_show_Mobiles_Subcategory(false);
    set_show_Electronics_Subcategory(true);
    set_show_Vehicles_Subcategory(false);
    set_show_Property_Subcategory(false);
    set_show_Services_Subcategory(false);
    set_show_HomeLiving_Subcategory(false);
    set_show_FashionBeauty_Subcategory(false);
    set_show_HobbiesSportsKids_Subcategory(false);
    set_show_BusinessIndustry_Subcategory(false);
    set_show_Education_Subcategory(false);
    set_show_PetsAnimals_Subcategory(false);
    set_show_Agriculture_Subcategory(false);
  }

  const handleVehiclesButton = () => {
    set_show_Essentials_Subcategory(false);
    set_show_Mobiles_Subcategory(false);
    set_show_Electronics_Subcategory(false);
    set_show_Vehicles_Subcategory(true);
    set_show_Property_Subcategory(false);
    set_show_Services_Subcategory(false);
    set_show_HomeLiving_Subcategory(false);
    set_show_FashionBeauty_Subcategory(false);
    set_show_HobbiesSportsKids_Subcategory(false);
    set_show_BusinessIndustry_Subcategory(false);
    set_show_Education_Subcategory(false);
    set_show_PetsAnimals_Subcategory(false);
    set_show_Agriculture_Subcategory(false);
  }

  const handlePropertyButton = () => {
    set_show_Essentials_Subcategory(false);
    set_show_Mobiles_Subcategory(false);
    set_show_Electronics_Subcategory(false);
    set_show_Vehicles_Subcategory(false);
    set_show_Property_Subcategory(true);
    set_show_Services_Subcategory(false);
    set_show_HomeLiving_Subcategory(false);
    set_show_FashionBeauty_Subcategory(false);
    set_show_HobbiesSportsKids_Subcategory(false);
    set_show_BusinessIndustry_Subcategory(false);
    set_show_Education_Subcategory(false);
    set_show_PetsAnimals_Subcategory(false);
    set_show_Agriculture_Subcategory(false);
  }

  const handleServicesButton = () => {
    set_show_Essentials_Subcategory(false);
    set_show_Mobiles_Subcategory(false);
    set_show_Electronics_Subcategory(false);
    set_show_Vehicles_Subcategory(false);
    set_show_Property_Subcategory(false);
    set_show_Services_Subcategory(true);
    set_show_HomeLiving_Subcategory(false);
    set_show_FashionBeauty_Subcategory(false);
    set_show_HobbiesSportsKids_Subcategory(false);
    set_show_BusinessIndustry_Subcategory(false);
    set_show_Education_Subcategory(false);
    set_show_PetsAnimals_Subcategory(false);
    set_show_Agriculture_Subcategory(false);
  }

  const handleHomeLivingButton = () => {
    set_show_Essentials_Subcategory(false);
    set_show_Mobiles_Subcategory(false);
    set_show_Electronics_Subcategory(false);
    set_show_Vehicles_Subcategory(false);
    set_show_Property_Subcategory(false);
    set_show_Services_Subcategory(false);
    set_show_HomeLiving_Subcategory(true);
    set_show_FashionBeauty_Subcategory(false);
    set_show_HobbiesSportsKids_Subcategory(false);
    set_show_BusinessIndustry_Subcategory(false);
    set_show_Education_Subcategory(false);
    set_show_PetsAnimals_Subcategory(false);
    set_show_Agriculture_Subcategory(false);
  }

  const handleFashionBeautyButton = () => {
    set_show_Essentials_Subcategory(false);
    set_show_Mobiles_Subcategory(false);
    set_show_Electronics_Subcategory(false);
    set_show_Vehicles_Subcategory(false);
    set_show_Property_Subcategory(false);
    set_show_Services_Subcategory(false);
    set_show_HomeLiving_Subcategory(false);
    set_show_FashionBeauty_Subcategory(true);
    set_show_HobbiesSportsKids_Subcategory(false);
    set_show_BusinessIndustry_Subcategory(false);
    set_show_Education_Subcategory(false);
    set_show_PetsAnimals_Subcategory(false);
    set_show_Agriculture_Subcategory(false);
  }

  const handleHobbiesSportsKidsButton = () => {
    set_show_Essentials_Subcategory(false);
    set_show_Mobiles_Subcategory(false);
    set_show_Electronics_Subcategory(false);
    set_show_Vehicles_Subcategory(false);
    set_show_Property_Subcategory(false);
    set_show_Services_Subcategory(false);
    set_show_HomeLiving_Subcategory(false);
    set_show_FashionBeauty_Subcategory(false);
    set_show_HobbiesSportsKids_Subcategory(true);
    set_show_BusinessIndustry_Subcategory(false);
    set_show_Education_Subcategory(false);
    set_show_PetsAnimals_Subcategory(false);
    set_show_Agriculture_Subcategory(false);
  }

  const handleBusinessIndustryButton = () => {
    set_show_Essentials_Subcategory(false);
    set_show_Mobiles_Subcategory(false);
    set_show_Electronics_Subcategory(false);
    set_show_Vehicles_Subcategory(false);
    set_show_Property_Subcategory(false);
    set_show_Services_Subcategory(false);
    set_show_HomeLiving_Subcategory(false);
    set_show_FashionBeauty_Subcategory(false);
    set_show_HobbiesSportsKids_Subcategory(false);
    set_show_BusinessIndustry_Subcategory(true);
    set_show_Education_Subcategory(false);
    set_show_PetsAnimals_Subcategory(false);
    set_show_Agriculture_Subcategory(false);
  }

  const handleEducationButton = () => {
    set_show_Essentials_Subcategory(false);
    set_show_Mobiles_Subcategory(false);
    set_show_Electronics_Subcategory(false);
    set_show_Vehicles_Subcategory(false);
    set_show_Property_Subcategory(false);
    set_show_Services_Subcategory(false);
    set_show_HomeLiving_Subcategory(false);
    set_show_FashionBeauty_Subcategory(false);
    set_show_HobbiesSportsKids_Subcategory(false);
    set_show_BusinessIndustry_Subcategory(false);
    set_show_Education_Subcategory(true);
    set_show_PetsAnimals_Subcategory(false);
    set_show_Agriculture_Subcategory(false);
  }

  const handlePetsAnimalsButton = () => {
    set_show_Essentials_Subcategory(false);
    set_show_Mobiles_Subcategory(false);
    set_show_Electronics_Subcategory(false);
    set_show_Vehicles_Subcategory(false);
    set_show_Property_Subcategory(false);
    set_show_Services_Subcategory(false);
    set_show_HomeLiving_Subcategory(false);
    set_show_FashionBeauty_Subcategory(false);
    set_show_HobbiesSportsKids_Subcategory(false);
    set_show_BusinessIndustry_Subcategory(false);
    set_show_Education_Subcategory(false);
    set_show_PetsAnimals_Subcategory(true);
    set_show_Agriculture_Subcategory(false);
  }

  const handleAgricultureButton = () => {
    set_show_Essentials_Subcategory(false);
    set_show_Mobiles_Subcategory(false);
    set_show_Electronics_Subcategory(false);
    set_show_Vehicles_Subcategory(false);
    set_show_Property_Subcategory(false);
    set_show_Services_Subcategory(false);
    set_show_HomeLiving_Subcategory(false);
    set_show_FashionBeauty_Subcategory(false);
    set_show_HobbiesSportsKids_Subcategory(false);
    set_show_BusinessIndustry_Subcategory(false);
    set_show_Education_Subcategory(false);
    set_show_PetsAnimals_Subcategory(false);
    set_show_Agriculture_Subcategory(true);
  }

  return (
    <div className="modalContainer">
        <div className="modalColumn">
        <button onClick={()=>{handleEssentialsButton()}}>
        <CustomCatButtonWithImg
        title="Essentials"
        image="groceries.svg"
        />
        </button>
        <button onClick={()=>{handleMobilesButton()}}>
        <CustomCatButtonWithImg
        title="Mobiles"
        image="Mobiles.png"
        />
        </button>
        <button onClick={()=>{handleElectronicsButton()}}>
        <CustomCatButtonWithImg
        title="Electronics"
        image="television.svg"
        />
        </button>
        <button onClick={()=>{handleVehiclesButton()}}>
        <CustomCatButtonWithImg
        title="Vehicles"
        image="vehicles.png"
        />
        </button>
        <button onClick={()=>{handlePropertyButton()}}>
        <CustomCatButtonWithImg
        title="Property"
        image="property.png"
        />
        </button>
        <button onClick={()=>{handleServicesButton()}}>
        <CustomCatButtonWithImg
        title="Services"
        image="customer-support.svg"
        />
        </button>
        <button onClick={()=>{handleHomeLivingButton()}}>
        <CustomCatButtonWithImg
        title="Home & Living"
        image="washing-machine.svg"
        />
        </button>
        <button onClick={()=>{handleFashionBeautyButton()}}>
        <CustomCatButtonWithImg
        title="Fashion & Beauty"
        image="watch.svg"
        />
        </button>
        <button onClick={()=>{handleHobbiesSportsKidsButton()}}>
        <CustomCatButtonWithImg
        title="Hobbies, Sports & Kids"
        image="football-ball.svg"
        />
        </button>
        <button onClick={()=>{handleBusinessIndustryButton()}}>
        <CustomCatButtonWithImg
        title="Business & Industry"
        image="factory.svg"
        />
        </button>
        <button onClick={()=>{handleEducationButton()}}>
        <CustomCatButtonWithImg
        title="Education"
        image="graduated.svg"
        />
        </button>
        <button onClick={()=>{handlePetsAnimalsButton()}}>
        <CustomCatButtonWithImg
        title="Pets & Animals"
        image="shiba.svg"
        />
        </button>
        <button onClick={()=>{handleAgricultureButton()}}>
        <CustomCatButtonWithImg
        title="Agriculture"
        image="agriculture.svg"
        />
        </button>
        </div>

        <div className="modalColumn">
            {
              show_Essentials_Subcategory &&
              <SubcategoryEssentials />
            }
            {
              show_Mobiles_Subcategory &&
              <SubcategoryMobiles />
            }
            {
              show_Electronics_Subcategory &&
              <SubcategoryElectronics />
            }
            {
              show_Vehicles_Subcategory &&
              <SubcategoryVehicles />
            }
            {
              show_Property_Subcategory &&
              <SubcategoryProperty />
            }
            {
              show_Services_Subcategory &&
              <SubcategoryServices />
            }
            {
              show_HomeLiving_Subcategory && 
              <SubcategoryHomeLiving />
            }
            {
              show_FashionBeauty_Subcategory &&
              <SubcategoryFashionBeauty />
            }
            {
              show_HobbiesSportsKids_Subcategory &&
              <SubcategoryHobbiesSportsKids />
            }
            {
              show_BusinessIndustry_Subcategory &&
              <SubcategoryBusinessIndustry />
            }
            {
              show_Education_Subcategory &&
              <SubcategoryEducation />
            }
            {
              show_PetsAnimals_Subcategory &&
              <SubcategoryPetsAnimals />
            }
            {
              show_Agriculture_Subcategory &&
              <SubcategoryAgriculture />
            }
        </div>
    </div>
  );
}

function SellAnItem(props) {
  return (
    <div>
      <button
        onClick={async () => {
          const result = await CustomDialog(<SellAnItemContent />, {
            title: 'Select a Category',
            showCloseIcon: true,
          });
        }}
      >
        {props.name}
      </button>
    </div>
  );
}

export default SellAnItem;