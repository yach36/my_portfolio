"use strict";

$(function() {
  /* ---------- 変数 ---------- */
  let scrollTime = 500;
  let clickNum = 0;
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
    $(this).css({
      transition: "width 0.25s, height 0.25s",
    });
    $(this).children(".js_hamburger_bar").css({
      transition: "transform 0.25s, top 0.25s, opacity 0.1s, background 0.25s 0.5s"
    });
    $(".js_header_title").css({
      transition: "color 0.25s 0.5s"
    });
    $(".js_header-nav").css({
      transition: "top 0.25s 0.5s"
    });
    if (++clickNum % 2 == 1) {
      $(this).addClass("is_active");
      $(this).children(".js_hamburger_bar").addClass("is_active");
      $(".js_header_title").addClass("is_active");
      $(".js_header-nav").addClass("is_active");

      $(".js_body").addClass("is_hidden");
      $(".js_main").addClass("is_disabled");
    } else {
      
      $(this).removeClass("is_active");
      $(this).children(".js_hamburger_bar").removeClass("is_active");
      $(".js_header_title").removeClass("is_active");
      $(".js_header-nav").removeClass("is_active");

      $(".js_body").removeClass("is_hidden");
      $(".js_main").removeClass("is_disabled");
    }

  });

  /* ---------- スクロール時にヘッダーの色を変える ---------- */
  $(window).on("scroll", function() {
    let titleTop = $(".js_header_title").offset()["top"];
    let kvHeight = $(".js_kv").height();

    $(".js_header_title__not-top").css({
      transition: "color 0s 0s"
    });
    $(".js_hamburger_bar__not-top").css({
      transition: "background 0s 0s"
    });

    if (titleTop < kvHeight) {
      $(".js_header_title__not-top").removeClass("is_primary");
      $(".js_hamburger_bar__not-top").removeClass("is_primary");
    } else {
      $(".js_header_title__not-top").addClass("is_primary");
      $(".js_hamburger_bar__not-top").addClass("is_primary");
    }
  })
});