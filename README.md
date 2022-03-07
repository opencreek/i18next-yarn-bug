Example Project for `i18next`(>=21.5.0) and `i18next-fetch-backend`(>=4.0.0) not working with yarns PnP installer.

To Test:
```bash
yarn install
yarn dev
```
If everything works as intendet you should see a "translation: hello world" on `http://localhost:3000`.
But with i18next in version >= 21.5.0, you will see:
```
Error: Cannot find package 'i18next' imported from /Users/reckter/opencreek/i18next-yarn-bug/.next/server/pages/_app.js
Did you mean to import i18next-yarn-bug/.yarn/cache/i18next-npm-21.5.0-0d9872eb61-3c2edce641.zip/node_modules/i18next/dist/cjs/i18next.js?
```
(similar to `i18next-fetch-backend` >= 4.0.0, which is why it's installed in version 3.0.0 here).


