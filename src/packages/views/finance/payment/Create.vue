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
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRaw, UnwrapRef } from 'vue'
import { apiAll as apiBranchAll } from '@/packages/service/branch'
import { toTree } from '@/packages/utils/utils'
import { validatPhone } from '@/packages/utils/validator'
import { apiAll as apiRoleAll } from '@/packages/service/role'

export default defineComponent({
    setup(props, { emit }) {
        const treeData = ref()
        const rolesOptions = ref()
        const formRef = ref()
        const formState: any = reactive({
            username: '',
            sex: 1,
            age: '',
            email: '',
            phone: '',
            roles: [],
            describe: '',
            did: undefined,
            state: 1,
        })
        const rules = {
            username: [{ required: true, message: '姓名为必填项', trigger: 'blur' }],
            phone: [{ required: true, validator: validatPhone, trigger: 'blur' }],
            describe: [{ trigger: 'blur', max: 200, message: '最大长度为200' }],
        }
        apiBranchAll().then((res: Array<any>) => {
            treeData.value = toTree(res)
        })
        apiRoleAll().then((res: Array<any>) => {
            rolesOptions.value = res.map((item) => {
                return {
                    ...item,
                    value: item.tag,
                }
            })
        })
        return {
            formState,
            rules,
            treeData,
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
