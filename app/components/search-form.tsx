import { Field, Form, Formik } from 'formik';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function SearchForm() {
    return (
        <div className="flex items-center justify-center w-full h-60 rounded bg-gray-100">
            <form action="/" className="p-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 flex bg-white">
                <input
                    className="min-h-8 px-3 py-1 border-none focus:outline-none flex-grow"
                    type="text"
                    name="query"
                    placeholder="הזן חיפוש"
                />
                <button
                    className="w-8 h-8 rounded-full rounded-r-none bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center"
                    type="submit"
                >
                    <MagnifyingGlassIcon className="w-4 h-4" />
                </button>
            </form>
        </div>

    );
}