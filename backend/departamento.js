const express = require('express');
const router = express.Router();

let departamentos = [];

router.post('/registrar', (req, res) => {
    const { nombre, codigo } = req.body;
    if (!nombre || !codigo) {
        return res.status(400).json({ mensaje: 'Faltan datos obligatorios.' });
    }
    departamentos.push({ nombre, codigo });
    res.json({ mensaje: 'Departamento registrado correctamente.' });
});

router.put('/modificar/:codigo', (req, res) => {
    const { codigo } = req.params;
    const datos = req.body;
    const departamento = departamentos.find(d => d.codigo === codigo);
    if (!departamento) {
        return res.status(404).json({ mensaje: 'Departamento no encontrado.' });
    }
    Object.assign(departamento, datos);
    res.json({ mensaje: 'Departamento modificado correctamente.' });
});

router.delete('/eliminar/:codigo', (req, res) => {
    const { codigo } = req.params;
    const index = departamentos.findIndex(d => d.codigo === codigo);
    if (index === -1) {
        return res.status(404).json({ mensaje: 'Departamento no encontrado.' });
    }
    departamentos.splice(index, 1);
    res.json({ mensaje: 'Departamento eliminado correctamente.' });
});

module.exports = router;