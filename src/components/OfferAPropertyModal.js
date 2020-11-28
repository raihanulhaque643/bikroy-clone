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
        <button>
        <CustomCatButton
        title="Apartments & Flats"
        />
        </button>
        <button>
        <CustomCatButton
        title="Houses"
        />
        </button>
        <button>
        <CustomCatButton
        title="Plots & Land"
        />
        </button>
        <button>
        <CustomCatButton
        title="Rooms"
        />
        </button>
        <button>
        <CustomCatButton
        title="Garages"
        />
        </button>
        <button>
        <CustomCatButton
        title="Commercial Property"
        />
        </button>
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