import React from 'react';
import ManPainting from "../../assets/images/man-painting.png";
import Dots from "../../assets/dots.svg";
import { RegisterForm } from '../../components/register-form/RegisterForm';

export interface InformationProps {

}

export const Information: React.FC<InformationProps> = ({}) => {
    return <section  className="w-full bg-white h-[80vh] ">
        <div className="container flex  justify-center items-center py-20 sm:py-40 h-full">

            {/* Left Hand Side */}
            <div className="hidden flex-1 relative relative md:flex p-5 justify-end items-end min-w-[300px]">
                <img  className='absolute top-[100px] -translate-x-[25%]' src={Dots} alt="Dots" />
                <img  className='absolute top-0 left-0 translate-x-[25%] -translate-y-[50%]' src={ManPainting} alt="Main painting on canvas"/>
                <div className='absolute -top-[100px] left-0 bg-primary p-5 w-[300px] border border-secondary'>
                    <p className='italics text-[18px]'>“You’ve made this so simple! All I had to was enter some details and my art was removed from DALLE-2”</p>
                </div>
            </div>
            

            {/* Right Hand Side */}
            <div className="relative flex-1 flex-col  min-h-full flex justify-center items-start p-5 pt-[100px] sm:pt-10 gap-5">
                    <h1 className='text-[40px] font-bold '>We make things easy for you!</h1>
                    <p className='text-[18px]'>Whether you're a seasoned professional or a budding artist, Steal My Art Back is here to support you. Our user-friendly tools and customizable features cater to artists of all skill levels and across various mediums.</p>
                    <RegisterForm registerText='Register'/>
            </div>
        </div>
    </section>
}