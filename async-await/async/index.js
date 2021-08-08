async function showDashboard () {
  doApiはPromiseオブジェクトを返す、async functionの場合、以下のように書ける
  let userId = null
  let userData = null
  
  // ログイン
  await axios.get("login", { user, password }).then((user) => {
    // ログイン後の処理
    userId = user.id
  }).catch((err) => {
    console.log("ログインに失敗しました")
    throw "ログインエラー発生"
  })

  // ログインしたユーザーの情報を取得する
  await axios.get("user", { userId }).then((data) => {
    userData = data
  }).catch((err) => {
    console.log("errorが発生しました")
    throw "ログインエラー発生"
  })

  // 例外をthrowしたい場合はcatchを書かないなどの対応をして、
}