module.exports = app => {
    const { DATE, JSON, TEXT } = app.Sequelize;

    const New = app.model.define('new', {
        time: DATE,
        titleImg: TEXT('medium'),
        en: JSON,
        cn: JSON,
        de: JSON,
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

    return New;
};