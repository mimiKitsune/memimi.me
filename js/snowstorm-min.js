var snowStorm = function (e, t) {
    function w(e, t) {
        if (isNaN(t)) {
            t = 0
        }
        return Math.random() * e + t
    }

    function E(e) {
        return parseInt(w(2), 10) === 1 ? e * -1 : e
    }

    function S() {
        e.setTimeout(function () {
            n.start(true)
        }, 20);
        n.events.remove(s ? t : e, "mousemove", S)
    }

    function x() {
        if (!n.excludeMobile || !a) {
            if (n.freezeOnBlur) {
                n.events.add(s ? t : e, "mousemove", S)
            } else {
                S()
            }
        }
        n.events.remove(e, "load", x)
    }
    this.autoStart = true;
    this.flakesMax = 128;
    this.flakesMaxActive = 64;
    this.animationInterval = 33;
    this.excludeMobile = true;
    this.flakeBottom = null;
    this.followMouse = true;
    this.useIMG = true;
    if (useIMG == true) {
        this.imagePath = "public/js/new_year/images/set1/";
        this.usePNG = true
    } else {
        this.snowColor = "#fff";
        this.snowCharacter = "�"
    }
    this.snowStick = true;
    this.targetElement = null;
    this.useMeltEffect = true;
    this.useTwinkleEffect = false;
    this.usePositionFixed = false;
    this.freezeOnBlur = true;
    this.flakeLeftOffset = 0;
    this.flakeRightOffset = 0;
    this.flakeWidth = 8;
    this.flakeHeight = 8;
    this.vMaxX = 5;
    this.vMaxY = 4;
    this.zIndex = 0;
    var n = this,
        r = this,
        i, s = navigator.userAgent.match(/msie/i),
        o = navigator.userAgent.match(/msie 6/i),
        u = navigator.appVersion.match(/windows 98/i),
        a = navigator.userAgent.match(/mobile|opera m(ob|in)/i),
        f = s && t.compatMode === "BackCompat",
        l = a || f || o,
        c = null,
        h = null,
        p = null,
        d = null,
        v = null,
        m = null,
        g = 1,
        y = 2,
        b = s || s && !o && !isOldIE;
    flakeTypes = 6, fixedForEverything = false, opacitySupported = function () {
        try {
            t.createElement("div").style.opacity = "0.5"
        } catch (e) {
            return false
        }
        return true
    }(), didInit = false, docFrag = t.createDocumentFragment();
    this.timers = [];
    this.flakes = [];
    this.disabled = false;
    this.active = false;
    this.meltFrameCount = 20;
    this.meltFrames = [];
    this.events = function () {
        function i(e) {
            var r = n.call(e),
                i = r.length;
            if (t) {
                r[1] = "on" + r[1];
                if (i > 3) {
                    r.pop()
                }
            } else if (i === 3) {
                r.push(false)
            }
            return r
        }

        function s(e, n) {
            var i = e.shift(),
                s = [r[n]];
            if (t) {
                i[s](e[0], e[1])
            } else {
                i[s].apply(i, e)
            }
        }

        function o() {
            s(i(arguments), "add")
        }

        function u() {
            s(i(arguments), "remove")
        }
        var t = !e.addEventListener && e.attachEvent,
            n = Array.prototype.slice,
            r = {
                add: t ? "attachEvent" : "addEventListener",
                remove: t ? "detachEvent" : "removeEventListener"
            };
        return {
            add: o,
            remove: u
        }
    }();
    this.randomizeWind = function () {
        var e;
        v = E(w(n.vMaxX, .2));
        m = w(n.vMaxY, .2);
        if (this.flakes) {
            for (e = 0; e < this.flakes.length; e++) {
                if (this.flakes[e].active) {
                    this.flakes[e].setVelocities()
                }
            }
        }
    };
    this.scrollHandler = function () {
        var r;
        d = n.flakeBottom ? 0 : parseInt(e.scrollY || t.documentElement.scrollTop || t.body.scrollTop, 10);
        if (isNaN(d)) {
            d = 0
        }
        if (!fixedForEverything && !n.flakeBottom && n.flakes) {
            for (r = n.flakes.length; r--;) {
                if (n.flakes[r].active === 0) {
                    n.flakes[r].stick()
                }
            }
        }
    };
    this.resizeHandler = function () {
        if (e.innerWidth || e.innerHeight) {
            c = e.innerWidth - 16 - n.flakeRightOffset;
            p = n.flakeBottom ? n.flakeBottom : e.innerHeight
        } else {
            c = (t.documentElement.clientWidth || t.body.clientWidth || t.body.scrollWidth) - (!s ? 8 : 0) - n.flakeRightOffset;
            p = n.flakeBottom ? n.flakeBottom : t.documentElement.clientHeight || t.body.clientHeight || t.body.scrollHeight
        }
        h = parseInt(c / 2, 10)
    };
    this.resizeHandlerAlt = function () {
        c = n.targetElement.offsetLeft + n.targetElement.offsetWidth - n.flakeRightOffset;
        p = n.flakeBottom ? n.flakeBottom : n.targetElement.offsetTop + n.targetElement.offsetHeight;
        h = parseInt(c / 2, 10)
    };
    this.freeze = function () {
        var e;
        if (!n.disabled) {
            n.disabled = 1
        } else {
            return false
        }
        for (e = n.timers.length; e--;) {
            clearInterval(n.timers[e])
        }
    };
    this.resume = function () {
        if (n.disabled) {
            n.disabled = 0
        } else {
            return false
        }
        n.timerInit()
    };
    this.toggleSnow = function () {
        if (!n.flakes.length) {
            n.start()
        } else {
            n.active = !n.active;
            if (n.active) {
                n.show();
                n.resume()
            } else {
                n.stop();
                n.freeze()
            }
        }
    };
    this.stop = function () {
        var r;
        this.freeze();
        for (r = this.flakes.length; r--;) {
            this.flakes[r].o.style.display = "none"
        }
        n.events.remove(e, "scroll", n.scrollHandler);
        n.events.remove(e, "resize", n.resizeHandler);
        if (n.freezeOnBlur) {
            if (s) {
                n.events.remove(t, "focusout", n.freeze);
                n.events.remove(t, "focusin", n.resume)
            } else {
                n.events.remove(e, "blur", n.freeze);
                n.events.remove(e, "focus", n.resume)
            }
        }
    };
    this.show = function () {
        var e;
        for (e = this.flakes.length; e--;) {
            this.flakes[e].o.style.display = "block"
        }
    };
    this.SnowFlake = function (e, n, r, i) {
        var s = this,
            o = e;
        this.type = n;
        this.x = r || parseInt(w(c - 20), 10);
        this.y = !isNaN(i) ? i : -w(p) - 12;
        this.vX = null;
        this.vY = null;
        this.vAmpTypes = [1, 1.2, 1.4, 1.6, 1.8];
        this.vAmp = this.vAmpTypes[this.type];
        this.melting = false;
        this.meltFrameCount = o.meltFrameCount;
        this.meltFrames = o.meltFrames;
        this.meltFrame = 0;
        this.twinkleFrame = 0;
        this.active = 1;
        this.fontSize = 10 + this.type / 5 * 10;
        if (useIMG == true) {
            this.o = t.createElement("img")
        } else {
            this.o = t.createElement("div");
            this.o.innerHTML = o.snowCharacter;
            this.o.style.color = o.snowColor
        }
        this.o.style.position = fixedForEverything ? "fixed" : "absolute";
        this.o.style.width = o.flakeWidth + "px";
        this.o.style.height = o.flakeHeight + "px";
        this.o.style.fontFamily = "arial,verdana";
        this.o.style.cursor = "default";
        this.o.style.overflow = "hidden";
        this.o.style.fontWeight = "normal";
        this.o.style.zIndex = o.zIndex;
        if (useIMG == true) {
            this.o.src = imagePath + this.type + (usePNG ? ".png" : ".gif")
        }
        docFrag.appendChild(this.o);
        this.refresh = function () {
            if (isNaN(s.x) || isNaN(s.y)) {
                return false
            }
            s.o.style.left = s.x + "px";
            s.o.style.top = s.y + "px"
        };
        this.stick = function () {
            if (l || o.targetElement !== t.documentElement && o.targetElement !== t.body) {
                s.o.style.top = p + d - o.flakeHeight + "px"
            } else if (o.flakeBottom) {
                s.o.style.top = o.flakeBottom + "px"
            } else {
                s.o.style.display = "none";
                s.o.style.top = "auto";
                s.o.style.bottom = "0px";
                s.o.style.position = "fixed";
                s.o.style.display = "block"
            }
        };
        this.vCheck = function () {
            if (s.vX >= 0 && s.vX < .2) {
                s.vX = .2
            } else if (s.vX < 0 && s.vX > -.2) {
                s.vX = -.2
            }
            if (s.vY >= 0 && s.vY < .2) {
                s.vY = .2
            }
        };
        this.move = function () {
            var e = s.vX * g,
                t;
            s.x += e;
            s.y += s.vY * s.vAmp;
            if (s.x >= c || c - s.x < o.flakeWidth) {
                s.x = 0
            } else if (e < 0 && s.x - o.flakeLeftOffset < -o.flakeWidth) {
                s.x = c - o.flakeWidth - 1
            }
            s.refresh();
            t = p + d - s.y;
            if (t < o.flakeHeight) {
                s.active = 0;
                if (o.snowStick) {
                    s.stick()
                } else {
                    s.recycle()
                }
            } else {
                if (o.useMeltEffect && s.active && s.type < 3 && !s.melting && Math.random() > .998) {
                    s.melting = true;
                    s.melt()
                }
                if (o.useTwinkleEffect) {
                    if (!s.twinkleFrame) {
                        if (Math.random() > .9) {
                            s.twinkleFrame = parseInt(Math.random() * 20, 10)
                        }
                    } else {
                        s.twinkleFrame--;
                        s.o.style.visibility = s.twinkleFrame && s.twinkleFrame % 2 === 0 ? "hidden" : "visible"
                    }
                }
            }
        };
        this.animate = function () {
            s.move()
        };
        this.setVelocities = function () {
            s.vX = v + w(o.vMaxX * .12, .1);
            s.vY = m + w(o.vMaxY * .12, .1)
        };
        this.setOpacity = function (e, t) {
            if (!opacitySupported) {
                return false
            }
            e.style.opacity = t
        };
        this.melt = function () {
            if (!o.useMeltEffect || !s.melting) {
                s.recycle()
            } else {
                if (s.meltFrame < s.meltFrameCount) {
                    s.setOpacity(s.o, s.meltFrames[s.meltFrame]);
                    s.o.style.fontSize = s.fontSize - s.fontSize * (s.meltFrame / s.meltFrameCount) + "px";
                    s.o.style.lineHeight = o.flakeHeight + 2 + o.flakeHeight * .75 * (s.meltFrame / s.meltFrameCount) + "px";
                    s.meltFrame++
                } else {
                    s.recycle()
                }
            }
        };
        this.recycle = function () {
            s.o.style.display = "none";
            s.o.style.position = fixedForEverything ? "fixed" : "absolute";
            s.o.style.bottom = "auto";
            s.setVelocities();
            s.vCheck();
            s.meltFrame = 0;
            s.melting = false;
            s.setOpacity(s.o, 1);
            s.o.style.padding = "0px";
            s.o.style.margin = "0px";
            s.o.style.fontSize = s.fontSize + "px";
            s.o.style.lineHeight = o.flakeHeight + 2 + "px";
            s.o.style.textAlign = "center";
            s.o.style.verticalAlign = "baseline";
            s.x = parseInt(w(c - o.flakeWidth - 20), 10);
            s.y = parseInt(w(p) * -1, 10) - o.flakeHeight;
            s.refresh();
            s.o.style.display = "block";
            s.active = 1
        };
        this.recycle();
        this.refresh()
    };
    this.snow = function () {
        var e = 0,
            t = 0,
            r = 0,
            i = null,
            s;
        for (s = n.flakes.length; s--;) {
            if (n.flakes[s].active === 1) {
                n.flakes[s].move();
                e++
            } else if (n.flakes[s].active === 0) {
                t++
            } else {
                r++
            } if (n.flakes[s].melting) {
                n.flakes[s].melt()
            }
        }
        if (e < n.flakesMaxActive) {
            i = n.flakes[parseInt(w(n.flakes.length), 10)];
            if (i.active === 0) {
                i.melting = true
            }
        }
    };
    this.mouseMove = function (e) {
        if (!n.followMouse) {
            return true
        }
        var t = parseInt(e.clientX, 10);
        if (t < h) {
            g = -y + t / h * y
        } else {
            t -= h;
            g = t / h * y
        }
    };
    this.createSnow = function (e, t) {
        var i;
        for (i = 0; i < e; i++) {
            n.flakes[n.flakes.length] = new n.SnowFlake(n, parseInt(w(flakeTypes), 10));
            if (t || i > n.flakesMaxActive) {
                n.flakes[n.flakes.length - 1].active = -1
            }
        }
        r.targetElement.appendChild(docFrag)
    };
    this.timerInit = function () {
        n.timers = !u ? [setInterval(n.snow, n.animationInterval)] : [setInterval(n.snow, n.animationInterval * 3), setInterval(n.snow, n.animationInterval)]
    };
    this.init = function () {
        var r;
        for (r = 0; r < n.meltFrameCount; r++) {
            n.meltFrames.push(1 - r / n.meltFrameCount)
        }
        n.randomizeWind();
        n.createSnow(n.flakesMax);
        n.events.add(e, "resize", n.resizeHandler);
        n.events.add(e, "scroll", n.scrollHandler);
        if (n.freezeOnBlur) {
            if (s) {
                n.events.add(t, "focusout", n.freeze);
                n.events.add(t, "focusin", n.resume)
            } else {
                n.events.add(e, "blur", n.freeze);
                n.events.add(e, "focus", n.resume)
            }
        }
        n.resizeHandler();
        n.scrollHandler();
        if (n.followMouse) {
            n.events.add(s ? t : e, "mousemove", n.mouseMove)
        }
        n.animationInterval = Math.max(20, n.animationInterval);
        n.timerInit()
    };
    this.start = function (e) {
        if (!didInit) {
            didInit = true
        } else if (e) {
            return true
        }
        if (typeof n.targetElement === "string") {
            var r = n.targetElement;
            n.targetElement = t.getElementById(r);
            if (!n.targetElement) {
                throw new Error('Snowstorm: Unable to get targetElement "' + r + '"')
            }
        }
        if (!n.targetElement) {
            n.targetElement = !s ? t.documentElement ? t.documentElement : t.body : t.body
        }
        if (n.targetElement !== t.documentElement && n.targetElement !== t.body) {
            n.resizeHandler = n.resizeHandlerAlt
        }
        n.resizeHandler();
        n.usePositionFixed = n.usePositionFixed && !l;
        fixedForEverything = n.usePositionFixed;
        if (c && p && !n.disabled) {
            n.init();
            n.active = true
        }
    };
    if (n.autoStart) {
        n.events.add(e, "load", x, false)
    }
    return this
}(window, document)