changeTable = function (val, TableExpand) {
  let columns = []
  if (val > 1200) {
    columns = [{
        title: '序号',
        type: 'index',
        key: 'index',
        align: 'center',
      },
      {
        title: '时间',
        key: 'runTimes',
        align: 'center',
      },
      {
        title: '申请类型',
        key: 'msgType',
        align: 'center',
      },
      {
        title: '申请事由',
        key: 'msgBody',
        align: 'center',
      },
      {
        title: '申请备注',
        key: 'msgTips',
        align: 'center',
      },
      {
        title: '审批人',
        key: 'approver',
        align: 'center',
      },
      {
        title: '抄送人',
        key: 'copy',
        align: 'center',
      },
      {
        title: '审批状态',
        slot: 'status',
        align: 'center',
      },
      {
        title: '操作',
        slot: 'action',
        align: 'center',
        width:140,
      }
    ]
  } else if (val > 800 && val <= 1200) {
    columns = [{
        type: 'expand',
        width: 40,
        render: (h, params) => {
          return h(TableExpand, {
            props: {
              row: params.row
            }
          })
        }
      },
      {
        title: '序号',
        type: 'index',
        key: 'index',
        width: 80,
        align: 'center',
      },
      {
        title: '时间',
        key: 'runTimes',
        align: 'center',
      },
      {
        title: '申请类型',
        key: 'msgType',
        align: 'center',
      },
      {
        title: '审批状态',
        slot: 'status',
        align: 'center',
      },
      {
        title: '操作',
        slot: 'action',
        align: 'center',
        width: 130
      }
    ]
  } else if (val > 365 && val <= 800) {
    columns = [{
        type: 'expand',
        width: 40,
        render: (h, params) => {
          return h(TableExpand, {
            props: {
              row: params.row
            }
          })
        }
      },
      {
        title: '申请类型',
        key: 'msgType',
        align: 'center',
      },
      {
        title: '审批状态',
        slot: 'status',
        align: 'center',
      },
      {
        title: '操作',
        slot: 'action',
        align: 'center',
        width: 130
      }
    ]
  } else {
    columns = [{
        type: 'expand',
        width: 40,
        render: (h, params) => {
          return h(TableExpand, {
            props: {
              row: params.row
            }
          })
        }
      },
      {
        title: '申请类型',
        key: 'msgType',
        align: 'center',
      },
      {
        title: '操作',
        slot: 'action',
        align: 'center',
        width: 130
      }
    ]
  }
  return columns
}

module.exports.changeTable = changeTable

changeExpand = function (val, ExpandInfo) {
  let columns = []
  if (val > 1200) {
    columns = [{
        title: '序号',
        type: 'index',
        key: 'index',
        align: 'center',
      },
      {
        title: '姓名',
        key: 'name',
        align: 'center',
      },
      {
        title: '性别',
        key: 'sex',
        align: 'center',
      },
      {
        title: '联系方式',
        key: 'phone',
        align: 'center',
      },
      {
        title: '身份证号',
        key: 'creditCard',
        align: 'center',
      },
      {
        title: '客户类型',
        slot: 'type',
        align: 'center',
      },
      {
        title: '操作',
        slot: 'action',
        align: 'center',
        width: 130
      }
    ]
  } else if (val > 800 && val <= 1200) {
    columns = [
      {
        type: 'expand',
        width: 40,
        render: (h, params) => {
          return h(ExpandInfo, {
            props: {
              row: params.row
            }
          })
        }
      },
      {
        title: '序号',
        type: 'index',
        key: 'index',
        width:60,
        align: 'center',
      },
      {
        title: '姓名',
        key: 'name',
        align: 'center',
      },
      {
        title: '联系方式',
        key: 'phone',
        align: 'center',
        width:120
      },
      {
        title: '客户类型',
        slot: 'type',
        align: 'center',
      },
      // {
      //   title: '跟踪状态',
      //   key: 'followingStatus',
      //   align: 'center',
      // },
      {
        title: '操作',
        slot: 'action',
        align: 'center',
        width: 130
      }
    ]
  } else if (val <= 800) {
    columns = [{
        type: 'expand',
        width: 40,
        render: (h, params) => {
          return h(ExpandInfo, {
            props: {
              row: params.row
            }
          })
        }
      },
      {
        title: '姓名',
        key: 'name',
        align: 'center',
      }, 
      {
        title: '客户类型',
        slot: 'type',
        align: 'center',
      },
      {
        title: '操作',
        slot: 'action',
        align: 'center',
        width: 130
      }
    ]
  }
  return columns
}
module.exports.changeExpand = changeExpand

changeExpand2 = function (val, BusinessExpand) {
  let columns2 = []
  if (val > 1200) {
    columns2 = [{
        title: '序号',
        type: 'index',
        key: 'index',
        align: 'center',
      },
      {
        title: '企业名称',
        key: 'company',
        align: 'center',
      },
      {
        title: '办公地',
        key: 'nowerAddr',
        align: 'center',
      },
      {
        title: '联系方式',
        key: 'phone',
        align: 'center',
      },
      {
        title: '联系人',
        key: 'name',
        align: 'center',
      },
      {
        title: '操作',
        slot: 'action',
        align: 'center',
        width: 130
      }
    ]
  } else if (val > 800 && val <= 1200) {
    columns2 = [
      {
        type: 'expand',
        width: 40,
        render: (h, params) => {
          return h(BusinessExpand, {
            props: {
              row: params.row
            }
          })
        }
      },
      {
        title: '序号',
        type: 'index',
        key: 'index',
        width:60,
        align: 'center',
      },
      {
        title: '企业名称',
        key: 'company',
        align: 'center',
      },
      {
        title: '办公地',
        key: 'nowerAddr',
        align: 'center',
        width:120
      },
      {
        title: '联系方式',
        key: 'phone',
        align: 'center',
      },
      {
        title: '操作',
        slot: 'action',
        align: 'center',
        width: 130
      }
    ]
  } else if (val <= 800) {
    columns2 = [
      {
        type: 'expand',
        width: 40,
        render: (h, params) => {
          return h(BusinessExpand, {
            props: {
              row: params.row
            }
          })
        }
      },
      {
        title: '企业名称',
        key: 'company',
        align: 'center',
      },
      {
        title: '联系方式',
        key: 'phone',
        align: 'center',
      }, 
      {
        title: '操作',
        slot: 'action',
        align: 'center',
        width: 130
      }
    ]
  }
  return columns2
}
module.exports.changeExpand2 = changeExpand2