import { importShared } from './__federation_fn_import-gVVR6EuA.js';
import { r as reactExports } from './index-Dm_EQZZA.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

const {useState} = await importShared('react');

function SettingsApp({ user }) {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  });
  const [theme, setTheme] = useState("light");
  const [saved, setSaved] = useState(false);
  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "2rem", fontFamily: "system-ui" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: { fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", margin: 0 },
                children: "Settings"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#64748b", fontSize: "0.85rem", marginTop: "0.25rem" }, children: "Account & preferences" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                background: "#f3e8ff",
                color: "#7c3aed",
                padding: "0.3rem 0.75rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: 600
              },
              children: "SETTINGS MODULE v1.0"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "grid", gap: "1rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: {
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                style: {
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "1rem"
                },
                children: "Profile"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "1rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    flexShrink: 0
                  },
                  children: user?.avatar
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontWeight: 700, color: "#0f172a", margin: 0 }, children: user?.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#64748b", fontSize: "0.85rem", margin: "0.15rem 0 0" }, children: user?.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#10b981", fontSize: "0.8rem", margin: "0.15rem 0 0" }, children: "● Authenticated" })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: {
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                style: {
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "1rem"
                },
                children: "Notifications"
              }
            ),
            Object.entries(notifications).map(([key, val]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.65rem 0",
                  borderBottom: "1px solid #f1f5f9"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      style: {
                        fontSize: "0.9rem",
                        color: "#334155",
                        textTransform: "capitalize"
                      },
                      children: [
                        key === "sms" ? "SMS" : key,
                        " notifications"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      onClick: () => setNotifications((n) => ({ ...n, [key]: !n[key] })),
                      style: {
                        width: 44,
                        height: 24,
                        borderRadius: "999px",
                        cursor: "pointer",
                        background: val ? "#6366f1" : "#e2e8f0",
                        position: "relative",
                        transition: "background 0.2s",
                        flexShrink: 0
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            position: "absolute",
                            top: 3,
                            left: val ? 23 : 3,
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            background: "#fff",
                            transition: "left 0.2s",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
                          }
                        }
                      )
                    }
                  )
                ]
              },
              key
            ))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: {
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                style: {
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "1rem"
                },
                children: "Appearance"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: "0.75rem" }, children: ["light", "dark", "system"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setTheme(t),
                style: {
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  border: "2px solid",
                  borderColor: theme === t ? "#6366f1" : "#e2e8f0",
                  background: theme === t ? "#eef2ff" : "#f8fafc",
                  color: theme === t ? "#4338ca" : "#64748b",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textTransform: "capitalize",
                  transition: "all 0.15s"
                },
                children: t
              },
              t
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleSave,
          style: {
            background: saved ? "#10b981" : "#6366f1",
            color: "#fff",
            border: "none",
            padding: "0.75rem 2rem",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: "0.9rem",
            alignSelf: "flex-start",
            transition: "background 0.3s"
          },
          children: saved ? "✓ Saved!" : "Save Preferences"
        }
      )
    ] })
  ] });
}

export { SettingsApp as default, jsxRuntimeExports as j };
