const dayjs = require('dayjs')
module.exports = app => {
    const {STRING, INTEGER, BOOLEAN, DATE, TEXT} = app.Sequelize
    return app.model.define('Payment', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        payCode: {
            type: STRING,
            comment: '付款单编号',
        },
        amount: {
            type: STRING,
            comment: '付款金额',
        },
        reduceCashBalances: {
          type: STRING,
          comment: '减少现金余额',
        },
        reduceDueAmount: {
          type: STRING,
          comment: '减少应付金额',
        },
        // status: {
        //     type: STRING,
        //     comment: '状态',
        // },
        creator: {
          type: STRING,
          comment: '制单人',
        },
        createTime: {
            type: DATE,
            comment: '创建时间',
            get() {
                return dayjs(this.getDataValue('createTime')).format('YYYY-MM-DD HH:mm:ss')
            },
        },
        updateTime: {
            type: DATE,
            comment: '更新时间',
            get() {
                return dayjs(this.getDataValue('updateTime')).format('YYYY-MM-DD HH:mm:ss')
            },
        },
    }, {
        createdAt: 'createTime', // 指定名字
        updatedAt: 'updateTime',
        tableName: 'yxs_finance_payment', // 定义实际表名 文章表
    })
}
