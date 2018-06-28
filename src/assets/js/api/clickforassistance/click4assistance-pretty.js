function C4AW_UTC() {
    this.UTCGetNow = function() {
        try {
            var d = new Date;
            return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds())
        } catch (c) {
            oC4AW_Widget.SendJSError("UTCGetNow", c)
        }
    };
    this.UTCIsValid = function(d) {
        try {
            return !isNaN(d) && 2147483647 <= parseInt(d, 10) ? !0 : !1
        } catch (c) {
            oC4AW_Widget.SendJSError("UTCIsValid", c)
        }
    };
    this.UTCDiffernce = function(d) {
        try {
            var c = 0;
            if (!this.UTCIsValid(d)) return 99999999;
            var c = parseInt(d, 10),
                h = this.UTCGetNow();
            return h < c ?
                99999999 : h - c
        } catch (l) {
            oC4AW_Widget.SendJSError("UTCDiffernce", l)
        }
    }
}

function C4AW_WidgetProactive(d, c, h, l, b, e, p) {
    this.Workflow = d;
    d = c.toLowerCase();
    d = d.replace("https://", "");
    d = d.replace("http://", "");
    this.URLContains = d = d.replace("www.", "");
    this.ExactMatch = h;
    this.DelayOpen = l;
    this.DelayException = b;
    this.ShowWhenUnavailable = 1 == e ? "Y" : "N";
    this.Identity = p
}

function C4AW_Widget() {
    function d(b) {
        var e = b.getAutoProactiveCollection().length;
        if (0 != e) {
            var c = new C4AW_Cookie;
            c.LoadData();
            if (c.IsEnabled() && !c.getContDisplayed() && !(new C4AW_Browser).getIsSmallMobile())
                for (var g = !1, a = 0; a < e; a++) {
                    var f = b.getAutoProactiveCollection(),
                        d = window.location.href.toLowerCase(),
                        d = d.replace("https://", ""),
                        d = d.replace("http://", ""),
                        d = d.replace("www.", ""),
                        g = !1;
                    1 == f[a].ExactMatch ? d == f[a].URLContains && (g = !0) : -1 != d.indexOf(f[a].URLContains) && (g = !0);
                    if (g) {
                        var h = f[a].Workflow,
                            g =
                            f[a].DelayException,
                            k = f[a].Identity,
                            l = f[a].ShowWhenUnavailable;
                        lDiff = (new C4AW_UTC).UTCDiffernce(c.getAutoProactiveDTS());
                        if (lDiff > 1E3 * g) {
                            setTimeout(function() {
                                var a = h,
                                    f = k,
                                    c = l,
                                    e = new C4AW_Cookie;
                                e.LoadData();
                                if (!e.getContDisplayed()) {
                                    var d = new C4AW_UTC;
                                    "" != e.getChatStartedDTS() && 3E4 > d.UTCDiffernce(e.getChatStartedDTS()) || (new C4AW_WidgetComms(b)).Send("IsProactiveWorkflowAvailable", "ProWFGUID=" + a + "&Identity=" + f + "&ShowWhenUnavailable=" + c)
                                }
                            }, 1E3 * f[a].DelayOpen);
                            break
                        }
                    }
                }
        }
    }
    var c = new C4AW_WidgetData,
        h,
        l;
    this.setAccGUID = function(b) {
        c.setParamAccGUID(b)
    };
    this.setWSGUID = function(b) {
        c.setParamWSGUID(b)
    };
    this.setWFGUID = function(b) {
        c.setParamWFGUID(b)
    };
    this.setIdentity = function(b) {
        c.setParamIdentity(b)
    };
    this.setPopupWindowWFGUID = function(b) {
        c.setPopupWindowWFGUID(b)
    };
    this.setDockPosition = function(b) {
        c.setDockPosition(b)
    };
    this.setBtnStyle = function(b) {
        c.setBtnStyle(b)
    };
    this.setBtnStaticURL = function(b) {
        c.setBtnStaticURL(b)
    };
    this.setSendJSErrors = function(b) {
        c.setSendJSErrors(b)
    };
    this.setUserDefParams = function(b) {
        c.setParamUserDef(b)
    };
    this.addAutoProactive = function(b) {
        c.addAutoProactive(b)
    };
    this.setBtnWrapperClass = function(b) {
        c.setBtnWrapperClass(b)
    };
    this.Initilize = function() {
        h = new C4AW_WidgetInterface(c);
        h.Load();
        l = new C4AW_WidgetChat(c);
        d(c)
    };
    this.BuildContainer = function(b, e) {
        h.BuildContainer(b, e)
    };
    this.BuildIFrame = function(b) {
        h.BuildIFrame(b)
    };
    this.ServerDataLoaded = function() {
        h.ServerDataLoaded()
    };
    this.ServerDataLoadedForProactive = function(b, e) {
        h.ServerDataLoadedForProactive(b, e)
    };
    this.ChatActive = function(b) {
        l.ChatActive(b)
    };
    this.ChatCompleted = function(b) {
        l.ChatCompleted(b)
    };
    this.ChatDontExist = function(b) {
        l.ChatDontExist(b)
    };
    this.oC4AW_WidgetInterface = h;
    this.CloseBtnClick = function() {
        h.CloseBtnClick()
    };
    this.PopupBtnClick = function() {
        h.PopUpChatWindow()
    };
    this.SendJSError = function(b, e) {
        (new C4AW_WidgetComms(c)).SendJSErrorToServer(b, e)
    }
}

function C4AW_Browser() {
    this.getUserAgent = function() {
        return navigator.userAgent
    };
    this.getIsSmallMobile = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 799 >= window.innerHeight ? !0 : !1
    }
}

function C4AW_Cookie() {
    function d(a, b) {
        try {
            if ("" == b || "" == a) return "";
            var e = a.indexOf(b);
            if (-1 == e) return "";
            var c = a.indexOf("=", e);
            if (-1 == c) return "";
            var f = a.indexOf(",", e); - 1 == f && (f = 999999);
            return a.substring(c + 1, f)
        } catch (u) {
            return oC4AW_Widget.SendJSError("GetValueFromName", u), ""
        }
    }
    var c = !1,
        h = "",
        l = "",
        b = !1,
        e = "",
        p = "",
        g = "";
    this.getCookieLoaded = function() {
        return c
    };
    this.getChatEncryptID = function() {
        return h
    };
    this.getChatStartedDTS = function() {
        return l
    };
    this.getContDisplayed = function() {
        return b
    };
    this.getAutoProactiveDTS =
        function() {
            return e
        };
    this.getAutoProactiveWorkflow = function() {
        return p
    };
    this.getAutoProactiveIdentity = function() {
        return g
    };
    this.setChatEncryptID = function(a) {
        h = a
    };
    this.setChatStartedDTS = function(a) {
        l = a
    };
    this.setContDisplayed = function(a) {
        b = a
    };
    this.setAutoProactiveDTS = function(a) {
        e = a
    };
    this.setAutoProactiveWorkflow = function(a) {
        p = a
    };
    this.setAutoProactiveIdentity = function(a) {
        g = a
    };
    this.IsEnabled = function() {
        try {
            return navigator.cookieEnabled
        } catch (a) {
            return oC4AW_Widget.SendJSError("IsEnabled", a), !1
        }
    };
    this.LoadData =
        function() {
            try {
                var a;
                a: try {
                    for (var f = document.cookie.split(";"), t = 0; t < f.length; t++) {
                        for (var q = f[t];
                            " " == q.charAt(0);) q = q.substring(1, q.length);
                        if (0 == q.indexOf("C4ATBWid=")) {
                            a = q.substring(9, q.length);
                            break a
                        }
                    }
                    a = !1
                } catch (k) {
                    oC4AW_Widget.SendJSError("Cookie_Read", k), a = !1
                }
                null != a ? (h = d(a, "ChatEncryptID"), l = d(a, "ChatStartedDTS"), e = d(a, "AutoProactiveDTS"), p = d(a, "AutoProactiveWorkflow"), g = d(a, "AutoProactiveIdentity"), b = "true" == d(a, "ContDisplayed") ? !0 : !1, c = !0) : c = !1
            } catch (k) {
                return oC4AW_Widget.SendJSError("LoadData",
                    k), !1
            }
        };
    this.SaveData = function() {
        try {
            var a;
            a: {
                try {
                    if (0 != navigator.cookieEnabled) {
                        var c = "ChatEncryptID=" + h + ",ChatStartedDTS=" + l,
                            c = c + ",ContDisplayed=" + b + ",AutoProactiveDTS=" + e,
                            c = c + ",AutoProactiveWorkflow=" + p,
                            c = c + ",AutoProactiveIdentity=" + g,
                            d = new Date;
                        d.setTime(d.getTime() + 144E5);
                        document.cookie = "C4ATBWid=" + c + "; expires=" + d.toGMTString() + ";path=/;";
                        a = !0;
                        break a
                    }
                } catch (q) {
                    oC4AW_Widget.SendJSError("Cookie_Write", q);
                    a = !1;
                    break a
                }
                a = void 0
            }
            if (!a) return oC4AW_Widget.SendJSError("SaveData", "Unable to save to cookie"), !1
        } catch (q) {
            return oC4AW_Widget.SendJSError("SaveData", q), !1
        }
    }
}

function C4AW_WidgetComms(d) {
    function c(c, b) {
        try {
            if (0 != h.getSendJSErrors()) {
                var e = window.document,
                    p = e.getElementsByTagName("head").item(0);
                if (!p) var g = e.getElementById("C4ATBW_DataSendJSErr");
                g && p.removeChild(g);
                var a = e.createElement("script"),
                    f = d.getURLSiteInt() + "ChatWidget/ClientJSError.aspx?AccGUID=" + h.getParamAccGUID() + "&WSGUID=" + h.getParamWSGUID() + "&Function=" + sFunc + "&Err=" + sErr,
                    f = f + "&" + Math.random();
                a.src = f;
                a.type = "text/javascript";
                a.defer = !0;
                a.id = "C4ATBW_DataSendJSErr";
                p.appendChild(a)
            }
        } catch (t) {}
    }
    var h = d;
    this.Send = function(l, b) {
        try {
            var e = window.document,
                p = e.getElementsByTagName("head").item(0);
            if (!p) var g = e.getElementById("C4ATBW_DataSend");
            g && p.removeChild(g);
            var a = e.createElement("script"),
                f = d.getURLSiteInt() + "ChatWidget/Scripts.aspx?AccGUID=" + h.getParamAccGUID() + "&WSGUID=" + h.getParamWSGUID() + "&WFGUID=" + h.getParamWFGUID(),
                f = f + "&Process=" + l;
            "" != b && (f = f + "&" + b);
            f = f + "&" + Math.random();
            a.src = f;
            a.type = "text/javascript";
            a.defer = !0;
            a.id = "C4ATBW_DataSend";
            p.appendChild(a)
        } catch (t) {
            c("SendToServer",
                t)
        }
    };
    this.SendJSErrorToServer = function(d, b) {
        c(d, b)
    }
}

function C4AW_WidgetChat(d) {
    function c(c, d) {
        try {
            var a = b.getParamWFGUID(),
                f = b.getParamIdentity();
            e.LoadData();
            var p = e.getAutoProactiveWorkflow(),
                g = e.getAutoProactiveIdentity();
            h(p) && (a = p, f = g);
            var k = b.getURLChatInt(),
                k = k + c,
                k = k + "?AccountGUID=" + b.getParamAccGUID() + "&WebsiteGUID=" + b.getParamWSGUID() + "&WorkflowGUID=" + a + "&Identity=" + f,
                k = k + "&R=" + Math.random(),
                l = "object" == typeof C4A_TB ? C4A_TB.getTHID() : "",
                k = k + "&Origin=" + String(escape(location.href)).substring(0, 600),
                k = k + "&Referrer=" + String(escape(escape(document.referrer))).substring(0,
                    600),
                k = k + "&THID=" + l,
                k = k + "&UUID=" + d,
                k = k + "&Widget=Y";
            "" != b.getParamUserDef() && (k = k + "&" + b.getParamUserDef());
            var n = document.getElementById("iFraC4AW");
            n ? n.src = k : alert("OpenChatWindow: unable to find iFraC4AW")
        } catch (m) {
            oC4AW_Widget.SendJSError("OpenChatWindow", m)
        }
    }

    function h(c) {
        try {
            var b = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/;
            return "" == c ? !1 : b.test(c) ? !0 : !1
        } catch (a) {
            oC4AW_Widget.SendJSError("isGUID", a)
        }
    }

    function l() {
        try {
            var c = (new Date).getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(b) {
                var a = (c + 16 * Math.random()) % 16 | 0;
                c = Math.floor(c / 16);
                return ("x" == b ? a : a & 7 | 8).toString(16)
            })
        } catch (g) {
            oC4AW_Widget.SendJSError("GenerateUUID", g)
        }
    }
    var b = d,
        e = new C4AW_Cookie;
    this.Activate = function() {
        try {
            var d = "",
                g = "",
                a = 0;
            if (iFra = document.getElementById("iFraC4AW")) {
                iFra.src = b.getURLSiteInt() + "/ChatWidget/PleaseWait.htm";
                e.LoadData();
                var f = new C4AW_UTC;
                0 == e.getCookieLoaded() ? (d = l(), g = f.UTCGetNow(), a = f.UTCDiffernce(e.getChatStartedDTS()),
                    e.setChatEncryptID(d), e.setChatStartedDTS(g), e.SaveData()) : (d = e.getChatEncryptID(), g = e.getChatStartedDTS(), a = f.UTCDiffernce(e.getChatStartedDTS()));
                if (!h(d) || 36E5 < a) d = l(), g = f.UTCGetNow(), e.setChatEncryptID(d), e.setChatStartedDTS(g), e.SaveData(), c("Default.aspx", d);
                else {
                    var t = new C4AW_WidgetComms(b);
                    h(e.getAutoProactiveWorkflow()) ? t.Send("ChatInit", "UUID=" + d + "&ProWFGUID=" + e.getAutoProactiveWorkflow()) : t.Send("ChatInit", "UUID=" + d)
                }
            }
        } catch (q) {
            oC4AW_Widget.SendJSError("Activate", q)
        }
    };
    this.ChatActive =
        function(b) {
            try {
                c("Widget_Dialogue.aspx", b);
                e.LoadData();
                var d = new C4AW_UTC;
                e.setChatStartedDTS(d.UTCGetNow());
                e.SaveData()
            } catch (a) {
                oC4AW_Widget.SendJSError("ChatActive", a)
            }
        };
    this.ChatCompleted = function(b) {
        try {
            b = l(), c("Default.aspx", b), e.LoadData(), e.setChatEncryptID(b), new C4AW_UTC, e.setChatStartedDTS(""), e.setChatEncryptID(""), e.SaveData()
        } catch (g) {
            oC4AW_Widget.SendJSError("ChatCompleted", g)
        }
    };
    this.ChatDontExist = function(b) {
        try {
            c("Default.aspx", b), e.LoadData(), new C4AW_UTC, e.setChatStartedDTS(""),
                e.setChatEncryptID(""), e.SaveData()
        } catch (g) {
            oC4AW_Widget.SendJSError("ChatDontExist", g)
        }
    }
}

function C4AW_WidgetData() {
    var d = "",
        c = "",
        h = "",
        l = "",
        b = "",
        e = "",
        p = "",
        g = "",
        a = !0,
        f = "",
        t = "",
        q = [],
        k = "",
        u = "",
        n = "";
    this.setParamAccGUID = function(a) {
        d = a
    };
    this.setParamWSGUID = function(a) {
        c = a
    };
    this.setParamWFGUID = function(a) {
        h = a
    };
    this.setParamIdentity = function(a) {
        l = a
    };
    this.setPopupWindowWFGUID = function(a) {
        b = a
    };
    this.setDockPosition = function(a) {
        e = a
    };
    this.setBtnStyle = function(a) {
        p = a
    };
    this.setBtnStaticURL = function(a) {
        g = a
    };
    this.setSendJSErrors = function(b) {
        a = b
    };
    this.setContainerStyle = function(a) {
        k = a
    };
    this.setContainerHTML =
        function(a) {
            u = a
        };
    this.setIFrameStyle = function(a) {
        n = a
    };
    this.setParamUserDef = function(a) {
        f = a
    };
    this.setBtnWrapperClass = function(a) {
        t = a
    };
    this.addAutoProactive = function(a) {
        q.push(a)
    };
    this.getParamAccGUID = function() {
        return d
    };
    this.getParamWSGUID = function() {
        return c
    };
    this.getParamWFGUID = function() {
        return h
    };
    this.getParamIdentity = function() {
        return l
    };
    this.getPopupWindowWFGUID = function() {
        return b
    };
    this.getDockPosition = function() {
        return e
    };
    this.getBtnStyle = function() {
        return p
    };
    this.getSendJSErrors = function() {
        return a
    };
    this.getContainerStyle = function() {
        return k
    };
    this.getContainerHTML = function() {
        return u
    };
    this.getIFrameStyle = function() {
        return n
    };
    this.getParamUserDef = function() {
        return f
    };
    this.getAutoProactiveCollection = function() {
        return q
    };
    this.getBtnWrapperClass = function() {
        return t
    };
    this.getBtnURL = function() {
        return "" == g ? "https://prod3si.click4assistance.co.uk//Button/DynamBtn.aspx?AccGUID=" + d + "&WSGUID=" + c + "&WFGUID=" + h : g
    };
    this.getURLChatInt = function() {
        return "https://prod3ci.click4assistance.co.uk/"
    };
    this.getURLSiteInt =
        function() {
            return "https://prod3si.click4assistance.co.uk/"
        }
}

function C4AW_WidgetInterface(d) {

    //custom
    //var ulsterChatButtonID = 'divC4AWButton';
    var ulsterChatButtonID = 'openchat';

    function c(a, b) {
        oC4AW_Widget.SendJSError(a, b)
    }

    function h() {
        try {
            n = document.getElementById(ulsterChatButtonID), n || (n = document.createElement("img"), n.id = ulsterChatButtonID, n.style.zIndex = 2147483645, n.style.cssText = f.getBtnStyle(), n.setAttribute("onmouseover", "this.style.cursor='pointer';"), n.setAttribute("onmouseout", "this.style.cursor='default';"), n.title = "Click here to start a chat using Live Chat Software by Click4Assistance", n.setAttribute("alt", "Click here to start a chat using Live Chat Software by Click4Assistance"),
                n.setAttribute("role", "button"), n.setAttribute("tabindex", "999"), n.onkeypress = function() {
                    p()
                }, n.onclick = function() {
                    p()
                }), n.src = f.getBtnURL(), "" != f.getBtnWrapperClass() && (n.style.display = "none", n.onload = function() {
                var a = !1;
                2 == n.height && 2 == n.width && (a = !0);
                for (var b = document.getElementsByClassName(f.getBtnWrapperClass()), c = 0; c < b.length; c++) b[c].style.display = a ? "block" : "none"
            }), document.body.insertBefore(n, null)
        } catch (v) {
            c("BuildChatButton", v)
        }
    }

    function l() {
        try {
            if (m) {
                var d = m.style.height.toUpperCase(),
                    e = m.style.width.toUpperCase();
                "0PX" != d && (k = parseInt(d.replace("PX", ""), 10));
                "0PX" != e && (u = parseInt(e.replace("PX", ""), 10));
                0 == k && (k = 420);
                0 == u && (k = 320);
                b(!1);
                z = !0;
                m.style.display = "block";
                r.style.display = "block";
                n.style.display = "none";
                g();
                t.Activate();
                a.LoadData();
                a.setContDisplayed(!0);
                a.SaveData()
            } else alert("InitilizeAndDisplayInterface:Cant find Container")
        } catch (x) {
            c("InitilizeAndDisplayInterface", x)
        }
    }

    function b(b) {
        a.LoadData();
        b ? a.getContDisplayed() ? m.style.height = parseInt(k, 10) + "px" : m.style.height =
            "0px" : ("BOTTOM" == f.getDockPosition() && (m.style.height = "0px"), "RIGHT" == f.getDockPosition() && (m.style.width = "0px"))
    }

    function e() {
        try {
            var a = f.getURLChatInt() + "Default.aspx?AccountGUID=" + f.getParamAccGUID(),
                a = a + "&WebsiteGUID=" + f.getParamWSGUID(),
                a = a + "&WorkflowGUID=" + f.getPopupWindowWFGUID(),
                a = a + "&Origin=" + location.href + "&Referrer=" + document.referrer,
                b = "object" == typeof C4A_TB ? "&THID=" + C4A_TB.getTHID() : "&THID=";
            "" != f.getParamUserDef() && (a = a + "&" + f.getParamUserDef());
            window.open(a + b, "_blank", "menubar=no,location=no,resizable=no,scrollbars=auto,status=no")
        } catch (x) {
            c("PopUpChatWindow",
                x)
        }
    }

    function p() {
        try {
            a.LoadData(), a.setAutoProactiveWorkflow(""), a.setAutoProactiveIdentity(""), a.SaveData(), q.getIsSmallMobile() ? e() : a.IsEnabled() ? y ? l() : (new C4AW_WidgetComms(f)).Send("LoadData", "") : e()
        } catch (v) {
            c("OpenInterface", v)
        }
    }

    function g() {
        try {
            m.style.display = "block";
            if ("BOTTOM" == f.getDockPosition()) {
                var a = m.style.height.toUpperCase(),
                    b = parseInt(a.replace("PX", ""), 10);
                parseInt(k, 10) >= parseInt(b, 10) ? (m.style.height = b + 10 + "px", setTimeout(function() {
                    g()
                }, 10)) : (r.style.display = "block", m.style.width =
                    parseInt(u, 10) + "px", m.style.height = parseInt(k, 10) + "px")
            }
            if ("RIGHT" == f.getDockPosition()) {
                var d = m.style.width.toUpperCase(),
                    e = parseInt(d.replace("PX", ""), 10);
                parseInt(u, 10) >= parseInt(e, 10) ? (m.style.width = e + 10 + "px", setTimeout(function() {
                    g()
                }, 10)) : (r.style.display = "block", m.style.width = u + "px", m.style.height = k + "px")
            }
        } catch (w) {
            c("Interface_AnimateOpen", w)
        }
    }
    var a = new C4AW_Cookie,
        f = d,
        t = new C4AW_WidgetChat(d),
        q = new C4AW_Browser,
        k = 0,
        u = 0,
        n, m, z = !1,
        r, y = !1;
    this.BuildContainer = function(a, b) {
        try {
            m = document.getElementById("divC4AWContainer"),
                m || (m = document.createElement("div"), m.id = "divC4AWContainer", m.style.display = "none", m.style.cssText = a, m.style.zIndex = "2147483647", m.innerHTML = b, document.body.insertBefore(m, null))
        } catch (x) {
            c("Build_Container", x)
        }
    };
    this.BuildIFrame = function(a) {
        try {
            r = document.getElementById("iFraC4AW"), r || (r = document.createElement("iframe"), r.id = "iFraC4AW", r.style.display = "none", r.style.frameBorder = "0", r.setAttribute("frameBorder", "0"), r.style.marginheight = "0px", r.style.marginWidth = "0px", r.style.borderWidth = "0px", r.style.cssText =
                a, m.appendChild(r, null))
        } catch (A) {
            c("Build_IFrame", A)
        }
    };
    this.ServerDataLoaded = function() {
        try {
            y = !0, l()
        } catch (v) {
            c("ServerDataLoaded", v)
        }
    };
    this.ServerDataLoadedForProactive = function(a, b) {
        var c = new C4AW_Cookie;
        c.LoadData();
        c.setAutoProactiveWorkflow(a);
        c.setAutoProactiveIdentity(b);
        var d = new Date,
            d = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds());
        c.setAutoProactiveDTS(d);
        c.SaveData();
        y = !0;
        l()
    };
    this.Load = function() {
        h();
        try {
            if (a.LoadData(),
                a.IsEnabled() && (z = a.getContDisplayed())) try {
                var b = a.getChatEncryptID(),
                    d = (new C4AW_UTC).UTCDiffernce(a.getChatStartedDTS()),
                    e;
                b: {
                    try {
                        var g = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/;
                        e = "" == b ? !1 : g.test(b) ? !0 : !1;
                        break b
                    } catch (w) {
                        c("isGUID", w)
                    }
                    e = void 0
                }
                e && 36E5 > d ? (y || (new C4AW_WidgetComms(f)).Send("LoadData", ""), t.Activate()) : (a.LoadData(), a.getContDisplayed(!1), a.SaveData())
            } catch (w) {
                c("PageLoad_IsThereActiveChat", w)
            }
        } catch (w) {
            c("OpenInterface",
                w)
        }
    };
    this.CloseBtnClick = function() {
        try {
            b(!1), z = !1, n.style.display = "block", m.style.display = "none", r.style.display = "none", a.LoadData(), a.setContDisplayed(!1), a.SaveData()
        } catch (v) {
            c("CloseInterface", v)
        }
    };
    this.PopUpChatWindow = function() {
        e()
    }
}
var oC4AW_Widget = C4AW_Widget;