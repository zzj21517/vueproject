<template>
    <div>
        <div class="custom-list">
            <div>我的客户列表</div>
            <div>
                <Button type="error" size="small">添加客户</Button>
            </div>
        </div>
        <Row>
            <Col :span="24">
                <Table :columns="columns" :data="customData" size='small' border></Table>
            </Col>
        </Row>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
             show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        },
        data() {
            return {
                 columns: [
                    {
                        title: '姓名',
                        key: 'name',
                        width:100,
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        width:100
                    },
                    {
                        title: '信息2',
                        key: 'date',
                        width:150
                    },
                    {
                        title: '类型',
                        key: 'type',
                        width:100,
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        fixed: 'right',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                customData: [
                    {
                        name: '李四',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03',
                        type:'成功'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01',
                        type:'失败'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02',
                        type:'失败'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04',
                        type:'失败'
                    }
                ]
            }
        },
    }
</script>

<style scoped>
.custom-list{
    display:flex;
    align-items: center;
    justify-content: space-between;
}

</style>