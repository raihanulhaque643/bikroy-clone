import { useState } from 'react';
import { CustomDialog, useDialog } from 'react-st-modal';
import CustomCatButtonWithImg from './CustomCatButtonWithImg';
import './SellAnItemModal.css'

function SellAnItemContent() {
  const dialog = useDialog();

  const [value, setValue] = useState();

  return (
    <div className="sellItemModalContainer">
        <div className="setItemModalColumn">
        <CustomCatButtonWithImg
        title="Essentials"
        image="groceries.svg"
        />
        <CustomCatButtonWithImg
        title="Mobiles"
        image="Mobiles.png"
        />
        <CustomCatButtonWithImg
        title="Electronics"
        image="television.svg"
        />
        <CustomCatButtonWithImg
        title="Vehicles"
        image="vehicles.png"
        />
        <CustomCatButtonWithImg
        title="Property"
        image="property.png"
        />
        <CustomCatButtonWithImg
        title="Services"
        image="customer-support.svg"
        />
        <CustomCatButtonWithImg
        title="Home & Living"
        image="washing-machine.svg"
        />
        <CustomCatButtonWithImg
        title="Fashion & Beauty"
        image="watch.svg"
        />
        <CustomCatButtonWithImg
        title="Hobbies, Sports & Kids"
        image="football-ball.svg"
        />
        <CustomCatButtonWithImg
        title="Business & Industry"
        image="factory.svg"
        />
        <CustomCatButtonWithImg
        title="Education"
        image="graduated.svg"
        />
        <CustomCatButtonWithImg
        title="Pets & Animals"
        image="shiba.svg"
        />
        <CustomCatButtonWithImg
        title="Agriculture"
        image="agriculture.svg"
        />
        </div>
        <div className="setItemModalColumn">
            hello
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