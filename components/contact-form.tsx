import Link from 'next/link'
import React from 'react'

export default function ContactForm() {
  return (
        <form action="#" method="POST" className="lg:flex-auto w-full z-10">
            <div className="relative font-normal text-[30px] md:text-[30px] leading-10 font-inter text-[#1E2B3A]">
                Bleiben Sie informiert über unsere <br />
                <span className="text-[#407BBF]">Warteliste</span>
                <span className="font-inter text-[#407BBF]">.</span>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-8">
              <div>
                <div className="mt-0">
                  <input
                    type="text"
                    name="first-name"
                    placeholder="Vorname"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[#1E2B3A] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="mt-0">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Nachname"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[#1E2B3A] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-0">
                  <input
                    id="email"
                    placeholder="E-Mail-Adresse"
                    name="email"
                    type="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[#1E2B3A] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-0">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Ihre Nachricht an uns"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[#1E2B3A] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="group rounded-full pl-[8px] w-full pr-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow:
                    "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                }}
              >
                Newsletter abonnieren
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#1E2B3A]">
              Durch eintragen in die Warteliste akzeptieren Sie unseren&nbsp;
              <Link href="/privacy-policy" target="_blank" className="font-semibold text-[#407BBF]">
                Datenschutzbestimmungen
              </Link>
              .
            </p>
          </form>
  )
}
