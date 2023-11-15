import {DataTypes, Model} from 'sequelize';
import sequelize from '../services/database/sequelize';

class RequestLog extends Model {
}

RequestLog.init({
    ip: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    artistName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'RequestLog',
    timestamps: false,
});

export default RequestLog;
