import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [empleados, setEmpleados] = useState();

    useEffect(() => {
        populateEmpleadosData();
    },[]);

    const contentsE = empleados === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody>
                {empleados.map(item =>
                    <tr key={item.idEmpleado}>
                        <td>{item.nombre}</td>
                        <td>{item.correo}</td>
                        <td>{item.direccion}</td>
                        <td>{item.telefono}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Weather forecast and Employees</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contentsE}
        </div>
    );

    async function populateEmpleadosData() {
        const response = await fetch('Empleadoes');
        const data = await response.json();
        setForecasts(data);
    }
}

export default App;