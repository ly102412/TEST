/**
 * rem 布局
 * @param  {[type]} win [description]
 * @return {[type]}     [description]
 */
(function (win) {
  let doc = win.document
  let html = doc.documentElement
  let option = html.getAttribute('data-use-rem')
  if (option === null) {
    return
  }
  let baseWidth = parseInt(option, 10).toString() === 'NaN' ? 640 : parseInt(option, 10)
  let grids = baseWidth / 100
  let clientWidth = html.clientWidth || 320
  html.style.fontSize = clientWidth / grids + 'px'
  let adjustRatio = 0
  let reCalc = function () {
    let newCW = html.clientWidth
    if (newCW === clientWidth) {
      return
    }
    clientWidth = newCW
    html.style.fontSize = newCW * (adjustRatio || 1) / grids + 'px'
  }
  if (!doc.addEventListener) {
    return
  }
  let resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
  win.addEventListener(resizeEvt, reCalc, false)
  doc.addEventListener('DOMContentLoaded', reCalc, false)
}(window))
