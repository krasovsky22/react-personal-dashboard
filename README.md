Structure:
https://levelup.gitconnected.com/structure-your-react-redux-project-for-scalability-and-maintainability-618ad82e32b7
https://blog.scalac.io/react-redux-jwt-authentication.html
https://creativetimofficial.github.io/light-bootstrap-dashboard-react/#/user


heroku buildpacks:set https://github.com/mars/create-react-app-buildpack.git
Then, deploy with the new buildpack:

git commit --allow-empty -m 'Switch to create-react-app-buildpack'
git push heroku master


vscode user settings:
{
"git.autofetch": true,
"explorer.confirmDelete": false,
"files.autoSave": "afterDelay",
"explorer.confirmDragAndDrop": false,
"prettier.printWidth": 160,
"prettier.singleQuote": true,
"prettier.semi": false,
"prettier.trailingComma": "all",
"prettier.eslintIntegration": true,
"eslint.autoFixOnSave": true,
"editor.formatOnSave": true,
"files.trimTrailingWhitespace": true,
"files.insertFinalNewline": true,
"files.trimFinalNewlines": true,
}

extensions:
code --install-extension 2gua.rainbow-brackets
code --install-extension aaron-bond.better-comments
code --install-extension carlosjs23.vscode-yarn-script
code --install-extension christian-kohler.npm-intellisense
code --install-extension christian-kohler.path-intellisense
code --install-extension dbaeumer.vscode-eslint
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension eg2.vscode-npm-script
code --install-extension gamunu.vscode-yarn
code --install-extension henry-li.vscode-import-formatter
code --install-extension jasonnutter.search-node-modules
code --install-extension jawandarajbir.react-vscode-extension-pack
code --install-extension leizongmin.node-module-intellisense
code --install-extension moppitz.vscode-extension-auto-import
code --install-extension msjsdiag.debugger-for-chrome
code --install-extension NuclleaR.vscode-extension-auto-import
code --install-extension pranaygp.vscode-css-peek
code --install-extension shaharkazaz.git-merger
code --install-extension shardulm94.trailing-spaces
code --install-extension spearmootz.vscode-auto-install
code --install-extension steoates.autoimport
code --install-extension walter-ribeiro.full-react-snippets
code --install-extension wix.vscode-import-cost
code --install-extension xabikos.JavaScriptSnippets
code --install-extension xabikos.ReactSnippets
