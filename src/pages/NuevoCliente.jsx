import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';
import Formulario from '../components/Formulario';
import Error from '../components/Error';
import { agregarCliente } from '../data/clientes';

export async function action({ request }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const email = formData.get('email');

    // Validaciones
    const errores = [];
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios');
    }

    const regex = new RegExp(
        "([!#-'*+/-9=?A-Z^-~-]+(\\.[!#-'*+/-9=?A-Z^-~-]+)*|\".+\")@([!#-'*+/-9=?A-Z^-~-]+(\\.[!#-'*+/-9=?A-Z^-~-]+)*|\\[[\\t -Z^-~]*])"
    );
    if (!regex.test(email)) {
        errores.push('El email no es válido');
    }

    if (errores.length) {
        return errores;
    }

    await agregarCliente(datos);

    return redirect('/');
}

function NuevoCliente() {
    const errores = useActionData(); // Obtiene los errores desde la función `action`
    const navigate = useNavigate();

    return (
        <div className="">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
                <h1 className="font-bold text-4xl text-blue-900 text-center">Nuevo Cliente</h1>
                <p className="mt-2 text-gray-600 text-center">
                    Llena todos los campos para registrar un nuevo cliente
                </p>

                <div className="mt-10 text-center">
                    <button
                        type="button"
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300 mb-5"
                        onClick={() => navigate(-1)}
                    >
                        Volver
                    </button>
                </div>

                <div className="bg-gray-50 shadow-inner rounded-lg p-10">
                    {/* Mostrar errores si existen */}
                    {errores?.length > 0 && (
                        <div className="mb-5">
                            {errores.map((error, i) => (
                                <Error key={i}>{error}</Error>
                            ))}
                        </div>
                    )}

                    <Form method="POST" noValidate>
                        <Formulario />
                        <input
                            type="submit"
                            className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white p-4 uppercase font-semibold text-lg rounded-lg transition-all duration-300"
                            value="Registrar Cliente"
                        />
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default NuevoCliente;
