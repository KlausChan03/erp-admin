<template>
    <div>
        <a-form
            ref="formRef"
            :model="formState"
            :rules="rules"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 15 }"
        >
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="付款单编号" name="payCode">
                        <a-input v-model:value="formState.payCode" placeholder="输入付款单编号" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="付款金额" name="amount">
                        <a-input v-model:value="formState.amount" placeholder="输入付款金额" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="减少现金余额" name="reduceCashBalances">
                        <a-input v-model:value="formState.reduceCashBalances" placeholder="输入减少现金余额" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="减少应付金额" name="reduceDueAmount">
                        <a-input v-model:value="formState.reduceDueAmount" placeholder="输入减少应付金额" />
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRaw, UnwrapRef } from 'vue'

export default defineComponent({
    setup(props, { emit }) {
        const rolesOptions = ref()
        const formRef = ref()
        const formState: any = reactive({
            payCode: '',
            amount: '',
            reduceCashBalances: '',
            reduceDueAmount: ''
        })
        const rules = {
            payCode: [{ required: true, message: '付款单编号为必填项', trigger: 'blur' }],
            amount: [{ required: true, message: '付款金额为必填项',trigger: 'blur' }],
        }
        return {
            formState,
            rules,
            rolesOptions,
            formRef,
        }
    },
})
</script>
<style lang="less" scoped>
.item-icons {
    .item {
        text-align: center;
        padding: 10px 0;
        cursor: pointer;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        &-icon {
            border: 1px solid #ddd;
            width: 45px;
            border-radius: 3px;
        }
    }
}
</style>
