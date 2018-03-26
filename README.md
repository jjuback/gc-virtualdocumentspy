# Virtual Document Spy
> DEPRECATED: As of Visual Studio Code version 1.21, this extension is no longer needed, as there is now an intrinsic command that does the same thing (`Developer: Open Webview Developer Tools`). For the benefit of those who installed this extension previously (and may have wondered why it stopped working), this extension now executes the new intrinsic command.

This extension opens a debugger on the active *virtual document* in Visual Studio Code. A virtual document is typically implemented by an extension that supports the *TextDocumentContentProvider* interface, such as the intrinsic Markdown previewer.

If you are developing a virtual document provider that includes script code, you can use this extension to debug the virtual document itself. Note that the `Toggle Developer Tools` command does not provide access to the contents of the virtual document.

## Usage
Open the command palette and execute the command `Developer: Debug Virtual Document`. If no virtual documents are open, the command does nothing, and no warning is given.

## Change Log
### 1.0.1
Changed readme to indicate that this extension is now deprecated and defers to the new intrinsic command `Developer: Open Webview Developer Tools`.

### 1.0.0
Initial version.
