'use client'

import { useState, useEffect, useCallback } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Button } from 'flowbite-react';

const Modal = ({
  isOpen,
  onClose, 
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disable,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disable) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disable, onClose]);

  const handleSubmit = useCallback(() => {
    if (disable) {
      return;
    }

    onSubmit();
  }, [disable, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (secondaryAction && !disable){
      return;
    }

    secondaryAction();
  }, [disable, secondaryAction]);

  if(!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
          
        "
      >
        <div className="
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto
        "
        >
          {/*content*/}
          <div className={`
            translate
            duration-300
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}>
            <div className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-zinc-900 
              outline-none 
              focus:outline-none
            "
            >
              {/*body*/}
              <div className="relative p-6 flex-auto">
              <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    right-5
                  "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                {body}
              </div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
                <div 
                  className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button 
                      disabled={disable} 
                      label={secondaryActionLabel} 
                      onClick={handleSecondaryAction}
                      outline
                    />  
                  )}
                  <div className="w-full -mt-6 flex justify-center">
                    <button className='orange px-5 py-2 rounded-md font-semibold flex' 
                      disabled={disable} 
                      label={actionLabel} 
                      onClick={handleSubmit}>Continue</button>
                  </div>
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
