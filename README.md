# Wakanda documentation

## Want to improve the Wakanda documentation ?

- Get the repo
- Open `app.waSolution` in Wakanda Studio v2
- Click `Run` button
- Update the documentation in `/web/src/assets/sections`
- Update the menu in `/web/src/app/guide/guide.data.ts``
- Create a pull request !

## Troubleshooting

### `Cannot find module './dist/src/modules/ng2-dropdown.module'` error

If you having the following error:
```
ERROR in /Users/yann/source/doc-official/web/node_modules/ng2-material-select/dist/node_modules/ng2-material-dropdown/index.d.ts (1,119): Cannot find module './dist/src/m
odules/ng2-dropdown.module'.
webpack: Failed to compile.
```

Then:

- Remove the folder `web/node_modules/ng2-material-select/dist/node_modules/ng2-material-dropdown`
- Run application once again