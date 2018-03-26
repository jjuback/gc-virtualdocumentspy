'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let internalCommand = 'workbench.action.webview.openDeveloperTools'; // was _webview.openDevTools prior to VS Code version 1.21
    let disposable = vscode.commands.registerCommand('developer.debugVirtualDocument', () => {
        return vscode.commands.executeCommand(internalCommand).then((success) => {
        }, (reason) => {
            vscode.window.showErrorMessage(reason);
        });
    });

    context.subscriptions.push(disposable);

}

export function deactivate() {
}