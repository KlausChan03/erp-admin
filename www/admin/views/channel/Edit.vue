<template>
    <div>
        <a-form ref="formRef" :model="formState" :rules="rules" :label-col="{span: 6}" :wrapper-col="{span: 15}">
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="栏目名称" name="name">
                        <a-input v-model:value="formState.name" placeholder="输入角色名称" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="父级节点" name="pid">
                        <a-tree-select
                            v-model:value="formState.pid"
                            style="width: 100%"
                            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                            :tree-data="treeData"
                            :replace-fields="{children:'children', key:'id', value: 'id', title: 'name'}"
                            placeholder="选择父级节点，不选择为一级菜单"
                            allow-clear
                            tree-default-expand-all
                        >
                            <template #title="{ key, value,title }">
                                <span>{{ key }}</span>
                            </template>
                        </a-tree-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="图片" name="image">
                        <a-input v-model:value="formState.image" placeholder="输入图片地址" />&nbsp;&nbsp;
                        <bag-upload-image @update:image="baseResources.updateImage" :image="formState.image" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="链接地址" name="url">
                        <a-input v-model:value="formState.url" placeholder="输入链接地址" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="链接地址" name="keywords">
                        <a-select
                            v-model:value="formState.keywords"
                            mode="tags"
                            style="width: 100%"
                            placeholder="选择关键词"
                            option-label-prop="label"
                            :options="baseResources.keywords"
                        >
                            <template #option="{ value: val, label, icon }">
                                <span role="img" :aria-label="val">{{ icon }}</span>
                                &nbsp;&nbsp;{{ val }}
                            </template>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否允许投稿" name="is_contribute">
                        <a-radio-group v-model:value="formState.is_contribute">
                            <a-radio :value="1">允许投稿</a-radio>
                            <a-radio :value="0">禁止投稿</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否显示" name="shows">
                        <a-radio-group v-model:value="formState.shows">
                            <a-radio :value="1">显示</a-radio>
                            <a-radio :value="0">不显示</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="排序" name="order">
                        <a-input v-model:value="formState.order" placeholder="输入排序号" />
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import hook from '@www/admin/views/channel/hook'

export default defineComponent({
    props: {
        id: {
            required: true,
            type: [Number, String],
        },
        treeData: {
            type: Array,
        },
    },
    setup() {
        const { formState, rules, baseResources, formRef } = hook()

        return {
            formState,
            rules,
            baseResources,
            formRef,
        }
    },
})
</script>
