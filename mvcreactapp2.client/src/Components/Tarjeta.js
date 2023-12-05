const Tarjeta = (props) => {
    return (
        <div className="card text-center bg-dark at-5">
            <div className="card-body">
                <h1 className="card-title text-info">{props.titulo }</h1>
                <p className="card-text text-ligth">{props.parrafo}</p>
                <a href="#" className="btn btn-danger">{props.textButton}</a>
            </div>
        </div>
    )
}

export default Tarjeta;