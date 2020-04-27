module.exports = app => {
    const { DATE, JSON, TEXT, INTEGER } = app.Sequelize;

    const News = app.model.define('news', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        time: DATE,
        titleImg: TEXT('medium'),
        en: JSON,
        cn: JSON,
        de: JSON,
    });

    return News;
};