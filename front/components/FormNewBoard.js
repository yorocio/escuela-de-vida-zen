const FormNewBoard = () => {
    return (
        <div className="bg-base-100 p-8 rounded-3xl space-y-8">
            {/*  TITULO */}
            <p className="font-bold text-lg">Crear un nuevo tablero de comentarios</p>
            {/* FORMULARIO */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Nombre de la tabla</span>
                </div>
                <input
                    type='text'
                    placeholder='escribe aqui'
                    className="input input-bordered w-full" />
            </label>
            {/*  BOTÓN */}
        <button className="btn btn-primary w-full">Crear Tablero</button>
        </div>
    )
}

export default FormNewBoard