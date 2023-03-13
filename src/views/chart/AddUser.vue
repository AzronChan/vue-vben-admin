<template>
  <div>
    <PageWrapper title="增加用户" contentFullHeight>
      <div class="overflow-hidden vben-page-wrapper-content p-4 vben-page-wrapper-content-bg">
        <BasicForm :labelWidth="200" @register="register" @submit="submit" />
      </div>
    </PageWrapper>
  </div>
</template>


<script lang="ts" setup>
  import { insertUserApi } from '/@/api/chat';
  import { PageWrapper } from '/@/components/Page';
  import { CollapseContainer } from '/@/components/Container';

  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';

  const schemas: FormSchema[] = [
    {
      field: 'age',
      component: 'Input',
      label: '年龄',
      span: 8,
    },
    {
      field: 'birth',
      component: 'DatePicker',
      label: '生日',
      span: 16,
    },
    {
      field: 'education',
      component: 'Input',
      label: '学历',
      span: 8,
    },
    {
      field: 'faceUrl',
      component: 'Input',
      label: '头像地址',
      span: 8,
    },
    {
      field: 'height',
      component: 'Input',
      label: '身高cm',
      span: 8,
    },
    {
      field: 'homeTown',
      component: 'Input',
      label: '家乡',
      span: 8,
    },
    {
      field: 'nickname',
      component: 'Input',
      label: '昵称',
      span: 8,
    },
    {
      field: 'password',
      component: 'Input',
      label: '密码',
      span: 8,
      dynamicRules: ({ values }) => {
        return [{ required: true }];
      },
    },
    {
      field: 'photos',
      component: 'Input',
      label: '用户相册',
      span: 8,
    },
    {
      field: 'education',
      component: 'Input',
      label: '学历',
      span: 8,
    },
    {
      field: 'platform',
      component: 'Input',
      label: '平台',
      span: 8,
      dynamicRules: ({ values }) => {
        return [{ required: true }];
      },
    },
    {
      field: 'sex',
      component: 'Select',
      label: '性别',
      span: 8,
      componentProps: {
        options: [
          {
            label: '女',
            value: 1,
            key: '1',
          },
          {
            label: '男',
            value: 2,
            key: '2',
          },
        ],
      },
    },
    {
      field: 'starSign',
      component: 'Input',
      label: '星座',
      span: 8,
    },
    {
      field: 'tags',
      component: 'Input',
      label: '标签',
      span: 8,
    },
    {
      field: 'userPhone',
      component: 'Input',
      label: '用户手机',
      span: 8,
    },
    {
      field: 'weight',
      component: 'Input',
      label: '体重kg',
      span: 8,
    },
  ];

  const [register] = useForm({
    schemas,
  });

  const submit = async function (values: Recordable) {
    const res = await insertUserApi(values);
    
    console.log(res)
  };
</script>

<style lang="less" scoped></style>