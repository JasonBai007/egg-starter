module.exports = app => {
    const { DataTypes, DATE } = app.Sequelize;

    const User = app.model.define('news', {
        time: DATE,
        titleImg: DataTypes.TEXT('medium'),
        en: DataTypes.JSON(),
        cn: DataTypes.JSON(),
        de: DataTypes.JSON(),
        created_at: DATE,
        updated_at: DATE,
    });

    // User.findByLogin = async function(login) {
    //   return await this.findOne({
    //     where: {
    //       login: login
    //     }
    //   });
    // }

    // // don't use arraw function
    // User.prototype.logSignin = async function() {
    //   return await this.update({ last_sign_in_at: new Date() });
    // }

    return User;
};