
# Empty website build 


<details>
<summary><code>yarn workspace website build /* 5.77s */</code></summary>

```
$ yarn workspace website build
yarn workspace v1.22.4
yarn run v1.22.4
$ next build
Warning: Detected next.config.js, no exported configuration found. https://err.sh/zeit/next.js/empty-configuration
> Using external babel configuration
> Location: "/home/x/zzz/github/SocialGouv/sample-next-app/website/.babelrc"
Creating an optimized production build  

Compiled successfully.

Automatically optimizing pages  

Page                            Size     First Load JS
┌ ○ /                           1.75 kB          60 kB
└ ○ /404                        2.6 kB         60.9 kB
+ First Load JS shared by all   58.3 kB
  ├ static/pages/_app.js        960 B
  ├ chunks/commons.e3ec81.js    10.4 kB
  ├ chunks/framework.970a96.js  40.3 kB
  ├ runtime/main.8a3709.js      5.93 kB
  └ runtime/webpack.b65cab.js   746 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)

Done in 5.45s.
Done in 5.77s.
```

</details>

# Empty core build 


<details>
<summary><code>yarn workspace @sample-next-app/core tsc /* 1.21s */</code></summary>

```
$ yarn workspace @sample-next-app/core tsc            
yarn workspace v1.22.4
yarn run v1.22.4
$ /home/x/zzz/github/SocialGouv/sample-next-app/node_modules/.bin/tsc
Done in 0.93s.
Done in 1.21s.
```

# Empty ui build 


<details>
<summary><code>yarn workspace @sample-next-app/ui tsc /* 1.21s */</code></summary>

```
$ yarn workspace @sample-next-app/ui tsc            
yarn workspace v1.22.4
yarn run v1.22.4
$ /home/x/zzz/github/SocialGouv/sample-next-app/node_modules/.bin/tsc
Done in 0.93s.
Done in 1.21s.
```
