import './pre-start';
import logger from 'jet-logger';
import EnvVars from '@src/constants/EnvVars';
import server from './server';
import sequelize from './services/database/sequelize';


// **** Run **** //

const SERVER_START_MSG = ('Express server started on port: ' +
  EnvVars.Port.toString());
sequelize.sync({force: false}).then(() => {

    const port = process.env.PORT || 5000;
    server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));
})
    .catch((error) => {
        console.error('Error durante la sincronización de la base de datos:', error);
    });
