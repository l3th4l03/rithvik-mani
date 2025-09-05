"use client"

import React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion"

type BrutalistAccordionItem = {
  title: string
  content: React.ReactNode
  company?: string
  value?: string
}

type BrutalistAccordionProps = {
  title: string
  items: BrutalistAccordionItem[]
  showCompanyBorder?: boolean
}

export default function BrutalistAccordion({ title, items, showCompanyBorder = true }: BrutalistAccordionProps) {
  return (
    <section className="px-4 sm:px-6 md:px-10 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 text-black">
      <h2 className="font-header text-xs sm:text-sm md:text-3xl uppercase mb-4 sm:mb-6 border-b-2 border-black pb-2 sm:pb-3">
        {title}
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem
            key={item.value ?? index}
            value={(item.value ?? `item-${index}`).toString()}
            className="border-black border-b-2 first:border-t-2"
          >
            <AccordionTrigger className="px-0 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-2 sm:pb-3 md:pb-4 font-header text-[12vw] sm:text-[11vw] md:text-[10vw] lg:text-7xl xl:text-8xl leading-none hover:no-underline [&>svg]:hidden">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="px-0 pb-0 pt-0">
              {item.company && (
                <div className={`font-header text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-2 mt-2 pb-2 ${showCompanyBorder ? 'border-b border-black' : ''}`}>
                  {item.company}
                </div>
              )}
              <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-mono pt-0 pb-4">
                {item.content}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}


