import { Menu, Transition } from '@headlessui/react'
import { FC, Fragment, SetStateAction, useEffect, useRef, useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2'

interface IDropDownMenu{
    list: Array<string>,

}

export const DropDownMenu: FC<IDropDownMenu> = ({list}) => {
  
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value: any ) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <div className='w-[80px] m-auto z-[1] '>
            <div className='font-normal  text-gray-500 text-base bg-[#f5f7f9] flex justify-evenly items-center' onClick={toggling}>
                {selectedOption || "Country"}
                 {/* <div className=''>
                    <HiChevronDown />
                </div> */}
            </div >
            <div className='bg-[#f5f7f9]'>
                {isOpen && (
                <ul className='border border-solid border-gray-300 font-normal  text-sm box-border first:pt-[0.8em] mt-2'>
                   {
                            list.map((value, index) => <li onClick={onOptionClicked(value)} key={Math.random()} className='mb-[0.8em] ml-5 space-y-1 list-none'>
                    {value}
                    </li>
                        
                    )
                   }
                </ul>
                )}
            </div>

        </div>
        
    );
}
