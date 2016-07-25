'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('developer.debugVirtualDocument', () => {
        return vscode.commands.executeCommand('_webview.openDevTools').then((success) => {
        }, (reason) => {
            vscode.window.showErrorMessage(reason);
        });
    });

    context.subscriptions.push(disposable);

}

export function deactivate() {
}