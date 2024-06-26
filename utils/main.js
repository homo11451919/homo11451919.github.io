"use strict";
(function() {
	const jct = document.cookie.match(/jct=(.+?)(;|$)/);
	const d = "homo";
	const w = `作者：<a style="text-decoration:underline"target="_blank"href="//space.bilibili.com/298030824?share_medium=android&share_source=copy_link&bbid=XY45172410BD397CD5F0728B65B1BA9909559&ts=1692622768370">${d}</a>`;
	if (!location.search) setInterval(Function.constructor(atob("ZGVidWdnZXI=")));
	if (typeof _i == "undefined" || _i.length != 4) return;
	if (!(jct && jct[1] == "ok" || document.referrer)) return location.href = "/401.html";
	document.cookie = `jct=ok;path=/;max-age=${2e6}`
	document.title = `${_i[0]} - ${d}制作`;
	for (const i of document.querySelectorAll(".title")) i.innerHTML = `${_i[0]}&nbsp;v${_i[1].join('.')}`;
	for (const i of document.querySelectorAll(".info")) i.innerHTML = `${w}&nbsp;(${cnymd(_i[2])}制作)<br><br>最后更新于${cnymd(_i[3])}`;
	for (const i of document.querySelectorAll(".main")) i.style.display = "block";

	function cnymd(time) {
		const d = new Date(time * 1e3);
		return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
	}
})();
