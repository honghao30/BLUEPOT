const gnbList = [
  {
    'name': '매장관리',
    'engName': 'Store management',
    "cateName": 'store',
    'to': ''
  },
  {
    'name': '정산관리',
    'engName': 'Settlement management',
    "cateName": 'calculate',
    'to': '#',    
    'children': [
        {
          'name': '연결관리',
          'to': '/ConnectionManagement',
        },
        {
          'name': '정산자동화',
          'to': '/Automation',
        },
        {
          'name': '정산서작성',
          'to': '/WriteStatement',
        },
        {
          'name': '정산서조회',
          'to': '/SearchStatement',
        },
        {
          'name': '입금/세금계산서/총괄표',
          'to': '/taxBillSummary',
        }     
      ]
  },
  {
    'name': '회원관리',
    'engName': 'Member management',
    "cateName": 'member',
    'to': '#'
  }     

]

export default gnbList