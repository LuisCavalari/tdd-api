const bcrypt = require('bcrypt')
module.exports = (sequelize, dataTypes) => {
    const user = sequelize.define('User', {
        name: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.VIRTUAL,
        password_hash: dataTypes.STRING
    }, {
        hooks: {
            beforeSave: async user => {
                if (user.password)
                    user.password_hash = await bcrypt.hash(user.password, 8);
            }
        }
    });
    return user;
}