const vscode = require('vscode');

function activate(context) {
	
	let disposable = vscode.commands.registerCommand('myAuthConsumer.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from !');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
