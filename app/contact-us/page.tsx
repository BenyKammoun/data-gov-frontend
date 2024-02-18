import { ContactFormSkeleton } from "../components/skeletons"

export default function ContactUsPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="my-4 text-lg md:text-xl font-semibold">צור קשר</p>
            <ContactFormSkeleton  className="w-1/2"/>
        </div>
    )
}
