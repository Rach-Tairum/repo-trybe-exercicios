const express = require('express');
const { Adress, Employee } = require('./models');

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Adress, as: 'adresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ where: { id } });
    // const employee = await Employee.findOne({
    //     where: { id },
    //     include: [{ model: Adress, as: 'adresses', attributes: { exclude: ['number'] } }],
    //   });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    // return res.status(200).json(employee);
    if (req.query.includeAddresses === 'true') {
      const addresses = await Adress.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;