import { TaskItem } from '../type/homeType';

export const task: TaskItem[] = [
  /*{
    path: '/',
    icon: 'report_correct',
    title: '待报送交易补正',
    number: 3,
  },*/
  {
    path: '/report/dataPerfection/wrongTransaction',
    icon: 'error_correct',
    title: '错误回执交易补正',
    number: 99,
  },
  {
    path: '/report/suspiciousTransaction/suspiciousIdentify',
    icon: 'trans_identify',
    title: '可疑交易甄别',
    number: 99,
  },
  {
    path: '/report/suspiciousTransaction/suspiciousReview',
    icon: 'trans_check',
    title: '可疑交易审查',
    number: 99,
  },
  {
    path: '/report/packetGeneration/datapacketGenerated',
    icon: 'generate_data',
    title: '待生成数据包',
    number: 99,
  },
  {
    path: '/report/receiptManage',
    icon: 'upload_receipt',
    title: '待上传回执',
    number: 99,
  },
  {
    path: '/risks/customerRisk/newcustomerHandle',
    icon: 'new_risk_assessment',
    title: '新客户风险评估',
    number: 99,
  },
  {
    path: '/risks/customerRisk/customerHandle',
    icon: 'has_risk_assessment',
    title: '存量客户风险评估',
    number: 99,
  },
  {
    path: '/risks/organizationRisk/organizationHandle',
    icon: 'org_risk_assessment',
    title: '机构风险评估',
    number: 99,
  },
  {
    path: '/identifying/diligencingManage/diligencingLaunchQuery',
    icon: 'customer_survey',
    title: '客户尽职调查',
    number: 99,
  },
];
