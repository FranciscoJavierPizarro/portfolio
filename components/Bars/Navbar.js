import React, { useState } from 'react';
import NavBarButton from './NavBarButton';
import Resume from './Resume';
export default function Navbar() {
    const botones = [
        {
          name: "Eventos",
          link: "/events",
        },
        {
            name: "Conocimientos",
            link: "/knowledge",
        },
        {
            name: "Experiencia",
            link: "/experience",
        },
        {
            name: "Sobre mi",
            link: "/",
        },
    ]

    const list = botones.map((item, idx) => (
        <NavBarButton
        key={idx}
        nombre = {item.name}
        link = {item.link}
        />
    ))

    const [mostrar, setMostrar] = useState(false);
    
    function MenuMovil(mostrar) {
        if (mostrar) {
          return <><div className="space-y-1 px-2 pt-2 pb-3">
            {list}
          </div></>;
        }
        return <></>;
    }

    return (
      <>       
        <nav className="bg-blueNavDark sticky top-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => {setMostrar(!mostrar)}}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>

            
            <div className="hidden w-full sm:ml-6 sm:block">
                <div className="h-full flex">
                    <Resume/>
                    <div className="ml-8 w-full flex items-center justify-end">
                        {list}
                    </div>
                </div>
            </div>
            
            
            </div>
        </div>

        
        <div className="sm:hidden" id="mobile-menu">
            {MenuMovil(mostrar)}    
        </div>
        </nav>
      </>
    )
  }