let players = [
  { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]

const dataPanel = document.querySelector('#data-panel')

// write your code here
function displayPlayerList(data) {
  let htmlContent = ""

  //利用 forEach() 來跑players陣列裡的元素
  data.forEach(function (player) {
    htmlContent += "<tr>"

    //再利用 for...in迭代陣列裡的每個物件
    for (let key in player) {
      //利用if條件式分開處理球員姓名及分數
      if (key === "name") {  //屬性如果=名字
        htmlContent += `<td>${player[key]}</td>`
      } else {  //屬性如果不=名字
        htmlContent += `
        <td>
          <span>${player[key]}</span>
          <i class="fa fa-plus-circle"></i>
          <i class="fa fa-minus-circle down"></i>
        </td>
        `
      }
    }
    htmlContent += "</tr>"
  })
  dataPanel.innerHTML = htmlContent
}

displayPlayerList(players)


// 1.針對包住所有分數的元素<tbody>上設置監聽器，以免重複對每個<i>元素操作
dataPanel.addEventListener("click", function (event) {
  // 2.利用if判斷: 當滑鼠點擊到+/-圖示時，才做反應
  if ( // **要利用event.target=click事件發生的地方
    event.target.matches(".fa-plus-circle") ||
    event.target.matches(".fa-minus-circle")
  ) {
    // 3.確定是哪一個得分數要做運算，並記得把字串轉為數字
    const scoreBox = event.target.parentElement.children[0];
    let score = Number(scoreBox.innerText)
    // 4.用if/else 做+/-運算
    if (event.target.matches(".fa-plus-circle")) {
      score += 1
    } else {
      score -= 1
      // 5.利用if處理負數問題，最低分為0，無負數
      if (score < 0) {
        score = 0
      }
    }
    // 6.把算完的數字塞回DOM裡
    scoreBox.innerText = score
  }
})