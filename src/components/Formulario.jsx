const Formulario = ({ cliente = {} }) => {
    return (
        <div className="space-y-6">
            <div>
                <label className="text-gray-700 font-semibold block mb-2" htmlFor="nombre">
                    Nombre:
                </label>
                <input
                    id="nombre"
                    type="text"
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="Nombre del Cliente"
                    name="nombre"
                    defaultValue={cliente?.nombre}
                />
            </div>

            <div>
                <label className="text-gray-700 font-semibold block mb-2" htmlFor="empresa">
                    Empresa:
                </label>
                <input
                    id="empresa"
                    type="text"
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="Empresa del Cliente"
                    name="empresa"
                    defaultValue={cliente?.empresa}
                />
            </div>

            <div>
                <label className="text-gray-700 font-semibold block mb-2" htmlFor="email">
                    E-mail:
                </label>
                <input
                    id="email"
                    type="email"
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="Email del Cliente"
                    name="email"
                    defaultValue={cliente?.email}
                />
            </div>

            <div>
                <label className="text-gray-700 font-semibold block mb-2" htmlFor="telefono">
                    Teléfono:
                </label>
                <input
                    id="telefono"
                    type="tel"
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="Teléfono del Cliente"
                    name="telefono"
                    defaultValue={cliente?.telefono}
                />
            </div>

            <div>
                <label className="text-gray-700 font-semibold block mb-2" htmlFor="notas">
                    Notas:
                </label>
                <textarea
                    id="notas"
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none h-32 transition-all"
                    placeholder="Notas del Cliente"
                    name="notas"
                    defaultValue={cliente?.notas}
                />
            </div>
        </div>
    );
};

export default Formulario;
