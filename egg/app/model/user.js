const dayjs = require('dayjs')
const { customAlphabet } = require('nanoid')
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 22)
module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DATE } = app.Sequelize
    const User = app.model.define('User', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: STRING,
            comment: '姓名',
        },
        password: {
            type: STRING,
            comment: '密码',
        },
        sex: {
            type: INTEGER,
            comment: '用户性别',
            defaultValue: 1,
        },
        age: {
            type: INTEGER,
            comment: '用户年龄',
            defaultValue: 27,
        },
        email: {
            type: STRING,
            comment: '用户邮箱',
        },
        phone: {
            type: STRING,
            comment: '用户手机号',
            validate: {
                len: [3, 11],
            },
        },
        roles: {
            type: STRING,
            comment: '用户角色',
            get() {
                const roles = this.getDataValue('roles')
                return roles !== '' && roles ? roles.split(',') : []
            },
            set() {
                const roles = this.getDataValue('roles')
                return roles !== '' && roles ? roles.join(',') : ''
            },
        },
        did: {
            type: INTEGER,
            comment: '部门id',
        },
        state: {
            type: BOOLEAN,
            defaultValue: false,
            comment: '状态',
        },
        nanoid: {
            type: STRING,
            comment: 'nanoid',
            defaultValue: nanoid(),
        },
        describe: {
            type: STRING,
            comment: '描述',
            validate: {
                len: [0, 200],
            },
        },
        createTime: {
            type: DATE,
            comment: '创建时间',
            get() {
                return dayjs(this.getDataValue('createTime')).format('YYYY/MM/DD HH:mm:ss')
            },
        },
        updateTime: {
            type: DATE,
            comment: '更新时间',
            get() {
                return dayjs(this.getDataValue('updateTime')).format('YYYY/MM/DD HH:mm:ss')
            },
        },
    }, {
        createdAt: 'createTime', // 指定名字
        updatedAt: 'updateTime',
        tableName: 'yxs_User', // 定义实际表名
    })

    User.associate = function() {
        // sourceKey 主键为User id
        app.model.User.belongsTo(app.model.Branch, {
            foreignKey: 'did',
            targetKey: 'id',
            sourceKey: 'id',
            as: 'branch',
        })
    }
    return User
}

