'use strict';
(self.webpackChunkreact_spa_boilerplate = self.webpackChunkreact_spa_boilerplate || []).push([
  [241],
  {
    8241: function (n, e, r) {
      r.r(e),
        r.d(e, {
          default: function () {
            return T;
          },
        });
      var t,
        i = r(168),
        o = r(3440),
        a = r(5751),
        l = r(2791),
        s = ['title', 'titleId'];
      function c() {
        return (
          (c =
            Object.assign ||
            function (n) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (n[t] = r[t]);
              }
              return n;
            }),
          c.apply(this, arguments)
        );
      }
      function p(n, e) {
        if (null == n) return {};
        var r,
          t,
          i = (function (n, e) {
            if (null == n) return {};
            var r,
              t,
              i = {},
              o = Object.keys(n);
            for (t = 0; t < o.length; t++) (r = o[t]), e.indexOf(r) >= 0 || (i[r] = n[r]);
            return i;
          })(n, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          for (t = 0; t < o.length; t++)
            (r = o[t]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(n, r) && (i[r] = n[r]));
        }
        return i;
      }
      function d(n, e) {
        var r = n.title,
          i = n.titleId,
          o = p(n, s);
        return l.createElement(
          'svg',
          c(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 448 512',
              ref: e,
              'aria-labelledby': i,
            },
            o,
          ),
          r ? l.createElement('title', { id: i }, r) : null,
          t ||
            (t = l.createElement('path', {
              d: 'M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z',
            })),
        );
      }
      var m,
        u = l.forwardRef(d),
        f = (r.p, ['title', 'titleId']);
      function h() {
        return (
          (h =
            Object.assign ||
            function (n) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (n[t] = r[t]);
              }
              return n;
            }),
          h.apply(this, arguments)
        );
      }
      function g(n, e) {
        if (null == n) return {};
        var r,
          t,
          i = (function (n, e) {
            if (null == n) return {};
            var r,
              t,
              i = {},
              o = Object.keys(n);
            for (t = 0; t < o.length; t++) (r = o[t]), e.indexOf(r) >= 0 || (i[r] = n[r]);
            return i;
          })(n, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          for (t = 0; t < o.length; t++)
            (r = o[t]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(n, r) && (i[r] = n[r]));
        }
        return i;
      }
      function w(n, e) {
        var r = n.title,
          t = n.titleId,
          i = g(n, f);
        return l.createElement(
          'svg',
          h(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 448 512',
              ref: e,
              'aria-labelledby': t,
            },
            i,
          ),
          r ? l.createElement('title', { id: t }, r) : null,
          m ||
            (m = l.createElement('path', {
              d: 'M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z',
            })),
        );
      }
      var x,
        b,
        y,
        v,
        j,
        O,
        C,
        Z,
        k,
        P = l.forwardRef(w),
        z = (r.p, r(4427)),
        L = r(1758),
        I = a.ZP.button(
          x ||
            (x = (0, i.Z)([
              '\n  cursor: pointer;\n  color: ',
              ';\n  border: none;\n  outline: none;\n  width: 140px;\n  height: 48px;\n  border-radius: 122px;\n  font-size: 1em;\n  background: ',
              ';\n  box-shadow: inset 0.2rem 0.2rem 1rem ',
              ',\n    inset -0.2rem -0.2rem 1rem ',
              ', 0.3rem 0.3rem 0.6rem ',
              ',\n    -0.2rem -0.2rem 0.5rem white;\n  &:active {\n    box-shadow: inset 0.2rem 0.2rem 1rem ',
              ',\n      inset -0.2rem -0.2rem 1rem ',
              ';\n  }\n',
            ])),
          L.w.greyLight1,
          L.w.primary,
          L.w.primaryLight,
          L.w.primaryDark,
          L.w.greyLight2,
          L.w.primaryDark,
          L.w.primaryLight,
        ),
        E = r(184),
        S = function () {
          return (0, E.jsx)(V, {});
        },
        V = a.ZP.div(
          b ||
            (b = (0, i.Z)([
              '\n  height: 1px;\n  width: 100%;\n  margin: 30px 0;\n  background-color: ',
              ';\n  box-shadow: 0 0 1px 0.5px #ffffffad;\n',
            ])),
          L.w.greyLight3,
        ),
        H = function (n) {
          var e = n.type,
            r = n.icon,
            t = n.placeholder,
            i = n.onType,
            o = r;
          return (0, E.jsxs)(B, {
            children: [
              (0, E.jsx)(D, {
                type: e,
                placeholder: t,
                onChange: function (n) {
                  'function' === typeof i && i(n.target.value);
                },
              }),
              (0, E.jsx)(M, { className: 'icon', children: o && (0, E.jsx)(o, {}) }),
            ],
          });
        },
        B = a.ZP.div(
          y ||
            (y = (0, i.Z)([
              '\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n',
            ])),
        ),
        D = a.ZP.input(
          v ||
            (v = (0, i.Z)([
              '\n  border: none;\n  width: inherit;\n  border-radius: 8px;\n  font-size: 1.2rem;\n  padding-left: 48px;\n  box-shadow: inset 0.2rem 0.2rem 0.5rem ',
              ', inset -0.2rem -0.2rem 0.5rem white;\n  background: none;\n  font-family: inherit;\n  color: ',
              ';\n  min-height: 48px;\n  box-sizing: border-box;\n  &:focus {\n    outline: none;\n    box-shadow: 0.3rem 0.3rem 0.6rem ',
              ', -0.2rem -0.2rem 0.5rem white;\n  }\n  &:focus + .icon {\n    color: ',
              ';\n  }\n',
            ])),
          L.w.greyLight2,
          L.w.greyDark,
          L.w.greyLight2,
          L.w.primary,
        ),
        M = a.ZP.div(
          j ||
            (j = (0, i.Z)([
              '\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  padding: 0 12px;\n  color: ',
              ';\n  & > svg {\n    height: inherit;\n    fill: currentColor;\n  }\n',
            ])),
          L.w.greyDark,
        ),
        _ = (0, a.F4)(
          O ||
            (O = (0, i.Z)([
              '\n0% { transform: scale(0);}\n80% {transform: scale(1.2);}\n100% {transform: scale(1);}\n',
            ])),
        ),
        N = { login: '', password: '' },
        T = function () {
          var n = (0, o.tv)();
          return (0, E.jsxs)(R, {
            children: [
              (0, E.jsx)(F, { src: z }),
              (0, E.jsx)(S, {}),
              (0, E.jsxs)(G, {
                children: [
                  (0, E.jsx)(H, {
                    onType: function (n) {
                      return (N.login = n);
                    },
                    icon: P,
                    placeholder: 'Login: any',
                    type: 'text',
                  }),
                  (0, E.jsx)(H, {
                    onType: function (n) {
                      return (N.password = n);
                    },
                    icon: u,
                    placeholder: 'Password: any',
                    type: 'password',
                  }),
                ],
              }),
              (0, E.jsx)(S, {}),
              (0, E.jsx)(I, {
                onClick: function () {
                  var e = N.login,
                    r = N.password;
                  Boolean(e) && Boolean(r) && sessionStorage.setItem('user', 'authorized'),
                    n.navigate('authorized.rockets');
                },
                children: 'SIGN IN',
              }),
            ],
          });
        },
        R = a.ZP.div(
          C ||
            (C = (0, i.Z)([
              '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 400px;\n  max-width: 650px;\n  width: 100%;\n  padding: 15px;\n  box-sizing: border-box;\n  border-radius: 8px;\n  box-shadow: 0.8rem 0.8rem 1.4rem ',
              ', -0.2rem -0.2rem 1.8rem white;\n  background-color: ',
              ';\n  transform: translate3d(0, 0, 0) scale(0);\n  will-change: transform;\n  animation: 500ms ',
              ' 1.5s ease-in-out forwards;\n',
            ])),
          L.w.greyLight2,
          L.w.greyLight1,
          _,
        ),
        F = a.ZP.img(Z || (Z = (0, i.Z)(['\n  width: 200px;\n']))),
        G = a.ZP.div(
          k ||
            (k = (0, i.Z)([
              '\n  width: 80%;\n  & > div:first-child {\n    margin-bottom: 24px;\n  }\n',
            ])),
        );
    },
    4427: function (n, e, r) {
      n.exports = r.p + 'static/media/logo.b8f281ea7a8013d766e9.png';
    },
  },
]);
//# sourceMappingURL=241.d46b1a75.chunk.js.map
