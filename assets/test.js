
function fixPrice(a) {
    if (a.toString().length < 3)
        for (d = a.toString().length; 3 >= d; d++) a = "0" + a;
    a = a.toString().slice(0, -2) + "." + a.toString().slice(-2);
    for (var b = "", c = !1, d = 0, e = a.length; e > d; d++) "0" == a[d] && "." != a[d + 1] && 1 != c || (c = !0, b += a[d]);
    return b
}

function numberWithCommas(a) {
    return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}! function(a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b(require, exports, module) : a.scrollReveal = b()
}(this, function() {
    return window.scrollReveal = function(a) {
        "use strict";

        function b(b) {
            this.docElem = a.document.documentElement, this.options = this.extend(this.defaults, b), this.styleBank = {}, 1 == this.options.init && this.init()
        }
        var c = 1,
            d = function() {
                return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || function(b) {
                    a.setTimeout(b, 1e3 / 60)
                }
            }();
        return b.prototype = {
            defaults: {
                after: "0s",
                enter: "bottom",
                move: "24px",
                over: "0.66s",
                easing: "ease-in-out",
                opacity: 0,
                viewportFactor: .33,
                reset: !1,
                init: !0
            },
            init: function() {
                this.scrolled = !1;
                var b = this;
                this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")), this.elems.forEach(function(a) {
                    var d = a.getAttribute("data-scroll-reveal-id");
                    d || (d = c++, a.setAttribute("data-scroll-reveal-id", d)), b.styleBank[d] || (b.styleBank[d] = a.getAttribute("style")), b.update(a)
                });
                var e = function() {
                        b.scrolled || (b.scrolled = !0, d(function() {
                            b._scrollPage()
                        }))
                    },
                    f = function() {
                        function a() {
                            b._scrollPage(), b.resizeTimeout = null
                        }
                        b.resizeTimeout && clearTimeout(b.resizeTimeout), b.resizeTimeout = setTimeout(a, 200)
                    };
                a.addEventListener("scroll", e, !1), a.addEventListener("resize", f, !1)
            },
            _scrollPage: function() {
                var a = this;
                this.elems.forEach(function(b) {
                    a.update(b)
                }), this.scrolled = !1
            },
            parseLanguage: function(a) {
                function b(a) {
                    var b = [],
                        c = ["from", "the", "and", "then", "but", "with"];
                    return a.forEach(function(a) {
                        c.indexOf(a) > -1 || b.push(a)
                    }), b
                }
                var c = a.getAttribute("data-scroll-reveal").split(/[, ]+/),
                    d = {};
                return c = b(c), c.forEach(function(a, b) {
                    switch (a) {
                        case "enter":
                            return void(d.enter = c[b + 1]);
                        case "after":
                            return void(d.after = c[b + 1]);
                        case "wait":
                            return void(d.after = c[b + 1]);
                        case "move":
                            return void(d.move = c[b + 1]);
                        case "ease":
                            return d.move = c[b + 1], void(d.ease = "ease");
                        case "ease-in":
                            return d.move = c[b + 1], void(d.easing = "ease-in");
                        case "ease-in-out":
                            return d.move = c[b + 1], void(d.easing = "ease-in-out");
                        case "ease-out":
                            return d.move = c[b + 1], void(d.easing = "ease-out");
                        case "over":
                            return void(d.over = c[b + 1]);
                        default:
                            return
                    }
                }), d
            },
            update: function(a) {
                var b = this.genCSS(a),
                    c = this.styleBank[a.getAttribute("data-scroll-reveal-id")];
                return null != c ? c += ";" : c = "", a.getAttribute("data-scroll-reveal-initialized") || (a.setAttribute("style", c + b.initial), a.setAttribute("data-scroll-reveal-initialized", !0)), this.isElementInViewport(a, this.options.viewportFactor) ? a.getAttribute("data-scroll-reveal-complete") ? void 0 : this.isElementInViewport(a, this.options.viewportFactor) ? (a.setAttribute("style", c + b.target + b.transition), void(this.options.reset || setTimeout(function() {
                    "" != c ? a.setAttribute("style", c) : a.removeAttribute("style"), a.setAttribute("data-scroll-reveal-complete", !0)
                }, b.totalDuration))) : void 0 : void(this.options.reset && a.setAttribute("style", c + b.initial + b.reset))
            },
            genCSS: function(a) {
                var b, c, d = this.parseLanguage(a);
                d.enter ? (("top" == d.enter || "bottom" == d.enter) && (b = d.enter, c = "y"), ("left" == d.enter || "right" == d.enter) && (b = d.enter, c = "x")) : (("top" == this.options.enter || "bottom" == this.options.enter) && (b = this.options.enter, c = "y"), ("left" == this.options.enter || "right" == this.options.enter) && (b = this.options.enter, c = "x")), ("top" == b || "left" == b) && (d.move = d.move ? "-" + d.move : "-" + this.options.move);
                var e = d.move || this.options.move,
                    f = d.over || this.options.over,
                    g = d.after || this.options.after,
                    h = d.easing || this.options.easing,
                    i = d.opacity || this.options.opacity,
                    j = "-webkit-transition: -webkit-transform " + f + " " + h + " " + g + ",  opacity " + f + " " + h + " " + g + ";transition: transform " + f + " " + h + " " + g + ", opacity " + f + " " + h + " " + g + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
                    k = "-webkit-transition: -webkit-transform " + f + " " + h + " 0s,  opacity " + f + " " + h + " " + g + ";transition: transform " + f + " " + h + " 0s,  opacity " + f + " " + h + " " + g + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
                    l = "-webkit-transform: translate" + c + "(" + e + ");transform: translate" + c + "(" + e + ");opacity: " + i + ";",
                    m = "-webkit-transform: translate" + c + "(0);transform: translate" + c + "(0);opacity: 1;";
                return {
                    transition: j,
                    initial: l,
                    target: m,
                    reset: k,
                    totalDuration: 1e3 * (parseFloat(f) + parseFloat(g))
                }
            },
            getViewportH: function() {
                var b = this.docElem.clientHeight,
                    c = a.innerHeight;
                return c > b ? c : b
            },
            getOffset: function(a) {
                var b = 0,
                    c = 0;
                do isNaN(a.offsetTop) || (b += a.offsetTop), isNaN(a.offsetLeft) || (c += a.offsetLeft); while (a = a.offsetParent);
                return {
                    top: b,
                    left: c
                }
            },
            isElementInViewport: function(b, c) {
                var d = a.pageYOffset,
                    e = d + this.getViewportH(),
                    f = b.offsetHeight,
                    g = this.getOffset(b).top,
                    h = g + f,
                    c = c || 0;
                return e >= g + f * c && h >= d || "fixed" == (b.currentStyle ? b.currentStyle : a.getComputedStyle(b, null)).position
            },
            extend: function(a, b) {
                for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                return a
            }
        }, b
    }(window), scrollReveal
}), ! function(a) {
    "use strict";
    a(window.jQuery, window, document)
}(function(a, b, c, d) {
    "use strict";
    a.widget("selectBox.selectBoxIt", {
        VERSION: "3.8.0",
        options: {
            showEffect: "none",
            showEffectOptions: {},
            showEffectSpeed: "medium",
            hideEffect: "none",
            hideEffectOptions: {},
            hideEffectSpeed: "medium",
            showFirstOption: !0,
            defaultText: "",
            defaultIcon: "",
            downArrowIcon: "",
            theme: "default",
            keydownOpen: !0,
            isMobile: function() {
                var a = navigator.userAgent || navigator.vendor || b.opera;
                return /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(a)
            },
            "native": !1,
            aggressiveChange: !1,
            selectWhenHidden: !0,
            viewport: a(b),
            similarSearch: !1,
            copyAttributes: ["title", "rel"],
            copyClasses: "button",
            nativeMousedown: !1,
            customShowHideEvent: !1,
            autoWidth: !0,
            html: !0,
            populate: "",
            dynamicPositioning: !0,
            hideCurrent: !1
        },
        getThemes: function() {
            var b = this,
                c = a(b.element).attr("data-theme") || "c";
            return {
                bootstrap: {
                    focus: "active",
                    hover: "",
                    enabled: "enabled",
                    disabled: "disabled",
                    arrow: "caret",
                    button: "btn",
                    list: "dropdown-menu",
                    container: "bootstrap",
                    open: "open"
                },
                jqueryui: {
                    focus: "ui-state-focus",
                    hover: "ui-state-hover",
                    enabled: "ui-state-enabled",
                    disabled: "ui-state-disabled",
                    arrow: "ui-icon ui-icon-triangle-1-s",
                    button: "ui-widget ui-state-default",
                    list: "ui-widget ui-widget-content",
                    container: "jqueryui",
                    open: "selectboxit-open"
                },
                jquerymobile: {
                    focus: "ui-btn-down-" + c,
                    hover: "ui-btn-hover-" + c,
                    enabled: "ui-enabled",
                    disabled: "ui-disabled",
                    arrow: "ui-icon ui-icon-arrow-d ui-icon-shadow",
                    button: "ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-" + c,
                    list: "ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-" + c,
                    container: "jquerymobile",
                    open: "selectboxit-open"
                },
                "default": {
                    focus: "selectboxit-focus",
                    hover: "selectboxit-hover",
                    enabled: "selectboxit-enabled",
                    disabled: "selectboxit-disabled",
                    arrow: "selectboxit-default-arrow",
                    button: "selectboxit-btn",
                    list: "selectboxit-list",
                    container: "selectboxit-container",
                    open: "selectboxit-open"
                }
            }
        },
        isDeferred: function(b) {
            return a.isPlainObject(b) && b.promise && b.done
        },
        _create: function(b) {
            var d = this,
                e = d.options.populate,
                f = d.options.theme;
            return d.element.is("select") ? (d.widgetProto = a.Widget.prototype, d.originalElem = d.element[0], d.selectBox = d.element, d.options.populate && d.add && !b && d.add(e), d.selectItems = d.element.find("option"), d.firstSelectItem = d.selectItems.slice(0, 1), d.documentHeight = a(c).height(), d.theme = a.isPlainObject(f) ? a.extend({}, d.getThemes()["default"], f) : d.getThemes()[f] ? d.getThemes()[f] : d.getThemes()["default"], d.currentFocus = 0, d.blur = !0, d.textArray = [], d.currentIndex = 0, d.currentText = "", d.flipped = !1, b || (d.selectBoxStyles = d.selectBox.attr("style")), d._createDropdownButton()._createUnorderedList()._copyAttributes()._replaceSelectBox()._addClasses(d.theme)._eventHandlers(), d.originalElem.disabled && d.disable && d.disable(), d._ariaAccessibility && d._ariaAccessibility(), d.isMobile = d.options.isMobile(), d._mobile && d._mobile(), d.options["native"] && this._applyNativeSelect(), d.triggerEvent("create"), d) : void 0
        },
        _createDropdownButton: function() {
            var b = this,
                c = b.originalElemId = b.originalElem.id || "",
                d = b.originalElemValue = b.originalElem.value || "",
                e = b.originalElemName = b.originalElem.name || "",
                f = b.options.copyClasses,
                g = b.selectBox.attr("class") || "";
            return b.dropdownText = a("<span/>", {
                id: c && c + "SelectBoxItText",
                "class": "selectboxit-text",
                unselectable: "on",
                text: b.firstSelectItem.text()
            }).attr("data-val", d), b.dropdownImageContainer = a("<span/>", {
                "class": "selectboxit-option-icon-container"
            }), b.dropdownImage = a("<i/>", {
                id: c && c + "SelectBoxItDefaultIcon",
                "class": "selectboxit-default-icon",
                unselectable: "on"
            }), b.dropdown = a("<span/>", {
                id: c && c + "SelectBoxIt",
                "class": "selectboxit " + ("button" === f ? g : "") + " " + (b.selectBox.prop("disabled") ? b.theme.disabled : b.theme.enabled),
                name: e,
                tabindex: b.selectBox.attr("tabindex") || "0",
                unselectable: "on"
            }).append(b.dropdownImageContainer.append(b.dropdownImage)).append(b.dropdownText), b.dropdownContainer = a("<span/>", {
                id: c && c + "SelectBoxItContainer",
                "class": b.theme.container + " " + ("container" === f ? g : "")
            }).append(b.dropdown), b
        },
        _createUnorderedList: function() {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o = this,
                p = "",
                q = o.originalElemId || "",
                r = a("<ul/>", {
                    id: q && q + "SelectBoxItOptions",
                    "class": "selectboxit-options",
                    tabindex: -1
                });
            if (o.options.showFirstOption || (o.selectItems.first().attr("disabled", "disabled"), o.selectItems = o.selectBox.find("option").slice(1)), o.selectItems.each(function(q) {
                    m = a(this), c = "", d = "", b = m.prop("disabled"), e = m.attr("data-icon") || "", f = m.attr("data-iconurl") || "", g = f ? "selectboxit-option-icon-url" : "", h = f ? "style=\"background-image:url('" + f + "');\"" : "", i = m.attr("data-selectedtext"), j = m.attr("data-text"), l = j ? j : m.text(), n = m.parent(), n.is("optgroup") && (c = "selectboxit-optgroup-option", 0 === m.index() && (d = '<span class="selectboxit-optgroup-header ' + n.first().attr("class") + '"data-disabled="true">' + n.first().attr("label") + "</span>")), p += d + '<li data-id="' + q + '" data-val="' + this.value + '" data-disabled="' + b + '" class="' + c + " selectboxit-option " + (a(this).attr("class") || "") + '"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon ' + e + " " + (g || o.theme.container) + '"' + h + "></i></span>" + (o.options.html ? l : o.htmlEscape(l)) + "</a></li>", k = m.attr("data-search"), o.textArray[q] = b ? "" : k ? k : l, this.selected && (o._setText(o.dropdownText, i || l), o.currentFocus = q)
                }), o.options.defaultText || o.selectBox.attr("data-text")) {
                var s = o.options.defaultText || o.selectBox.attr("data-text");
                o._setText(o.dropdownText, s), o.options.defaultText = s
            }
            return r.append(p), o.list = r, o.dropdownContainer.append(o.list), o.listItems = o.list.children("li"), o.listAnchors = o.list.find("a"), o.listItems.first().addClass("selectboxit-option-first"), o.listItems.last().addClass("selectboxit-option-last"), o.list.find("li[data-disabled='true']").not(".optgroupHeader").addClass(o.theme.disabled), o.dropdownImage.addClass(o.selectBox.attr("data-icon") || o.options.defaultIcon || o.listItems.eq(o.currentFocus).find("i").attr("class")), o.dropdownImage.attr("style", o.listItems.eq(o.currentFocus).find("i").attr("style")), o
        },
        _replaceSelectBox: function() {
            var b, c, e, f = this,
                g = f.originalElem.id || "",
                h = f.selectBox.attr("data-size"),
                i = f.listSize = h === d ? "auto" : "0" === h ? "auto" : +h;
            return f.selectBox.css("display", "none").after(f.dropdownContainer), f.dropdownContainer.appendTo("body").addClass("selectboxit-rendering"), b = f.dropdown.height(), f.downArrow = a("<i/>", {
                id: g && g + "SelectBoxItArrow",
                "class": "selectboxit-arrow",
                unselectable: "on"
            }), f.downArrowContainer = a("<span/>", {
                id: g && g + "SelectBoxItArrowContainer",
                "class": "selectboxit-arrow-container",
                unselectable: "on"
            }).append(f.downArrow), f.dropdown.append(f.downArrowContainer), f.listItems.removeClass("selectboxit-selected").eq(f.currentFocus).addClass("selectboxit-selected"), c = f.downArrowContainer.outerWidth(!0), e = f.dropdownImage.outerWidth(!0), f.options.autoWidth && (f.dropdown.css({
                width: "auto"
            }).css({
                width: f.list.outerWidth(!0) + c + e
            }), f.list.css({
                "min-width": f.dropdown.width()
            })), f.dropdownText.css({
                "max-width": f.dropdownContainer.outerWidth(!0) - (c + e)
            }), f.selectBox.after(f.dropdownContainer), f.dropdownContainer.removeClass("selectboxit-rendering"), "number" === a.type(i) && (f.maxHeight = f.listAnchors.outerHeight(!0) * i), f
        },
        _scrollToView: function(a) {
            var b = this,
                c = b.listItems.eq(b.currentFocus),
                d = b.list.scrollTop(),
                e = c.height(),
                f = c.position().top,
                g = Math.abs(f),
                h = b.list.height();
            return "search" === a ? e > h - f ? b.list.scrollTop(d + (f - (h - e))) : -1 > f && b.list.scrollTop(f - e) : "up" === a ? -1 > f && b.list.scrollTop(d - g) : "down" === a && e > h - f && b.list.scrollTop(d + (g - h + e)), b
        },
        _callbackSupport: function(b) {
            var c = this;
            return a.isFunction(b) && b.call(c, c.dropdown), c
        },
        _setText: function(a, b) {
            var c = this;
            return c.options.html ? a.html(b) : a.text(b), c
        },
        open: function(a) {
            var b = this,
                c = b.options.showEffect,
                d = b.options.showEffectSpeed,
                e = b.options.showEffectOptions,
                f = b.options["native"],
                g = b.isMobile;
            return !b.listItems.length || b.dropdown.hasClass(b.theme.disabled) ? b : (f || g || this.list.is(":visible") || (b.triggerEvent("open"), b._dynamicPositioning && b.options.dynamicPositioning && b._dynamicPositioning(), "none" === c ? b.list.show() : "show" === c || "slideDown" === c || "fadeIn" === c ? b.list[c](d) : b.list.show(c, e, d), b.list.promise().done(function() {
                b._scrollToView("search")
            })), b._callbackSupport(a), b)
        },
        close: function(a) {
            var b = this,
                c = b.options.hideEffect,
                d = b.options.hideEffectSpeed,
                e = b.options.hideEffectOptions,
                f = b.options["native"],
                g = b.isMobile;
            return f || g || !b.list.is(":visible") || (b.triggerEvent("close"), "none" === c ? b.list.hide() : "hide" === c || "slideUp" === c || "fadeOut" === c ? b.list[c](d) : b.list.hide(c, e, d)), b._callbackSupport(a), b
        },
        toggle: function() {
            var a = this,
                b = a.list.is(":visible");
            b ? a.close() : b || a.open()
        },
        _keyMappings: {
            38: "up",
            40: "down",
            13: "enter",
            8: "backspace",
            9: "tab",
            32: "space",
            27: "esc"
        },
        _keydownMethods: function() {
            var a = this,
                b = a.list.is(":visible") || !a.options.keydownOpen;
            return {
                down: function() {
                    a.moveDown && b && a.moveDown()
                },
                up: function() {
                    a.moveUp && b && a.moveUp()
                },
                enter: function() {
                    var b = a.listItems.eq(a.currentFocus);
                    a._update(b), "true" !== b.attr("data-preventclose") && a.close(), a.triggerEvent("enter")
                },
                tab: function() {
                    a.triggerEvent("tab-blur"), a.close()
                },
                backspace: function() {
                    a.triggerEvent("backspace")
                },
                esc: function() {
                    a.close()
                }
            }
        },
        _eventHandlers: function() {
            var b, c, d = this,
                e = d.options.nativeMousedown,
                f = d.options.customShowHideEvent,
                g = d.focusClass,
                h = d.hoverClass,
                i = d.openClass;
            return this.dropdown.on({
                "click.selectBoxIt": function() {
                    d.dropdown.trigger("focus", !0), d.originalElem.disabled || (d.triggerEvent("click"), e || f || d.toggle())
                },
                "mousedown.selectBoxIt": function() {
                    a(this).data("mdown", !0), d.triggerEvent("mousedown"), e && !f && d.toggle()
                },
                "mouseup.selectBoxIt": function() {
                    d.triggerEvent("mouseup")
                },
                "blur.selectBoxIt": function() {
                    d.blur && (d.triggerEvent("blur"), d.close(), a(this).removeClass(g))
                },
                "focus.selectBoxIt": function(b, c) {
                    var e = a(this).data("mdown");
                    a(this).removeData("mdown"), e || c || setTimeout(function() {
                        d.triggerEvent("tab-focus")
                    }, 0), c || (a(this).hasClass(d.theme.disabled) || a(this).addClass(g), d.triggerEvent("focus"))
                },
                "keydown.selectBoxIt": function(a) {
                    var b = d._keyMappings[a.keyCode],
                        c = d._keydownMethods()[b];
                    c && (c(), !d.options.keydownOpen || "up" !== b && "down" !== b || d.open()), c && "tab" !== b && a.preventDefault()
                },
                "keypress.selectBoxIt": function(a) {
                    var b = a.charCode || a.keyCode,
                        c = d._keyMappings[a.charCode || a.keyCode],
                        e = String.fromCharCode(b);
                    d.search && (!c || c && "space" === c) && d.search(e, !0, !0), "space" === c && a.preventDefault()
                },
                "mouseenter.selectBoxIt": function() {
                    d.triggerEvent("mouseenter")
                },
                "mouseleave.selectBoxIt": function() {
                    d.triggerEvent("mouseleave")
                }
            }), d.list.on({
                "mouseover.selectBoxIt": function() {
                    d.blur = !1
                },
                "mouseout.selectBoxIt": function() {
                    d.blur = !0
                },
                "focusin.selectBoxIt": function() {
                    d.dropdown.trigger("focus", !0)
                }
            }), d.list.on({
                "mousedown.selectBoxIt": function() {
                    d._update(a(this)), d.triggerEvent("option-click"), "false" === a(this).attr("data-disabled") && "true" !== a(this).attr("data-preventclose") && d.close(), setTimeout(function() {
                        d.dropdown.trigger("focus", !0)
                    }, 0)
                },
                "focusin.selectBoxIt": function() {
                    d.listItems.not(a(this)).removeAttr("data-active"), a(this).attr("data-active", "");
                    var b = d.list.is(":hidden");
                    (d.options.searchWhenHidden && b || d.options.aggressiveChange || b && d.options.selectWhenHidden) && d._update(a(this)), a(this).addClass(g)
                },
                "mouseup.selectBoxIt": function() {
                    e && !f && (d._update(a(this)), d.triggerEvent("option-mouseup"), "false" === a(this).attr("data-disabled") && "true" !== a(this).attr("data-preventclose") && d.close())
                },
                "mouseenter.selectBoxIt": function() {
                    "false" === a(this).attr("data-disabled") && (d.listItems.removeAttr("data-active"), a(this).addClass(g).attr("data-active", ""), d.listItems.not(a(this)).removeClass(g), a(this).addClass(g), d.currentFocus = +a(this).attr("data-id"))
                },
                "mouseleave.selectBoxIt": function() {
                    "false" === a(this).attr("data-disabled") && (d.listItems.not(a(this)).removeClass(g).removeAttr("data-active"), a(this).addClass(g), d.currentFocus = +a(this).attr("data-id"))
                },
                "blur.selectBoxIt": function() {
                    a(this).removeClass(g)
                }
            }, ".selectboxit-option"), d.list.on({
                "click.selectBoxIt": function(a) {
                    a.preventDefault()
                }
            }, "a"), d.selectBox.on({
                "change.selectBoxIt, internal-change.selectBoxIt": function(a, e) {
                    var f, g;
                    e || (f = d.list.find('li[data-val="' + d.originalElem.value + '"]'), f.length && (d.listItems.eq(d.currentFocus).removeClass(d.focusClass), d.currentFocus = +f.attr("data-id"))), f = d.listItems.eq(d.currentFocus), g = f.attr("data-selectedtext"), b = f.attr("data-text"), c = b ? b : f.find("a").text(), d._setText(d.dropdownText, g || c), d.dropdownText.attr("data-val", d.originalElem.value), f.find("i").attr("class") && (d.dropdownImage.attr("class", f.find("i").attr("class")).addClass("selectboxit-default-icon"), d.dropdownImage.attr("style", f.find("i").attr("style"))), d.triggerEvent("changed")
                },
                "disable.selectBoxIt": function() {
                    d.dropdown.addClass(d.theme.disabled)
                },
                "enable.selectBoxIt": function() {
                    d.dropdown.removeClass(d.theme.disabled)
                },
                "open.selectBoxIt": function() {
                    var a, b = d.list.find("li[data-val='" + d.dropdownText.attr("data-val") + "']");
                    b.length || (b = d.listItems.not("[data-disabled=true]").first()), d.currentFocus = +b.attr("data-id"), a = d.listItems.eq(d.currentFocus), d.dropdown.addClass(i).removeClass(h).addClass(g), d.listItems.removeClass(d.selectedClass).removeAttr("data-active").not(a).removeClass(g), a.addClass(d.selectedClass).addClass(g), d.options.hideCurrent && (d.listItems.show(), a.hide())
                },
                "close.selectBoxIt": function() {
                    d.dropdown.removeClass(i)
                },
                "blur.selectBoxIt": function() {
                    d.dropdown.removeClass(g)
                },
                "mouseenter.selectBoxIt": function() {
                    a(this).hasClass(d.theme.disabled) || d.dropdown.addClass(h)
                },
                "mouseleave.selectBoxIt": function() {
                    d.dropdown.removeClass(h)
                },
                destroy: function(a) {
                    a.preventDefault(), a.stopPropagation()
                }
            }), d
        },
        _update: function(a) {
            var b, c, d, e = this,
                f = e.options.defaultText || e.selectBox.attr("data-text"),
                g = e.listItems.eq(e.currentFocus);
            "false" === a.attr("data-disabled") && (b = e.listItems.eq(e.currentFocus).attr("data-selectedtext"), c = g.attr("data-text"), d = c ? c : g.text(), (f && e.options.html ? e.dropdownText.html() === f : e.dropdownText.text() === f) && e.selectBox.val() === a.attr("data-val") ? e.triggerEvent("change") : (e.selectBox.val(a.attr("data-val")), e.currentFocus = +a.attr("data-id"), e.originalElem.value !== e.dropdownText.attr("data-val") && e.triggerEvent("change")))
        },
        _addClasses: function(a) {
            var b = this,
                c = (b.focusClass = a.focus, b.hoverClass = a.hover, a.button),
                d = a.list,
                e = a.arrow,
                f = a.container;
            return b.openClass = a.open, b.selectedClass = "selectboxit-selected", b.downArrow.addClass(b.selectBox.attr("data-downarrow") || b.options.downArrowIcon || e), b.dropdownContainer.addClass(f), b.dropdown.addClass(c), b.list.addClass(d), b
        },
        refresh: function(a, b) {
            var c = this;
            return c._destroySelectBoxIt()._create(!0), b || c.triggerEvent("refresh"), c._callbackSupport(a), c
        },
        htmlEscape: function(a) {
            return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        },
        triggerEvent: function(a) {
            var b = this,
                c = b.options.showFirstOption ? b.currentFocus : b.currentFocus - 1 >= 0 ? b.currentFocus : 0;
            return b.selectBox.trigger(a, {
                selectbox: b.selectBox,
                selectboxOption: b.selectItems.eq(c),
                dropdown: b.dropdown,
                dropdownOption: b.listItems.eq(b.currentFocus)
            }), b
        },
        _copyAttributes: function() {
            var a = this;
            return a._addSelectBoxAttributes && a._addSelectBoxAttributes(), a
        },
        _realOuterWidth: function(a) {
            if (a.is(":visible")) return a.outerWidth(!0);
            var b, c = a.clone();
            return c.css({
                visibility: "hidden",
                display: "block",
                position: "absolute"
            }).appendTo("body"), b = c.outerWidth(!0), c.remove(), b
        }
    });
    var e = a.selectBox.selectBoxIt.prototype;
    e.add = function(b, c) {
        this._populate(b, function(b) {
            var d, e, f = this,
                g = a.type(b),
                h = 0,
                i = [],
                j = f._isJSON(b),
                k = j && f._parseJSON(b);
            if (b && ("array" === g || j && k.data && "array" === a.type(k.data)) || "object" === g && b.data && "array" === a.type(b.data)) {
                for (f._isJSON(b) && (b = k), b.data && (b = b.data), e = b.length; e - 1 >= h; h += 1) d = b[h], a.isPlainObject(d) ? i.push(a("<option/>", d)) : "string" === a.type(d) && i.push(a("<option/>", {
                    text: d,
                    value: d
                }));
                f.selectBox.append(i)
            } else b && "string" === g && !f._isJSON(b) ? f.selectBox.append(b) : b && "object" === g ? f.selectBox.append(a("<option/>", b)) : b && f._isJSON(b) && a.isPlainObject(f._parseJSON(b)) && f.selectBox.append(a("<option/>", f._parseJSON(b)));
            return f.dropdown ? f.refresh(function() {
                f._callbackSupport(c)
            }, !0) : f._callbackSupport(c), f
        })
    }, e._parseJSON = function(b) {
        return JSON && JSON.parse && JSON.parse(b) || a.parseJSON(b)
    }, e._isJSON = function(a) {
        var b, c = this;
        try {
            return b = c._parseJSON(a), !0
        } catch (d) {
            return !1
        }
    }, e._populate = function(b, c) {
        var d = this;
        return b = a.isFunction(b) ? b.call() : b, d.isDeferred(b) ? b.done(function(a) {
            c.call(d, a)
        }) : c.call(d, b), d
    }, e._ariaAccessibility = function() {
        var b = this,
            c = a("label[for='" + b.originalElem.id + "']");
        return b.dropdownContainer.attr({
            role: "combobox",
            "aria-autocomplete": "list",
            "aria-haspopup": "true",
            "aria-expanded": "false",
            "aria-owns": b.list[0].id
        }), b.dropdownText.attr({
            "aria-live": "polite"
        }), b.dropdown.on({
            "disable.selectBoxIt": function() {
                b.dropdownContainer.attr("aria-disabled", "true")
            },
            "enable.selectBoxIt": function() {
                b.dropdownContainer.attr("aria-disabled", "false")
            }
        }), c.length && b.dropdownContainer.attr("aria-labelledby", c[0].id), b.list.attr({
            role: "listbox",
            "aria-hidden": "true"
        }), b.listItems.attr({
            role: "option"
        }), b.selectBox.on({
            "open.selectBoxIt": function() {
                b.list.attr("aria-hidden", "false"), b.dropdownContainer.attr("aria-expanded", "true")
            },
            "close.selectBoxIt": function() {
                b.list.attr("aria-hidden", "true"), b.dropdownContainer.attr("aria-expanded", "false")
            }
        }), b
    }, e._addSelectBoxAttributes = function() {
        var b = this;
        return b._addAttributes(b.selectBox.prop("attributes"), b.dropdown), b.selectItems.each(function(c) {
            b._addAttributes(a(this).prop("attributes"), b.listItems.eq(c))
        }), b
    }, e._addAttributes = function(b, c) {
        var d = this,
            e = d.options.copyAttributes;
        return b.length && a.each(b, function(b, d) {
            var f = d.name.toLowerCase(),
                g = d.value;
            "null" === g || -1 === a.inArray(f, e) && -1 === f.indexOf("data") || c.attr(f, g)
        }), d
    }, e.destroy = function(a) {
        var b = this;
        return b._destroySelectBoxIt(), b.widgetProto.destroy.call(b), b._callbackSupport(a), b
    }, e._destroySelectBoxIt = function() {
        var b = this;
        return b.dropdown.off(".selectBoxIt"), a.contains(b.dropdownContainer[0], b.originalElem) && b.dropdownContainer.before(b.selectBox), b.dropdownContainer.remove(), b.selectBox.removeAttr("style").attr("style", b.selectBoxStyles), b.selectBox.show(), b.triggerEvent("destroy"), b
    }, e.disable = function(a) {
        var b = this;
        return b.options.disabled || (b.close(), b.selectBox.attr("disabled", "disabled"), b.dropdown.removeAttr("tabindex").removeClass(b.theme.enabled).addClass(b.theme.disabled), b.setOption("disabled", !0), b.triggerEvent("disable")), b._callbackSupport(a), b
    }, e.disableOption = function(b, c) {
        var d, e, f, g = this,
            h = a.type(b);
        return "number" === h && (g.close(), d = g.selectBox.find("option").eq(b), g.triggerEvent("disable-option"), d.attr("disabled", "disabled"), g.listItems.eq(b).attr("data-disabled", "true").addClass(g.theme.disabled), g.currentFocus === b && (e = g.listItems.eq(g.currentFocus).nextAll("li").not("[data-disabled='true']").first().length, f = g.listItems.eq(g.currentFocus).prevAll("li").not("[data-disabled='true']").first().length, e ? g.moveDown() : f ? g.moveUp() : g.disable())), g._callbackSupport(c), g
    }, e._isDisabled = function() {
        var a = this;
        return a.originalElem.disabled && a.disable(), a
    }, e._dynamicPositioning = function() {
        var b = this;
        if ("number" === a.type(b.listSize)) b.list.css("max-height", b.maxHeight || "none");
        else {
            var c = b.dropdown.offset().top,
                d = b.list.data("max-height") || b.list.outerHeight(),
                e = b.dropdown.outerHeight(),
                f = b.options.viewport,
                g = f.height(),
                h = a.isWindow(f.get(0)) ? f.scrollTop() : f.offset().top,
                i = g + h >= c + e + d,
                j = !i;
            if (b.list.data("max-height") || b.list.data("max-height", b.list.outerHeight()), j)
                if (b.dropdown.offset().top - h >= d) b.list.css("max-height", d), b.list.css("top", b.dropdown.position().top - b.list.outerHeight());
                else {
                    var k = Math.abs(c + e + d - (g + h)),
                        l = Math.abs(b.dropdown.offset().top - h - d);
                    l > k ? (b.list.css("max-height", d - k - e / 2), b.list.css("top", "auto")) : (b.list.css("max-height", d - l - e / 2), b.list.css("top", b.dropdown.position().top - b.list.outerHeight()))
                } else b.list.css("max-height", d), b.list.css("top", "auto")
        }
        return b
    }, e.enable = function(a) {
        var b = this;
        return b.options.disabled && (b.triggerEvent("enable"), b.selectBox.removeAttr("disabled"), b.dropdown.attr("tabindex", 0).removeClass(b.theme.disabled).addClass(b.theme.enabled), b.setOption("disabled", !1), b._callbackSupport(a)), b
    }, e.enableOption = function(b, c) {
        var d, e = this,
            f = a.type(b);
        return "number" === f && (d = e.selectBox.find("option").eq(b), e.triggerEvent("enable-option"), d.removeAttr("disabled"), e.listItems.eq(b).attr("data-disabled", "false").removeClass(e.theme.disabled)), e._callbackSupport(c), e
    }, e.moveDown = function(a) {
        var b = this;
        b.currentFocus += 1;
        var c = "true" === b.listItems.eq(b.currentFocus).attr("data-disabled") ? !0 : !1,
            d = b.listItems.eq(b.currentFocus).nextAll("li").not("[data-disabled='true']").first().length;
        if (b.currentFocus === b.listItems.length) b.currentFocus -= 1;
        else {
            if (c && d) return b.listItems.eq(b.currentFocus - 1).blur(), void b.moveDown();
            c && !d ? b.currentFocus -= 1 : (b.listItems.eq(b.currentFocus - 1).blur().end().eq(b.currentFocus).focusin(), b._scrollToView("down"), b.triggerEvent("moveDown"))
        }
        return b._callbackSupport(a), b
    }, e.moveUp = function(a) {
        var b = this;
        b.currentFocus -= 1;
        var c = "true" === b.listItems.eq(b.currentFocus).attr("data-disabled") ? !0 : !1,
            d = b.listItems.eq(b.currentFocus).prevAll("li").not("[data-disabled='true']").first().length;
        if (-1 === b.currentFocus) b.currentFocus += 1;
        else {
            if (c && d) return b.listItems.eq(b.currentFocus + 1).blur(), void b.moveUp();
            c && !d ? b.currentFocus += 1 : (b.listItems.eq(this.currentFocus + 1).blur().end().eq(b.currentFocus).focusin(), b._scrollToView("up"), b.triggerEvent("moveUp"))
        }
        return b._callbackSupport(a), b
    }, e._setCurrentSearchOption = function(a) {
        var b = this;
        return (b.options.aggressiveChange || b.options.selectWhenHidden || b.listItems.eq(a).is(":visible")) && b.listItems.eq(a).data("disabled") !== !0 && (b.listItems.eq(b.currentFocus).blur(), b.currentIndex = a, b.currentFocus = a, b.listItems.eq(b.currentFocus).focusin(), b._scrollToView("search"), b.triggerEvent("search")), b
    }, e._searchAlgorithm = function(a, b) {
        var c, d, e, f, g = this,
            h = !1,
            i = g.textArray,
            j = g.currentText;
        for (c = a, e = i.length; e > c; c += 1) {
            for (f = i[c], d = 0; e > d; d += 1) - 1 !== i[d].search(b) && (h = !0, d = e);
            if (h || (g.currentText = g.currentText.charAt(g.currentText.length - 1).replace(/[|()\[{.+*?$\\]/g, "\\$0"), j = g.currentText), b = new RegExp(j, "gi"), j.length < 3) {
                if (b = new RegExp(j.charAt(0), "gi"), -1 !== f.charAt(0).search(b)) return g._setCurrentSearchOption(c), (f.substring(0, j.length).toLowerCase() !== j.toLowerCase() || g.options.similarSearch) && (g.currentIndex += 1), !1
            } else if (-1 !== f.search(b)) return g._setCurrentSearchOption(c), !1;
            if (f.toLowerCase() === g.currentText.toLowerCase()) return g._setCurrentSearchOption(c), g.currentText = "", !1
        }
        return !0
    }, e.search = function(a, b, c) {
        var d = this;
        c ? d.currentText += a.replace(/[|()\[{.+*?$\\]/g, "\\$0") : d.currentText = a.replace(/[|()\[{.+*?$\\]/g, "\\$0");
        var e = d._searchAlgorithm(d.currentIndex, new RegExp(d.currentText, "gi"));
        return e && d._searchAlgorithm(0, d.currentText), d._callbackSupport(b), d
    }, e._updateMobileText = function() {
        var a, b, c, d = this;
        a = d.selectBox.find("option").filter(":selected"), b = a.attr("data-text"), c = b ? b : a.text(), d._setText(d.dropdownText, c), d.list.find('li[data-val="' + a.val() + '"]').find("i").attr("class") && d.dropdownImage.attr("class", d.list.find('li[data-val="' + a.val() + '"]').find("i").attr("class")).addClass("selectboxit-default-icon")
    }, e._applyNativeSelect = function() {
        var a = this;
        return a.dropdownContainer.append(a.selectBox), a.dropdown.attr("tabindex", "-1"), a.selectBox.css({
            display: "block",
            visibility: "visible",
            width: a._realOuterWidth(a.dropdown),
            height: a.dropdown.outerHeight(),
            opacity: "0",
            position: "absolute",
            top: "0",
            left: "0",
            cursor: "pointer",
            "z-index": "999999",
            margin: a.dropdown.css("margin"),
            padding: "0",
            "-webkit-appearance": "menulist-button"
        }), a.originalElem.disabled && a.triggerEvent("disable"), this
    }, e._mobileEvents = function() {
        var a = this;
        a.selectBox.on({
            "changed.selectBoxIt": function() {
                a.hasChanged = !0, a._updateMobileText(), a.triggerEvent("option-click")
            },
            "mousedown.selectBoxIt": function() {
                a.hasChanged || !a.options.defaultText || a.originalElem.disabled || (a._updateMobileText(), a.triggerEvent("option-click"))
            },
            "enable.selectBoxIt": function() {
                a.selectBox.removeClass("selectboxit-rendering")
            },
            "disable.selectBoxIt": function() {
                a.selectBox.addClass("selectboxit-rendering")
            }
        })
    }, e._mobile = function() {
        var a = this;
        return a.isMobile && (a._applyNativeSelect(), a._mobileEvents()), this
    }, e.remove = function(b, c) {
        var d, e, f = this,
            g = a.type(b),
            h = 0,
            i = "";
        if ("array" === g) {
            for (e = b.length; e - 1 >= h; h += 1) d = b[h], "number" === a.type(d) && (i += i.length ? ", option:eq(" + d + ")" : "option:eq(" + d + ")");
            f.selectBox.find(i).remove()
        } else "number" === g ? f.selectBox.find("option").eq(b).remove() : f.selectBox.find("option").remove();
        return f.dropdown ? f.refresh(function() {
            f._callbackSupport(c)
        }, !0) : f._callbackSupport(c), f
    }, e.selectOption = function(b, c) {
        var d = this,
            e = a.type(b);
        return "number" === e ? d.selectBox.val(d.selectItems.eq(b).val()).change() : "string" === e && d.selectBox.val(b).change(), d._callbackSupport(c), d
    }, e.setOption = function(b, c, d) {
        var e = this;
        return "string" === a.type(b) && (e.options[b] = c), e.refresh(function() {
            e._callbackSupport(d)
        }, !0), e
    }, e.setOptions = function(b, c) {
        var d = this;
        return a.isPlainObject(b) && (d.options = a.extend({}, d.options, b)), d.refresh(function() {
            d._callbackSupport(c)
        }, !0), d
    }, e.wait = function(a, b) {
        var c = this;
        return c.widgetProto._delay.call(c, b, a), c
    }
}),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a)
    }

    function c(a) {
        return h.raw ? a : decodeURIComponent(a)
    }

    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a))
    }

    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
        } catch (b) {}
    }

    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d
    }
    var g = /\+/g,
        h = a.cookie = function(e, g, i) {
            if (arguments.length > 1 && !a.isFunction(g)) {
                if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                    var j = i.expires,
                        k = i.expires = new Date;
                    k.setTime(+k + 864e5 * j)
                }
                return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
            }
            for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                var p = m[n].split("="),
                    q = c(p.shift()),
                    r = p.join("=");
                if (e && e === q) {
                    l = f(r, g);
                    break
                }
                e || void 0 === (r = f(r)) || (l[q] = r)
            }
            return l
        };
    h.defaults = {}, a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })), !a.cookie(b))
    }
});
var Tamar = Tamar || {};
Tamar.window = $(window), Tamar.document = $(document), Tamar.didScroll = !1, Tamar.centerVertically = function() {
    var a = $(".center-vertically");
    a.each(function() {
        var a = $(this).parent(),
            b = (a.outerHeight() - $(this).outerHeight()) / 2;
        $(this).css("margin-top", b).addClass("centered")
    })
}, Tamar.fadeOnload = function(a, b) {
    a.each(function(a) {
        $(this).delay(b * a).queue(function() {
            $(this).addClass("faded").dequeue()
        })
    })
}, Tamar.scrollReveal = function() {
    if (!($(window).width() < 1025)) {
        var a = Tamar,
            b = {
                vFactor: .2,
                reset: !1
            };
        a.window.scrollReveal = new scrollReveal(b)
    }
}, Tamar.utilitySearch = function() {
    var a = $("#utility-search").find('input[type="text"]'),
        b = $("#line");
    a.on("focus", function() {
        b.addClass("expanded")
    }), a.on("blur", function() {
        b.removeClass("expanded")
    });
    var c = $("#toggle-search-mobile > a"),
        d = $("#utility");
    c.on("click", function(a) {
        a.preventDefault(), d.toggleClass("search-expanded")
    }), $("#search-submit").on("click", function(b) {
        a.val() || b.preventDefault()
    })
}, Tamar.mobileNav = function() {
    {
        var a = $(window).height(),
            b = $("body"),
            c = $(".menu-toggle"),
            d = $("#wrap-navigation");
        $("header")
    }
    c.on("click", function(c) {
        b.hasClass("menu-open") ? (d.css("max-height", 0), setTimeout(function() {
            b.removeClass("menu-open")
        }, 300)) : (d.css("max-height", a), b.addClass("menu-open")), c.preventDefault()
    })
}, Tamar.scrollTop = function() {
    $(".icon-up-open").on("click", function(a) {
        a.preventDefault(), console.log(!0), $("body, html").animate({
            scrollTop: 0
        }, 500)
    })
}, Tamar.collectionSorting = function() {
    var a = $("#collection-sorting");
    if (a.length) {
        a.find("select").selectBoxIt({
            dynamicPositioning: !1
        });
        var b = $("#collection-sorting");
        b.on("click", function(a) {
            a.preventDefault(), $(this).addClass("showing")
        })
    }
}, Tamar.productSwatches = function() {
    function a(a, b) {
        var c = '<span><img src="' + b + '" /></span>';
        a.append(c)
    }
    var b = $(".color-swatches");
    b.length && b.find("li").each(function() {
        var b = $(this),
            c = $(this).find("img").attr("src");
        a(b, c)
    })
}, Tamar.productSelect = function() {
    var a = $("#product-details .select-box select");
    a.length && a.selectBoxIt({
        dynamicPositioning: !1
    })
}, Tamar.productExpanders = function() {
    var a = $(".product-description");
    a && (a.find("div:first").add("h2:first").show().addClass("open"), a.find("h2").on("click", function() {
        $(this).next().hasClass("open") || ($(this).siblings("h2").removeClass("open"), $(this).addClass("open"), $(this).siblings("div").slideUp(300).removeClass("open"), $(this).next().slideDown(300).addClass("open"))
    }))
}, Tamar.productGallery = function() {
    var a = $("#product-thumbs a"),
        b = $("#main-image");
    a.filter(":first").addClass("active"), a.on("click", function(c) {
        c.preventDefault(); {
            var d = $(this).data("lg");
            $(".spinner")
        }
        d !== b.attr("src") && (a.removeClass("active"), $(this).addClass("active"))
    })
}, Tamar.mobileCart = function() {
    var a = $(".col-headings"),
        b = $(".line-item");
    Tamar.window.width() < 768 ? b.each(function() {
        var b = a.clone();
        $(this).find(".col-headings").length || $(this).find(".col-product").after(b)
    }) : b.find(".col-headings").remove()
}, Tamar.quickView = function() {
    function a() {
        var a = $("#append-quickview");
        a.find(".select-box select").selectBoxIt({
            dynamicPositioning: !1
        }), $.fancybox({
            href: "#append-quickview",
            width: 1100,
            maxWidth: "100%",
            autoSize: !1,
            afterLoad: function() {
                Tamar.productSwatches()
            }
        })
    }
    var b = ".quick-view";
    $("#products-container").on("click", b, function(b) {
        b.preventDefault();
        var c = $(this);
        $("#append-quickview").html(c.parents("article").find(".quickview-content").html()), a()
    })
}, Tamar.bubbles = function() {
    {
        var a = $("#newsletter"),
            b = $(".bubble-wrap"),
            c = Tamar.window.scrollTop(),
            d = c + Tamar.window.height(),
            e = a.offset().top,
            f = e + a.height(),
            g = (e - Tamar.window.scrollTop()) / 400,
            h = (Math.abs(g), (e - Tamar.window.scrollTop()) / 6);
        Math.abs(g)
    }
    d >= e && f >= c && (a.css({
        "background-position-y": g
    }), b.css({
        "background-position-y": h
    }))
}, Tamar.document.ready(function() {
    Tamar.mobileNav(), Tamar.utilitySearch(), Tamar.scrollTop(), Tamar.collectionSorting(), Tamar.productSwatches(), Tamar.productSelect(), Tamar.productExpanders(), Tamar.productGallery(), Tamar.quickView()
}), Tamar.window.on("load", function() {
    Tamar.scrollReveal(), Tamar.fadeOnload($(".fade-in"), 0), Tamar.window.trigger("resize")
}), Tamar.window.on("resize", function() {
    Tamar.centerVertically(), Tamar.mobileCart()
}), Tamar.window.on("scroll", function() {
    Tamar.didScroll = !0
}), setInterval(function() {
    Tamar.didScroll && (Tamar.didScroll = !1, Tamar.bubbles())
}, 10), Object.keys || (Object.keys = function(a) {
    var b, c = [];
    for (b in a) a.hasOwnProperty(b) && c.push(b);
    return c
});
var _loaded = !1;
$(document).ready(function() {
        $("body").on("find-variant", ".product-options", function(a, b) {
            var c = $(this),
                d = c.data("productid"),
                e = $(b),
                f = 0;
            if (e.is("select") ? f = e.find("option:selected").data("variantid") : e.is("a") && (f = e.data("variantid")), f) return c.find(".variant-id").val(f).trigger("change"), !0;
            var g = {};
            if (c.find("a.selected, option:selected").each(function() {
                    g[$(this).data("optiontitle")] = $(this).data("optionvalue")
                }), _products[d].options.length > Object.keys(g).length) return !1;
            var h = {};
            $.each(_products[d].options, function(a, b) {
                h[a] = b
            });
            var i = {};
            $.each(h, function(a, b) {
                i[a] = g[b]
            }), $.each(_products[d].variants, function(a, b) {
                var e = !0;
                return $.each(b.options, function(a, b) {
                    b != i[a] && (e = !1)
                }), 1 == e ? _products[d].variants[a].inventory_quantity < 1 ? (alert("The selected product is out of stock, sorry!"), !1) : (c.find(".variant-id").val(b.id).trigger("change"), !1) : void 0
            })
        }), $(".option-container").each(function() {
            1 == $(this).find("select option").length ? $(this).find("select").val($(this).find("select option").val()) : 1 == $(this).find("ul li").length && $(this).find("ul li a").trigger("click").addClass("selected")
        }), $("body").on("change", ".product-options select", function(a) {
            a.stopImmediatePropagation();
            var b = $(this).parents(".product-options");
            b.trigger("find-variant", $(this))
        }), $("body").on("click", ".product-options a", function(a) {
            var b = $(this).parents(".product-options");
            a.preventDefault(), $(this).parents("ul").find(".selected").removeClass("selected"), $(this).addClass("selected"), b.trigger("find-variant", $(this))
        })
    }), $(document).ready(function() {
        $("#bag").on("update-cart", function() {
            $.ajax({
                url: "/cart.js",
                type: "get",
                dataType: "json",
                success: function(a) {
                    a.items.length && ($("#bag").removeClass("no-products"), $("#bag ul li:not(.keep)").remove(), $("#bag .group.subtotal div span").text("$" + numberWithCommas(fixPrice(a.total_price))), $("#bag > a:first span").text(a.item_count), $(".cart-link span").text(a.item_count), $.each(a.items, function(a, b) {
                        var c = $('<li class="group"></li>'),
                            d = $('<div class="product-info"></div>');
                        d.append('<a href="' + b.url + '"><img alt="' + b.title + '" src="' + b.image + '"></a>'), d.append('<div class="product-details"><a href="' + b.url + '"><span class="product-title">' + b.title + "</span></a></div>"), c.append(d), c.append('<div class="product-price">$' + numberWithCommas(fixPrice(b.line_price)) + "</div>"), c.insertBefore($("#bag ul .insert-before"))
                    }), $("#bag").addClass("open"))
                }
            })
        }), $("#bag").on("mouseout", function() {
            $(this).removeClass("open")
        }), $("body").on("submit", ".has-options", function(a) {
            a.preventDefault();
            var b = $(this).find(".product-options").data("productid"),
                c = $(this).find(".variant-id").val(),
                d = 1,
                e = !0;
            return $.each(_products[b].variants, function(a, f) {
                f.id == c && f.inventory_quantity < d && (alert(_products[b].variants[a].title + " is currently sold out, sorry"), e = !1)
            }), e ? void $.ajax({
                url: "/cart/add.js",
                data: {
                    quantity: d,
                    id: c
                },
                type: "post",
                dataType: "json",
                error: function(a) {
                    a.responseJSON.description && alert(a.responseJSON.description)
                },
                success: function(a) {
                    a.status ? alert(a.status + ": " + a.description) : ($("#add").val("Added to Bag").removeClass("btn-pink").addClass("btn-black"), setTimeout(function() {
                        $("#add").val("Add to Bag").addClass("btn-pink").removeClass("btn-black")
                    }, 2500), $(".fancybox-close").trigger("click"), $("#bag").trigger("update-cart"))
                }
            }) : !1
        }), $("#klavio-signup").on("submit", function(a) {
            var b, c = $(this).find("#k_id_email").val(),
                d = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
            c ? d.test(c.toLowerCase()) || (b = "PLEASE ENTER A VALID EMAIL ADDRESS") : b = "PLEASE ENTER YOUR EMAIL ADDRESS", b && (a.preventDefault(), a.stopPropagation(), $("#text-under-form").text(b))
        }), $("#klavio-signup").on("keypress", "input", function(a) {
            13 == a.keyCode && $("#sklavio-signup").trigger("submit")
        }), KlaviyoSubscribe.attachToForms("#klavio-signup", {
            success: function() {
                $("#klavio-subscribe").slideUp(500), $("#klavio-success").slideDown(500)
            }
        });
        var a = 1;
        if (Shopify.queryParams = {}, location.search.length)
            for (var b, c = 0, d = location.search.substr(1).split("&"); c < d.length; c++) b = d[c].split("="), b.length > 1 && (Shopify.queryParams[decodeURIComponent(b[0])] = decodeURIComponent(b[1]));
        $(document).ready(function() {
            $("#order-by").val("{{ collection.sort_by | default: collection.default_sort_by | escape }}").on("change", function() {
                Shopify.queryParams.sort_by = $(this).val(), location.search = $.param(Shopify.queryParams).replace(/\+/g, "%20")
            })
        });
        var e = 12;
        $(".load-more").on("click", function(b) {
            b.preventDefault(), a++;
            var c = window.location.href.split("?"),
                d = c[0] + "?page=" + a,
                f = $.QueryString.sort_by;
            f && (d += "&sort_by=" + f), $.get(d, function(a) {
                $("#products-container").append($(a).find("#products-container")), $(a).find("#products-container article").length < e && $(".load-more").remove();
                var b = $("#products-container").find("article").length;
                $(".displaying-products").html(b)
            })
        });
        var f = {
                twitter: "https://twitter.com/intent/tweet",
                facebook: "https://www.facebook.com/sharer/sharer.php",
                pinterest: "http://pinterest.com/pin/create/button/",
                email: "mailto:"
            },
            g = $(".social-share"),
            h = encodeURI(window.location);
        g.find(".twitter").each(function() {
            $(this).prop("href", f.twitter + "?url=" + h)
        }), g.find(".facebook").each(function() {
            $(this).prop("href", f.facebook + "?u=" + h)
        }), g.find(".pinterest").each(function() {
            $(this).prop("href", f.pinterest + "?url=" + h + "&media=" + $("#main-image").prop("src"))
        }), g.find(".email").each(function() {
            $(this).prop("href", f.email + "?subject=" + encodeURI($("#wrap-form > h1").text()) + "&body=" + encodeURI("\n" + window.location.href))
        }), g.find("a:not(.email)").on("click", function(a) {
            console.log($(this).prop("href")), window.open($(this).prop("href"), "share", "width=630,height=330"), a.preventDefault()
        }), $("#product-thumbs").on("fix-height", function() {
            $(this).css("max-height", $("#main-image").outerHeight(!0))
        }), $("#product-thumbs").trigger("fix-height"), $(window).on("resize", function() {
            $("#product-thumbs").trigger("fix-height")
        }), $.cookie("coupon-modal") || ($("#coupon-modal").on("close", function() {
            $(this).fadeTo(500, 0, function() {
                $(this).remove()
            }), $("#coupon-modal-bg").fadeTo(500, 0, function() {
                $(this).remove()
            })
        }), $("#coupon-modal .close, #coupon-modal-bg").on("click", function(a) {
            a.preventDefault(), $("#coupon-modal").trigger("close")
        }), $.cookie("coupon-modal", 1, {
            expires: 365
        }), setTimeout(function() {
            $("#coupon-modal").fadeTo(500, 1), $("#coupon-modal-bg").fadeTo(500, .4)
        }, 1500), $("#coupon-modal form").on("submit", function(a) {
            var b, c = $(this).find("#k_id_email").val(),
                d = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
            c ? d.test(c.toLowerCase()) || (b = "PLEASE ENTER A VALID EMAIL ADDRESS") : b = "PLEASE ENTER YOUR EMAIL ADDRESS", b && (a.preventDefault(), a.stopPropagation(), $("#coupon-modal .disclaimer").text(b))
        }), $("#coupon-modal form").on("keypress", "input", function(a) {
            13 == a.keyCode && $("#coupon-modal form").trigger("submit")
        }), KlaviyoSubscribe.attachToForms("#coupon-modal form", {
            success: function() {
                $("#coupon-modal").find(".prompt").hide(), $("#coupon-modal").find(".success").show()
            }
        }))
    }),
    function(a) {
        a.QueryString = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = a[c].split("=");
                2 == d.length && (b[d[0]] = decodeURIComponent(d[1].replace(/\+/g, " ")))
            }
            return b
        }(window.location.search.substr(1).split("&"))
    }(jQuery);