// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
        >
            <div className="flex p-4">
                <div className="h-5 w-5 rounded-md bg-gray-200" />
                <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
            </div>
            <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
                <div className="h-7 w-20 rounded-md bg-gray-200" />
            </div>
        </div>
    );
}


export function LogoSkeleton() {
    return (
        <div className="flex px-5 items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
        </div>
    );
}

export function FooterLogoSkeleton() {
    return (
        <div className="flex px-5 items-center justify-center">
            <div className="h-8 w-24 rounded-full bg-gray-200"></div>
        </div>
    );
}

export function ApiCardSkeleton({ className }: { className?: string }) {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm ${className}`}
        >
            <div className="flex p-4">
                <div className="ml-2 h-6 w-20 rounded-md bg-gray-200 text-sm font-medium" />
            </div>
            <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
                <div className="h-7 w-20 rounded-md bg-gray-200" />
            </div>
        </div>
    );
}

export function ArticleSkeleton({ className }: { className?: string }) {
    return (
        <div className={`${shimmer} relative overflow-hidden rounded-xl border border-gray-100 p-2 shadow-sm ${className}`}>
            <div className="flex p-4">
                <div className="h-10 w-10 px-2 rounded-full bg-gray-200"></div>
                <div className="h-10 w-40 mx-4 px-2 rounded-md bg-gray-200 text-lg font-medium"></div>
            </div>
            <div className="flex p-4">
                <div className="h-2 w-24 px-2 rounded-md bg-gray-200 text-lg font-medium"></div>
            </div>
            <div className="flex flex-col p-4">
                <div className="h-4 w-full m-2 rounded-md bg-gray-200 text-lg font-medium"></div>
                <div className="h-4 w-full m-2 rounded-md bg-gray-200 text-lg font-medium"></div>
                <div className="h-4 w-full m-2 rounded-md bg-gray-200 text-lg font-medium"></div>
                <div className="h-4 w-full m-2 rounded-md bg-gray-200 text-lg font-medium"></div>
                <div className="h-4 w-full m-2 rounded-md bg-gray-200 text-lg font-medium"></div>
                <div className="h-4 w-1/3 m-2 rounded-md bg-gray-200 text-lg font-medium"></div>
            </div>
        </div>
    );
}

export function FilterSkeleton({className}: {className?: string}) {
    return (
        <div className={`${shimmer} relative overflow-hidden rounded-xl border border-gray-100 p-2 shadow-sm ${className}`}>
            <div className="flex p-4">
                <div className="h-4 w-4 mx-2 px-2 rounded-md bg-gray-200"></div>
                <div className="h-8 grow mx-2 px-2 rounded-md bg-gray-200"></div>
                <div className="h-8 w-8 mx-2 px-2 rounded-full bg-gray-200"></div>
            </div>
            <div className="flex p-4">
                <div className="h-4 w-4 mx-2 px-2 rounded-md bg-gray-200"></div>
                <div className="h-8 grow mx-2 px-2 rounded-md bg-gray-200"></div>
                <div className="h-8 w-8 mx-2 px-2 rounded-full bg-gray-200"></div>
            </div>
            <div className="flex p-4">
                <div className="h-4 w-4 mx-2 px-2 rounded-md bg-gray-200"></div>
                <div className="h-8 grow mx-2 px-2 rounded-md bg-gray-200"></div>
                <div className="h-8 w-8 mx-2 px-2 rounded-full bg-gray-200"></div>
            </div>
            <div className="flex p-4">
                <div className="h-4 w-4 mx-2 px-2 rounded-md bg-gray-200"></div>
                <div className="h-8 grow mx-2 px-2 rounded-md bg-gray-200"></div>
                <div className="h-8 w-8 mx-2 px-2 rounded-full bg-gray-200"></div>
            </div>
        </div>
    );
}

export function DatasetCardSkeleton({className}: {className?: string}) {
    return (
        <div className={`${shimmer} relative overflow-hidden rounded-xl border border-gray-100 p-2 shadow-sm ${className}`}>
            <div className="flex p-4">
                <div className="h-24 w-24 mx-2 px-2 rounded-md bg-gray-200"></div>
                <div className="h-12 w-1/4 mx-4 px-2 rounded-md bg-gray-200"></div>
            </div>
        </div>
    );
}

export function DatasetsListSkeleton() {
    return (
        <div className="flex p-4">
            <FilterSkeleton className="w-1/4 mx-2"/>
            <div className="flex flex-col w-3/4 mx-2">
                <DatasetCardSkeleton className="my-1"/>
                <DatasetCardSkeleton className="my-1"/>
                <DatasetCardSkeleton className="my-1"/>
            </div>
        </div>
    );
}

export function ContactFormSkeleton({ className }: { className?: string }) {
    return (
        <div className={`${shimmer} relative overflow-hidden rounded-xl border border-gray-100 p-2 shadow-sm ${className}`}>
            <div className="flex flex-col my-2 justify-center items-center">
                <div className="h-12 w-1/2 mx-4 px-2 my-1 rounded-md bg-gray-200"></div>
                <div className="h-12 w-1/2 mx-4 px-2 my-1 rounded-md bg-gray-200"></div>
                <div className="h-64 w-1/2 mx-4 px-2 my-1 rounded-md bg-gray-200"></div>
                <div className="h-10 w-1/4 mx-4 px-2 my-1 rounded-md bg-gray-200"></div>
            </div>
        </div>
    );
}