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
  barba.init();
});