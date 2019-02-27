<template>
  <div >
    <div>请继续完善客户信息</div>
    <Form ref="customInfo" :model="customInfo" label-position="right" :label-width="50">
      <Row>
        <Col :lg="{ span:12}" :md="{ span:12}" :sm="{ span:12}" :xs="{ span:24}">
        <FormItem label="姓名:">
          <Input v-model="customInfo.userName" size="small"></Input>
        </FormItem>
        </Col>
        <Col :lg="{ span:12}" :md="{ span:12}" :sm="{ span:12}" :xs="{ span:24}">
        <FormItem label="ID号:">
          <Input v-model="customInfo.idNumber" size="small"></Input>
        </FormItem>
        </Col>
        <Col :lg="{ span:12}" :md="{ span:12}" :sm="{ span:12}" :xs="{ span:24}">
            <FormItem label="床号:">
        <Input v-model="customInfo.bedNumber" size="small"></Input>
      </FormItem>
        </Col>
        <Col :lg="{ span:12}" :md="{ span:12}" :sm="{ span:12}" :xs="{ span:24}">
            <FormItem label="科室:">
        <Input v-model="customInfo.office" size="small"></Input>
      </FormItem>
        </Col>
        <Col :lg="{ span:12}" :md="{ span:12}" :sm="{ span:12}" :xs="{ span:24}">
        <FormItem label="医院:">
        <Input v-model="customInfo.hospital" size="small"></Input>
      </FormItem></Col>
        <Col :lg="{ span:12}" :md="{ span:12}" :sm="{ span:12}" :xs="{ span:24}">
            <FormItem label="上传:">
        <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
          <Button icon="ios-cloud-upload-outline" size="small">合同、病例</Button>
        </Upload>
      </FormItem>
        </Col>
        <Col :lg="{ span:12,offset:10}" :md="{ span:12,offset:10}" :sm="{ span:12,offset:10}" :xs="{ span:12,offset:10}">
            <FormItem>
        <Button type="primary" size="small" @click="handleSubmit()">保存</Button>
      </FormItem>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        customInfo: {
          userName: '',
          idNumber: '',
          bedNumber: '',
          office: '',
          hospital: '',
        },
      }
    },
  }
</script>

<style scoped>
</style>