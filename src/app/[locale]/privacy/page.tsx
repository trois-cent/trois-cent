'use client'

import { Button } from '@/components/ui/buttons/button'
import { useRouter } from '@/i18n/navigation'

export default function Page() {
    const router = useRouter()

    return (
        <div className="w-full h-screen portrait:min-h-[100dvh] md:flex items-center justify-center p-5 overflow-auto">
            <main className="w-full max-w-[450px] h-auto bg-off-white rounded-lg p-5">
                <h1 className="text-2xl font-semibold tracking-tight mb-8">Politique de confidentialité</h1>

                <p className="mb-4">Nous ne recueillons aucune information personnelle directement sur ce site.</p>
                <p>
                    Toutefois, lorsque vous utilisez notre outil de réservation de rendez-vous (fourni par Cal.com),
                    certaines données personnelles peuvent être collectées par cette plateforme externe, notamment votre
                    nom, votre courriel et votre disponibilité.
                </p>

                <p className="mb-4">
                    En utilisant le système de réservation, vous acceptez la politique de confidentialité de Cal.com.
                    Pour en savoir plus, vous pouvez consulter leur politique ici :{' '}
                    <a
                        href="https://cal.com/privacy"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        cal.com/privacy
                    </a>
                </p>

                <p className='py-4'>
                    Pour toute question concernant vos renseignements personnels, vous pouvez contacter notre
                    responsable de la protection des renseignements :
                    <br />
                    <strong className='block pt-4'>Étienne Courchesne</strong>
                    <a href="mailto:etienne@troiscent.ca">etienne@troiscent.ca</a>
                </p>

                <p className="text-xs text-gray-500 mb-8">Dernière mise à jour : Juillet 2025</p>

                <Button variant="black" text="Close" onClick={() => router.push('/')} />
            </main>
        </div>
    )
}
