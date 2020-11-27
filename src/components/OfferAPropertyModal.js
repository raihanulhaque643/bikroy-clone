import { useState } from 'react';
import { CustomDialog, useDialog } from 'react-st-modal';
import CustomCatButton from './CustomCatButton';
import './SellAnItemModal.css';

function OfferAPropertyContent() {
  const dialog = useDialog();

  const [value, setValue] = useState();

  return (
    <div className="modalContainer">
        <div className="modalColumn">
        <CustomCatButton
        title="Apartments & Flats"
        />
        <CustomCatButton
        title="Houses"
        />
        <CustomCatButton
        title="Plots & Land"
        />
        <CustomCatButton
        title="Rooms"
        />
        <CustomCatButton
        title="Garages"
        />
        <CustomCatButton
        title="Commercial Property"
        />
        </div>
        <div className="modalColumn">
            
        </div>
    </div>
  );
}

function OfferAProperty(props) {
  return (
    <div>
      <button
        onClick={async () => {
          const result = await CustomDialog(<OfferAPropertyContent />, {
            title: 'Select a subcategory',
            showCloseIcon: true,
          });
        }}
      >
        {props.name}
      </button>
    </div>
  );
}

export default OfferAProperty;