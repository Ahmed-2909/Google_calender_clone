"use client"
import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


const Calendar = () => {
    const date = new Date();

    let day = date.getDate();
    const handleSelect = (info) => {
        const { start, end } = info;
        const eventNamePrompt = prompt("Enter Event Name");
        alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
        if (eventNamePrompt) {
            const newEvent = {
                start,
                end,
                title: eventNamePrompt,
                id: new Date().getTime().toString(),
            };
            // setEvents([...events, newEvent]);
        }
    };
    return (

        <div className='w-full sm:w-4/5  mt-3 '>
            <div className='flex w-full items-center justify-center sm:hidden '>
                <img src={`https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${day}_2x.png`} className=' w-8 sm:w-9 lg:w-12 ml-3' />
                <h1>Calendar</h1>
            </div>
            <FullCalendar
                height="100vh"
                plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,

                ]}
                headerToolbar={{
                    left: "today prev,next",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                }}
                allDaySlot={false}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                nowIndicator={true}
                navLinks
                slotDuration="00:60:00"
                

                  select={handleSelect}
                //   eventClick={abc}
                //   eventsSet={(events) => setCurrentEvents(events)}
                initialEvents={[
                    {
                        id: "12315",
                        title: "All-day event",
                        date: "2022-09-14",
                    },
                    {
                        id: "5123",
                        title: "Timed event",
                        date: "2022-09-28",
                    },
                ]}
            />
        </div>
    )
}

export default Calendar