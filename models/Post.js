//needs sequelize and connection?


postMessage.apply(
    {
        id: {
            type: DataTypeS.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }
)

module.exports = Post;