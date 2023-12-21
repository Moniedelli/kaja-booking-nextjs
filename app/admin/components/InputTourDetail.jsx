'use client'

import {
  Checkbox,
  TextInput,
  Label,
  Toast,
} from 'flowbite-react';
import ImageUpload from './ImageUpload';

const InputTourDetail = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-4 max-w-md mt-3">
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text">Detail description</span>
            </div>
            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-sm w-full max-w-md" ></textarea>
          </label>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text">Detail Info</span>
            </div>
            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-sm w-full max-w-md" ></textarea>
          </label>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text">Note</span>
            </div>
            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-sm w-full max-w-md" ></textarea>
          </label>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text">Itinerary</span>
            </div>
            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-sm w-full max-w-md" ></textarea>
          </label>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text">Include and Exclude</span>
            </div>
            <div className="flex max-w-md gap-4" id="checkbox">
              <div className="flex items-center gap-2">
                <Checkbox id="promotion" />
                <Label htmlFor="promotion" className='text-gray-300'>Makan</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="promotion" />
                <Label htmlFor="promotion" className='text-gray-300'>Minum</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="promotion" />
                <Label htmlFor="promotion" className='text-gray-300'>Saput</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="promotion" />
                <Label htmlFor="promotion" className='text-gray-300'>Makan</Label>
              </div>
            </div>
          </label>
        </div>
      </div>
      <div>
        <div id="fileUpload" className="max-w-md">
          <div className="block mt-3">
            <div className="label" htmlFor="file" value="Image">
              <span className="label-text">Images</span>
            </div>
          </div>
          <ImageUpload value={imageSrc} onChange={setImageSrc} />
        </div>
      </div>
    </div>
  );
};

export default InputTourDetail;
