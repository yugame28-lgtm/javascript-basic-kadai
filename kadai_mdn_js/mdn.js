// 現在の日時情報を取得して定数に代入する
const now = new Date();

// 年を取得する
const year = now.getFullYear();

// 月を取得する（0〜11で返るため、+1をする）
const month = now.getMonth() + 1;

// 日を取得する
const date = now.getDate();

// テンプレートリテラルを使って指定された形式で出力する
console.log(`${year}年${month}月${date}日`);