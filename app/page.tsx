// import Image from 'next/image'
import { ApiCardSkeleton } from "./components/skeletons";

export default function HomePage() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center">
                <p className="my-4 text-lg md:text-xl font-semibold">דוגמאות לצריכת API</p>
                <div className="md:flex md:flex-row">
                    <ApiCardSkeleton className="mx-2"/>
                    <ApiCardSkeleton className="mx-2"/>
                    <ApiCardSkeleton className="mx-2"/>
                    <ApiCardSkeleton className="mx-2"/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="my-4 text-lg md:text-xl font-semibold">מאגרים פופולריים</p>
                <div className="md:flex md:flex-row">
                    <ApiCardSkeleton className="mx-2"/>
                    <ApiCardSkeleton className="mx-2"/>
                    <ApiCardSkeleton className="mx-2"/>
                    <ApiCardSkeleton className="mx-2"/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="my-4 text-lg md:text-xl font-semibold">תגיות נפוצות</p>
                <div className="md:flex md:flex-row">
                    <ApiCardSkeleton className="mx-2"/>
                    <ApiCardSkeleton className="mx-2"/>
                    <ApiCardSkeleton className="mx-2"/>
                    <ApiCardSkeleton className="mx-2"/>
                </div>
            </div>
        </main>
    );
}
