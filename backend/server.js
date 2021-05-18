import express from 'express';
import potenciaInstalada from './potenciaInstalada';

const app = express();

app.get("/api/potenciaInstalada", (req, res) => {
    res.send(potenciaInstalada.descripcion);
});

app.listen(3001, () => {console.log("Server iniciado en puerto http://localhost:3001/api/potenciaInstalada")});