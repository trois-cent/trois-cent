'use client'

import { useTranslations } from 'next-intl'
import React from 'react'
import CallBooker from '../ui/CallBooker'
import { Button } from '../ui/buttons/button'
import { ChevronRight } from 'lucide-react'

const ContactUs = () => {
    const t = useTranslations()

    return (
        <section id="contact-us">
            <div className="cont py-48 md:py-72">
                <div className="col-span-12 md:col-start-3 md:col-end-11">
                    <span className="tag">{t('sectionTitles.contacts.tag')}</span>
                    <h2 className="mt-20 section-title">{t('sectionTitles.contacts.0')}</h2>
                </div>
            </div>
            <div className="cont">
                <div className="col-span-12 md:col-span-6 bg-accent aspect-square rounded-lg flex items-center justify-center">
                    <CallBooker />
                </div>
                <div className="col-span-12 md:col-span-6 bg-off-white aspect-square rounded-lg flex items-center justify-center">
                    <Button
                        variant="off-white"
                        text="Envoyer un message"
                        icon={<ChevronRight size={14} />}
                        onClick={() => (window.location.href = 'mailto:hi@troiscent.ca')}
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactUs
