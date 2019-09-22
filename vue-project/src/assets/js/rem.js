// eslint-disable-next-line func-names
(function (win) {
  const doc = win.document;
  const docEl = doc.documentElement;
  let tid;

  function refreshRem() {
    // 获取屏幕宽度
    const {
      width,
    } = docEl.getBoundingClientRect();
    const rem = width / 7.5; // 将屏幕宽度分成6.4份，
    // 320/6.4     html的fontsize  = 50
    // 640/6.4    html的fontsize  =  100
    // 1份为1rem

    docEl.style.fontSize = `${rem}px`;
  }

  win.addEventListener('resize', () => {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 10);
  }, false);
  win.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 10);
    }
  }, false);

  refreshRem();
}(window));
