//ハンバーガーメニュー

$(function () {
  var imgHeight = $(".kv-wrapper").outerHeight(); //キービジュアルの画像の高さを取得
  var bgHeight = $(".fv").outerHeight(); //ファーストビューの画像の高さを取得

  $(".burger-btn").on("click", function () {
    if ($(window).scrollTop() < imgHeight - 50) {
      //ハンバーガーボタンがfvより上にある時
      $(".bar").toggleClass("cross"); //ハンバーガーボタンのラインをクロスさせるcssを当てたり外したりする
      $(".header-nav").toggleClass("open"); //ナビゲーションが開くcssを当てたり外したりする
      $(".burger-musk").fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる
      $("body").toggleClass("noscroll"); //ハンバーガーメニューを開いた時にスクロールしないようする
    } else {
      //ハンバーガーボタンがfvより下にある時
      $(this).toggleClass("black"); //ハンバーガーボタンを黒くしたり白くしたりする
      $(".bar").toggleClass("cross");
      $(".header-nav").toggleClass("open");
      $(".burger-musk").fadeToggle(300);
      $("body").toggleClass("noscroll");
    }
  });

  //スクロールしたら、サイトロゴとハンバーガーボタン が変わる
  $(window).on("load scroll", function () {
    if ($(window).scrollTop() < imgHeight - 50) {
      //メインビジュアル内にいるのでクラスを外す
      $(".site-title").removeClass("black");
    } else {
      //メインビジュアルより下までスクロールしたのでクラスをつけて色を変える
      $(".site-title").addClass("black");
    }

    if ($(window).scrollTop() < bgHeight - 50) {
      //メインビジュアル内にいるのでクラスを外す
      $(".burger-btn").removeClass("black");
    } else {
      //メインビジュアルより下までスクロールしたのでクラスをつけて色を変える
      $(".burger-btn").addClass("black");
    }
  });
});
