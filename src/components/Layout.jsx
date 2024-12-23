import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="md:flex md:min-h-screen bg-gray-100">
            {/* Menú lateral */}
            <aside className="md:w-1/4 bg-gradient-to-b from-blue-800 to-blue-900 px-5 py-10 shadow-lg">
                <h2 className="text-4xl font-bold text-center text-white mb-5 tracking-wide">Clientes</h2>

                <nav className="mt-10">
                    <Link
                        className={`text-lg font-semibold block py-3 px-4 rounded-lg transition-all duration-300 ${
                            location.pathname === '/'
                                ? 'bg-blue-700 text-white shadow-md'
                                : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                        }`}
                        to="/"
                    >
                        Clientes
                    </Link>
                    <Link
                        className={`text-lg font-semibold block py-3 px-4 rounded-lg transition-all duration-300 mt-2 ${
                            location.pathname === '/clientes/nuevo'
                                ? 'bg-blue-700 text-white shadow-md'
                                : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                        }`}
                        to="/clientes/nuevo"
                    >
                        Nuevo Cliente
                    </Link>
                </nav>
            </aside>

            {/* Contenido principal */}
            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll bg-white shadow-lg rounded-lg m-5">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
