const vscode = require('vscode');

function activate(context) {

	let disposable = vscode.commands.registerCommand('myauthprovider.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from myAuthProvider!');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
