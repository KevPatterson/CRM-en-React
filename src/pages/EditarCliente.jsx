import { obtenerCliente, actualizarCliente } from "../data/clientes";
import Formulario from "../components/Formulario";
import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom";
import Error from "../components/Error";

export async function loader({ params }) {
    const cliente = await obtenerCliente(params.clienteId);
    if (Object.values(cliente).length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "Cliente no encontrado",
        });
    }
    return cliente;
}

export async function action({ request, params }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const email = formData.get('email')

    // Validaciones
    const errores = [];
    if (Object.values(datos).includes("")) {
        errores.push("Todos los campos son obligatorios");
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (!regex.test(email)) {
        errores.push('El email no es válido')
    }

    if (errores.length) {
        return errores;
    }

    // Actualizar cliente en la base de datos
    //await fetch(`${import.meta.env.VITE_API_URL}/${params.clienteId}`, {
    //    method: "PUT",
    //    headers: {
    //        "Content-Type": "application/json",
    //    },
    //    body: JSON.stringify(datos),
    //});
    
    await actualizarCliente(params.clienteId, datos);
    return redirect('/');
}

function EditarCliente() {
    const navigate = useNavigate();
    const cliente = useLoaderData(); // Obtenemos el cliente del loader
    const errores = useActionData(); // Obtenemos errores desde el action

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
            <p className="mt-3">Aquí puedes editar los datos del cliente</p>

            <div className="mt-10 justify-end">
                <button
                    type="button"
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-lg"
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>
            </div>

            <div className="mx-auto bg-white shadow rounded-md md:w-3/4 px-5 py-10 mt-20">
                {/* Mostrar errores si existen */}
                {errores?.length > 0 && (
                    <div>
                        {errores.map((error, i) => (
                            <Error key={i}>{error}</Error>
                        ))}
                    </div>
                )}

                <Form method="POST" noValidate>
                    {/* Pasamos el cliente al formulario */}
                    <Formulario cliente={cliente} />
                    <input
                        type="submit"
                        className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                        value="Guardar Cambios"
                    />
                </Form>
            </div>
        </>
    );
}

export default EditarCliente;
