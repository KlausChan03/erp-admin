<template>
    <div class="home">
        <div class="container">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <Broadcast/>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                    <Toplove/>
                    <HomeSection/>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                    <HomeAside/>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script lang="ts" setup>
import HomeSection from './Section.vue'
import HomeAside from './Aside.vue'
import Broadcast from './Broadcast.vue'
import Toplove from './Toplove.vue'
</script>
