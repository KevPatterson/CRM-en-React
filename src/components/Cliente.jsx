import { useState } from "react";
import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarCliente } from "../data/clientes";
import ConfirmModal from "./ConfirmModal"; // Asegúrate de haber creado el componente ConfirmModal

export async function action({ params }) {
    try {
        await eliminarCliente(params.clienteId);
        return redirect('/');
    } catch (error) {
        console.error(error);
        throw new Response('', {
            status: 500,
            statusText: 'Error al eliminar el cliente',
        });
    }
}

function Cliente({ cliente }) {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const { id, nombre, email, telefono, empresa } = cliente;

    return (
        <>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="p-6 space-y-2">
                    <p className="text-2xl text-gray-800">{nombre}</p>
                    <p>{empresa}</p>
                </td>
                <td className="p-6">
                    <p className="text-gray-600">
                        <span className="text-gray-800 uppercase font-bold">Correo: </span>
                        {email}
                    </p>
                    <p className="text-gray-600">
                        <span className="text-gray-800 uppercase font-bold">Tel: </span>
                        {telefono}
                    </p>
                </td>
                <td className="p-6 flex gap-3">
                    <button
                        type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                        onClick={() => navigate(`/clientes/${id}/editar`)}
                    >
                        Editar
                    </button>

                    <button
                        type="button"
                        className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                        onClick={() => setShowModal(true)}
                    >
                        Eliminar
                    </button>
                </td>
            </tr>

            {/* Modal de confirmación */}
            <ConfirmModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={() => {
                    setShowModal(false);
                    document.querySelector(`form[action="/clientes/${id}/eliminar"]`).submit();
                }}
                message={`¿Estás seguro de que deseas eliminar el cliente "${nombre}"?`}
            />

            {/* Formulario oculto para enviar la solicitud */}
            <Form method="post" action={`/clientes/${id}/eliminar`} className="hidden"></Form>
        </>
    );
}

export default Cliente;
