"use strict";

$(function() {
  /* ---------- 変数 ---------- */
  let scrollTime = 500;
  /* ---------- 関数 ---------- */

  /* ---------- scrollify ---------- */
  $.scrollify({
    section: ".top_section",
    easing: "swing",
    scrollSpeed: scrollTime,
    after: function() {
      // 現在のidの末尾の番号を取得
      let num = Number($.scrollify.current()[0]["id"].slice(-1));
      /* スクロールゲージの色を変える */
      $(".js_scroll_gauge").not(`#js_scroll_gauge-${num}`).removeClass("is_active");
      $(`#js_scroll_gauge-${num}`).addClass("is_active");
    }
  });

  /* ---------- barba ---------- */
  // barba.init();

  /* ---------- ハンバーガーメニュー ---------- */
  $(".js_hamburger").on("click", function() {
    $(this).toggleClass("is_active");
    $(this).children(".js_hamburger_bar").toggleClass("is_active");
    $(".js_header_title").toggleClass("is_active");
    $(".js_header-nav").toggleClass("is_active")
    $(".js_main").toggleClass("is_hidden")
  });
});