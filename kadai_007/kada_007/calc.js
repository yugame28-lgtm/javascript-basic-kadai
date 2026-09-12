// 1以上の正の数を変数 num に代入する
let num = 15;

// 条件分岐を使って倍数や数値を出し分ける
if (num % 3 === 0 && num % 5 === 0) {
  // 3の倍数かつ5の倍数の場合
  console.log("3と5の倍数です");
} else if (num % 3 === 0) {
  // 3の倍数の場合
  console.log("3の倍数です");
} else if (num % 5 === 0) {
  // 5の倍数の場合
  console.log("5の倍数です");
} else {
  // 上記のいずれでもない場合（そのままの数値を出力）
  console.log(num);
}