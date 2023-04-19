(function () {
  "use strict";
  var e = {
      5112: function (e, t, s) {
        var a = s(9242),
          o = s(3396),
          n = s(7139);
        const i = { key: 0, class: "loading-div" },
          r = {
            key: 0,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
          },
          c = (0, o._)(
            "path",
            {
              d: "M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z",
            },
            null,
            -1
          ),
          d = (0, o._)(
            "circle",
            { cx: "80%", cy: "20%", r: "25", fill: "red" },
            null,
            -1
          ),
          l = (0, o._)(
            "text",
            {
              x: "77%",
              y: "23%",
              "font-size": "14px",
              fill: "white",
              "text-anchor": "middle",
            },
            " 1 ",
            -1
          ),
          h = [c, d, l],
          u = {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          g = (0, o._)(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z",
              fill: "white",
            },
            null,
            -1
          ),
          p = [g];
        function m(e, t, s, c, d, l) {
          const g = (0, o.up)("router-view");
          return (
            (0, o.wg)(),
            (0, o.iD)("div", null, [
              (0, o.Wm)(
                a.uT,
                { name: "bounce" },
                {
                  default: (0, o.w5)(() => [
                    (0, o._)(
                      "div",
                      {
                        class: "chat-container",
                        style: (0, n.j5)([
                          d.showPop
                            ? "border: 1px solid rgb(242, 242, 242); box-shadow: 6px 2px 15px 5px rgba(0, 0, 0, 0.1);"
                            : "",
                        ]),
                      },
                      [
                        d.isLoading
                          ? ((0, o.wg)(), (0, o.iD)("div", i))
                          : (0, o.kq)("", !0),
                        d.showPop
                          ? ((0, o.wg)(),
                            (0, o.j4)(
                              g,
                              {
                                key: 1,
                                checkFirst: l.checkFirst,
                                updateState: l.updateState,
                                addConversation: l.addConversation,
                                updateConversation: l.updateConversation,
                                removeConversation: l.removeConversation,
                                getConversationBy: l.getConversationBy,
                                showChat: d.showChat,
                                showPop: d.showPop,
                                stateval: d.stateval,
                                user: d.user,
                                unreadMsg: d.unreadMsg,
                                botName: d.botName,
                                onCreateNewConvo: l.createNewConvo,
                                onUpdateUnreadMsg: l.updateUnreadMsg,
                              },
                              null,
                              8,
                              [
                                "checkFirst",
                                "updateState",
                                "addConversation",
                                "updateConversation",
                                "removeConversation",
                                "getConversationBy",
                                "showChat",
                                "showPop",
                                "stateval",
                                "user",
                                "unreadMsg",
                                "botName",
                                "onCreateNewConvo",
                                "onUpdateUnreadMsg",
                              ]
                            ))
                          : (0, o.kq)("", !0),
                      ],
                      4
                    ),
                  ]),
                  _: 1,
                }
              ),
              (0, o._)(
                "div",
                {
                  class: "chat-icon",
                  onClick: t[0] || (t[0] = (e) => (d.showPop = !d.showPop)),
                },
                [
                  (0, o.Wm)(
                    a.uT,
                    { name: "bounce" },
                    {
                      default: (0, o.w5)(() => [
                        d.showPop
                          ? (0, o.kq)("", !0)
                          : ((0, o.wg)(), (0, o.iD)("svg", r, h)),
                      ]),
                      _: 1,
                    }
                  ),
                  (0, o.Wm)(
                    a.uT,
                    { name: "bounce" },
                    {
                      default: (0, o.w5)(() => [
                        (0, o.wy)(((0, o.wg)(), (0, o.iD)("svg", u, p, 512)), [
                          [a.F8, d.showPop],
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]
              ),
            ])
          );
        }
        s(7658);
        var v = s(7795),
          w = s(36);
        function y() {
          const e = {
              apiKey: "AIzaSyCkr7FFrAeCGR1GRo_cUNPyFf5kz8Zm9Ho",
              authDomain: "chatly-9e73d.firebaseapp.com",
              projectId: "chatly-9e73d",
              storageBucket: "chatly-9e73d.appspot.com",
              messagingSenderId: "692360901272",
              appId: "1:692360901272:web:f2e46455a122ed050216ed",
              measurementId: "G-DN2SKEJYP6",
            },
            t = (0, v.ZF)(e);
          return (0, w.ad)(t);
        }
        var b = y;
        const f = b(),
          k = async (e) => {
            const t = (0, w.hJ)(f, "conversation");
            let s = "";
            try {
              await (0, w.ET)(t, { step: 0, user: e, agent: "" }).then(
                async (e) => {
                  s = e.id;
                  (0, w.JU)(f, "conversation", s);
                }
              );
            } catch (a) {
              return !1;
            }
            return s;
          },
          C = async (e, t) => {
            const s = (0, w.hJ)(f, "conversation");
            try {
              await (0, w.r7)((0, w.JU)(s, e), { step: t });
            } catch (a) {
              console.log(a);
            }
          },
          x = async (e, t) => {
            console.log(e, t, "trying to save");
            const s = (0, w.JU)(f, "conversation", t),
              a = (0, w.hJ)(s, "chat"),
              { text: o, type: n, user: i, isUser: r } = e,
              c = { text: o, type: n, user: i, createdAt: (0, w.Bt)() };
            await (0, w.ET)(a, c).then(async (e) => {
              console.log("Document written with ID: ", e.id),
                r
                  ? (await (0, w.r7)(s, {
                      agentNewmessage: !0,
                      lastMsgTime: (0, w.Bt)(),
                    }),
                    console.log(
                      "Conversation document updated with agentNewmessage: true"
                    ))
                  : (await (0, w.r7)(s, {
                      userNewmessage: !0,
                      lastMsgTime: (0, w.Bt)(),
                    }),
                    console.log(
                      "Conversation document updated with userNewmessage: true"
                    ));
            });
          },
          I = async (e) => {
            const t = await (0, w.QT)((0, w.JU)(f, "conversation", e));
            if (t.exists()) return t.data();
            console.log("No such document");
          },
          S = async (e) => {
            const t = (0, w.JU)(f, "conversation", e),
              s = (0, w.hJ)(t, "chat"),
              a = (0, w.IO)(s, (0, w.Xo)("createdAt", "desc"), (0, w.b9)(1));
            let o = await (0, w.QT)((0, w.JU)(f, "conversation", e));
            o.exists() && (o = o.data());
            const n = await (0, w.PL)(a);
            if (n.docs.length > 0) {
              const e = n.docs[0].data();
              return { lastChatData: e, parentData: o };
            }
            return { lastChatData: null, parentData: o };
          },
          _ = async (e, t) => {
            const s = (0, w.JU)(f, "conversation", e);
            await (0, w.r7)(s, t);
          },
          T = async (e) => {
            const t = (0, w.JU)(f, "conversation", e),
              s = [],
              a = (0, w.hJ)(t, "chat"),
              o = (0, w.IO)(a, (0, w.Xo)("createdAt", "asc"));
            await (0, w.r7)(t, { userNewmessage: !1 });
            const n = await (0, w.PL)(o);
            return (
              n.forEach((e) => {
                s.push(e.data());
              }),
              s
            );
          },
          M = async (e) => {
            const t = (0, w.JU)(f, "conversation", e);
            await (0, w.r7)(t, { userNewmessage: !1 });
          };
        var D = {
            data() {
              return {
                showChat: !1,
                showPop: !1,
                user: "",
                ip: "",
                stateval: {},
                unreadMsg: 0,
                botName: "Alex",
                isLoading: !1,
              };
            },
            methods: {
              updateUnreadMsg(e) {
                (this.unreadMsg = this.unreadMsg + e),
                  console.log(e, "updating unread messge", this.unreadMsg);
              },
              async checkFirst() {
                let e = localStorage.getItem("appState");
                if (null === e) {
                  let e = {
                    user: { role: "lead", locale: "en", hasConversations: !0 },
                    conversations: { byId: {} },
                  };
                  localStorage.setItem("appState", JSON.stringify(e));
                }
              },
              async updateState(e) {
                (this.stateval = e),
                  localStorage.setItem("appState", JSON.stringify(e));
              },
              addConversation(e, t) {
                const s = {
                  ...this.stateval,
                  conversations: {
                    ...this.stateval.conversations,
                    byId: { ...this.stateval.conversations.byId, [e]: t },
                  },
                };
                this.updateState(s);
              },
              updateConversation(e, t) {
                const s = {
                  ...this.stateval,
                  conversations: {
                    ...this.stateval.conversations,
                    byId: {
                      ...this.stateval.conversations.byId,
                      [e]: { ...this.stateval.conversations.byId[e], ...t },
                    },
                  },
                };
                this.updateState(s);
              },
              getConversationBy(e) {
                const t = JSON.parse(localStorage.getItem("appState")),
                  s = t.conversations.byId;
                return s.hasOwnProperty(e) ? s[e] : null;
              },
              removeConversation(e) {
                const { [e]: t, ...s } = this.stateval.conversations.byId,
                  a = {
                    ...this.stateval,
                    conversations: { ...this.stateval.conversations, byId: s },
                  };
                this.updateState(a);
              },
              async get_creat_user() {
                const e = localStorage.getItem("userId");
                e
                  ? (this.user = e)
                  : (await fetch("https://api.ipify.org?format=json")
                      .then((e) => e.json())
                      .then(({ ip: e }) => {
                        (this.user = e.split(".").join("")), (this.ip = e);
                      }),
                    localStorage.setItem("userId", this.user));
              },
              async saveConversationId(e) {
                const t = Date.now(),
                  s = { fetchState: "partial", read: !0, expire: t, ended: !1 };
                this.addConversation(e, s);
              },
              async createNewConvo() {
                this.isLoading = !0;
                const e = JSON.parse(localStorage.getItem("appState")),
                  t = e.conversations.byId,
                  s = Object.keys(t).pop(),
                  a = Object.values(t).pop(),
                  o = !a || a.ended;
                if ((console.log("Last conversation ended:", o, a, s), o)) {
                  this.isLoading = !0;
                  let e = await k(this.user);
                  console.log(e),
                    await this.saveConversationId(e),
                    (this.isLoading = !1),
                    this.$router.push({
                      name: "conversation",
                      params: { id: e },
                    });
                } else
                  this.$router.push({
                    name: "conversation",
                    params: { id: s },
                  }),
                    (this.isLoading = !1);
              },
            },
            async mounted() {
              this.checkFirst();
              const e =
                JSON.parse(localStorage.getItem("appState")) || this.stateval;
              await this.updateState(e), this.removeConversation("undefined");
            },
            async created() {
              await this.checkFirst(), await this.get_creat_user();
              const e = JSON.parse(localStorage.getItem("appState")) || {};
              "conversation" === e.router.location.name &&
                (console.log("here hello"),
                (this.showPop = !0),
                this.$router.push(e.router.location.pathname));
            },
          },
          N = s(89);
        const j = (0, N.Z)(D, [["render", m]]);
        var $ = j;
        const U = { key: 0, class: "loading-div" },
          L = {
            key: 0,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
          },
          A = (0, o._)(
            "path",
            {
              d: "M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z",
            },
            null,
            -1
          ),
          B = (0, o._)(
            "circle",
            { cx: "80%", cy: "20%", r: "25", fill: "red" },
            null,
            -1
          ),
          O = (0, o._)(
            "text",
            {
              x: "77%",
              y: "23%",
              "font-size": "14px",
              fill: "white",
              "text-anchor": "middle",
            },
            " 1 ",
            -1
          ),
          P = [A, B, O],
          E = {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          q = (0, o._)(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z",
              fill: "white",
            },
            null,
            -1
          ),
          W = [q];
        function J(e, t, s, i, r, c) {
          const d = (0, o.up)("chatmaintest");
          return (
            (0, o.wg)(),
            (0, o.iD)("div", null, [
              (0, o.Wm)(
                a.uT,
                { name: "bounce" },
                {
                  default: (0, o.w5)(() => [
                    (0, o._)(
                      "div",
                      {
                        class: "chat-container",
                        style: (0, n.j5)([
                          r.showPop
                            ? "border: 1px solid rgb(242, 242, 242); box-shadow: 6px 2px 15px 5px rgba(0, 0, 0, 0.1);"
                            : "",
                        ]),
                      },
                      [
                        r.isLoading
                          ? ((0, o.wg)(), (0, o.iD)("div", U))
                          : (0, o.kq)("", !0),
                        r.showPop
                          ? ((0, o.wg)(),
                            (0, o.j4)(
                              d,
                              {
                                key: 1,
                                checkFirst: c.checkFirst,
                                updateState: c.updateState,
                                addConversation: c.addConversation,
                                updateConversation: c.updateConversation,
                                removeConversation: c.removeConversation,
                                getConversationBy: c.getConversationBy,
                                showChat: r.showChat,
                                showPop: r.showPop,
                                stateval: r.stateval,
                                user: r.user,
                                unreadMsg: r.unreadMsg,
                                botName: r.botName,
                                onCreateNewConvo: c.createNewConvo,
                                onUpdateUnreadMsg: c.updateUnreadMsg,
                              },
                              null,
                              8,
                              [
                                "checkFirst",
                                "updateState",
                                "addConversation",
                                "updateConversation",
                                "removeConversation",
                                "getConversationBy",
                                "showChat",
                                "showPop",
                                "stateval",
                                "user",
                                "unreadMsg",
                                "botName",
                                "onCreateNewConvo",
                                "onUpdateUnreadMsg",
                              ]
                            ))
                          : (0, o.kq)("", !0),
                      ],
                      4
                    ),
                  ]),
                  _: 1,
                }
              ),
              (0, o._)(
                "div",
                {
                  class: "chat-icon",
                  onClick: t[0] || (t[0] = (e) => (r.showPop = !r.showPop)),
                },
                [
                  (0, o.Wm)(
                    a.uT,
                    { name: "bounce" },
                    {
                      default: (0, o.w5)(() => [
                        r.showPop
                          ? (0, o.kq)("", !0)
                          : ((0, o.wg)(), (0, o.iD)("svg", L, P)),
                      ]),
                      _: 1,
                    }
                  ),
                  (0, o.Wm)(
                    a.uT,
                    { name: "bounce" },
                    {
                      default: (0, o.w5)(() => [
                        (0, o.wy)(((0, o.wg)(), (0, o.iD)("svg", E, W, 512)), [
                          [a.F8, r.showPop],
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]
              ),
            ])
          );
        }
        var z = s(9031),
          F = s(2689);
        const H = { key: 0 },
          V = { id: "chatview" },
          K = (0, o._)(
            "div",
            { class: "chat-header" },
            [(0, o._)("h3", null, "Chatly")],
            -1
          ),
          Z = { ref: "chatbody", class: "chat-body", id: "chat-body" },
          Y = { key: 0, class: "loading-div" },
          G = { class: "message-box" },
          R = { class: "chat-footer" };
        function X(e, t, s, n, i, r) {
          const c = (0, o.up)("SingleChat"),
            d = (0, o.up)("test");
          return (
            (0, o.wg)(),
            (0, o.iD)("div", null, [
              i.showingConvo
                ? ((0, o.wg)(),
                  (0, o.j4)(
                    d,
                    {
                      key: 1,
                      botName: s.botName,
                      user: s.user,
                      conversationId: i.conversationId,
                      onGoBack: r.goBack,
                      onGoBackTo: r.goBackTo,
                    },
                    null,
                    8,
                    [
                      "botName",
                      "user",
                      "conversationId",
                      "onGoBack",
                      "onGoBackTo",
                    ]
                  ))
                : ((0, o.wg)(),
                  (0, o.iD)("div", H, [
                    (0, o._)("div", V, [
                      (0, o.Wm)(
                        a.uT,
                        { name: "bounce" },
                        {
                          default: (0, o.w5)(() => [
                            (0, o._)("div", null, [
                              K,
                              (0, o._)(
                                "div",
                                Z,
                                [
                                  i.isLoading
                                    ? ((0, o.wg)(), (0, o.iD)("div", Y))
                                    : (0, o.kq)("", !0),
                                  (0, o._)("div", G, [
                                    (0, o.Wm)(
                                      F.i,
                                      { "item-props": "", lines: "two" },
                                      {
                                        default: (0, o.w5)(() => [
                                          ((0, o.wg)(!0),
                                          (0, o.iD)(
                                            o.HY,
                                            null,
                                            (0, o.Ko)(
                                              r.sortedConversations,
                                              (e) => (
                                                (0, o.wg)(),
                                                (0, o.j4)(
                                                  c,
                                                  {
                                                    convo: e,
                                                    key: e.text,
                                                    agent: e.agent,
                                                    user: s.user,
                                                    onUpdateUnreadMsg:
                                                      r.updateUnreadMsg,
                                                    class: "chat-transition",
                                                    onClick: (t) =>
                                                      r.show(e.conversationId),
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    "convo",
                                                    "agent",
                                                    "user",
                                                    "onUpdateUnreadMsg",
                                                    "onClick",
                                                  ]
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                ],
                                512
                              ),
                              (0, o._)("div", R, [
                                r.getCount || i.isLoading
                                  ? (0, o.kq)("", !0)
                                  : ((0, o.wg)(),
                                    (0, o.j4)(
                                      z.T,
                                      {
                                        key: 0,
                                        onClick: r.createNewConvo,
                                        class: "start",
                                        "aria-details": r.getCount,
                                        getCount: "",
                                      },
                                      {
                                        default: (0, o.w5)(() => [
                                          (0, o.Uk)(" Start Conversation "),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["onClick", "aria-details"]
                                    )),
                              ]),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ])),
            ])
          );
        }
        var Q = s(6562),
          ee = s(4075),
          te = s(498);
        const se = { key: 0 },
          ae = { class: "text-primary" };
        function oe(e, t, s, a, i, r) {
          return e.loaded
            ? ((0, o.wg)(),
              (0, o.iD)("div", se, [
                (0, o.Wm)(
                  te.l,
                  {
                    title: s.convo.text,
                    subtitle: s.convo.subtitle,
                    "prepend-avatar": r.imageSrc,
                    "append-icon": "",
                  },
                  {
                    append: (0, o.w5)(() => [
                      s.convo.userNewmessage
                        ? ((0, o.wg)(),
                          (0, o.j4)(Q.G, { key: 0, color: "green" }))
                        : (0, o.kq)("", !0),
                    ]),
                    subtitle: (0, o.w5)(({}) => [
                      (0, o._)(
                        "span",
                        ae,
                        (0, n.zw)(
                          r.capitalizeName(
                            "bot" === s.convo.user
                              ? "Alex"
                              : s.convo.user === s.user
                              ? "you"
                              : s.agent || "bot"
                          )
                        ),
                        1
                      ),
                      (0, o.Uk)(
                        " — " + (0, n.zw)(r.timeAgo(s.convo.createdAt)),
                        1
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["title", "subtitle", "prepend-avatar"]
                ),
                (0, o.Wm)(ee.J, { inset: "" }),
              ]))
            : (0, o.kq)("", !0);
        }
        var ne = s(5743),
          ie = s.n(ne),
          re = s(893),
          ce = s.n(re);
        ie().extend(ce());
        var de = {
          data: () => ({ loaded: !1 }),
          props: ["convo", "agent", "user"],
          components: {},
          methods: {
            capitalizeName(e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            },
            timeAgo(e) {
              const t = ie()(),
                s = ie()(e.toDate());
              let a = s.diff(t, "second"),
                o = " ago";
              if (((a = Math.abs(a)), a < 60)) return "Just now";
              if (a < 3600) {
                let e = Math.floor(a / 60);
                return `${e} ${e > 1 ? "minutes" : "minute"}${o}`;
              }
              if (a < 86400) {
                let e = Math.floor(a / 3600);
                return `${e} ${e > 1 ? "hours" : "hour"}${o}`;
              }
              {
                let e = Math.floor(a / 86400);
                return `${e} ${e > 1 ? "days" : "day"}${o}`;
              }
            },
          },
          async created() {
            console.log(this.convo, "the convovov"), (this.loaded = !0);
          },
          computed: {
            displayAgent() {
              return "bot" === this.convo.user ? "Alex" : this.agent || "bot";
            },
            imageSrc() {
              const e = `https://ui-avatars.com/api/?name=${this.displayAgent}&size=40&background=%23ccc&color=fff&color=fff&rounded=true&font-size=0.5`;
              return e;
            },
          },
        };
        const le = (0, N.Z)(de, [
          ["render", oe],
          ["__scopeId", "data-v-9f5dd014"],
        ]);
        var he = le,
          ue = s(2066),
          ge = s(3289);
        const pe = { id: "chatview" },
          me = { class: "chat-header" },
          ve = { ref: "chatbody", class: "chat-body", id: "chat-body" },
          we = { key: 0, class: "loading-div" },
          ye = { class: "message-box" },
          be = ["value"],
          fe = { key: 0 },
          ke = { class: "name" },
          Ce = ["innerHTML"],
          xe = { key: 1 },
          Ie = ["name", "value", "id"],
          Se = ["for", "onClick"],
          _e = { key: 2, class: "just-joined" },
          Te = { class: "join-message" },
          Me = { style: { "text-align": "left", "margin-bottom": "15px" } },
          De = { key: 0, id: "loading-bubble" },
          Ne = (0, o._)(
            "div",
            { class: "spinner" },
            [
              (0, o._)("div", { class: "bounce1" }),
              (0, o._)("div", { class: "bounce2" }),
              (0, o._)("div", { class: "bounce3" }),
            ],
            -1
          ),
          je = [Ne],
          $e = { key: 1 },
          Ue = ["disabled"],
          Le = ["disabled"],
          Ae = (0, o._)(
            "div",
            {
              style: {
                margin: "'24px auto 12px'",
                "text-align": "'center'",
                "font-size": "'14px'",
                "line-height": "'21px'",
                "padding-top": "'0px'",
                color: "'rgb(115, 115, 115)'",
              },
            },
            " Your conversation has ended ",
            -1
          );
        function Be(e, t, s, i, r, c) {
          const d = (0, o.up)("NewImage"),
            l = (0, o.up)("feedBack");
          return (
            (0, o.wg)(),
            (0, o.iD)("div", null, [
              (0, o.wy)(
                (0, o._)(
                  "div",
                  pe,
                  [
                    (0, o.Wm)(
                      a.uT,
                      { name: "bounce" },
                      {
                        default: (0, o.w5)(() => [
                          (0, o._)("div", null, [
                            (0, o._)("div", me, [
                              (0, o.Wm)(ge.t, {
                                style: { cursor: "pointer" },
                                onClick:
                                  t[0] || (t[0] = (t) => e.$emit("goBack")),
                                start: "",
                                icon: "mdi-arrow-left",
                              }),
                              (0, o._)(
                                "h3",
                                null,
                                "Chatly " + (0, n.zw)(r.agent),
                                1
                              ),
                              null !== r.agent
                                ? ((0, o.wg)(),
                                  (0, o.j4)(
                                    d,
                                    { key: 0, name: s.botName, size: "50" },
                                    null,
                                    8,
                                    ["name"]
                                  ))
                                : (0, o.kq)("", !0),
                              r.ended || null === r.ended
                                ? (0, o.kq)("", !0)
                                : ((0, o.wg)(),
                                  (0, o.j4)(
                                    z.T,
                                    {
                                      key: 1,
                                      color: "green",
                                      onClick: c.showFeeback,
                                    },
                                    {
                                      default: (0, o.w5)(() => [
                                        (0, o.Uk)("end Convo"),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["onClick"]
                                  )),
                            ]),
                            r.showLoader
                              ? ((0, o.wg)(),
                                (0, o.iD)(
                                  "div",
                                  {
                                    key: 0,
                                    class: "line-loader",
                                    style: (0, n.j5)({
                                      width: r.loaderWidth + "%",
                                    }),
                                  },
                                  null,
                                  4
                                ))
                              : (0, o.kq)("", !0),
                            (0, o._)(
                              "div",
                              ve,
                              [
                                r.isLoading
                                  ? ((0, o.wg)(), (0, o.iD)("div", we))
                                  : (0, o.kq)("", !0),
                                (0, o._)("div", ye, [
                                  ((0, o.wg)(!0),
                                  (0, o.iD)(
                                    o.HY,
                                    null,
                                    (0, o.Ko)(
                                      r.messages,
                                      (e, t) => (
                                        (0, o.wg)(),
                                        (0, o.iD)(
                                          "div",
                                          {
                                            key: t,
                                            value: s.user,
                                            style: (0, n.j5)([
                                              c.checkNxt(e, t)
                                                ? ""
                                                : "margin-bottom: 6px;",
                                            ]),
                                            class: (0, n.C_)([
                                              e.user === s.user ||
                                              "user" === e.user
                                                ? "message-box__item outgoing"
                                                : "message-box__item incoming",
                                            ]),
                                          },
                                          [
                                            "text" === e.type
                                              ? ((0, o.wg)(),
                                                (0, o.iD)("div", fe, [
                                                  (0, o.wy)(
                                                    (0, o._)(
                                                      "div",
                                                      ke,
                                                      [
                                                        e.user !== s.user
                                                          ? ((0, o.wg)(),
                                                            (0, o.j4)(
                                                              d,
                                                              {
                                                                key: 0,
                                                                name:
                                                                  "bot" ==
                                                                  e.user
                                                                    ? s.botName
                                                                    : e.user,
                                                                size: 20,
                                                              },
                                                              null,
                                                              8,
                                                              ["name"]
                                                            ))
                                                          : (0, o.kq)("", !0),
                                                        (0, o.Uk)(
                                                          " " +
                                                            (0, n.zw)(
                                                              c.capitalizeName(
                                                                "bot" == e.user
                                                                  ? s.botName
                                                                  : e.user ===
                                                                    s.user
                                                                  ? "you"
                                                                  : e.user
                                                              )
                                                            ),
                                                          1
                                                        ),
                                                      ],
                                                      512
                                                    ),
                                                    [[a.F8, c.checkPrev(e, t)]]
                                                  ),
                                                  (0, o._)(
                                                    "div",
                                                    {
                                                      class: (0, n.C_)([
                                                        e.user === s.user ||
                                                        "user" === e.user
                                                          ? "user-text"
                                                          : "bot-text",
                                                      ]),
                                                    },
                                                    [
                                                      (0, o._)(
                                                        "span",
                                                        {
                                                          innerHTML:
                                                            c.renderMessage(
                                                              e.text
                                                            ),
                                                        },
                                                        null,
                                                        8,
                                                        Ce
                                                      ),
                                                    ],
                                                    2
                                                  ),
                                                ]))
                                              : "option" === e.type
                                              ? ((0, o.wg)(),
                                                (0, o.iD)("div", xe, [
                                                  ((0, o.wg)(!0),
                                                  (0, o.iD)(
                                                    o.HY,
                                                    null,
                                                    (0, o.Ko)(
                                                      e.option,
                                                      (t, s) => (
                                                        (0, o.wg)(),
                                                        (0, o.iD)(
                                                          "div",
                                                          {
                                                            key: s,
                                                            style: {
                                                              "margin-bottom":
                                                                "5px",
                                                            },
                                                          },
                                                          [
                                                            (0, o._)(
                                                              "input",
                                                              {
                                                                type: "checkbox",
                                                                name: `name${s}`,
                                                                value: t.text,
                                                                id: s,
                                                              },
                                                              null,
                                                              8,
                                                              Ie
                                                            ),
                                                            (0, o._)(
                                                              "label",
                                                              {
                                                                for: s,
                                                                class:
                                                                  "md-chip md-chip-clickable md-chip-hover",
                                                                onClick: (s) =>
                                                                  c.clickSelect(
                                                                    t,
                                                                    e
                                                                  ),
                                                              },
                                                              (0, n.zw)(t.text),
                                                              9,
                                                              Se
                                                            ),
                                                          ]
                                                        )
                                                      )
                                                    ),
                                                    128
                                                  )),
                                                ]))
                                              : (0, o.kq)("", !0),
                                            "joined" === e.type
                                              ? ((0, o.wg)(),
                                                (0, o.iD)("div", _e, [
                                                  (0, o._)(
                                                    "span",
                                                    Te,
                                                    (0, n.zw)(e.text) +
                                                      " Just joined chat",
                                                    1
                                                  ),
                                                ]))
                                              : (0, o.kq)("", !0),
                                          ],
                                          14,
                                          be
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                  (0, o._)("div", Me, [
                                    r.isTyping || r.loading
                                      ? ((0, o.wg)(), (0, o.iD)("div", De, je))
                                      : (0, o.kq)("", !0),
                                  ]),
                                ]),
                              ],
                              512
                            ),
                            r.ended
                              ? ((0, o.wg)(),
                                (0, o.iD)(
                                  "div",
                                  {
                                    key: 2,
                                    class: "chat-footer",
                                    style: (0, n.j5)([
                                      r.ended ? "display: block" : "",
                                    ]),
                                  },
                                  [
                                    Ae,
                                    (0, o._)(
                                      "button",
                                      {
                                        onClick:
                                          t[6] ||
                                          (t[6] = (t) =>
                                            e.$emit("createNewConvo")),
                                        class: "start",
                                      },
                                      " Start Conversation "
                                    ),
                                  ],
                                  4
                                ))
                              : ((0, o.wg)(),
                                (0, o.iD)("div", $e, [
                                  r.automated
                                    ? (0, o.kq)("", !0)
                                    : ((0, o.wg)(),
                                      (0, o.iD)(
                                        "div",
                                        {
                                          key: 0,
                                          class: "chat-footer",
                                          style: (0, n.j5)([
                                            r.ended ? "display: block" : "",
                                          ]),
                                        },
                                        [
                                          (0, o.wy)(
                                            (0, o._)(
                                              "textarea",
                                              {
                                                rows: "1",
                                                ref: "message",
                                                disabled: r.automated,
                                                "onUpdate:modelValue":
                                                  t[1] ||
                                                  (t[1] = (e) =>
                                                    (r.newMessage = e)),
                                                onKeyup: [
                                                  t[2] ||
                                                    (t[2] = (0, a.D2)(
                                                      (...e) =>
                                                        c.sendMessage &&
                                                        c.sendMessage(...e),
                                                      ["enter"]
                                                    )),
                                                  t[4] ||
                                                    (t[4] = (...e) =>
                                                      c.onTyping &&
                                                      c.onTyping(...e)),
                                                ],
                                                onKeydown:
                                                  t[3] ||
                                                  (t[3] = (0, a.D2)(
                                                    (0, a.iM)(
                                                      (...e) =>
                                                        c.insertNewLine &&
                                                        c.insertNewLine(...e),
                                                      ["shift", "prevent"]
                                                    ),
                                                    ["enter"]
                                                  )),
                                                type: "text",
                                                placeholder:
                                                  "Type a message...",
                                                style: {
                                                  "max-height":
                                                    "calc(3 * (1.5em + 2px))",
                                                },
                                              },
                                              null,
                                              40,
                                              Ue
                                            ),
                                            [[a.nr, r.newMessage]]
                                          ),
                                          (0, o._)(
                                            "button",
                                            {
                                              disabled: "" === r.newMessage,
                                              onClick:
                                                t[5] ||
                                                (t[5] = (...e) =>
                                                  c.sendMessage &&
                                                  c.sendMessage(...e)),
                                            },
                                            " Send ",
                                            8,
                                            Le
                                          ),
                                        ],
                                        4
                                      )),
                                ])),
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                  ],
                  512
                ),
                [[a.F8, !r.feedback]]
              ),
              (0, o.wy)(
                (0, o.Wm)(
                  l,
                  {
                    onGetConversationBy: c.getConversationBy,
                    onUpdateConversation: c.updateConversation,
                    conversationId: s.conversationId,
                    onGoBack: t[7] || (t[7] = (e) => (r.feedback = !1)),
                    onGoBackTo: t[8] || (t[8] = (t) => e.$emit("goBackTo")),
                  },
                  null,
                  8,
                  [
                    "onGetConversationBy",
                    "onUpdateConversation",
                    "conversationId",
                  ]
                ),
                [[a.F8, r.feedback]]
              ),
            ])
          );
        }
        var Oe = s.p + "media/incoming.28d84edb.mp3",
          Pe = s.p + "media/outgoing.16ffcd09.mp3";
        const Ee = { ref: "canvas" };
        function qe(e, t, s, a, n, i) {
          return (0, o.wg)(), (0, o.iD)("canvas", Ee, null, 512);
        }
        var We = {
          props: { name: String, size: { type: Number, default: 40 } },
          mounted() {
            const e = this.$refs.canvas,
              t = e.getContext("2d"),
              s = this.size,
              a = s / 2,
              o = "Arial";
            (e.width = s),
              (e.height = s),
              (t.fillStyle = "#ccc"),
              t.fillRect(0, 0, s, s),
              (t.fillStyle = "#fff"),
              (t.textAlign = "center"),
              (t.textBaseline = "middle"),
              (t.font = `${a}px ${o}`),
              t.fillText(this.getNameInitial(), s / 2, s / 2);
          },
          methods: {
            getNameInitial() {
              return this.name ? this.name[0].toUpperCase() : "B";
            },
          },
          watch: {
            name: function (e, t) {
              console.log(e, "there was a chnage");
              const s = this.$refs.canvas,
                a = s.getContext("2d"),
                o = 40,
                n = o / 2,
                i = "Arial";
              (s.width = o),
                (s.height = o),
                (a.fillStyle = "#ccc"),
                a.fillRect(0, 0, o, o),
                (a.fillStyle = "#fff"),
                (a.textAlign = "center"),
                (a.textBaseline = "middle"),
                (a.font = `${n}px ${i}`),
                a.fillText(this.getNameInitial(), o / 2, o / 2);
            },
          },
        };
        const Je = (0, N.Z)(We, [
          ["render", qe],
          ["__scopeId", "data-v-220b3d75"],
        ]);
        var ze = Je,
          Fe = s(6119),
          He = s(6422),
          Ve = s(2013),
          Ke = s(6195);
        const Ze = (e) => (
            (0, o.dD)("data-v-247ad48f"), (e = e()), (0, o.Cn)(), e
          ),
          Ye = { id: "chatview" },
          Ge = { class: "chat-header" },
          Re = Ze(() => (0, o._)("h3", null, "Chatly", -1)),
          Xe = { ref: "chatbody", class: "chat-body", id: "chat-body" },
          Qe = { key: 0, class: "loading-div" },
          et = { class: "d-flex flex-wrap" },
          tt = Ze(() =>
            (0, o._)("h3", null, "Please tell us how was your experience?", -1)
          ),
          st = { class: "emoji" },
          at = { class: "tooltip-value" },
          ot = Ze(() => (0, o._)("div", { class: "chat-footer" }, null, -1));
        function nt(e, t, s, i, r, c) {
          const d = (0, o.up)("ErrorDialog");
          return (
            (0, o.wg)(),
            (0, o.iD)("div", Ye, [
              (0, o.Wm)(
                a.uT,
                { name: "bounce" },
                {
                  default: (0, o.w5)(() => [
                    (0, o._)("div", null, [
                      (0, o._)("div", Ge, [
                        (0, o.Wm)(ge.t, {
                          style: { cursor: "pointer" },
                          onClick: t[0] || (t[0] = (t) => e.$emit("goBack")),
                          start: "",
                          icon: "mdi-arrow-left",
                        }),
                        Re,
                      ]),
                      (0, o._)(
                        "div",
                        Xe,
                        [
                          r.isLoading
                            ? ((0, o.wg)(), (0, o.iD)("div", Qe))
                            : (0, o.kq)("", !0),
                          (0, o._)("div", et, [
                            (0, o.Wm)(
                              He.O,
                              { ref: "form" },
                              {
                                default: (0, o.w5)(() => [
                                  tt,
                                  (0, o.Wm)(
                                    Fe.f,
                                    {
                                      modelValue: r.selectedEmoji,
                                      "onUpdate:modelValue":
                                        t[1] ||
                                        (t[1] = (e) => (r.selectedEmoji = e)),
                                      mandatory: "",
                                    },
                                    {
                                      default: (0, o.w5)(() => [
                                        ((0, o.wg)(!0),
                                        (0, o.iD)(
                                          o.HY,
                                          null,
                                          (0, o.Ko)(
                                            r.emojis,
                                            (e) => (
                                              (0, o.wg)(),
                                              (0, o.j4)(
                                                z.T,
                                                {
                                                  key: e.value,
                                                  value: e.value,
                                                  class: "ma-2 custom-btn",
                                                },
                                                {
                                                  default: (0, o.w5)(() => [
                                                    (0, o._)(
                                                      "span",
                                                      st,
                                                      (0, n.zw)(e.label),
                                                      1
                                                    ),
                                                    (0, o.Wm)(
                                                      Ke.N,
                                                      { top: "" },
                                                      {
                                                        default: (0, o.w5)(
                                                          () => [
                                                            (0, o._)(
                                                              "span",
                                                              at,
                                                              (0, n.zw)(
                                                                e.value
                                                              ),
                                                              1
                                                            ),
                                                          ]
                                                        ),
                                                        _: 2,
                                                      },
                                                      1024
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ["value"]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["modelValue"]
                                  ),
                                  (0, o.Wm)(
                                    Ve.h,
                                    {
                                      modelValue: r.comments,
                                      "onUpdate:modelValue":
                                        t[2] ||
                                        (t[2] = (e) => (r.comments = e)),
                                      label: "Additional Comments",
                                      rules: r.rules.comments,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules"]
                                  ),
                                  (0, o.Wm)(
                                    z.T,
                                    {
                                      color: "blue",
                                      onClick: c.submitFeedback,
                                      disabled: null === r.selectedEmoji,
                                    },
                                    {
                                      default: (0, o.w5)(() => [
                                        (0, o.Uk)("Submit"),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["onClick", "disabled"]
                                  ),
                                ]),
                                _: 1,
                              },
                              512
                            ),
                          ]),
                        ],
                        512
                      ),
                      ot,
                    ]),
                  ]),
                  _: 1,
                }
              ),
              e.showErrorDialog
                ? ((0, o.wg)(),
                  (0, o.j4)(
                    d,
                    {
                      key: 0,
                      error: e.errorMessage,
                      onDismiss: e.hideErrorDialog,
                    },
                    null,
                    8,
                    ["error", "onDismiss"]
                  ))
                : (0, o.kq)("", !0),
            ])
          );
        }
        var it = {
          data() {
            return {
              selectedEmoji: null,
              comments: "",
              isLoading: !1,
              emojis: [
                { value: "bad", label: "😠" },
                { value: "fair", label: "😕" },
                { value: "good", label: "😊" },
                { value: "great", label: "😄" },
              ],
              rules: {
                comments: [
                  (e) => !!e || "Comments are required",
                  (e) =>
                    e.length <= 1e3 ||
                    "Comments must be less than 1000 characters",
                ],
              },
            };
          },
          components: {},
          props: ["conversationId"],
          methods: {
            async updateConversation(e, t) {
              const s = JSON.parse(localStorage.getItem("appState")),
                a = {
                  ...s,
                  conversations: {
                    ...s.conversations,
                    byId: {
                      ...s.conversations.byId,
                      [e]: { ...s.conversations.byId[e], ...t },
                    },
                  },
                };
              console.log(a, "updateing feedback"),
                localStorage.setItem("appState", JSON.stringify(a));
            },
            getConversationBy(e) {
              const t = JSON.parse(localStorage.getItem("appState")),
                s = t.conversations.byId;
              return s.hasOwnProperty(e) ? s[e] : null;
            },
            async submitFeedback() {
              if (this.$refs.form.validate()) {
                await _(this.conversationId, {
                  ended: !0,
                  comment: this.comments,
                  reaction: this.selectedEmoji,
                });
                let e = this.getConversationBy(this.conversationId);
                console.log("the item", e),
                  (e.ended = !0),
                  await this.updateConversation(this.conversationId, e),
                  this.$emit("goBackTo");
              }
            },
          },
          created() {},
        };
        const rt = (0, N.Z)(it, [
          ["render", nt],
          ["__scopeId", "data-v-247ad48f"],
        ]);
        var ct = rt,
          dt = s(4161),
          lt = {
            name: "chatView",
            data() {
              return {
                feedback: !1,
                socket: null,
                automated: !0,
                loading: !1,
                showErrorDialog: !0,
                isLoading: !1,
                errorMessage: "Error Message",
                showChat: !1,
                agent: null,
                ip: "",
                newMessage: "",
                isTyping: !1,
                joined: !1,
                typingMsg: "",
                step: 0,
                messages: [],
                chatTimeout: null,
                chatTimeoutDuration: 3e5,
                chatStartTime: null,
                loaderWidth: 0,
                intervalIds: [],
                showLoader: !1,
                convoEnded: !1,
                isBotEnabled: !0,
                ended: null,
                flow: [
                  {
                    step: 0,
                    next: !0,
                    auto: !0,
                    messages: [
                      {
                        text: "Hi! I'm glad to assist you today. Let's know each other:",
                        user: "bot",
                        type: "text",
                      },
                      {
                        text: "Do you have an order already?",
                        user: "bot",
                        type: "text",
                      },
                      {
                        user: "user",
                        option: [
                          { id: 1, text: "Yes" },
                          { id: 2, text: "No" },
                        ],
                        type: "option",
                      },
                    ],
                  },
                  {
                    step: 1,
                    next: !0,
                    auto: !0,
                    messages: [
                      {
                        text: "Please select what you want to do with the order",
                        user: "bot",
                        type: "text",
                      },
                      {
                        user: "user",
                        option: [
                          { id: 1.1, text: "i want to make a return/swap" },
                          { id: 1.2, text: "I want to know the order status" },
                          { id: 1.3, text: "Others" },
                        ],
                        type: "option",
                      },
                    ],
                  },
                  {
                    step: 1.1,
                    next: "end",
                    auto: !1,
                    messages: [
                      {
                        text: "You can easly Return or swap an order here: <a href='https://site.com/return' target='_blank'>https://site.com/return</a> ",
                        user: "bot",
                        type: "text",
                      },
                    ],
                  },
                  {
                    step: 1.2,
                    next: "end",
                    auto: !1,
                    messages: [
                      {
                        text: "You can track your order here: <a href='https://site.com/tracking' target='_blank'>https://site.com/tracking</a>",
                        user: "bot",
                        type: "text",
                      },
                    ],
                  },
                  {
                    step: 1.3,
                    next: "end",
                    auto: !1,
                    messages: [
                      {
                        text: "Tell us how else can we help?",
                        user: "bot",
                        type: "text",
                      },
                    ],
                  },
                  {
                    step: 2,
                    next: !0,
                    auto: !0,
                    messages: [
                      {
                        text: "What would you like to do?",
                        user: "bot",
                        type: "text",
                      },
                      {
                        user: "user",
                        option: [
                          { id: 2.1, text: "Place a new order" },
                          { id: 2.2, text: "I have a question" },
                          { id: 2.3, text: "Others" },
                        ],
                        type: "option",
                      },
                    ],
                  },
                  {
                    step: 2.1,
                    next: "end",
                    auto: !1,
                    messages: [
                      {
                        text: "What products do you want?",
                        user: "bot",
                        type: "text",
                      },
                    ],
                  },
                  {
                    step: 2.2,
                    next: "end",
                    auto: !1,
                    messages: [
                      {
                        text: "You can ask any question, we are here for you",
                        user: "bot",
                        type: "text",
                      },
                    ],
                  },
                  {
                    step: 2.3,
                    next: "end",
                    auto: !1,
                    messages: [
                      {
                        text: "What other thing do you want us to do for you?",
                        user: "bot",
                        type: "text",
                      },
                    ],
                  },
                ],
                newMessage: "",
              };
            },
            components: { NewImage: ze, feedBack: ct },
            props: [
              "addConversation",
              "user",
              "updateConversation",
              "getConversationBy",
              "botName",
              "createNewConvo",
              "conversationId",
            ],
            methods: {
              insertNewLine(e) {
                if (e.shiftKey) {
                  const t = this.$refs.message,
                    s = t.selectionStart,
                    a = t.selectionEnd,
                    o = this.newMessage;
                  (this.newMessage = `${o.substring(0, s)}\n${o.substring(a)}`),
                    e.preventDefault();
                }
              },
              showFeeback() {
                this.feedback = !0;
              },
              async joinConversation(e) {
                this.ended ||
                  (this.socket.emit("join", { id: e, user: this.user }),
                  console.log(`${this.user} just joined conversation ${e}`),
                  (this.joined = !0));
              },
              async sendMessage() {
                if ("" === this.newMessage) return;
                const e = { text: this.newMessage };
                await this.socket.emit("message", {
                  conversationId: this.conversationId,
                  type: "text",
                  username: this.user,
                  message: e,
                  isUser: !0,
                }),
                  this.socket.emit("typing", {
                    status: !1,
                    user: this.user,
                    id: this.conversationId,
                  }),
                  (this.chatStartTime = Date.now()),
                  localStorage.setItem("chatStarted", !0),
                  localStorage.setItem(
                    `chatStartTime-${this.conversationId}`,
                    this.chatStartTime
                  ),
                  this.resetChatTimeout(),
                  (this.newMessage = "");
              },
              onTyping() {
                this.isTyping ||
                  (this.socket.emit("typing", {
                    status: !0,
                    user: this.user,
                    id: this.conversationId,
                  }),
                  setTimeout(() => {
                    this.socket.emit("typing", {
                      status: !1,
                      user: this.user,
                      id: this.conversationId,
                    });
                  }, 2e3));
              },
              checkPrev(e, t) {
                return 0 === t || this.messages[t - 1].user !== e.user;
              },
              checkNxt(e, t) {
                if (0 === t) return !0;
                const s = this.messages.length - 1,
                  a = this.messages.indexOf(e);
                return a === s || this.messages[t + 1].user !== e.user;
              },
              async newMessageSound(e) {
                var t = new Audio(e);
                t.play();
              },
              async clickSelect(e, t) {
                this.newMessageSound(Pe),
                  (this.loading = !0),
                  this.messages.pop();
                const s = { text: e.text, user: "user", type: "text" };
                (this.messages = [...this.messages, s]),
                  (this.loading = !0),
                  await this.checkCase(this.step, !0, e, !1),
                  await this.checkCase(this.step, !1, e, !1),
                  this.newMessageSound(Oe),
                  this.chatToChatbottom(),
                  (this.loading = !1);
              },
              async chatToChatbottom() {
                document.querySelector("#chat-body") &&
                  (document.querySelector("#chat-body").scrollTop =
                    document.querySelector("#chat-body").scrollHeight);
              },
              async saveMessage(e, t) {
                const s = {
                  text: e.text,
                  type: e.type,
                  user: e.user,
                  isUser: !0,
                };
                await x(s, t);
              },
              requestAssistance() {
                if (!this.agent && !this.ended) {
                  const e = {
                    conversationId: this.conversationId,
                    userId: this.user,
                  };
                  this.socket.emit("requestAssistance", e);
                  localStorage.getItem("chatStarted");
                  this.showLoader = !0;
                }
              },
              async stopAutomate() {
                this.joinConversation(this.conversationId),
                  (this.automated = !1),
                  this.chatToChatbottom(),
                  this.requestAssistance();
              },
              isSocketInConversation() {
                const e = `conversation:${this.conversationId}`;
                this.socket.emit("isSocketInConversation", e, (e) => {
                  e
                    ? console.log(
                        `Socket has joined conversation ${this.conversationId}`
                      )
                    : (console.log(
                        `Socket has not joined conversation ${this.conversationId}`
                      ),
                      this.joinConversation(this.conversationId));
                });
              },
              async checkCase(e, t, s, a) {
                let o = this.flow.find((t) => t.step === e);
                if ("end" === o.next && a) {
                  if (!o.auto) {
                    this.isSocketInConversation(), (this.automated = !1);
                  }
                  this.chatToChatbottom();
                } else {
                  if (t) {
                    o.messages.pop();
                    for (let t = 0; t < o.messages.length; t++) {
                      const e = o.messages[t];
                      (e.isUser = !0),
                        await this.saveMessage(e, this.conversationId);
                    }
                    let e = {
                      text: s.text,
                      user: this.user,
                      type: "text",
                      isUser: !0,
                    };
                    await this.saveMessage(e, this.conversationId),
                      await C(this.conversationId, s.id),
                      (this.step = s.id);
                  }
                  if (!t) {
                    for (let e = 0; e < o.messages.length; e++) {
                      const t = o.messages[e];
                      (t.isUser = !0),
                        this.messages.push(t),
                        ("end" !== o.next && o.auto) ||
                          (await this.saveMessage(t, this.conversationId));
                    }
                    "end" !== o.next ||
                      o.auto ||
                      (await this.stopAutomate(),
                      await this.sendToBot("point 3"));
                  }
                }
              },
              async lastMessageIsBot() {
                const e = this.messages[this.messages.length - 1];
                return (
                  "bot" === e.user && console.log(e, "last message"),
                  e && "bot" === e.user
                );
              },
              startChatTimeout() {
                const e = Date.now() - this.chatStartTime,
                  t = Math.max(this.chatTimeoutDuration - e, 0);
                this.chatTimeout = setTimeout(() => {
                  this.ended || this.socket.emit("timeUp", this.conversationId),
                    this.expiredConvId(!0);
                }, t);
                const s = setInterval(() => {
                  const e = Date.now() - this.chatStartTime,
                    t = Math.max(this.chatTimeoutDuration - e, 0),
                    s = (t / this.chatTimeoutDuration) * 100;
                  this.loaderWidth = 100 - s;
                }, 1e3);
                this.intervalIds.push(s);
              },
              resetChatTimeout() {
                clearTimeout(this.chatTimeout),
                  this.chatStartTime || (this.chatStartTime = Date.now()),
                  this.startChatTimeout(),
                  clearInterval(this.intervalIds.pop()),
                  (this.loaderWidth = 0);
              },
              getConversationById(e) {
                const t = JSON.parse(localStorage.getItem("appState")) || {},
                  s = t.conversations?.byId[e] || null;
                return s;
              },
              getConversationIdFromLocalStorage() {
                const e = localStorage.getItem("conversationId");
                if (e) {
                  const t = e.split("-")[0];
                  return t;
                }
                return null;
              },
              saveConversationId(e) {
                const t = Date.now(),
                  s = { fetchState: "partial", read: !0, expire: t };
                this.addConversation(e, s);
              },
              isConversationIdExpired() {
                const e = this.conversationId || this.conversationId,
                  t = this.getConversationById(e).expire;
                if (e) {
                  const e = parseInt(t),
                    s = Date.now(),
                    a = 6048e5;
                  return s - e > a;
                }
                return !0;
              },
              async expiredConvId(e) {
                this.isConversationIdExpired();
              },
              async getConversationId() {
                let e = this.conversationId || null;
                return null === e && this.$router.push({ name: "home" }), e;
              },
              capitalizeName(e) {
                return (
                  console.log(e, "the name"),
                  e.charAt(0).toUpperCase() + e.slice(1)
                );
              },
              iniStartTime() {
                (this.chatStartTime = localStorage.getItem(
                  `chatStartTime-${this.conversationId}`
                )),
                  this.chatStartTime &&
                    ((this.showLoader = !0), this.startChatTimeout()),
                  this.chatStartTime ||
                    ((this.chatStartTime = Date.now()),
                    localStorage.setItem(
                      `chatStartTime-${this.conversationId}`,
                      this.chatStartTime
                    ));
              },
              async updateConversation(e, t) {
                const s = JSON.parse(localStorage.getItem("appState")),
                  a = {
                    ...s,
                    conversations: {
                      ...s.conversations,
                      byId: {
                        ...s.conversations.byId,
                        [e]: { ...s.conversations.byId[e], ...t },
                      },
                    },
                  };
                console.log(a, "updateing feedback"),
                  localStorage.setItem("appState", JSON.stringify(a));
              },
              getConversationBy(e) {
                const t = JSON.parse(localStorage.getItem("appState")),
                  s = t.conversations.byId;
                return s.hasOwnProperty(e) ? s[e] : null;
              },
              async sendToBot(e) {
                console.log("joshijax", e),
                  (this.sending = !0),
                  (this.isTyping = !0);
                let t = this.messages.map((e) => "\n" + e.text),
                  s = await this.lastMessageIsBot();
                if (s || this.automated)
                  return (this.sending = !1), void (this.isTyping = !1);
                let a = " \nhello\n " + t.join("");
                console.log(a, "TEXT", t), (this.inputText = "");
                try {
                  console.log(a, "TEXT2");
                  const e = await (0, dt.Z)({
                    method: "post",
                    url: "http://127.0.0.1:8000/answer-me/",
                    data: { prompt: a },
                  });
                  console.log("JOSHIJAX", typeof e.data.response),
                    await this.socket.emit("message", {
                      conversationId: this.conversationId,
                      type: "text",
                      username: "bot",
                      message: { text: e.data.response },
                      isUser: !1,
                    }),
                    (this.isTyping = !1);
                } catch (o) {
                  console.error(o), (this.isTyping = !1);
                }
                this.sending = !1;
              },
              messageEndsWithGoodbye(e) {
                if (!e) return !1;
                const t = [
                    "goodbye",
                    "bye",
                    "farewell",
                    "see you",
                    "take care",
                    "have a nice",
                    "later",
                  ],
                  s = [
                    /\b(thanks|thank you)\b/gi,
                    /\b(good night|night)\b/gi,
                    /\b(talk to you|chat with you)\b/gi,
                    /\b(see you|cu|ttyl|ttys)\b/gi,
                    /\b(be safe)\b/gi,
                    /\b(have a great|have a nice)\b/gi,
                    /\b(take care)\b/gi,
                    /\b(sleep well)\b/gi,
                    /\b(catch you later|laters)\b/gi,
                  ];
                for (const a of t) if (e.toLowerCase().includes(a)) return !0;
                for (const a of s) if (a.test(e)) return !0;
                return !1;
              },
              renderMessage(e) {
                const t = /(https?|ftp):\/\/[^\s]+/gi;
                return (
                  this.isLink(e) &&
                    (e = e.replace(t, '<a href="$&" target="_blank">$&</a>')),
                  e
                );
              },
              isLink(e) {
                const t = /^(?!.*?<a\s).*?(https?|ftp):\/\/[^\s]+.*$/i;
                return t.test(e);
              },
              async iniChat() {
                console.log("joshijaxmsg", this.botName), (this.isLoading = !0);
                let e = {};
                if (
                  ((e = await I(this.conversationId)),
                  (this.agent = e.agent),
                  (this.messages = await T(this.conversationId)),
                  (this.step = e.step),
                  await this.expiredConvId(!1),
                  this.chatToChatbottom(),
                  this.iniStartTime(),
                  (this.isLoading = !1),
                  e.hasOwnProperty("ended"))
                ) {
                  this.ended = e.ended;
                  let t = this.getConversationBy(this.conversationId);
                  (t.ended = e.ended),
                    await this.updateConversation(this.conversationId, t);
                } else this.ended = !1;
                if (
                  (await this.checkCase(this.step, !1, null, !0),
                  !this.ended && this.isBotEnabled && !this.automated)
                ) {
                  let e = await this.lastMessageIsBot();
                  e || this.sendToBot("point 2");
                }
              },
            },
            async created() {
              console.log("botName 2", this.botName),
                (this.socket = (0, ue.ZP)("http://localhost:3000/")),
                this.socket.on("connect", () => {
                  console.log("Connected to server"),
                    this.socket.emit("userType", "customer");
                }),
                this.socket.on("newMessage", async (e) => {
                  if (
                    (console.log(e.user, this.user),
                    e.user === this.user || "user" === e.user)
                  ) {
                    this.user, e.user;
                    let t = { text: e.text, user: e.user, type: "text" };
                    console.log("sent out", t),
                      await this.messages.push(t),
                      await this.chatToChatbottom(),
                      await this.newMessageSound(Pe),
                      this.isBotEnabled && this.sendToBot("point 1");
                  } else
                    console.log("recieved", e),
                      this.messages.push(e),
                      this.chatToChatbottom(),
                      this.newMessageSound(Oe),
                      M(this.conversationId);
                }),
                this.socket.on("joined", async (e) => {
                  console.log(
                    this.user != e.user,
                    this.user,
                    e.user,
                    "the data i need"
                  ),
                    this.user != e.user &&
                      this.agent !== e.user &&
                      (this.messages.push(e), await this.chatToChatbottom());
                }),
                this.socket.on("typing", (e) => {
                  (this.isTyping = e.status),
                    (this.typingMsg = `${e.user} is typing`),
                    this.chatToChatbottom();
                }),
                this.socket.on("requestAccepted", async (e) => {
                  console.log(e, "requestAccepted"), (this.agent = e.userId);
                }),
                await this.iniChat();
            },
            beforeUnmount() {
              this.socket.off();
            },
            watch: {
              messages: {
                handler(e) {
                  const t = e[e.length - 1];
                  t &&
                    this.messageEndsWithGoodbye(t.text) &&
                    null !== this.ended &&
                    !this.ended &&
                    setTimeout(() => {
                      this.showFeeback();
                    }, 3e3);
                },
                deep: !0,
              },
              $route: {
                async handler(e, t) {
                  await this.iniChat();
                },
                immediate: !0,
              },
            },
            computed: {
              displayAgent() {
                return this.agent || "bot";
              },
            },
          };
        const ht = (0, N.Z)(lt, [["render", Be]]);
        var ut = ht,
          gt = {
            data() {
              return {
                socketMainpage: null,
                chatActive: !1,
                isLoading: !1,
                conversations: [],
                showingConvo: !1,
                conversationId: "",
              };
            },
            props: ["showPop", "addConversation", "user", "botName"],
            components: { SingleChat: he, test: ut },
            methods: {
              show(e) {
                (this.conversationId = ""),
                  (this.conversationId = e),
                  (this.showingConvo = !0);
              },
              async goBack() {
                (this.showingConvo = !1),
                  await this.init(),
                  this.$forceUpdate();
              },
              async goBackTo() {
                (this.showingConvo = !1),
                  await this.init(),
                  this.$forceUpdate();
              },
              updateUnreadMsg() {
                this.$emit("updateUnreadMsg");
              },
              async saveConversationId(e) {
                const t = Date.now(),
                  s = { fetchState: "partial", read: !0, expire: t, ended: !1 };
                this.addConversation(e, s);
              },
              handleNewMessage(e) {
                console.log(e.createdAt, "time check");
                const t = this.conversations.findIndex(
                  (t) => t.conversationId === e.conversationId
                );
                if (t > -1) {
                  const s = this.conversations[t];
                  (s.text = e.text),
                    (s.userNewmessage = !0),
                    (s.createdAt = e.createdAt),
                    this.conversations.splice(t, 1, s);
                }
              },
              async getAllInfo(e) {
                const t = await S(e);
                let s,
                  a = (await t.parentData.userNewmessage) || !1,
                  o = await t.lastChatData;
                return (
                  null === t.lastChatData &&
                    (o = {
                      text: "hello message",
                      user: "Bot",
                      createdAt: w.EK.now(),
                    }),
                  (s =
                    !!t.parentData.hasOwnProperty("ended") &&
                    t.parentData.ended),
                  {
                    conversationId: e,
                    text: o.text,
                    user: o.user,
                    agent: t.parentData.agent,
                    ended: s,
                    userNewmessage: a,
                    createdAt: o.createdAt,
                  }
                );
              },
              async createNewConvo() {
                this.isLoading = !0;
                const e = JSON.parse(localStorage.getItem("appState")),
                  t = e.conversations.byId,
                  s = Object.keys(t).pop(),
                  a = Object.values(t).pop(),
                  o = !a || a.ended;
                if ((console.log("Last conversation ended:", o, a, s), o)) {
                  this.isLoading = !0;
                  let e = await k(this.user);
                  console.log(e),
                    await this.saveConversationId(e),
                    (this.isLoading = !1),
                    this.show(e);
                } else this.show(s), (this.isLoading = !1);
              },
              isConversationIdExpired() {
                const e = localStorage.getItem("conversationId");
                if (e) {
                  const t = parseInt(e.split("-")[1]),
                    s = Date.now(),
                    a = 6048e5;
                  return s - t > a;
                }
                return !0;
              },
              async init() {
                const e = JSON.parse(localStorage.getItem("appState")),
                  t = e.conversations.byId,
                  s = [];
                for (const n in t) {
                  const e = { ...t[n], id: n };
                  s.push(e);
                }
                const a = s.reverse(),
                  o = a.slice(0, 3);
                console.log(o, "data i want");
                for (let n = 0; n < o.length; n++) {
                  const e = o[n];
                  let t = await this.getAllInfo(e.id);
                  const s = this.conversations.findIndex(
                    (e) => e.conversationId === t.conversationId
                  );
                  -1 !== s
                    ? (this.conversations[s] = t)
                    : this.conversations.push(t);
                }
                o.length > 0 &&
                  this.socketMainpage.emit("join", {
                    id: o[0].id,
                    user: this.user,
                  }),
                  (this.isLoading = !1);
              },
            },
            async created() {
              (this.isLoading = !0),
                (this.socketMainpage = (0, ue.ZP)("http://localhost:3000/")),
                this.socketMainpage.on("connect", () => {
                  console.log("Connected to server");
                }),
                this.socketMainpage.on("newMessage", (e) => {
                  (e.createdAt = w.EK.now()),
                    console.log(e.conversationId, this.user, "the new message"),
                    this.handleNewMessage(e);
                }),
                await this.init();
            },
            computed: {
              sortedConversations() {
                return this.conversations
                  .slice()
                  .sort((e, t) => t.createdAt.seconds - e.createdAt.seconds);
              },
              getCount() {
                const e = this.conversations.reduce(
                  (e, t) => e + (t.ended ? 0 : 1),
                  0
                );
                return console.log("computed", e), e > 0;
              },
            },
          };
        const pt = (0, N.Z)(gt, [["render", X]]);
        var mt = pt,
          vt = {
            data() {
              return {
                showChat: !1,
                showPop: !1,
                user: "",
                ip: "",
                stateval: {},
                unreadMsg: 0,
                botName: "Alex",
                isLoading: !1,
              };
            },
            components: { chatmaintest: mt },
            methods: {
              updateUnreadMsg(e) {
                (this.unreadMsg = this.unreadMsg + e),
                  console.log(e, "updating unread messge", this.unreadMsg);
              },
              async checkFirst() {
                let e = localStorage.getItem("appState");
                if (null === e) {
                  let e = {
                    user: { role: "lead", locale: "en", hasConversations: !0 },
                    conversations: { byId: {} },
                  };
                  localStorage.setItem("appState", JSON.stringify(e));
                }
              },
              async updateState(e) {
                (this.stateval = e),
                  localStorage.setItem("appState", JSON.stringify(e));
              },
              addConversation(e, t) {
                const s = {
                  ...this.stateval,
                  conversations: {
                    ...this.stateval.conversations,
                    byId: { ...this.stateval.conversations.byId, [e]: t },
                  },
                };
                this.updateState(s);
              },
              updateConversation(e, t) {
                const s = {
                  ...this.stateval,
                  conversations: {
                    ...this.stateval.conversations,
                    byId: {
                      ...this.stateval.conversations.byId,
                      [e]: { ...this.stateval.conversations.byId[e], ...t },
                    },
                  },
                };
                this.updateState(s);
              },
              getConversationBy(e) {
                const t = JSON.parse(localStorage.getItem("appState")),
                  s = t.conversations.byId;
                return s.hasOwnProperty(e) ? s[e] : null;
              },
              removeConversation(e) {
                const { [e]: t, ...s } = this.stateval.conversations.byId,
                  a = {
                    ...this.stateval,
                    conversations: { ...this.stateval.conversations, byId: s },
                  };
                this.updateState(a);
              },
              async get_creat_user() {
                const e = localStorage.getItem("userId");
                e
                  ? (this.user = e)
                  : (await fetch("https://api.ipify.org?format=json")
                      .then((e) => e.json())
                      .then(({ ip: e }) => {
                        (this.user = e.split(".").join("")), (this.ip = e);
                      }),
                    localStorage.setItem("userId", this.user));
              },
              async saveConversationId(e) {
                const t = Date.now(),
                  s = { fetchState: "partial", read: !0, expire: t, ended: !1 };
                this.addConversation(e, s);
              },
              async createNewConvo() {
                this.isLoading = !0;
                const e = JSON.parse(localStorage.getItem("appState")),
                  t = e.conversations.byId,
                  s = Object.keys(t).pop(),
                  a = Object.values(t).pop(),
                  o = !a || a.ended;
                if ((console.log("Last conversation ended:", o, a, s), o)) {
                  this.isLoading = !0;
                  let e = await k(this.user);
                  console.log(e),
                    await this.saveConversationId(e),
                    (this.isLoading = !1),
                    this.$router.push({
                      name: "conversation",
                      params: { id: e },
                    });
                } else
                  this.$router.push({
                    name: "conversation",
                    params: { id: s },
                  }),
                    (this.isLoading = !1);
              },
            },
            async mounted() {
              this.checkFirst();
              const e =
                JSON.parse(localStorage.getItem("appState")) || this.stateval;
              await this.updateState(e), this.removeConversation("undefined");
            },
            async created() {
              await this.checkFirst(), await this.get_creat_user();
              const e = JSON.parse(localStorage.getItem("appState")) || {};
              "conversation" === e.router.location.name &&
                (console.log("here hello"),
                (this.showPop = !0),
                this.$router.push(e.router.location.pathname));
            },
          };
        const wt = (0, N.Z)(vt, [["render", J]]);
        var yt = wt,
          bt = (s(9773), s(8957)),
          ft = (0, bt.Rd)(),
          kt = (s(2389), s(2483));
        const Ct = { id: "chatview" },
          xt = (0, o._)(
            "div",
            { class: "chat-header" },
            [(0, o._)("h3", null, "Chatly")],
            -1
          ),
          It = { ref: "chatbody", class: "chat-body", id: "chat-body" },
          St = { key: 0, class: "loading-div" },
          _t = { class: "message-box" },
          Tt = { class: "chat-footer" };
        function Mt(e, t, s, n, i, r) {
          const c = (0, o.up)("SingleChat");
          return (
            (0, o.wg)(),
            (0, o.iD)("div", null, [
              (0, o._)("div", Ct, [
                (0, o.Wm)(
                  a.uT,
                  { name: "bounce" },
                  {
                    default: (0, o.w5)(() => [
                      (0, o._)("div", null, [
                        xt,
                        (0, o._)(
                          "div",
                          It,
                          [
                            i.isLoading
                              ? ((0, o.wg)(), (0, o.iD)("div", St))
                              : (0, o.kq)("", !0),
                            (0, o._)("div", _t, [
                              (0, o.Wm)(
                                F.i,
                                { "item-props": "", lines: "two" },
                                {
                                  default: (0, o.w5)(() => [
                                    ((0, o.wg)(!0),
                                    (0, o.iD)(
                                      o.HY,
                                      null,
                                      (0, o.Ko)(
                                        r.sortedConversations,
                                        (e) => (
                                          (0, o.wg)(),
                                          (0, o.j4)(
                                            c,
                                            {
                                              convo: e,
                                              key: e.text,
                                              agent: e.agent,
                                              user: s.user,
                                              onUpdateUnreadMsg:
                                                r.updateUnreadMsg,
                                              class: "chat-transition",
                                            },
                                            null,
                                            8,
                                            [
                                              "convo",
                                              "agent",
                                              "user",
                                              "onUpdateUnreadMsg",
                                            ]
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                          ],
                          512
                        ),
                        (0, o._)("div", Tt, [
                          r.getCount || i.isLoading
                            ? (0, o.kq)("", !0)
                            : ((0, o.wg)(),
                              (0, o.j4)(
                                z.T,
                                {
                                  key: 0,
                                  onClick:
                                    t[0] ||
                                    (t[0] = (t) => e.$emit("createNewConvo")),
                                  class: "start",
                                  "aria-details": r.getCount,
                                  getCount: "",
                                },
                                {
                                  default: (0, o.w5)(() => [
                                    (0, o.Uk)(" Start Conversation "),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["aria-details"]
                              )),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ])
          );
        }
        const Dt = { key: 0 },
          Nt = { class: "text-primary" };
        function jt(e, t, s, a, i, r) {
          return e.loaded
            ? ((0, o.wg)(),
              (0, o.iD)("div", Dt, [
                (0, o.Wm)(
                  te.l,
                  {
                    title: s.convo.text,
                    subtitle: s.convo.subtitle,
                    to: `/conversation/${s.convo.conversationId}`,
                    "prepend-avatar": r.imageSrc,
                    "append-icon": "",
                  },
                  {
                    append: (0, o.w5)(() => [
                      s.convo.userNewmessage
                        ? ((0, o.wg)(),
                          (0, o.j4)(Q.G, { key: 0, color: "green" }))
                        : (0, o.kq)("", !0),
                    ]),
                    subtitle: (0, o.w5)(({}) => [
                      (0, o._)(
                        "span",
                        Nt,
                        (0, n.zw)(
                          r.capitalizeName(
                            "bot" === s.convo.user
                              ? "Alex"
                              : s.convo.user === s.user
                              ? "you"
                              : s.agent || "bot"
                          )
                        ),
                        1
                      ),
                      (0, o.Uk)(
                        " — " + (0, n.zw)(r.timeAgo(s.convo.createdAt)),
                        1
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["title", "subtitle", "to", "prepend-avatar"]
                ),
                (0, o.Wm)(ee.J, { inset: "" }),
              ]))
            : (0, o.kq)("", !0);
        }
        ie().extend(ce());
        var $t = {
          data: () => ({ loaded: !1 }),
          props: ["convo", "agent", "user"],
          components: {},
          methods: {
            capitalizeName(e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            },
            timeAgo(e) {
              const t = ie()(),
                s = ie()(e.toDate());
              let a = s.diff(t, "second"),
                o = " ago";
              if (((a = Math.abs(a)), a < 60)) return "Just now";
              if (a < 3600) {
                let e = Math.floor(a / 60);
                return `${e} ${e > 1 ? "minutes" : "minute"}${o}`;
              }
              if (a < 86400) {
                let e = Math.floor(a / 3600);
                return `${e} ${e > 1 ? "hours" : "hour"}${o}`;
              }
              {
                let e = Math.floor(a / 86400);
                return `${e} ${e > 1 ? "days" : "day"}${o}`;
              }
            },
          },
          async created() {
            console.log(this.convo, "the convovov"), (this.loaded = !0);
          },
          computed: {
            displayAgent() {
              return "bot" === this.convo.user ? "Alex" : this.agent || "bot";
            },
            imageSrc() {
              const e = `https://ui-avatars.com/api/?name=${this.displayAgent}&size=40&background=%23ccc&color=fff&color=fff&rounded=true&font-size=0.5`;
              return e;
            },
          },
        };
        const Ut = (0, N.Z)($t, [
          ["render", jt],
          ["__scopeId", "data-v-7bbf30ff"],
        ]);
        var Lt = Ut,
          At = {
            data() {
              return {
                socketMainpage: null,
                chatActive: !1,
                isLoading: !1,
                conversations: [],
              };
            },
            props: ["showPop", "addConversation", "user", "createNewConvo"],
            components: { SingleChat: Lt },
            methods: {
              show() {
                this.$emit("showPoper");
              },
              updateUnreadMsg() {
                this.$emit("updateUnreadMsg", 1);
              },
              async saveConversationId(e) {
                const t = Date.now(),
                  s = { fetchState: "partial", read: !0, expire: t, ended: !1 };
                this.addConversation(e, s);
              },
              handleNewMessage(e) {
                console.log(e.createdAt, "time check");
                const t = this.conversations.findIndex(
                  (t) => t.conversationId === e.conversationId
                );
                if (t > -1) {
                  const s = this.conversations[t];
                  (s.text = e.text),
                    (s.userNewmessage = !0),
                    (s.createdAt = e.createdAt),
                    this.conversations.splice(t, 1, s);
                }
              },
              async getAllInfo(e) {
                const t = await S(e);
                let s,
                  a = (await t.parentData.userNewmessage) || !1,
                  o = await t.lastChatData;
                return (
                  null === t.lastChatData &&
                    (o = {
                      text: "hello message",
                      user: "Bot",
                      createdAt: w.EK.now(),
                    }),
                  (s =
                    !!t.parentData.hasOwnProperty("ended") &&
                    t.parentData.ended),
                  {
                    conversationId: e,
                    text: o.text,
                    user: o.user,
                    agent: t.parentData.agent,
                    ended: s,
                    userNewmessage: a,
                    createdAt: o.createdAt,
                  }
                );
              },
              isConversationIdExpired() {
                const e = localStorage.getItem("conversationId");
                if (e) {
                  const t = parseInt(e.split("-")[1]),
                    s = Date.now(),
                    a = 6048e5;
                  return s - t > a;
                }
                return !0;
              },
            },
            async created() {
              (this.isLoading = !0),
                (this.socketMainpage = (0, ue.ZP)("http://localhost:3000/")),
                this.socketMainpage.on("connect", () => {
                  console.log("Connected to server");
                }),
                this.socketMainpage.on("newMessage", (e) => {
                  (e.createdAt = w.EK.now()),
                    console.log(e.conversationId, this.user, "the new message"),
                    this.handleNewMessage(e);
                });
              const e = JSON.parse(localStorage.getItem("appState")),
                t = e.conversations.byId,
                s = [];
              for (const n in t) {
                const e = { ...t[n], id: n };
                s.push(e);
              }
              const a = s.reverse(),
                o = a.slice(0, 3);
              console.log(o, "data i want");
              for (let n = 0; n < o.length; n++) {
                const e = o[n];
                let t = await this.getAllInfo(e.id);
                this.conversations = [...this.conversations, t];
              }
              o.length > 0 &&
                this.socketMainpage.emit("join", {
                  id: o[0].id,
                  user: this.user,
                }),
                console.log(this.conversations, "data i want"),
                (this.isLoading = !1);
            },
            computed: {
              sortedConversations() {
                return this.conversations
                  .slice()
                  .sort((e, t) => t.createdAt.seconds - e.createdAt.seconds);
              },
              getCount() {
                const e = this.conversations.reduce(
                  (e, t) => e + (t.ended ? 0 : 1),
                  0
                );
                return console.log("computed", e), e > 0;
              },
            },
          };
        const Bt = (0, N.Z)(At, [["render", Mt]]);
        var Ot = Bt;
        const Pt = { id: "chatview" },
          Et = { class: "chat-header" },
          qt = { ref: "chatbody", class: "chat-body", id: "chat-body" },
          Wt = { key: 0, class: "loading-div" },
          Jt = { class: "message-box" },
          zt = ["value"],
          Ft = { key: 0 },
          Ht = { class: "name" },
          Vt = ["innerHTML"],
          Kt = { key: 1 },
          Zt = ["name", "value", "id"],
          Yt = ["for", "onClick"],
          Gt = { key: 2, class: "just-joined" },
          Rt = { class: "join-message" },
          Xt = { style: { "text-align": "left", "margin-bottom": "15px" } },
          Qt = { key: 0, id: "loading-bubble" },
          es = (0, o._)(
            "div",
            { class: "spinner" },
            [
              (0, o._)("div", { class: "bounce1" }),
              (0, o._)("div", { class: "bounce2" }),
              (0, o._)("div", { class: "bounce3" }),
            ],
            -1
          ),
          ts = [es],
          ss = { key: 1 },
          as = ["disabled"],
          os = ["disabled"],
          ns = (0, o._)(
            "div",
            {
              style: {
                margin: "'24px auto 12px'",
                "text-align": "'center'",
                "font-size": "'14px'",
                "line-height": "'21px'",
                "padding-top": "'0px'",
                color: "'rgb(115, 115, 115)'",
              },
            },
            " Your conversation has ended ",
            -1
          );
        function is(e, t, s, i, r, c) {
          const d = (0, o.up)("NewImage"),
            l = (0, o.up)("feedBack");
          return (
            (0, o.wg)(),
            (0, o.iD)("div", null, [
              (0, o.wy)(
                (0, o._)(
                  "div",
                  Pt,
                  [
                    (0, o.Wm)(
                      a.uT,
                      { name: "bounce" },
                      {
                        default: (0, o.w5)(() => [
                          (0, o._)("div", null, [
                            (0, o._)("div", Et, [
                              (0, o.Wm)(ge.t, {
                                style: { cursor: "pointer" },
                                onClick:
                                  t[0] ||
                                  (t[0] = (t) =>
                                    e.$router.push({ name: "home" })),
                                start: "",
                                icon: "mdi-arrow-left",
                              }),
                              (0, o._)(
                                "h3",
                                null,
                                "Chatly " + (0, n.zw)(r.agent),
                                1
                              ),
                              null !== r.agent
                                ? ((0, o.wg)(),
                                  (0, o.j4)(
                                    d,
                                    { key: 0, name: s.botName, size: "50" },
                                    null,
                                    8,
                                    ["name"]
                                  ))
                                : (0, o.kq)("", !0),
                              r.ended || null === r.ended
                                ? (0, o.kq)("", !0)
                                : ((0, o.wg)(),
                                  (0, o.j4)(
                                    z.T,
                                    {
                                      key: 1,
                                      color: "green",
                                      onClick: c.showFeeback,
                                    },
                                    {
                                      default: (0, o.w5)(() => [
                                        (0, o.Uk)("end Convo"),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["onClick"]
                                  )),
                            ]),
                            r.showLoader
                              ? ((0, o.wg)(),
                                (0, o.iD)(
                                  "div",
                                  {
                                    key: 0,
                                    class: "line-loader",
                                    style: (0, n.j5)({
                                      width: r.loaderWidth + "%",
                                    }),
                                  },
                                  null,
                                  4
                                ))
                              : (0, o.kq)("", !0),
                            (0, o._)(
                              "div",
                              qt,
                              [
                                r.isLoading
                                  ? ((0, o.wg)(), (0, o.iD)("div", Wt))
                                  : (0, o.kq)("", !0),
                                (0, o._)("div", Jt, [
                                  ((0, o.wg)(!0),
                                  (0, o.iD)(
                                    o.HY,
                                    null,
                                    (0, o.Ko)(
                                      r.messages,
                                      (e, t) => (
                                        (0, o.wg)(),
                                        (0, o.iD)(
                                          "div",
                                          {
                                            key: t,
                                            value: s.user,
                                            style: (0, n.j5)([
                                              c.checkNxt(e, t)
                                                ? ""
                                                : "margin-bottom: 6px;",
                                            ]),
                                            class: (0, n.C_)([
                                              e.user === s.user ||
                                              "user" === e.user
                                                ? "message-box__item outgoing"
                                                : "message-box__item incoming",
                                            ]),
                                          },
                                          [
                                            "text" === e.type
                                              ? ((0, o.wg)(),
                                                (0, o.iD)("div", Ft, [
                                                  (0, o.wy)(
                                                    (0, o._)(
                                                      "div",
                                                      Ht,
                                                      [
                                                        e.user !== s.user
                                                          ? ((0, o.wg)(),
                                                            (0, o.j4)(
                                                              d,
                                                              {
                                                                key: 0,
                                                                name:
                                                                  "bot" ==
                                                                  e.user
                                                                    ? s.botName
                                                                    : e.user,
                                                                size: 20,
                                                              },
                                                              null,
                                                              8,
                                                              ["name"]
                                                            ))
                                                          : (0, o.kq)("", !0),
                                                        (0, o.Uk)(
                                                          " " +
                                                            (0, n.zw)(
                                                              c.capitalizeName(
                                                                "bot" == e.user
                                                                  ? s.botName
                                                                  : e.user ===
                                                                    s.user
                                                                  ? "you"
                                                                  : e.user
                                                              )
                                                            ),
                                                          1
                                                        ),
                                                      ],
                                                      512
                                                    ),
                                                    [[a.F8, c.checkPrev(e, t)]]
                                                  ),
                                                  (0, o._)(
                                                    "div",
                                                    {
                                                      class: (0, n.C_)([
                                                        e.user === s.user ||
                                                        "user" === e.user
                                                          ? "user-text"
                                                          : "bot-text",
                                                      ]),
                                                    },
                                                    [
                                                      (0, o._)(
                                                        "span",
                                                        {
                                                          innerHTML:
                                                            c.renderMessage(
                                                              e.text
                                                            ),
                                                        },
                                                        null,
                                                        8,
                                                        Vt
                                                      ),
                                                    ],
                                                    2
                                                  ),
                                                ]))
                                              : "option" === e.type
                                              ? ((0, o.wg)(),
                                                (0, o.iD)("div", Kt, [
                                                  ((0, o.wg)(!0),
                                                  (0, o.iD)(
                                                    o.HY,
                                                    null,
                                                    (0, o.Ko)(
                                                      e.option,
                                                      (t, s) => (
                                                        (0, o.wg)(),
                                                        (0, o.iD)(
                                                          "div",
                                                          {
                                                            key: s,
                                                            style: {
                                                              "margin-bottom":
                                                                "5px",
                                                            },
                                                          },
                                                          [
                                                            (0, o._)(
                                                              "input",
                                                              {
                                                                type: "checkbox",
                                                                name: `name${s}`,
                                                                value: t.text,
                                                                id: s,
                                                              },
                                                              null,
                                                              8,
                                                              Zt
                                                            ),
                                                            (0, o._)(
                                                              "label",
                                                              {
                                                                for: s,
                                                                class:
                                                                  "md-chip md-chip-clickable md-chip-hover",
                                                                onClick: (s) =>
                                                                  c.clickSelect(
                                                                    t,
                                                                    e
                                                                  ),
                                                              },
                                                              (0, n.zw)(t.text),
                                                              9,
                                                              Yt
                                                            ),
                                                          ]
                                                        )
                                                      )
                                                    ),
                                                    128
                                                  )),
                                                ]))
                                              : (0, o.kq)("", !0),
                                            "joined" === e.type
                                              ? ((0, o.wg)(),
                                                (0, o.iD)("div", Gt, [
                                                  (0, o._)(
                                                    "span",
                                                    Rt,
                                                    (0, n.zw)(e.text) +
                                                      " Just joined chat",
                                                    1
                                                  ),
                                                ]))
                                              : (0, o.kq)("", !0),
                                          ],
                                          14,
                                          zt
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                  (0, o._)("div", Xt, [
                                    r.isTyping || r.loading
                                      ? ((0, o.wg)(), (0, o.iD)("div", Qt, ts))
                                      : (0, o.kq)("", !0),
                                  ]),
                                ]),
                              ],
                              512
                            ),
                            r.ended
                              ? ((0, o.wg)(),
                                (0, o.iD)(
                                  "div",
                                  {
                                    key: 2,
                                    class: "chat-footer",
                                    style: (0, n.j5)([
                                      r.ended ? "display: block" : "",
                                    ]),
                                  },
                                  [
                                    ns,
                                    (0, o._)(
                                      "button",
                                      {
                                        onClick:
                                          t[6] ||
                                          (t[6] = (t) =>
                                            e.$emit("createNewConvo")),
                                        class: "start",
                                      },
                                      " Start Conversation "
                                    ),
                                  ],
                                  4
                                ))
                              : ((0, o.wg)(),
                                (0, o.iD)("div", ss, [
                                  r.automated
                                    ? (0, o.kq)("", !0)
                                    : ((0, o.wg)(),
                                      (0, o.iD)(
                                        "div",
                                        {
                                          key: 0,
                                          class: "chat-footer",
                                          style: (0, n.j5)([
                                            r.ended ? "display: block" : "",
                                          ]),
                                        },
                                        [
                                          (0, o.wy)(
                                            (0, o._)(
                                              "textarea",
                                              {
                                                rows: "1",
                                                ref: "message",
                                                disabled: r.automated,
                                                "onUpdate:modelValue":
                                                  t[1] ||
                                                  (t[1] = (e) =>
                                                    (r.newMessage = e)),
                                                onKeyup: [
                                                  t[2] ||
                                                    (t[2] = (0, a.D2)(
                                                      (...e) =>
                                                        c.sendMessage &&
                                                        c.sendMessage(...e),
                                                      ["enter"]
                                                    )),
                                                  t[4] ||
                                                    (t[4] = (...e) =>
                                                      c.onTyping &&
                                                      c.onTyping(...e)),
                                                ],
                                                onKeydown:
                                                  t[3] ||
                                                  (t[3] = (0, a.D2)(
                                                    (0, a.iM)(
                                                      (...e) =>
                                                        c.insertNewLine &&
                                                        c.insertNewLine(...e),
                                                      ["shift", "prevent"]
                                                    ),
                                                    ["enter"]
                                                  )),
                                                type: "text",
                                                placeholder:
                                                  "Type a message...",
                                                style: {
                                                  "max-height":
                                                    "calc(3 * (1.5em + 2px))",
                                                },
                                              },
                                              null,
                                              40,
                                              as
                                            ),
                                            [[a.nr, r.newMessage]]
                                          ),
                                          (0, o._)(
                                            "button",
                                            {
                                              disabled: "" === r.newMessage,
                                              onClick:
                                                t[5] ||
                                                (t[5] = (...e) =>
                                                  c.sendMessage &&
                                                  c.sendMessage(...e)),
                                            },
                                            " Send ",
                                            8,
                                            os
                                          ),
                                        ],
                                        4
                                      )),
                                ])),
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                  ],
                  512
                ),
                [[a.F8, !r.feedback]]
              ),
              (0, o.wy)(
                (0, o.Wm)(
                  l,
                  {
                    onGetConversationBy: c.getConversationBy,
                    onUpdateConversation: c.updateConversation,
                    onGoBack: t[7] || (t[7] = (e) => (r.feedback = !1)),
                  },
                  null,
                  8,
                  ["onGetConversationBy", "onUpdateConversation"]
                ),
                [[a.F8, r.feedback]]
              ),
            ])
          );
        }
        const rs = (e) => (
            (0, o.dD)("data-v-09d26ae6"), (e = e()), (0, o.Cn)(), e
          ),
          cs = { id: "chatview" },
          ds = { class: "chat-header" },
          ls = rs(() => (0, o._)("h3", null, "Chatly", -1)),
          hs = { ref: "chatbody", class: "chat-body", id: "chat-body" },
          us = { key: 0, class: "loading-div" },
          gs = { class: "d-flex flex-wrap" },
          ps = rs(() =>
            (0, o._)("h3", null, "Please tell us how was your experience?", -1)
          ),
          ms = { class: "emoji" },
          vs = { class: "tooltip-value" },
          ws = rs(() => (0, o._)("div", { class: "chat-footer" }, null, -1));
        function ys(e, t, s, i, r, c) {
          const d = (0, o.up)("ErrorDialog");
          return (
            (0, o.wg)(),
            (0, o.iD)("div", cs, [
              (0, o.Wm)(
                a.uT,
                { name: "bounce" },
                {
                  default: (0, o.w5)(() => [
                    (0, o._)("div", null, [
                      (0, o._)("div", ds, [
                        (0, o.Wm)(ge.t, {
                          style: { cursor: "pointer" },
                          onClick: t[0] || (t[0] = (t) => e.$emit("goBack")),
                          start: "",
                          icon: "mdi-arrow-left",
                        }),
                        ls,
                      ]),
                      (0, o._)(
                        "div",
                        hs,
                        [
                          r.isLoading
                            ? ((0, o.wg)(), (0, o.iD)("div", us))
                            : (0, o.kq)("", !0),
                          (0, o._)("div", gs, [
                            (0, o.Wm)(
                              He.O,
                              { ref: "form" },
                              {
                                default: (0, o.w5)(() => [
                                  ps,
                                  (0, o.Wm)(
                                    Fe.f,
                                    {
                                      modelValue: r.selectedEmoji,
                                      "onUpdate:modelValue":
                                        t[1] ||
                                        (t[1] = (e) => (r.selectedEmoji = e)),
                                      mandatory: "",
                                    },
                                    {
                                      default: (0, o.w5)(() => [
                                        ((0, o.wg)(!0),
                                        (0, o.iD)(
                                          o.HY,
                                          null,
                                          (0, o.Ko)(
                                            r.emojis,
                                            (e) => (
                                              (0, o.wg)(),
                                              (0, o.j4)(
                                                z.T,
                                                {
                                                  key: e.value,
                                                  value: e.value,
                                                  class: "ma-2 custom-btn",
                                                },
                                                {
                                                  default: (0, o.w5)(() => [
                                                    (0, o._)(
                                                      "span",
                                                      ms,
                                                      (0, n.zw)(e.label),
                                                      1
                                                    ),
                                                    (0, o.Wm)(
                                                      Ke.N,
                                                      { top: "" },
                                                      {
                                                        default: (0, o.w5)(
                                                          () => [
                                                            (0, o._)(
                                                              "span",
                                                              vs,
                                                              (0, n.zw)(
                                                                e.value
                                                              ),
                                                              1
                                                            ),
                                                          ]
                                                        ),
                                                        _: 2,
                                                      },
                                                      1024
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ["value"]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["modelValue"]
                                  ),
                                  (0, o.Wm)(
                                    Ve.h,
                                    {
                                      modelValue: r.comments,
                                      "onUpdate:modelValue":
                                        t[2] ||
                                        (t[2] = (e) => (r.comments = e)),
                                      label: "Additional Comments",
                                      rules: r.rules.comments,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules"]
                                  ),
                                  (0, o.Wm)(
                                    z.T,
                                    {
                                      color: "blue",
                                      onClick: c.submitFeedback,
                                      disabled: null === r.selectedEmoji,
                                    },
                                    {
                                      default: (0, o.w5)(() => [
                                        (0, o.Uk)("Submit"),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["onClick", "disabled"]
                                  ),
                                ]),
                                _: 1,
                              },
                              512
                            ),
                          ]),
                        ],
                        512
                      ),
                      ws,
                    ]),
                  ]),
                  _: 1,
                }
              ),
              e.showErrorDialog
                ? ((0, o.wg)(),
                  (0, o.j4)(
                    d,
                    {
                      key: 0,
                      error: e.errorMessage,
                      onDismiss: e.hideErrorDialog,
                    },
                    null,
                    8,
                    ["error", "onDismiss"]
                  ))
                : (0, o.kq)("", !0),
            ])
          );
        }
        const bs = { id: "chatview" },
          fs = (0, o._)(
            "div",
            { class: "chat-header" },
            [(0, o._)("h3", null, "Chatly")],
            -1
          ),
          ks = { ref: "chatbody", class: "chat-body", id: "chat-body" },
          Cs = { key: 0, class: "loading-div" },
          xs = { class: "message-box" },
          Is = { class: "chat-footer" };
        function Ss(e, t, s, n, i, r) {
          const c = (0, o.up)("SingleChat");
          return (
            (0, o.wg)(),
            (0, o.iD)("div", null, [
              (0, o._)("div", bs, [
                (0, o.Wm)(
                  a.uT,
                  { name: "bounce" },
                  {
                    default: (0, o.w5)(() => [
                      (0, o.wy)(
                        (0, o._)(
                          "div",
                          null,
                          [
                            fs,
                            (0, o._)(
                              "div",
                              ks,
                              [
                                i.isLoading
                                  ? ((0, o.wg)(), (0, o.iD)("div", Cs))
                                  : (0, o.kq)("", !0),
                                (0, o._)("div", xs, [
                                  (0, o.Wm)(
                                    F.i,
                                    { "item-props": "", lines: "two" },
                                    {
                                      default: (0, o.w5)(() => [
                                        ((0, o.wg)(!0),
                                        (0, o.iD)(
                                          o.HY,
                                          null,
                                          (0, o.Ko)(
                                            r.sortedConversations,
                                            (e) => (
                                              (0, o.wg)(),
                                              (0, o.j4)(
                                                c,
                                                {
                                                  convo: e,
                                                  key: e.text,
                                                  agent: e.agent,
                                                  user: s.user,
                                                  onUpdateUnreadMsg:
                                                    r.updateUnreadMsg,
                                                  class: "chat-transition",
                                                },
                                                null,
                                                8,
                                                [
                                                  "convo",
                                                  "agent",
                                                  "user",
                                                  "onUpdateUnreadMsg",
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                              ],
                              512
                            ),
                            (0, o._)("div", Is, [
                              (0, o.Wm)(
                                z.T,
                                {
                                  onClick: r.createNewConvo,
                                  class: "start",
                                  "aria-details": r.getCount,
                                  getCount: "",
                                  disabled: r.getCount,
                                },
                                {
                                  default: (0, o.w5)(() => [
                                    (0, o.Uk)(" Start Conversation "),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["onClick", "aria-details", "disabled"]
                              ),
                            ]),
                          ],
                          512
                        ),
                        [[a.F8, s.showPop]]
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ])
          );
        }
        s(541);
        var _s = s(4870),
          Ts = {
            data() {
              return {
                socketMainpage: null,
                chatActive: !1,
                isLoading: !1,
                conversations: (0, _s.qj)([]),
              };
            },
            props: ["showPop", "addConversation", "user"],
            components: { SingleChat: Lt },
            methods: {
              show() {
                this.$emit("showPoper");
              },
              async createNewConvo() {
                this.isLoading = !0;
                let e = await k(this.user);
                console.log(e),
                  await this.saveConversationId(e),
                  (this.isLoading = !1),
                  this.$router.push({
                    name: "conversation",
                    params: { id: e },
                  });
              },
              updateUnreadMsg() {
                this.$emit("updateUnreadMsg", 1);
              },
              async saveConversationId(e) {
                const t = Date.now(),
                  s = { fetchState: "partial", read: !0, expire: t, ended: !1 };
                this.addConversation(e, s);
              },
              handleNewMessage(e) {
                console.log(e.createdAt, "time check");
                const t = this.conversations.findIndex(
                  (t) => t.conversationId === e.conversationId
                );
                if (t > -1) {
                  const s = this.conversations[t];
                  (s.text = e.text),
                    (s.userNewmessage = !0),
                    (s.createdAt = e.createdAt),
                    this.conversations.splice(t, 1, s),
                    this.$nextTick(() => {
                      const [e] = this.conversations.splice(t, 1);
                      this.conversations.unshift(e);
                    });
                }
              },
              async getAllInfo(e) {
                const t = await S(e);
                let s,
                  a = (await t.parentData.userNewmessage) || !1,
                  o = await t.lastChatData;
                return (
                  null === t.lastChatData &&
                    (o = {
                      text: "hello message",
                      user: "Bot",
                      createdAt: w.EK.now(),
                    }),
                  (s =
                    !!t.parentData.hasOwnProperty("ended") &&
                    t.parentData.ended),
                  {
                    conversationId: e,
                    text: o.text,
                    user: o.user,
                    agent: t.parentData.agent,
                    ended: s,
                    userNewmessage: a,
                    createdAt: o.createdAt,
                  }
                );
              },
              isConversationIdExpired() {
                const e = localStorage.getItem("conversationId");
                if (e) {
                  const t = parseInt(e.split("-")[1]),
                    s = Date.now(),
                    a = 6048e5;
                  return s - t > a;
                }
                return !0;
              },
            },
            async created() {
              (this.isLoading = !0),
                (this.socketMainpage = (0, ue.ZP)(
                  "https://serverchatly.herokuapp.com"
                )),
                this.socketMainpage.on("connect", () => {
                  console.log("Connected to server");
                }),
                this.socketMainpage.on("newMessage", (e) => {
                  (e.createdAt = w.EK.now()),
                    console.log(e.conversationId, this.user, "the new message"),
                    this.handleNewMessage(e);
                });
              const e = JSON.parse(localStorage.getItem("appState")),
                t = e.conversations.byId,
                s = [];
              for (const n in t) {
                const e = { ...t[n], id: n };
                s.push(e);
              }
              const a = s.reverse(),
                o = a.slice(0, 3);
              console.log(o, "data i want");
              for (let n = 0; n < o.length; n++) {
                const e = o[n];
                let t = await this.getAllInfo(e.id);
                this.conversations = [...this.conversations, t];
              }
              o.length > 0 &&
                this.socketMainpage.emit("join", {
                  id: o[0].id,
                  user: this.user,
                }),
                console.log(this.conversations, "data i want"),
                (this.isLoading = !1);
            },
            computed: {
              sortedConversations() {
                return this.conversations.sort(
                  (e, t) => t.createdAt.seconds - e.createdAt.seconds
                );
              },
              getCount() {
                const e = this.conversations.reduce(
                  (e, t) => e + (t.ended ? 0 : 1),
                  0
                );
                return console.log("computed", e), e > 0;
              },
            },
          };
        const Ms = (0, N.Z)(Ts, [["render", Ss]]);
        var Ds = Ms,
          Ns = {
            data() {
              return {
                selectedEmoji: null,
                comments: "",
                isLoading: !1,
                emojis: [
                  { value: "bad", label: "😠" },
                  { value: "fair", label: "😕" },
                  { value: "good", label: "😊" },
                  { value: "great", label: "😄" },
                ],
                rules: {
                  comments: [
                    (e) => !!e || "Comments are required",
                    (e) =>
                      e.length <= 1e3 ||
                      "Comments must be less than 1000 characters",
                  ],
                },
              };
            },
            components: { mainPage: Ds },
            methods: {
              async updateConversation(e, t) {
                const s = JSON.parse(localStorage.getItem("appState")),
                  a = {
                    ...s,
                    conversations: {
                      ...s.conversations,
                      byId: {
                        ...s.conversations.byId,
                        [e]: { ...s.conversations.byId[e], ...t },
                      },
                    },
                  };
                console.log(a, "updateing feedback"),
                  localStorage.setItem("appState", JSON.stringify(a));
              },
              getConversationBy(e) {
                const t = JSON.parse(localStorage.getItem("appState")),
                  s = t.conversations.byId;
                return s.hasOwnProperty(e) ? s[e] : null;
              },
              async submitFeedback() {
                if (this.$refs.form.validate()) {
                  await _(this.$route.params.id, {
                    ended: !0,
                    comment: this.comments,
                    reaction: this.selectedEmoji,
                  });
                  let e = this.getConversationBy(this.$route.params.id);
                  console.log("the item", e),
                    (e.ended = !0),
                    await this.updateConversation(this.$route.params.id, e),
                    this.$router.push({ name: "home" });
                }
              },
            },
            created() {},
          };
        const js = (0, N.Z)(Ns, [
          ["render", ys],
          ["__scopeId", "data-v-09d26ae6"],
        ]);
        var $s = js,
          Us = {
            name: "chatView",
            data() {
              return {
                feedback: !1,
                socket: null,
                automated: !0,
                loading: !1,
                showErrorDialog: !0,
                isLoading: !1,
                errorMessage: "Error Message",
                showChat: !1,
                agent: null,
                ip: "",
                newMessage: "",
                conversationId: "",
                isTyping: !1,
                joined: !1,
                typingMsg: "",
                step: 0,
                messages: [],
                chatTimeout: null,
                chatTimeoutDuration: 3e5,
                chatStartTime: null,
                loaderWidth: 0,
                intervalIds: [],
                showLoader: !1,
                convoEnded: !1,
                isBotEnabled: !0,
                ended: null,
                flow: [
                  {
                    step: 0,
                    next: !0,
                    auto: !0,
                    messages: [
                      {
                        text: "Hi! I'm glad to assist you today. Let's know each other:",
                        user: "bot",
                        type: "text",
                      },
                      {
                        text: "Do you have an order already?",
                        user: "bot",
                        type: "text",
                      },
                      {
                        user: "user",
                        option: [
                          { id: 1, text: "Yes" },
                          { id: 2, text: "No" },
                        ],
                        type: "option",
                      },
                    ],
                  },
                  {
                    step: 1,
                    next: !0,
                    auto: !0,
                    messages: [
                      {
                        text: "Please select what you want to do with the order",
                        user: "bot",
                        type: "text",
                      },
                      {
                        user: "user",
                        option: [
                          { id: 1.1, text: "i want to make a return/swap" },
                          { id: 1.2, text: "I want to know the order status" },
                          { id: 1.3, text: "Others" },
                        ],
                        type: "option",
                      },
                    ],
                  },
                  {
                    step: 1.1,
                    next: "end",
                    auto: !1,
                    messages: [
                      {
                        text: "You can easly Return or swap an order here: <a href='https://site.com/return' target='_blank'>https://site.com/return</a> ",
                        user: "bot",
                        type: "text",
                      },
                    ],
                  },
                  {
                    step: 1.2,
                    next: "end",
                    auto: !1,
                    messages: [
                      {
                        text: "You can track your order here: <a href='https://site.com/tracking' target='_blank'>https://site.com/tracking</a>",
                        user: "bot",
                        type: "text",
                      },
                    ],
                  },
                  {
                    step: 1.3,
                    next: "end",
                    auto: !1,
                    messages: [
                      {
                        text: "Tell us how else can we help?",
                        user: "bot",
                        type: "text",
                      },
                    ],
                  },
                  {
                    step: 2,
                    next: !0,
                    auto: !0,
                    messages: [
                      {
                        text: "What would you like to do?",
                        user: "bot",
                        type: "text",
                      },
                      {
                        user: "user",
                        option: [
                          { id: 2.1, text: "Place a new order" },
                          { id: 2.2, text: "I have a question" },
                          { id: 2.3, text: "Others" },
                        ],
                        type: "option",
                      },
                    ],
                  },
                  {
                    step: 2.1,
                    next: "end",
                    auto: !1,
                    messages: [
                      {
                        text: "What products do you want?",
                        user: "bot",
                        type: "text",
                      },
                    ],
                  },
                  {
                    step: 2.2,
                    next: "end",
                    auto: !1,
                    messages: [
                      {
                        text: "You can ask any question, we are here for you",
                        user: "bot",
                        type: "text",
                      },
                    ],
                  },
                  {
                    step: 2.3,
                    next: "end",
                    auto: !1,
                    messages: [
                      {
                        text: "What other thing do you want us to do for you?",
                        user: "bot",
                        type: "text",
                      },
                    ],
                  },
                ],
                newMessage: "",
              };
            },
            components: { NewImage: ze, feedBack: $s },
            props: [
              "addConversation",
              "user",
              "updateConversation",
              "getConversationBy",
              "botName",
              "createNewConvo",
            ],
            methods: {
              insertNewLine(e) {
                if (e.shiftKey) {
                  const t = this.$refs.message,
                    s = t.selectionStart,
                    a = t.selectionEnd,
                    o = this.newMessage;
                  (this.newMessage = `${o.substring(0, s)}\n${o.substring(a)}`),
                    e.preventDefault();
                }
              },
              showFeeback() {
                this.feedback = !0;
              },
              async joinConversation(e) {
                this.ended ||
                  (this.socket.emit("join", { id: e, user: this.user }),
                  console.log(`${this.user} just joined conversation ${e}`),
                  (this.joined = !0));
              },
              async sendMessage() {
                if ("" === this.newMessage) return;
                const e = { text: this.newMessage };
                await this.socket.emit("message", {
                  conversationId: this.conversationId,
                  type: "text",
                  username: this.user,
                  message: e,
                  isUser: !0,
                }),
                  this.socket.emit("typing", {
                    status: !1,
                    user: this.user,
                    id: this.conversationId,
                  }),
                  (this.chatStartTime = Date.now()),
                  localStorage.setItem("chatStarted", !0),
                  localStorage.setItem(
                    `chatStartTime-${this.conversationId}`,
                    this.chatStartTime
                  ),
                  this.resetChatTimeout(),
                  (this.newMessage = "");
              },
              onTyping() {
                this.isTyping ||
                  (this.socket.emit("typing", {
                    status: !0,
                    user: this.user,
                    id: this.conversationId,
                  }),
                  setTimeout(() => {
                    this.socket.emit("typing", {
                      status: !1,
                      user: this.user,
                      id: this.conversationId,
                    });
                  }, 2e3));
              },
              checkPrev(e, t) {
                return 0 === t || this.messages[t - 1].user !== e.user;
              },
              checkNxt(e, t) {
                if (0 === t) return !0;
                const s = this.messages.length - 1,
                  a = this.messages.indexOf(e);
                return a === s || this.messages[t + 1].user !== e.user;
              },
              async newMessageSound(e) {
                var t = new Audio(e);
                t.play();
              },
              async clickSelect(e, t) {
                this.newMessageSound(Pe),
                  (this.loading = !0),
                  this.messages.pop();
                const s = { text: e.text, user: "user", type: "text" };
                (this.messages = [...this.messages, s]),
                  (this.loading = !0),
                  await this.checkCase(this.step, !0, e, !1),
                  await this.checkCase(this.step, !1, e, !1),
                  this.newMessageSound(Oe),
                  this.chatToChatbottom(),
                  (this.loading = !1);
              },
              async chatToChatbottom() {
                document.querySelector("#chat-body") &&
                  (document.querySelector("#chat-body").scrollTop =
                    document.querySelector("#chat-body").scrollHeight);
              },
              async saveMessage(e, t) {
                const s = {
                  text: e.text,
                  type: e.type,
                  user: e.user,
                  isUser: !0,
                };
                await x(s, t);
              },
              requestAssistance() {
                if (!this.agent && !this.ended) {
                  const e = {
                    conversationId: this.conversationId,
                    userId: this.user,
                  };
                  this.socket.emit("requestAssistance", e);
                  localStorage.getItem("chatStarted");
                  this.showLoader = !0;
                }
              },
              async stopAutomate() {
                this.joinConversation(this.conversationId),
                  (this.automated = !1),
                  this.chatToChatbottom(),
                  this.requestAssistance();
              },
              isSocketInConversation() {
                const e = `conversation:${this.conversationId}`;
                this.socket.emit("isSocketInConversation", e, (e) => {
                  e
                    ? console.log(
                        `Socket has joined conversation ${this.conversationId}`
                      )
                    : (console.log(
                        `Socket has not joined conversation ${this.conversationId}`
                      ),
                      this.joinConversation(this.conversationId));
                });
              },
              async checkCase(e, t, s, a) {
                let o = this.flow.find((t) => t.step === e);
                if ("end" === o.next && a) {
                  if (!o.auto) {
                    this.isSocketInConversation(), (this.automated = !1);
                  }
                  this.chatToChatbottom();
                } else {
                  if (t) {
                    o.messages.pop();
                    for (let t = 0; t < o.messages.length; t++) {
                      const e = o.messages[t];
                      (e.isUser = !0),
                        await this.saveMessage(e, this.conversationId);
                    }
                    let e = {
                      text: s.text,
                      user: this.user,
                      type: "text",
                      isUser: !0,
                    };
                    await this.saveMessage(e, this.conversationId),
                      await C(this.conversationId, s.id),
                      (this.step = s.id);
                  }
                  if (!t) {
                    for (let e = 0; e < o.messages.length; e++) {
                      const t = o.messages[e];
                      (t.isUser = !0),
                        this.messages.push(t),
                        ("end" !== o.next && o.auto) ||
                          (await this.saveMessage(t, this.conversationId));
                    }
                    "end" !== o.next ||
                      o.auto ||
                      (await this.stopAutomate(),
                      await this.sendToBot("point 3"));
                  }
                }
              },
              async lastMessageIsBot() {
                const e = this.messages[this.messages.length - 1];
                return (
                  "bot" === e.user && console.log(e, "last message"),
                  e && "bot" === e.user
                );
              },
              startChatTimeout() {
                const e = Date.now() - this.chatStartTime,
                  t = Math.max(this.chatTimeoutDuration - e, 0);
                this.chatTimeout = setTimeout(() => {
                  this.ended || this.socket.emit("timeUp", this.conversationId),
                    this.expiredConvId(!0);
                }, t);
                const s = setInterval(() => {
                  const e = Date.now() - this.chatStartTime,
                    t = Math.max(this.chatTimeoutDuration - e, 0),
                    s = (t / this.chatTimeoutDuration) * 100;
                  this.loaderWidth = 100 - s;
                }, 1e3);
                this.intervalIds.push(s);
              },
              resetChatTimeout() {
                clearTimeout(this.chatTimeout),
                  this.chatStartTime || (this.chatStartTime = Date.now()),
                  this.startChatTimeout(),
                  clearInterval(this.intervalIds.pop()),
                  (this.loaderWidth = 0);
              },
              getConversationById(e) {
                const t = JSON.parse(localStorage.getItem("appState")) || {},
                  s = t.conversations?.byId[e] || null;
                return s;
              },
              getConversationIdFromLocalStorage() {
                const e = localStorage.getItem("conversationId");
                if (e) {
                  const t = e.split("-")[0];
                  return t;
                }
                return null;
              },
              saveConversationId(e) {
                const t = Date.now(),
                  s = { fetchState: "partial", read: !0, expire: t };
                this.addConversation(e, s);
              },
              isConversationIdExpired() {
                const e = this.$route.params.id || this.conversationId,
                  t = this.getConversationById(e).expire;
                if (e) {
                  const e = parseInt(t),
                    s = Date.now(),
                    a = 6048e5;
                  return s - e > a;
                }
                return !0;
              },
              async expiredConvId(e) {
                this.isConversationIdExpired();
              },
              async getConversationId() {
                let e = this.$route.params.id || null;
                return null === e && this.$router.push({ name: "home" }), e;
              },
              capitalizeName(e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
              },
              iniStartTime() {
                (this.chatStartTime = localStorage.getItem(
                  `chatStartTime-${this.conversationId}`
                )),
                  this.chatStartTime &&
                    ((this.showLoader = !0), this.startChatTimeout()),
                  this.chatStartTime ||
                    ((this.chatStartTime = Date.now()),
                    localStorage.setItem(
                      `chatStartTime-${this.conversationId}`,
                      this.chatStartTime
                    ));
              },
              async updateConversation(e, t) {
                const s = JSON.parse(localStorage.getItem("appState")),
                  a = {
                    ...s,
                    conversations: {
                      ...s.conversations,
                      byId: {
                        ...s.conversations.byId,
                        [e]: { ...s.conversations.byId[e], ...t },
                      },
                    },
                  };
                console.log(a, "updateing feedback"),
                  localStorage.setItem("appState", JSON.stringify(a));
              },
              getConversationBy(e) {
                const t = JSON.parse(localStorage.getItem("appState")),
                  s = t.conversations.byId;
                return s.hasOwnProperty(e) ? s[e] : null;
              },
              async sendToBot(e) {
                console.log("joshijax", e),
                  (this.sending = !0),
                  (this.isTyping = !0);
                let t = this.messages.map((e) => "\n" + e.text),
                  s = await this.lastMessageIsBot();
                if (s || this.automated)
                  return (this.sending = !1), void (this.isTyping = !1);
                let a = " \nhello\n " + t.join("");
                console.log(a, "TEXT", t), (this.inputText = "");
                try {
                  console.log(a, "TEXT2");
                  const e = await (0, dt.Z)({
                    method: "post",
                    url: "http://127.0.0.1:8000/answer-me/",
                    data: { prompt: a },
                  });
                  console.log("JOSHIJAX", typeof e.data.response),
                    await this.socket.emit("message", {
                      conversationId: this.conversationId,
                      type: "text",
                      username: "bot",
                      message: { text: e.data.response },
                      isUser: !1,
                    }),
                    (this.isTyping = !1);
                } catch (o) {
                  console.error(o), (this.isTyping = !1);
                }
                this.sending = !1;
              },
              messageEndsWithGoodbye(e) {
                if (!e) return !1;
                const t = [
                    "goodbye",
                    "bye",
                    "farewell",
                    "see you",
                    "take care",
                    "have a nice",
                    "later",
                  ],
                  s = [
                    /\b(thanks|thank you)\b/gi,
                    /\b(good night|night)\b/gi,
                    /\b(talk to you|chat with you)\b/gi,
                    /\b(see you|cu|ttyl|ttys)\b/gi,
                    /\b(be safe)\b/gi,
                    /\b(have a great|have a nice)\b/gi,
                    /\b(take care)\b/gi,
                    /\b(sleep well)\b/gi,
                    /\b(catch you later|laters)\b/gi,
                  ];
                for (const a of t) if (e.toLowerCase().includes(a)) return !0;
                for (const a of s) if (a.test(e)) return !0;
                return !1;
              },
              renderMessage(e) {
                const t = /(https?|ftp):\/\/[^\s]+/gi;
                return (
                  this.isLink(e) &&
                    (e = e.replace(t, '<a href="$&" target="_blank">$&</a>')),
                  e
                );
              },
              isLink(e) {
                const t = /^(?!.*?<a\s).*?(https?|ftp):\/\/[^\s]+.*$/i;
                return t.test(e);
              },
              async iniChat() {
                console.log("joshijaxmsg", this.botName), (this.isLoading = !0);
                let e = {};
                if (
                  ((this.conversationId = await this.getConversationId()),
                  (e = await I(this.conversationId)),
                  (this.agent = e.agent),
                  (this.messages = await T(this.conversationId)),
                  (this.step = e.step),
                  await this.expiredConvId(!1),
                  this.chatToChatbottom(),
                  this.iniStartTime(),
                  (this.isLoading = !1),
                  e.hasOwnProperty("ended"))
                ) {
                  this.ended = e.ended;
                  let t = this.getConversationBy(this.$route.params.id);
                  (t.ended = e.ended),
                    await this.updateConversation(this.$route.params.id, t);
                } else this.ended = !1;
                if (
                  (await this.checkCase(this.step, !1, null, !0),
                  !this.ended && this.isBotEnabled && !this.automated)
                ) {
                  let e = await this.lastMessageIsBot();
                  e || this.sendToBot("point 2");
                }
              },
            },
            async created() {
              (this.socket = (0, ue.ZP)("http://localhost:3000/")),
                this.socket.on("connect", () => {
                  console.log("Connected to server"),
                    this.socket.emit("userType", "customer");
                }),
                this.socket.on("newMessage", async (e) => {
                  if (
                    (console.log(e.user, this.user),
                    e.user === this.user || "user" === e.user)
                  ) {
                    this.user, e.user;
                    let t = { text: e.text, user: e.user, type: "text" };
                    console.log("sent out", t),
                      await this.messages.push(t),
                      await this.chatToChatbottom(),
                      await this.newMessageSound(Pe),
                      this.isBotEnabled && this.sendToBot("point 1");
                  } else
                    console.log("recieved", e),
                      this.messages.push(e),
                      this.chatToChatbottom(),
                      this.newMessageSound(Oe),
                      M(this.conversationId);
                }),
                this.socket.on("joined", async (e) => {
                  console.log(
                    this.user != e.user,
                    this.user,
                    e.user,
                    "the data i need"
                  ),
                    this.user != e.user &&
                      this.agent !== e.user &&
                      (this.messages.push(e), await this.chatToChatbottom());
                }),
                this.socket.on("typing", (e) => {
                  (this.isTyping = e.status),
                    (this.typingMsg = `${e.user} is typing`),
                    this.chatToChatbottom();
                }),
                this.socket.on("requestAccepted", async (e) => {
                  console.log(e, "requestAccepted"), (this.agent = e.userId);
                }),
                await this.iniChat();
            },
            beforeUnmount() {
              this.socket.off();
            },
            watch: {
              messages: {
                handler(e) {
                  const t = e[e.length - 1];
                  t &&
                    this.messageEndsWithGoodbye(t.text) &&
                    null !== this.ended &&
                    !this.ended &&
                    setTimeout(() => {
                      this.showFeeback();
                    }, 3e3);
                },
                deep: !0,
              },
              $route: {
                async handler(e, t) {
                  await this.iniChat();
                },
                immediate: !0,
              },
            },
            computed: {
              displayAgent() {
                return this.agent || "bot";
              },
            },
          };
        const Ls = (0, N.Z)(Us, [["render", is]]);
        var As = Ls;
        const Bs = (e) => (
            (0, o.dD)("data-v-2f0b8e7e"), (e = e()), (0, o.Cn)(), e
          ),
          Os = { id: "chatview" },
          Ps = { class: "chat-header" },
          Es = Bs(() => (0, o._)("h3", null, "Chatly", -1)),
          qs = { ref: "chatbody", class: "chat-body", id: "chat-body" },
          Ws = { key: 0, class: "loading-div" },
          Js = { class: "d-flex flex-wrap" },
          zs = Bs(() => (0, o._)("h1", null, "Feedback", -1)),
          Fs = { class: "emoji" },
          Hs = { class: "tooltip-value" },
          Vs = Bs(() => (0, o._)("div", { class: "chat-footer" }, null, -1));
        function Ks(e, t, s, i, r, c) {
          const d = (0, o.up)("ErrorDialog");
          return (
            (0, o.wg)(),
            (0, o.iD)("div", Os, [
              (0, o.Wm)(
                a.uT,
                { name: "bounce" },
                {
                  default: (0, o.w5)(() => [
                    (0, o._)("div", null, [
                      (0, o._)("div", Ps, [
                        (0, o.Wm)(ge.t, {
                          style: { cursor: "pointer" },
                          onClick:
                            t[0] ||
                            (t[0] = (t) =>
                              e.$router.push({
                                name: "conversation",
                                params: { id: e.$route.params.id },
                              })),
                          start: "",
                          icon: "mdi-arrow-left",
                        }),
                        Es,
                      ]),
                      (0, o._)(
                        "div",
                        qs,
                        [
                          r.isLoading
                            ? ((0, o.wg)(), (0, o.iD)("div", Ws))
                            : (0, o.kq)("", !0),
                          (0, o._)("div", Js, [
                            (0, o.Wm)(
                              He.O,
                              { ref: "form" },
                              {
                                default: (0, o.w5)(() => [
                                  zs,
                                  (0, o.Wm)(
                                    Fe.f,
                                    {
                                      modelValue: r.selectedEmoji,
                                      "onUpdate:modelValue":
                                        t[1] ||
                                        (t[1] = (e) => (r.selectedEmoji = e)),
                                      mandatory: "",
                                    },
                                    {
                                      default: (0, o.w5)(() => [
                                        ((0, o.wg)(!0),
                                        (0, o.iD)(
                                          o.HY,
                                          null,
                                          (0, o.Ko)(
                                            r.emojis,
                                            (e) => (
                                              (0, o.wg)(),
                                              (0, o.j4)(
                                                z.T,
                                                {
                                                  key: e.value,
                                                  value: e.value,
                                                  class: "ma-2 custom-btn",
                                                },
                                                {
                                                  default: (0, o.w5)(() => [
                                                    (0, o._)(
                                                      "span",
                                                      Fs,
                                                      (0, n.zw)(e.label),
                                                      1
                                                    ),
                                                    (0, o.Wm)(
                                                      Ke.N,
                                                      { top: "" },
                                                      {
                                                        default: (0, o.w5)(
                                                          () => [
                                                            (0, o._)(
                                                              "span",
                                                              Hs,
                                                              (0, n.zw)(
                                                                e.value
                                                              ),
                                                              1
                                                            ),
                                                          ]
                                                        ),
                                                        _: 2,
                                                      },
                                                      1024
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ["value"]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["modelValue"]
                                  ),
                                  (0, o.Wm)(
                                    Ve.h,
                                    {
                                      modelValue: r.comments,
                                      "onUpdate:modelValue":
                                        t[2] ||
                                        (t[2] = (e) => (r.comments = e)),
                                      label: "Additional Comments",
                                      rules: r.rules.comments,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "rules"]
                                  ),
                                  (0, o.Wm)(
                                    z.T,
                                    {
                                      color: "blue",
                                      onClick: c.submitFeedback,
                                      disabled: null === r.selectedEmoji,
                                    },
                                    {
                                      default: (0, o.w5)(() => [
                                        (0, o.Uk)("Submit"),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["onClick", "disabled"]
                                  ),
                                ]),
                                _: 1,
                              },
                              512
                            ),
                          ]),
                        ],
                        512
                      ),
                      Vs,
                    ]),
                  ]),
                  _: 1,
                }
              ),
              e.showErrorDialog
                ? ((0, o.wg)(),
                  (0, o.j4)(
                    d,
                    {
                      key: 0,
                      error: e.errorMessage,
                      onDismiss: e.hideErrorDialog,
                    },
                    null,
                    8,
                    ["error", "onDismiss"]
                  ))
                : (0, o.kq)("", !0),
            ])
          );
        }
        var Zs = {
          data() {
            return {
              selectedEmoji: null,
              comments: "",
              isLoading: !1,
              emojis: [
                { value: "bad", label: "😠" },
                { value: "fair", label: "😕" },
                { value: "good", label: "😊" },
                { value: "great", label: "😄" },
              ],
              rules: {
                comments: [
                  (e) => !!e || "Comments are required",
                  (e) =>
                    e.length <= 1e3 ||
                    "Comments must be less than 1000 characters",
                ],
              },
            };
          },
          props: ["showPop", "showChat", "addConversation", "stateval", "user"],
          components: { mainPage: Ds },
          methods: {
            async submitFeedback() {
              if (this.$refs.form.validate()) {
                console.log("the item");
                let e = this.getConversationBy(this.conversationId);
                (e.ended = !1), this.updateConversation(this.conversationId, e);
              }
            },
          },
          created() {},
        };
        const Ys = (0, N.Z)(Zs, [
          ["render", Ks],
          ["__scopeId", "data-v-2f0b8e7e"],
        ]);
        var Gs = Ys;
        const Rs = [
            { path: "/", name: "home", component: Ot },
            { path: "/conversation/:id", name: "conversation", component: As },
            { path: "/feedback/:id", name: "feedback", component: Gs },
          ],
          Xs = (0, kt.p7)({ history: (0, kt.r5)(), routes: Rs });
        Xs.afterEach((e, t) => {
          const s = JSON.parse(localStorage.getItem("appState")) || {};
          console.log("thus joshua ikiah", s);
          const a = {
            ...s,
            router: {
              location: {
                pathname: e.path,
                name: e.name,
                search: e.query,
                hash: e.hash,
                state: null,
                key: "",
              },
              action: e.name === t.name ? "REPLACE" : "PUSH",
              previousLocations: [
                {
                  location: {
                    pathname: t.path,
                    search: t.query,
                    hash: t.hash,
                    state: null,
                    key: "",
                  },
                  action: e.name === t.name ? "REPLACE" : "PUSH",
                },
              ],
            },
          };
          localStorage.setItem("appState", JSON.stringify(a));
        });
        var Qs = Xs;
        const ea = (0, a.ri)($);
        ea.use(Qs),
          ea.use(ft),
          (0, a.ri)(yt).use(Qs).use(ft).mount("#chatly-app");
      },
    },
    t = {};
  function s(a) {
    var o = t[a];
    if (void 0 !== o) return o.exports;
    var n = (t[a] = { exports: {} });
    return e[a].call(n.exports, n, n.exports, s), n.exports;
  }
  (s.m = e),
    (function () {
      var e = [];
      s.O = function (t, a, o, n) {
        if (!a) {
          var i = 1 / 0;
          for (l = 0; l < e.length; l++) {
            (a = e[l][0]), (o = e[l][1]), (n = e[l][2]);
            for (var r = !0, c = 0; c < a.length; c++)
              (!1 & n || i >= n) &&
              Object.keys(s.O).every(function (e) {
                return s.O[e](a[c]);
              })
                ? a.splice(c--, 1)
                : ((r = !1), n < i && (i = n));
            if (r) {
              e.splice(l--, 1);
              var d = o();
              void 0 !== d && (t = d);
            }
          }
          return t;
        }
        n = n || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > n; l--) e[l] = e[l - 1];
        e[l] = [a, o, n];
      };
    })(),
    (function () {
      s.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return s.d(t, { a: t }), t;
      };
    })(),
    (function () {
      s.d = function (e, t) {
        for (var a in t)
          s.o(t, a) &&
            !s.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      };
    })(),
    (function () {
      s.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      s.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      s.p = "/";
    })(),
    (function () {
      var e = { 143: 0 };
      s.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, a) {
          var o,
            n,
            i = a[0],
            r = a[1],
            c = a[2],
            d = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in r) s.o(r, o) && (s.m[o] = r[o]);
            if (c) var l = c(s);
          }
          for (t && t(a); d < i.length; d++)
            (n = i[d]), s.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return s.O(l);
        },
        a = (self["webpackChunkvue_widget"] =
          self["webpackChunkvue_widget"] || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })();
  var a = s.O(void 0, [998], function () {
    return s(5112);
  });
  a = s.O(a);
})();
//# sourceMappingURL=app.js.map
