<template>
  <a-card :bordered="false">
    <a-space :size="54">
      <a-upload
        action="/"
        list-type="picture-card"
        :file-list="fileList"
        :show-upload-button="true"
        :show-file-list="false"
        @change="uploadChange"
      >
        <template #upload-button>
          <a-avatar :size="100" class="info-avatar">
            <template #trigger-icon>
              <icon-camera />
            </template>
            <img v-if="fileList.length" :src="fileList[0].url" />
          </a-avatar>
        </template>
      </a-upload>
      <a-descriptions
        :data="renderData"
        :column="2"
        align="right"
        layout="inline-horizontal"
        :label-style="{
          width: '140px',
          fontWeight: 'normal',
          color: 'rgb(var(--gray-8))',
        }"
        :value-style="{
          width: '200px',
          paddingLeft: '8px',
          textAlign: 'left',
        }"
      >
        <template #label="{ label }">{{ $t(label) }} :</template>
        <template #value="{ value, data }">
          <a-tag v-if="data.label === 'userSetting.label.certification'" color="green" size="small">已认证</a-tag>
          <span v-else>{{ value }}</span>
        </template>
      </a-descriptions>
    </a-space>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUserStore } from '@/store'

export default defineComponent({
  setup() {
    const userStore = useUserStore()
    const file = {
      uid: '-2',
      name: 'avatar.png',
      url: userStore.avatar,
    }
    const renderData: any = [
      {
        label: 'userSetting.label.name',
        value: userStore.name,
      },
      {
        label: 'userSetting.label.certification',
        value: userStore.certification,
      },
      {
        label: 'userSetting.label.accountId',
        value: userStore.accountId,
      },
      {
        label: 'userSetting.label.phone',
        value: userStore.phone,
      },
      {
        label: 'userSetting.label.registrationDate',
        value: userStore.registrationDate,
      },
    ]
    const fileList = ref<any[]>([file])
    const uploadChange = (fileItemList: any[], fileItem: any) => {
      fileList.value = [fileItem]
    }
    return {
      fileList,
      renderData,
      uploadChange,
    }
  },
})
</script>

<style scoped lang="less">
.arco-card {
  padding: 14px 0 4px 4px;
  border-radius: 4px;
}

:deep(.arco-avatar-trigger-icon-button) {
  width: 32px;
  height: 32px;
  line-height: 32px;
  background-color: #e8f3ff;

  .arco-icon-camera {
    margin-top: 8px;
    color: rgb(var(--arcoblue-6));
    font-size: 14px;
  }
}
</style>
