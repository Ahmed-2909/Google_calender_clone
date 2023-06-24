"use client"
import React, { useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Navebar = () => {
    const date = new Date();

    let day = date.getDate();
    const [dropDown, setDropDown] = useState(true);
    const dropDownHandler = () => {
        if (dropDown === true) {
            setDropDown(false)
        }
        else {
            setDropDown(true)
        }
    }

    return (
        <div className=' hidden sm:block sm:w-2/5 lg:w-1/5  '>
            <div className='flex items-center border-b-[#DADCE0] border-b-2 sm:lg lg:text-2xl  p-3 gap-2 '>
                <i class="fi fi-br-menu-burger " ></i>
                <img src={`https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${day}_2x.png`} className=' w-6 sm:w-9 lg:w-12 ml-3' />
                <h1>Calendar</h1>
            </div>
            <div>
                <div className='flex border-gray-200 border-2 p-2 items-center justify-evenly hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer text-lg w-1/2 rounded-3xl my-3 ml-2'
                    onClick={dropDownHandler}>
                    <svg width="36" height="36" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z">
                    </path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
                        <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
                        <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
                        <path fill="none" d="M0 0h36v36H0z"></path></svg>
                    <h1>Create</h1>
                    <i class="fi fi-sr-caret-down"></i>
                </div>
                {!dropDown && <div className='w-1/6 mx-3 absolute z-10 bg-white border-gray-200 border-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                    <p className='mb-1 p-1 hover:bg-slate-200 cursor-pointer'>Event</p>
                    <p className='my-1 p-1 hover:bg-slate-200 cursor-pointer'>Out of office</p>
                    <p className='my-1 p-1 hover:bg-slate-200 cursor-pointer'>Task</p>
                    <p className='mt-1 p-1 hover:bg-slate-200 cursor-pointer'>Appointment slots</p>
                </div>}
                <div className=''>
                    <FullCalendar
                        height="51vh"
                        plugins={[
                            dayGridPlugin,
                        ]}
                        headerToolbar={{
                            left: "title",
                            center: "prev,next",
                            right: "",
                        }}
                    />
                </div>
                <div className='m-2 rounded-sm'>
                    <input type="text" placeholder='Search for People...' className='p-2 bg-gray-200 rounded-md outline-none' />
                </div>
                <div className='my-2 mx-4 flex flex-col'>
                    <div className='flex justify-between mb-3'>
                        <h2>My calendar</h2>
                        <i class="fi fi-bs-angle-up"></i>
                    </div>
                    <label>
                        <input type="checkbox" id="Checkbox1" defaultChecked={true} className='text-red-500 mx-2' />
                        Kazi Ahmed Raza
                    </label>
                    <label>
                        <input type="checkbox" id="Checkbox2" defaultChecked={true} className='text-red-500 mx-2' />
                        Birth day
                    </label>
                    <label>
                        <input type="checkbox" id="Checkbox3" defaultChecked={true} className='text-red-500 mx-2' />
                        Task
                    </label>
                </div>
                <div className='mt-1 mx-4 flex flex-col'>
                    <div className='flex justify-between mb-1'>
                        <h2>other calendar</h2>
                        <div className='flex w-1/5 justify-evenly'>
                            <i class="fi fi-bs-angle-up"></i>
                            <i class="fi fi-bs-plus-small"></i>
                        </div>
                    </div>
                    <label>
                        <input type="checkbox" id="Checkbox4" defaultChecked={true} className='text-red-500 mx-2' />
                        Holidays in India
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Navebar