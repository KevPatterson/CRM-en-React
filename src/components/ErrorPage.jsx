import { useRouteError } from 'react-router-dom';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
            <div className="bg-white shadow-lg rounded-lg p-10 max-w-md text-center">
                <AiOutlineExclamationCircle className="text-red-500 text-6xl mx-auto mb-4" />
                <h1 className="text-4xl font-bold text-blue-900">CRM - Clientes</h1>
                <p className="text-gray-600 mt-4 text-lg">Lo sentimos, ocurrió un error.</p>
                <p className="text-gray-500 mt-2 italic">
                    {error.statusText || error.message}
                </p>
            </div>
        </div>
    );
}
