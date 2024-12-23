import { AiOutlineWarning } from 'react-icons/ai';

function Error({ children }) {
    return (
        <div className="flex items-center bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-sm my-4 animate-fade-in">
            <AiOutlineWarning className="text-red-500 text-2xl mr-3" />
            <p className="font-medium text-lg">{children}</p>
        </div>
    );
}

export default Error;
