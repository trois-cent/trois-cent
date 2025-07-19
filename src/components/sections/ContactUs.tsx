'use client'

import { useTranslations } from 'next-intl'
import React from 'react'
import CallBooker from '../ui/CallBooker'

const ContactUs = () => {
    const t = useTranslations()

    return (
        <section id="contact-us">
            <div className="cont py-48 md:py-72">
                <div className="md:col-start-3 md:col-end-11">
                    <span className="tag">{t('sectionTitles.services.tag')}</span>
                    <h2 className="mt-20 section-title">
                        {t('sectionTitles.services.0')}
                        <br />
                        <span>{t('sectionTitles.services.1')}</span>
                    </h2>
                </div>
                <div className="col-span-6 col-start-4 h-[60vh]">
                    <CallBooker />
                </div>
            </div>
        </section>
    )
}

export default ContactUs
