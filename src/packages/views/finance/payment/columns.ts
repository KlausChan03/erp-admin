const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        align: 'center',
        ellipsis: true,
        width: 70,
        customRender: ({ index }: { index: number }) => {
            return index + 1;
        },
    },
    {
        title: '付款单编号',
        dataIndex: 'payCode',
        key: 'payCode',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'payCode' },
    },
    {
        title: '付款金额',
        dataIndex: 'amount',
        key: 'amount',
        ellipsis: true,
        align: 'center',
        width: 80,
        slots: { customRender: 'amount' },
    },
    {
        title: '减少现金余额',
        dataIndex: 'reduceCashBalances',
        key: 'reduceCashBalances',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'reduceCashBalances' },
    },
    {
        title: '减少应付金额',
        dataIndex: 'reduceDueAmount',
        key: 'reduceDueAmount',
        ellipsis: true,
        align: 'center',
        width: 120,
        slots: { customRender: 'reduceDueAmount' },
    },
    {
        title: '制单人',
        dataIndex: 'creator',
        key: 'creator',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'creator' },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        align: 'center',
        ellipsis: true,
        width: 180,
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        width: 180,
        slots: { customRender: 'action' },
    },
];

const rolesColumns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        align: 'center',
        ellipsis: true,
        width: 70,
        customRender: ({ index }: { index: number }) => {
            return index + 1;
        },
    },
    {
        title: '角色',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'name' },
    },
    {
        title: '标识',
        dataIndex: 'tag',
        key: 'tag',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'tag' },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'createTime' },
    },
];

export default columns;
export { rolesColumns };
