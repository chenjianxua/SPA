
np.menuData = [{
  title: '文件(F)',
  menuItems: [
    {title: '新建(N)',shortcut: 'Ctrl+N'}, 
    {title: '打开(O)...',shortcut: 'Ctrl+O',},
    {title: '保存(S)',shortcut: 'Ctrl+S',enabled: true}, 
    {title: '另存为(A)...',shortcut: '',enabled: true}, 
    {title: 'hr',shortcut: '',enabled: true}, 
    {title: '页面设置(U)...',shortcut: '',enabled: true}, 
    {title: '打印(P)...',shortcut: 'Ctrl+P',enabled: true},
    {title: 'hr',shortcut: '',enabled: true,handler: null}, 
    {title: '退出(X)',shortcut: '',enabled: true}
  ],
  width: '202px',
  left: '0px'
}, {
  title: '编辑(E)',
  menuItems: [
    {title: '撤销(U)', shortcut: 'Ctrl+Z',enabled: false}, 
    {title: 'hr',shortcut: '',enabled: true}, 
    {title: '剪切(T)',shortcut: 'Ctrl+X',enabled: true},
    {title: '复制(C)',shortcut: 'Ctrl+C',enabled: false}, 
    {title: '粘贴(P)',shortcut: 'Ctrl+V', enabled: false},
    {title: '删除(L)',shortcut: 'Del',enabled: false}, 

    ],
  width: '218px',
  left: '52px'
}, {
  title: '格式(O)',
  menuItems: [{title: '自动换行(W)', shortcut: '',enabled: true}, 
    {title: '字体(F)...',shortcut: '',enabled: true,
    handler: () => $dlgFont.show({
      family: np.fontFamily,
      style: np.fontStyle,
      size: np.fontSize,
      okHandler: np.fontHandler
    })
  }],
  width: '156px',
  left: '106px'
}, {
  title: '查看(V)',
  menuItems: [{
    title: '状态栏(S)',
    shortcut: '',
    enabled: true,
    handler: () => {
      np.bShowStatusBar = !(typeof(np.bShowStatusBar) === 'boolean' ?
        np.bShowStatusBar :
        np.bShowStatusBar === 'true') ;
      localStorage.setItem('bShowStatusBar', np.bShowStatusBar);
      $statusBar.display(np.bShowStatusBar);
      $menubar.checked(3, 0, np.bShowStatusBar);
      $editor.resize(np.bShowStatusBar);
    }
  }],
  width: '138px',
  left: '162px'
}, {
  title: '帮助(H)',
  menuItems: [
    {title: '查看帮助(H)',shortcut: '',enabled: true}, 
    {title: '关于记事本(A)',shortcut: '',enabled: true}
  ],
  width: '166px',
  left: '216px'
}];
