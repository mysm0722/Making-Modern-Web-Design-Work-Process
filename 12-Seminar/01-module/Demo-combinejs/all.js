function extend(r){if(!arguments[1])return r;for(var n,t,e=1,o=arguments.length;o>e;e++){if(n=arguments[e],n.constructor!==Object)throw new Error("전달인자가 객체가 아닙니다.");for(t in n)(!r[t]&&n.hasOwnProperty(t)||t in r&&t in n)&&(r[t]=n[t]);return r}}