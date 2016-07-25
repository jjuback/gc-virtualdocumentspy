# Virtual Document Spy
This extension opens a debugger on the active *virtual document* in Visual Studio Code. A virtual document is typically implemented by an extension that supports the *TextDocumentContentProvider* interface, such as the intrinsic Markdown previewer.

If you are developing a virtual document provider that includes script code, you can use this extension to debug the virtual document itself. Note that the `Toggle Developer Tools` command does not provide access to the contents of the virtual document.

## Usage
Open the command palette and execute the command `Developer: Debug Virtual Document`. If no virtual documents are open, the command does nothing, and no warning is given.

## Change Log
### 1.0.0
Initial version.
