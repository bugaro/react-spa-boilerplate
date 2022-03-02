'use strict';
(self.webpackChunkreact_spa_boilerplate = self.webpackChunkreact_spa_boilerplate || []).push([
  [277],
  {
    4277: function (e, n, t) {
      t.r(n);
      var i,
        o,
        r,
        s = t(168),
        l = t(885),
        h = t(2791),
        u = t(5751),
        a = t(534),
        c = t(2602),
        f = t.n(c),
        d = t(184);
      n.default = function (e) {
        var n = e.Outlet,
          t = (0, h.useState)(),
          i = (0, l.Z)(t, 2),
          o = i[0],
          r = i[1],
          s = (0, h.useRef)(null);
        return (
          (0, h.useEffect)(function () {
            return (
              o ||
                r(
                  f()({
                    el: s.current,
                    THREE: a,
                    mouseControls: !1,
                    touchControls: !1,
                    gyroControls: !1,
                    minHeight: 200,
                    minWidth: 200,
                    scale: 1,
                    scaleMobile: 1,
                    color: 10201807,
                    waveSpeed: 0.8,
                  }),
                ),
              function () {
                o && o.destroy();
              }
            );
          }, []),
          (0, d.jsxs)(p, {
            children: [(0, d.jsx)(v, { ref: s }), (0, d.jsx)(b, { children: (0, d.jsx)(n, {}) })],
          })
        );
      };
      var p = u.ZP.div(
          i ||
            (i = (0, s.Z)([
              '\n  position: relative;\n  width: 100%;\n  height: 99.9vh;\n  overflow: hidden;\n',
            ])),
        ),
        v = u.ZP.div(
          o ||
            (o = (0, s.Z)([
              '\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: inherit;\n  height: inherit;\n',
            ])),
        ),
        b = u.ZP.div(
          r ||
            (r = (0, s.Z)([
              '\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: inherit;\n  height: inherit;\n',
            ])),
        );
    },
  },
]);
//# sourceMappingURL=277.5fecad1b.chunk.js.map
