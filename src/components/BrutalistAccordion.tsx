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
    <section className="px-6 md:px-10 pt-16 pb-8 text-black">
      <h2 className="font-header text-4xl uppercase mb-6 border-b-2 border-black pb-3">
        {title}
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem
            key={item.value ?? index}
            value={(item.value ?? `item-${index}`).toString()}
            className="border-black border-b-2 first:border-t-2"
          >
            <AccordionTrigger className="px-0 pt-10 md:pt-12 pb-2 md:pb-4 font-header text-[11vw] leading-none md:text-7xl lg:text-8xl hover:no-underline [&>svg]:hidden">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="px-0 pb-0 pt-0">
              {item.company && (
                <div className={`font-header text-xl md:text-5xl mb-2 mt-2 pb-2 ${showCompanyBorder ? 'border-b border-black' : ''}`}>
                  {item.company}
                </div>
              )}
              <div className="text-base md:text-2xl leading-relaxed font-mono pt-0 pb-4">
                {item.content}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}


